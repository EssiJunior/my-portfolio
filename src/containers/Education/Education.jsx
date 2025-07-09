// REACT COMPONENTS IMPORTS
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { GrCertificate } from "react-icons/gr";
import { useTheme } from 'styled-components'

// UTILS
import AnimationLottie from "@/utils/animation-lottie";
import GlowCard from "@/utils/glow-card";
import { themeProps } from "@/utils/prop-types";

// ASSETS
import bg from '@/assets/utilities/section.svg'
import blur from '@/assets/utilities/blur-23.svg'

import { education as educationAnimation } from "@/assets/lotties";

const Education = memo(function Education({ educationRef }) {
    const theme = useTheme()
    const {t} = useTranslation();
    
    const education = [
        {
            id: 1,
            title: t('ud'),
            school: t('uy1'),
            date: `${t('since')} - Sept 2022`
        },
        {
            id: 2,
            title: "GCE - Advanced level",
            school: t('gbhsy'),
            date: `${t('since')} - Sept 2018`
        }
    ];


    return (
        <section className={`experience ${theme.hero.gradient}`} ref={educationRef} >
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
                        <span className={`${theme.global.headingBox} w-fit text-white p-2 px-5 my-10 text-xl rounded-md capitalize`}>
                            {t('ed')}
                        </span>
                        <span className={`w-24 h-[2px] ${theme.global.headingBox}`}></span>
                    </div>
                </div>

                <div className="py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                        <div className="flex justify-center items-start">
                            <div className="w-full h-full">
                                <AnimationLottie animation={educationAnimation} width='60%' />
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col gap-6">
                                {
                                    education.map(education => (
                                        <GlowCard key={education.id} identifier={`education-${education.id}`} >
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
                                                        {education.date}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-x-8 px-3 py-5">
                                                    <div className={`text-${theme.global.headingBox}  transition-all duration-300 hover:scale-125`}>
                                                        <GrCertificate size={30} />
                                                    </div>
                                                    <div>
                                                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                                                            {education.title}
                                                        </p>
                                                        <p className="text-sm sm:text-base">
                                                            {education.school}
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
        </section>
    );
})

Education.propTypes = themeProps;
export default Education;