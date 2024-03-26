import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next'
import './about.scss'

import { styles } from "../../styles/styles";
import { themeProps } from "../../utils/prop-types";

const About = ({theme}) => {
    //State for translation
    const {t} = useTranslation();

    return (
        <main className='about' id="about-me" style={{color:theme.colors.text}}>
            <section
                className={`${styles.padding} min-h-[165px]`}
            >
                <motion.div 
                // variants={textVariant()} 
                    className="intro">
                    <p className={`${styles.sectionSubText} text-center ${theme.global.subHeading}`} >{t('in')}</p>
                    <h1 className={`${styles.sectionHeadText} text-center`}>{t('aboutMe')}</h1>
                </motion.div>
            </section>
        
            <section className="detail">
                <motion.p
                // variants={fadeIn("", "", 0.1, 1)}
                className='description text-[17px] '
                style={{ margin:'auto'}}
                >
                    {t('detail')}
                </motion.p>

                <motion.div className="illustration"/>
            </section>
        </main>
    )
}

About.propTypes = themeProps;
export default About