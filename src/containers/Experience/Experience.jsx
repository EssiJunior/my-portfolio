// REACT COMPONENTS IMPORTS
import { FaAndroid, FaPython } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { MdEngineering } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import { Link } from "react-router-dom";

// CUSTOMIZED COMPONENTS IMPORTS
import Button from "@/components/Button/Button";

// UTILS
import AnimationLottie from "@/utils/animation-lottie";
import GlowCard from "@/utils/glow-card";
import { themeProps } from "@/utils/prop-types";

// ASSETS
import experience from '@/assets/lotties/dev.json';
import bg from '@/assets/utilities/section.svg'
import blur from '@/assets/utilities/blur-23.svg'

// STYLES
import './experience.scss'
import { useTranslation } from "react-i18next";

function Experience({ theme }) {
    //State for translation
    const {t} = useTranslation();

    const experiences_tech = [
        {
            id: 1,
            title: t('se'),
            company: `${t('p')}, Powerk-soft, Pro service, Leratel`,
            icon: <MdEngineering size={30} />,
            // iconBg: "#383E56",
            date: `${t('since')} - Sept 2022`,
        },
        {
            id: 2,
            title: t('js'),
            company: `Powerk-soft, Pro service, Flikart +, ${t('i')}`,
            icon: <SiJavascript size={30} />,
            // iconBg: "#383E56",
            date: `${t('since')} - Sept 2022`
        },
        {
            id: 3,
            title: t('ad'),
            company: `${t('p')}, ${t('i')}`,
            icon: <FaAndroid size={30} />,
            // iconBg: "#383E56",
            date: `${t('since')} - Mar 2022`
        },
        {
            id: 4,
            title: t('py'),
            company: `${t('p')}, ${t('i')}, Powerk-soft, Pro service`,
            icon: <FaPython size={30} />,
            // iconBg: "#383E56",
            date: `${t('since')} - Sept 2020`
        },
    ];

    return (
        <section className={`experience ${theme.hero.gradient} `}>
            <div id="experience" className="relative z-50 my-12 lg:my-24 ">
                <img
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
                                    experiences_tech.map(experience => (
                                        <GlowCard key={experience.id} identifier={`experience-${experience.id}`} >
                                            <div className="p-3 relative">
                                                <img
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
}

Experience.propTypes = themeProps;
export default Experience;