// REACT COMPONENTS IMPORTS
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { GrCertificate } from "react-icons/gr";
import { useTheme } from 'styled-components'

// CUSTOMIZED COMPONENTS
import SecondaryHeadingOverlay from "@/components/Overlays/SecondaryHeadingOverlay";
import SecondaryHeading from "@/components/Headings/Secondary";
import GlowCard from "@/components/GlowCard";

// UTILS
import AnimationLottie from "@/utils/animation-lottie";
import { themeProps } from "@/utils/prop-types";

// ASSETS
import { education as educationAnimation } from "@/assets/lotties";


const Education = memo(function Education({ educationRef }) {
    const theme = useTheme()
    const { t } = useTranslation();

    const education = [
        {
            id: 1,
            title: t('m1'),
            school: t('uy1'),
            date: `${t('since')} - Sept 2025`
        },
        {
            id: 2,
            title: t('ud'),
            school: t('uy1'),
            date: `${t('since')} - Sept 2022`
        },
        {
            id: 3,
            title: "GCE - Advanced level",
            school: t('gbhsy'),
            date: `${t('since')} - Sept 2018`
        }
    ];


    return (
        <section className={`container  pb-20 ${theme.hero.gradient}`} ref={educationRef} >
            <div id="education" className="relative z-50 my-12 lg:my-24 ">
                <SecondaryHeadingOverlay />
                <SecondaryHeading text={t('ed')} />

                <div className="py-8">
                    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                        <div>
                            <div className="sticky top-20 flex justify-center items-start">
                                <div className="w-full h-full">
                                    <AnimationLottie animation={educationAnimation} width='60%' />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            {
                                education.map(education => (
                                    <GlowCard key={education.id} identifier={`education-${education.id}`} icon={<GrCertificate size={30} />} date={education.date} title={education.title} company={education.school} />
                                    
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
})

Education.propTypes = themeProps;
export default Education;