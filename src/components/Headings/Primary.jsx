import { motion } from 'framer-motion';
import { useTheme } from 'styled-components';

// UTILS
import { containerVariants, itemVariants, subTitleVariants } from '../../utils/animation-framer';

// STYLES
import { styles } from "@/styles/styles";

const PrimaryHeading = ({ subText, text, className, once = false }) => {
    const theme = useTheme()

    return (
        once ?
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className={`${className} my-10`}>

                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={subTitleVariants}
                    className={`${styles.sectionSubText} text-center italic ${theme.global.subHeading}`} >{subText}</motion.p>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                    className={`${styles.sectionHeadText} text-center leading-none`}>{text}</motion.p>
            </motion.div> :
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                className={`${className} my-10`}>

                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    variants={subTitleVariants}
                    className={`${styles.sectionSubText} text-center italic ${theme.global.subHeading}`} >{subText}</motion.p>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    variants={itemVariants}
                    className={`${styles.sectionHeadText} text-center leading-none`}>{text}</motion.p>
            </motion.div>


    )
}

export default PrimaryHeading;