// REACT IMPORTS
import { memo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'

// CUSTOMIZED COMPONENTS
import PrimaryHeading from "@/components/Headings/Primary";
import PrimaryHeadingOverlay from "@/components/Overlays/PrimaryHeadingOverlay";
import LineOverlay from "@/components/Overlays/LineOverlay";

// UTILS
import { themeProps } from "@/utils/prop-types";

// ASSETS
import { me, meDark, meGrey, meMozaic } from "@/assets/profile";

// STYLES
import './about.css'

const About = memo(function About() {
    const theme = useTheme()
    const { t } = useTranslation();

    return (
        <main className='relative container about' id="about-me" style={{ color: theme.colors.text }}>
            <PrimaryHeadingOverlay />
            <LineOverlay />

            <PrimaryHeading subText={t('in')} text={t('aboutMe')} />

            <section className="detail flex flex-wrap justify-center items-center gap-8 max-md:gap-16 md:px-10 font-space_mono">
                <motion.p
                    className='w-1/2 max-md:w-full max-md:px-10 text-[17px]'
                    style={{ margin: 'auto' }}
                >
                    {t('detail')}
                </motion.p>

                <motion.div className="illustration w-2/5  max-md:w-full flex justify-center items-center">
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