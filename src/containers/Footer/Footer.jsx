// REACT COMPONENTS
import { useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { Email, Phone} from '@mui/icons-material'

// CUSTOMIZED COMPONENTS 
import Typography from '@/components/Typography/Typography'
import Language from '@/components/Language/Language'

// UTILITIES
import { themeProps } from '@/utils/prop-types';
import { social, tech } from '@/utils/utilities';

// STYLES
import './footer.scss'

// ASSETS
import logo from '@/assets/at-clay.png'
import { navlinks } from '../../utils'

const Footer = ({ theme, languageRef }) => {
    //State for translation
    const { t } = useTranslation();

    const is_mobile_1 = useMediaQuery('(max-width: 800px)')
    const is_mobile_2 = useMediaQuery('(max-width: 550px)')
    
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
                            {navlinks(t).map((elt, i) => (
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