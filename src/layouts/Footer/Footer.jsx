// REACT COMPONENTS
import { memo } from 'react'
import { useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { Email, Phone } from '@mui/icons-material'
import { useTheme } from 'styled-components'

// CUSTOMIZED COMPONENTS 
import Typography from '@/components/Typography/Typography'
import Language from '@/components/Language/Language'

// UTILITIES
import { themeProps } from '@/utils/prop-types';
import { social, tech } from '@/utils/utilities';

// STYLES
import { styles } from "@/styles/styles";
import './footer.css'

// ASSETS
import { logoLight } from "@/assets/logo";
import { navlinks } from '@/utils'

const Footer = memo(function Footer({ languageRef }) {
    const theme = useTheme()
    const { t } = useTranslation();

    const is_mobile_1 = useMediaQuery('(max-width: 800px)')
    const is_mobile_2 = useMediaQuery('(max-width: 550px)')

    return (
        <footer>
            <section className='footer-info py-5 md:py-10 flex items-center justify-center w-full' style={{ backgroundColor: `${theme.colors.footer}` }}>
                <div className="container w-[90%] h-[70%] grid grid-cols-[2.5fr_1fr_1fr_1fr]">
                    <aside className="company">
                        <NavLink className='logo' to='/'>
                            <img loading="lazy" src={logoLight} alt="Logo" />
                        </NavLink>
                        <aside className="[&_*]:text-[24px] space-y-2.5">
                            <NavLink to='/about'><Typography text={t('about')} /></NavLink>
                            <NavLink to='/contact'><Typography text={t('contact')} /></NavLink>
                        </aside>
                        <aside className="links">
                            {social.map((elt, i) => (
                                <a href={elt.link} key={i} aria-label={'Essi Junior\'s ' + elt.name + ' link'} target="_blank">
                                    {elt.icon}
                                </a>
                            ))}
                        </aside>
                        <Typography text={t('copyright')} style={is_mobile_2 ? { color: 'white', fontSize: '13px', width: '100%' } : { color: 'white', fontSize: '13px', width: '70%' }} />
                    </aside>
                    <aside className="categories">
                        <Typography text={t('links')} style={is_mobile_1 ? { color: 'orange' } : { color: 'white' }} />
                        <aside className="cats">
                            {navlinks(t).map((elt, i) => (
                                <NavLink to={elt.path} key={i} activeclassname="active">
                                    <Typography text={elt.label} />
                                </NavLink>
                            ))}
                        </aside>
                    </aside>
                    <aside className="tech text-white">
                        <Typography text='Top techs' style={is_mobile_1 ? { color: 'orange' } : { color: 'white' }} />

                        <aside className="elts">
                            {tech.map((elt, i) => (
                                <div key={i}>
                                    {elt.icon}
                                    <Typography text={elt.label} style={{ marginLeft: '0.5rem' }} />
                                </div>
                            ))}
                        </aside>

                    </aside>
                </div>
            </section>

            <div className="flex justify-between items-center py-3 w-[90%] mx-auto">
                <h3 className={`${styles.sectionHeadText} text-center leading-none`}>{t("contact")}</h3>

                <aside className="grid flex-wrap items-center gap-2 [&>a]:text-xl [&>a]:flex [&>a]:items-center [&>a]:gap-4 ">
                    <a href="mailto:dev@essijunior.com" className='hover:text-yellow-200'>
                        <Email />
                        dev@essijunior.com
                    </a>
                    <a href='tel:+237690743737' className='hover:text-yellow-200'>
                        <Phone />
                        +237 690743737
                    </a>
                </aside>

            </div>

            <section className="py-3 bg-black flex">
                <div className='flex w-[90%] mx-auto max-w-[1300px]'>
                    <Typography text="@EssiJunior" style={{ color: 'white' }} />
                    <div className="lang"><Language languageRef={languageRef} /></div>
                </div>
            </section>
        </footer>
    )
})

Footer.propTypes = themeProps;
export default Footer