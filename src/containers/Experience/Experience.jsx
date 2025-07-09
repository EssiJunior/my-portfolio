// REACT COMPONENTS IMPORTS
import { memo } from "react";
import { GrNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from 'styled-components'

// CUSTOMIZED COMPONENTS IMPORTS
import Button from "@/components/Button/Button";

// UTILS
import AnimationLottie from "@/utils/animation-lottie";
import GlowCard from "@/utils/glow-card";
import { themeProps } from "@/utils/prop-types";
import { experiences_tech } from "@/utils";

// ASSETS
import bg from '@/assets/utilities/section.svg'
import blur from '@/assets/utilities/blur-23.svg'
import { experience } from "@/assets/lotties";

// STYLES
import './experience.scss'

const Experience = memo(function Experience() {
    const theme = useTheme()
    const {t} = useTranslation();

    return (
        <section className={`experience ${theme.hero.gradient} `}>
            <div id="experience" className="relative z-50 my-12 lg:my-24 ">
                <img
                    loading="lazy"
                    src={bg}
                    alt="Hero"
                    width={1572}
                    height={795}
                    className="absolute top-0 -z-10"
                />

                <div className="flex justify-center my-5 lg:py-8">
                    <div className="flex  items-center">
                        <span className={`w-24 h-[2px] ${theme.global.headingBox}`}></span>
                        <span className={`${theme.global.headingBox} w-fit text-white p-2 px-5 my-14 text-xl rounded-md`}>
                            {t('ex')}
                        </span>
                        <span className={`w-24 h-[2px] ${theme.global.headingBox}`}></span>
                    </div>
                </div>

                <div className="py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                        <div className="flex justify-center items-start">
                            <div className="w-full h-full flex justify-center items-start">
                                <AnimationLottie animation={experience} width="90%" />
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col gap-6">
                                {
                                    experiences_tech(t).map(experience => (
                                        <GlowCard key={experience.id} identifier={`experience-${experience.id}`} >
                                            <div className="p-3 relative">
                                                <img
                                                    loading="lazy"
                                                    src={blur}
                                                    alt="Hero"
                                                    width={1080}
                                                    height={200}
                                                    className="absolute bottom-0 opacity-80"
                                                />
                                                <div className="flex justify-center">
                                                    <p className={`text-xs sm:text-sm ${theme.global.subHeading}`}>
                                                        {experience.date}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-x-8 px-3 py-5">
                                                    <div className={`text-${theme.global.headingBox}  transition-all duration-300 hover:scale-125`}>
                                                        {experience.icon}
                                                    </div>
                                                    <div>
                                                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                                                            {experience.title}
                                                        </p>
                                                        <p className="text-sm sm:text-base">
                                                            {experience.company}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </GlowCard>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="action">
                <Link to='/experience'><Button text={t('more')} bg={theme.tag === 'light' ? 'black' : ''} icon={<GrNext />} /></Link>
            </div>

        </section>
    );
})

Experience.propTypes = themeProps;
export default Experience;