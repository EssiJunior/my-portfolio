// REACT IMPORTS
import { memo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'

// UTILS
import { themeProps } from "@/utils/prop-types";

// ASSETS
import { me, meDark, meGrey, meMozaic } from "@/assets/profile";

// STYLES
import { styles } from "@/styles/styles";
import './about.scss'

const About = memo(function About() {
    const theme = useTheme()
    const {t} = useTranslation();

    return (
        <main className='about' id="about-me" style={{color:theme.colors.text}}>
            <section
                className={`${styles.padding} min-h-[165px]`}
            >
                <motion.div 
                    className="intro">
                    <p className={`${styles.sectionSubText} text-center ${theme.global.subHeading}`} >{t('in')}</p>
                    <h1 className={`${styles.sectionHeadText} text-center`}>{t('aboutMe')}</h1>
                </motion.div>
            </section>
        
            <section className="detail">
                <motion.p
                className='description text-[17px] '
                style={{ margin:'auto'}}
                >
                    {t('detail')}
                </motion.p>

                <motion.div className="illustration">
                    <div className="gallery">
                        <img loading="lazy" src={me} alt="Me" />
                        <img loading="lazy" src={meDark} alt="Me dark" />
                        <img loading="lazy" src={meGrey} alt="Me grey" />
                        <img loading="lazy" src={meMozaic} alt="Me mozaic" />
                    </div>
                </motion.div>
            </section>
        </main>
    )
})

About.propTypes = themeProps;
export default About