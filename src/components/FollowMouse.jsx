// REACT COMPONENTS
import { memo, useEffect, useRef } from 'react';

const FollowMouse = memo(function FollowMouse() {
    const circleRef = useRef(null);
    const circle2Ref = useRef(0);
    const targetX = useRef(0);
    const targetY = useRef(0);
    const currentX = useRef(0);
    const currentY = useRef(0);
    const targetSize = useRef(30);
    const currentSize = useRef(30);

    const MIN_SIZE = 30; // px at top
    const MAX_SIZE = 120; // px at bottom
    const EASE = 0.2;

    useEffect(() => {
        const handleMouseMove = (e) => {
            targetX.current = e.clientX;
            targetY.current = e.clientY;
        };

        const updateTargetSize = () => {
            const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            const winH = window.innerHeight;
            const maxScroll = Math.max(docHeight - winH, 1);
            const progress = Math.min(window.scrollY / maxScroll, 1);
            targetSize.current = MIN_SIZE + (MAX_SIZE - MIN_SIZE) * progress;
        };

        updateTargetSize();
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', updateTargetSize, { passive: true });
        window.addEventListener('resize', updateTargetSize);

        let rafId = 0;
        const animate = () => {
            currentX.current += (targetX.current - currentX.current) * EASE;
            currentY.current += (targetY.current - currentY.current) * EASE;
            currentSize.current += (targetSize.current - currentSize.current) * EASE;

            if (circleRef.current) {
                const size = currentSize.current;
                circleRef.current.style.width = `${size}px`;
                circleRef.current.style.height = `${size}px`;
                circleRef.current.style.transform = `translate(${currentX.current - size / 2}px, ${currentY.current - size / 2}px)`;
            }

            if (circle2Ref.current) {
                circle2Ref.current.style.transform = `translate(${currentX.current - MAX_SIZE/2}px, ${currentY.current - MAX_SIZE/2}px)`;
            }

            rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', updateTargetSize);
            window.removeEventListener('resize', updateTargetSize);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <>
            <div
                ref={circleRef}
                className='fixed z-[10000] pointer-events-none border-2 border-secondary rounded-full '
                style={{ width: `${MIN_SIZE}px`, height: `${MIN_SIZE}px`, transition: 'opacity 0.2s linear', }} />
            <div
                ref={circle2Ref}
                className='fixed z-[9999] pointer-events-none border border-yellow-300/10 rounded-full'
                style={{ width: `${MAX_SIZE}px`, height: `${MAX_SIZE}px`, transition: 'opacity 0.2s linear'}} />
        </>
    );
});

export default FollowMouse