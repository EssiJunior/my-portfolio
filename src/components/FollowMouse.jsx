// REACT COMPONENTS
import { memo, useEffect, useRef, useState } from 'react';

const FollowMouse = memo(function FollowMouse() {
    const circleRef = useRef(null);
    const targetX = useRef(0);
    const targetY = useRef(0);
    const currentX = useRef(0);
    const currentY = useRef(0);
    const [circleState, setCircleState] = useState({ isAtQuarter: false, isAtHalf: false });

    const EASE = 0.2;

    useEffect(() => {
        const handleMouseMove = (e) => {
            targetX.current = e.clientX;
            targetY.current = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);

        let rafId = 0;
        const animate = () => {
            currentX.current += (targetX.current - currentX.current) * EASE;
            currentY.current += (targetY.current - currentY.current) * EASE;

            const viewportHeight = window.innerHeight;
            const quarterHeight = viewportHeight * 0.25;
            const halfHeight = viewportHeight * 0.5;

            setCircleState({
                isAtQuarter: currentY.current > quarterHeight,
                isAtHalf: currentY.current > halfHeight,
            });

            if (circleRef.current) {
                circleRef.current.style.left = `${currentX.current}px`;
                circleRef.current.style.top = `${currentY.current}px`;
            }

            rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div
            ref={circleRef}
            id='mouse-circle'
            className={`max-md:hidden fixed z-[10000] pointer-events-none border border-secondary rounded-full w-8 h-8 left-0 top-0 -translate-x-1/2 -translate-y-1/2`}>
                </div>
    );
});

export default FollowMouse