import { motion } from 'framer-motion';
import { useTheme } from 'styled-components';
import { containerVariants, headingLinesVariants, itemVariants } from '../../utils/animation-framer';

const SecondaryHeading = ({ text }) => {
    const theme = useTheme()

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}

            className="flex items-center justify-center my-5 lg:py-8">
                <motion.span
                    initial="hidden"
                    whileInView="visible"
                    variants={headingLinesVariants(96)}
                    className={`w-24 h-[2px] ${theme.global.headingBox}`}></motion.span>
                <motion.span
                    initial="hidden"
                    whileInView="visible"
                    variants={itemVariants}
                    className={`${theme.global.headingBox} !z-4 w-fit text-white p-2 px-5 my-14 text-xl rounded-md capitalize font-space_mono`}>
                    {text}
                </motion.span>
                <motion.span
                    initial="hidden"
                    whileInView="visible"
                    variants={headingLinesVariants(-96)}
                    className={`w-24 h-[2px] ${theme.global.headingBox}`}></motion.span>
        </motion.div>
    )
}

export default SecondaryHeading;