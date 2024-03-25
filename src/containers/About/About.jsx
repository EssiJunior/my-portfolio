import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next'
import './about.scss'

import { styles } from "../../styles/styles";

const About = ({theme}) => {
    //State for translation
    const {t,i18n} = useTranslation();

    return (
        <main className='about' id="about-me" style={{color:theme.colors.text}}>
            <section
                className={`${styles.padding} min-h-[165px]`}
            >
                <motion.div 
                // variants={textVariant()} 
                    className="intro">
                    <p className={`${styles.sectionSubText} text-center ${theme.global.subHeading}`} >{t('in')}</p>
                    <h2 className={`${styles.sectionHeadText} text-center`}>{t('aboutMe')}</h2>
                </motion.div>
            </section>
        
            <div className="detail ">
                <motion.p
                // variants={fadeIn("", "", 0.1, 1)}
                className='description text-[17px] '
                style={{ margin:'auto'}}
                >
                    {t('detail')}
                </motion.p>

                <motion.div className="illustration"/>
            </div>
        </main>
    )
}

export default About