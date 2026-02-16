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
import './about.css'
import PrimaryHeading from "../../components/Headings/Primary";
import TitleOverlay from "../../components/TitleOverlay";

const About = memo(function About() {
    const theme = useTheme()
    const {t} = useTranslation();

    return (
        <main className='relative about py-14' id="about-me" style={{color:theme.colors.text}}>
            <TitleOverlay />
            
            <PrimaryHeading subText={t('in')} text={t('aboutMe')} />
        
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