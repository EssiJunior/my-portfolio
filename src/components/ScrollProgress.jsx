import { useScroll, motion } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            style={{
                scaleX: scrollYProgress,
                originX: 0,
            }}
            className='bg-secondary h-1 fixed top-0 left-0 right-0 z-[999999999]'
        />
    )
}

export default ScrollProgress