// REACT IMPORTS
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next'

// UTILS
import { themeProps } from "@/utils/prop-types";

// STYLES
import { styles } from "@/styles/styles";
import './about.scss'
import { me, meDark, meGrey, meMozaic } from "../../assets/profile";

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

                <motion.div className="illustration">
                    <div className="gallery">
                        <img src={me} alt="Me" />
                        <img src={meDark} alt="Me dark" />
                        <img src={meGrey} alt="Me grey" />
                        <img src={meMozaic} alt="Me mozaic" />
                    </div>
                </motion.div>
            </section>
        </main>
    )
}

About.propTypes = themeProps;
export default About