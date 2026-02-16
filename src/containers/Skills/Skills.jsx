// REACT COMPONENTS
import { memo } from 'react'
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
import { useTheme } from 'styled-components'

// UTILS
import { themeProps } from "@/utils/prop-types";
import { skills } from "@/utils/utilities";

// STYLES
import './skills.css'
import PrimaryHeading from '../../components/Headings/Primary';
import PrimaryHeadingOverlay from '../../components/Overlays/PrimaryHeadingOverlay';
import LineOverlay from '../../components/Overlays/LineOverlay';

const Skills = memo(function Skills({ skillsRef }) {
    const theme = useTheme()

    const {t} = useTranslation();

    return (
        <div id="skills" className={`skills relative z-50`} ref={skillsRef}>
            <PrimaryHeadingOverlay />
            <LineOverlay />

            <PrimaryHeading subText={t('skSub')} text={t('sk')} />

            <div className="w-full my-12">
                <Marquee
                    gradient={false}
                    speed={80}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left"
                >
                    {skills.map(skill => (
                        <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                            key={skill.id}>
                            <div className={`h-full w-full rounded-lg border border-[#1f223c] ${theme.global.headingBox} shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500`}>
                                <div className="flex -translate-y-[1px] justify-center">
                                    <div className="w-3/4">
                                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-3 p-6">
                                    <div className="h-8 sm:h-10">
                                        {skill.icon}
                                    </div>
                                    <p className=" text-sm sm:text-lg">
                                        {skill.tag}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
})

Skills.propTypes = themeProps;
export default Skills;