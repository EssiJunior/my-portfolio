// REACT COMPONENTS IMPORTS
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// CUSTOMIZED COMPONENTS
import Typography from '@/components/Typography/Typography'
import Button from '@/components/Button/Button'

// UTILITIES
import { themeProps } from '@/utils/prop-types'
import AnimationLottie from "@/utils/animation-lottie";

// ASSETS 
import { DownloadSharp, EmailSharp, Facebook, GitHub, LinkRounded, LinkedIn, MoreOutlined, WorkHistory, X } from '@mui/icons-material'
import dev from '@/assets/lotties/coder.json';
import profile from '../../assets/profile/profile.png'
// STYLES
import './hero.scss'
import { useMediaQuery } from '@mui/material'
import { ScrollParallax } from 'react-just-parallax'
import { social, tech } from '../../utils/utilities'

const Hero = ({ theme }) => {
    const is_lg = useMediaQuery('(max-width: 990px)')

    //State for translation
    const { t } = useTranslation();

    return (
        <section className={`hero ${theme.hero.gradient}`}>
            <div className="container-hero ">
                <div className="brand" style={{ color: theme.colors.text }}>
                    <Typography text={t('present')} style={{ fontSize: '1.25rem' }} />
                    <Typography text={t('me')} style={{ fontSize: '2.75rem', fontWeight: '700', color: 'white' }} />
                    <Typography text={t('intro')} style={{ marginBottom: '3rem' }} />

                    <div className="xl:hidden my-6 flex items-center gap-5">
                        {
                            social.map((elt, i) => {
                                return (
                                    <Link
                                        key={i}
                                        to={elt.link}
                                        target='_blank'
                                        className={`transition-all text-[${theme.colors.text}] hover:scale-125 duration-300`}
                                    >
                                        {elt.icon}
                                    </Link>
                                )
                            })
                        }
                    </div>

                    <div className="more">
                        <Link to='/contact'><Button text={t('contactMe')} bg={theme.tag === 'light' ? 'black' : ''} icon={<EmailSharp />} /></Link>
                        <Link to='/projects'><Button text={t('download')} bg={theme.tag === 'light' ? 'black' : ''} icon={<WorkHistory />} margin='0 1rem' /></Link>

                    </div>
                </div>
                <div className="actions relative">
                    <img src={profile} alt="Profile banner" />

                    <ScrollParallax isAbsolutelyPositioned>
                        <ul className={`hidden absolute -left-[7.5rem] bottom-[5rem] px-1 py-1 bg-primary/30 backdrop-blur border ${theme.hero.glass} rounded-xl xl:flex`}>
                            {tech.map((elt, index) => (
                                <li className="p-3 text-white" key={index}>
                                    {elt.icon}
                                </li>
                            ))}
                        </ul>
                    </ScrollParallax>
                    <ScrollParallax isAbsolutelyPositioned>
                        <ul className={`hidden absolute left-[3.5rem] -top-[0px] px-1 py-1 bg-primary/30 backdrop-blur border ${theme.hero.glass} rounded-xl xl:flex`}>
                        {
                            social.map((elt, i) => {
                                return (
                                    <Link
                                        key={i}
                                        to={elt.link}
                                        target='_blank'
                                        className={`p-2 transition-all text-white hover:scale-125 duration-300`}
                                    >
                                        {elt.icon}
                                    </Link>
                                )
                            })
                        }
                        </ul>
                    </ScrollParallax>
                </div>
            </div>
        </section>

    )
}
Hero.propTypes = themeProps
export default Hero