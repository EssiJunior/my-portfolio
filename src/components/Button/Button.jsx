// REACT COMPONENTS
import { memo } from 'react';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';


// UTILITIES
import { buttonProps } from '@/utils/prop-types';

const MAGNETO_STRENGTH = 100;
const MAGNETO_TEXT_STRENGTH = 110;

// This animation is inspired by https://www.youtube.com/watch?v=vqXLGX0szIQ&t=235s he called the magneto effect, done in Vanila JS. Thanks to https://github.com/olivierlarose who did the React version of this effect. I adapted it to my needs and added some styles to make it look better. You can check his repo here:

const Button = memo(function Button({ text = null, margin, width, icon, bg, fontWeight, borderWidth, color }) {
    const ref = useRef(null);

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const newX = ((clientX - left) / width) - 0.5
        const newY = ((clientY - top) / height) - 0.5
        setPosition({ x: newX, y: newY })
    }

    const reset = () => {
        setPosition({ x: 0, y: 0 })
    }

    const { x, y } = position;

    return (

        <motion.button
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: x * MAGNETO_STRENGTH, y: y * MAGNETO_STRENGTH }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}

            style={{ background: bg, width: width, margin: margin }}
            className='relative button-s rounded-full flex items-center justify-center gap-2 border-none font-normal tracking-wide px-4 h-40 w-40 text-white leading-3.5 text-lg overflow-hidden bg-gradient-to-b from-primary to-secondary cursor-pointer before:absolute before:inset-0 before:rounded-full before:translate-y-full before:bg-secondary before:opacity-0 before:hover:opacity-100 before:transition-all before:hover:translate-y-0 before:duration-300 before:ease-out border-2 border-black'>
            <motion.span
                animate={{ x: x * MAGNETO_TEXT_STRENGTH, y: y * MAGNETO_TEXT_STRENGTH }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                style={{ fontWeight: fontWeight, borderWidth: borderWidth, color: color }}
                className='flex flex-col items-center justify-center'
                >
                {icon}
                {text !== null && text}
            </motion.span>
        </motion.button>
    )
})

Button.propTypes = buttonProps;
export default Button