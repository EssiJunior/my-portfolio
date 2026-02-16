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

// ASSETS
import { logoLight } from "@/assets/logo";
import { navlinks } from '@/utils'

const Footer = memo(function Footer({ languageRef }) {
    const theme = useTheme()
    const { t } = useTranslation();

    return (
        <footer className='bg-primary'>
            <div className="grid py-3 mx-auto">
                <div className="container grid gap-4 px-8">
                    <p className={`${styles.sectionHeadText} text-end leading-none`}>{t('links')}</p>

                    <aside className="flex flex-wrap items-center justify-end gap-x-8  gap-y-1">
                        {navlinks(t).map((elt, i) => (
                            <NavLink to={elt.path} key={i} activeclassname="active" className={"hover:text-yellow-300 text-sm"}>
                                <Typography text={elt.label} />
                            </NavLink>
                        ))}
                    </aside>
                </div>
            </div>


            <div className="grid py-3 mx-auto bg-black text-white">
                <div className="container grid gap-4 px-8">
                    <p className={`${styles.sectionHeadText} text-start leading-none`}>Top techs</p>

                    <aside className="flex flex-wrap items-center gap-x-8  gap-y-1">
                        {tech.map((elt, i) => (
                            <div key={i} className='flex items-center gap-2'>
                                {elt.icon}
                                <Typography text={elt.label} className="text-xs font-space_mono" />
                            </div>
                        ))}
                    </aside>
                </div>
            </div>

            <div className="flex flex-wrap w-[90%] justify-between items-center py-3 px-6 gap-6 container">
                <p className={`${styles.sectionHeadText} text-center leading-none flex gap-1`}>
                    
                    <span>{t("contact")} <span className="sm:hidden">|</span></span> 
                    <div className="-mt-1.5">
                        {social.map((elt, i) => (
                            <a href={elt.link} key={i} aria-label={'Essi Junior\'s ' + elt.name + ' link'} target="_blank" className='hover:text-yellow-300'>
                                {elt.icon}
                            </a>
                        ))}
                    </div>
                </p>

                <aside className="grid flex-wrap items-center gap-x-2 gap-y-1 [&>a]:text-xl [&>a]:flex [&>a]:items-center [&>a]:gap-4 ">
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

            <section className="py-3 px-6 bg-black flex">
                <div className='container flex justify-between items-center w-[90%] '>
                    <Typography text={t('copyright')} className="text-sm text-white" />
                    <div className="lang"><Language languageRef={languageRef} /></div>
                </div>
            </section>
        </footer>
    )
})

Footer.propTypes = themeProps;
export default Footer