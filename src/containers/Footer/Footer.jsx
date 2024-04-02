// REACT COMPONENTS
import { useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { FaAndroid, FaNodeJs, FaPython, FaReact } from "react-icons/fa6";
import { SiFastapi, } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoElectron } from "react-icons/io5";
import { NavLink } from 'react-router-dom'
import { Email, Facebook, GitHub, LinkedIn, Phone, X } from '@mui/icons-material'

// CUSTOMIZED COMPONENTS 
import Typography from '@/components/Typography/Typography'
import Language from '@/components/Language/Language'

// STYLES
import './footer.scss'

// ASSETS
import logo from '@/assets/at-clay.png'
import { themeProps } from '../../utils/prop-types';

const Footer = ({ theme, languageRef }) => {
    //State for translation
    const { t } = useTranslation();

    const is_mobile_1 = useMediaQuery('(max-width: 800px)')
    const is_mobile_2 = useMediaQuery('(max-width: 550px)')

    const navlinks = [
        {
            'label': t('about'),
            'path': '/about'
        },
        {
            'label': t('contact'),
            'path': '/contact'
        },
        {
            'label': t('experience'),
            'path': '/experience'
        },
        // {
        //     'label':t('skills'),
        //     'path':'/skills'
        // },
        // {
        //     'label':t('education'),
        //     'path':'/education'
        // },
        {
            'label': t('projects'),
            'path': '/projects'
        },
        {
            'label': t('resume'),
            'path': '/resume'
        },
    ]

    const social = [
        {
            "Name": "Github",
            "link": 'https://github.com/EssiJunior',
            "icon": <GitHub size={30} />
        },
        {
            "Name": "LinkedIn",
            "link": 'https://www.linkedin.com/in/pierre-junior-ndang-essi-86290b254/',
            "icon": <LinkedIn size={30} />
        },
        {
            "Name": "Facebook",
            "link": 'https://web.facebook.com/torres.essi',
            "icon": <Facebook size={30} />
        },
        {
            "Name": "X (Formally Twitter)",
            "link": 'https://twitter.com/EssiJunior7',
            "icon": <X size={30} />
        },
    ]
    
    const tech = [
        {
            'label': 'Python',
            'icon': <FaPython size='20' />
        },
        {
            'label': 'JavaScript',
            'icon': <IoLogoElectron size='20' />
        },
        {
            'label': 'FastAPI',
            'icon': <SiFastapi size='20' />
        },
        {
            'label': 'React',
            'icon': <FaReact size='20' />
        },
        {
            'label': 'React Native',
            'icon': <RiReactjsLine size='20' />
        },
        {
            'label': 'Electron',
            'icon': <IoLogoElectron size='20' />
        },
        {
            'label': 'NodeJS',
            'icon': <FaNodeJs size='20' />
        },
        {
            'label': 'Android',
            'icon': <FaAndroid size='20' />
        },
    ]

    return (
        <footer>
            <main className='footer-info' style={{ backgroundColor: `${theme.colors.footer}` }}>
                <section className="container">
                    <aside className="company">
                        <NavLink className='logo' to='/'>
                            <img src={logo} alt="Logo" />
                            <Typography text='Essi Junior' />
                        </NavLink>
                        <aside>
                            <NavLink to='/about'><Typography text={t('about')} /></NavLink>
                            <NavLink to='/contact'><Typography text={t('contact')} /></NavLink>
                        </aside>
                        <aside className="links">
                            {social.map((elt, i) => (
                                <NavLink to={elt.link} key={i}>
                                    {elt.icon}
                                </NavLink>
                            ))}
                        </aside>
                        <Typography text={t('copyright')} style={is_mobile_2 ? { color: 'white', fontSize: '13px', width: '100%' } : { color: 'white', fontSize: '13px', width: '70%' }} />
                    </aside>
                    <aside className="categories">
                        <Typography text={t('links')} style={is_mobile_1 ? { color: 'orange' } : { color: 'white' }} />
                        <aside className="cats">
                            {navlinks.map((elt, i) => (
                                <NavLink to={elt.path} key={i} activeClassName="active">
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
                    <aside className="help">
                        <Typography text={t('help')} style={is_mobile_1 ? { color: 'orange' } : { color: 'white' }} />
                        <aside className="info">
                            <a href="mailto:nessipjunior@gmail.com">
                                <Email />
                                nessipjunior@gmail.com
                            </a>
                            <a href='tel:+237690743737'>
                                <Phone />
                                +237 690743737
                            </a>
                        </aside>

                    </aside>
                </section>
            </main>
            <main className="foot-toolbar">
                <div className='container'>
                    <Typography text="@EssiJunior" style={{ color: 'white' }} />
                    <div className="lang"><Language languageRef={languageRef} /></div>
                </div>
            </main>
        </footer>
    )
}

Footer.propTypes = themeProps;
export default Footer