// REACT COMPONENTS IMPORTS
import { memo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from 'styled-components'

// CUSTOMIZED COMPONENTS IMPORTS
import Button from "@/components/Button/Button";

// UTILS
import AnimationLottie from "@/utils/animation-lottie";
import { themeProps } from "@/utils/prop-types";

// COMPONENTS
import SecondaryHeading from "@/components/Headings/Secondary";
import SecondaryHeadingOverlay from "@/components/Overlays/SecondaryHeadingOverlay";

// ASSETS
import { GrLinkNext } from "react-icons/gr";
import { experience } from "@/assets/lotties";

// UTILS
import { experiences_tech } from "@/utils";
import GlowCard from "../components/GlowCard";

const Experience = memo(function Experience() {
    const theme = useTheme()
    const { t } = useTranslation();

    return (
        <section className={`container pb-8 ${theme.hero.gradient}`}>
            <div id="experience" className="relative z-50 my-12 lg:my-24 ">
                <SecondaryHeadingOverlay />

                <SecondaryHeading text={t('ex')} />

                <div className="relative py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                        <div>
                            <div className="sticky top-20 flex justify-start items-start -my-14">
                                <div className="w-full h-full">
                                    <AnimationLottie animation={experience} width="90%" />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            {
                                experiences_tech(t).map(experience => (
                                    <GlowCard key={experience.id} identifier={`experience-${experience.id}`} icon={experience.icon} date={experience.date} title={experience.title} company={experience.company} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="action">
                <Link to='/experience'><Button text={t('more')} bg={theme.tag === 'light' ? 'black' : ''} icon={<GrLinkNext />} /></Link>
            </div>

        </section>
    );
})

Experience.propTypes = themeProps;
export default Experience;