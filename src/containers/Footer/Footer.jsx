import React from 'react'

import './footer.scss'
import { NavLink } from 'react-router-dom'
import Typography from '../../components/Typography/Typography'
import { Email, Instagram, Phone, PhoneAndroid, Public, Twitter, Web, YouTube } from '@mui/icons-material'
import Language from '../../components/Language/Language'
import { useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'

import logo from '../../assets/at-clay.png'

const Footer = ({theme}) => {
    //State for translation
    const {t,i18n} = useTranslation();

    const is_mobile_1 = useMediaQuery('(max-width: 800px)')
    const is_mobile_2 = useMediaQuery('(max-width: 550px)')
    
    const navlinks = [
        {
            'label':t('about'),
            'path':'/about'
        },
        {
            'label':t('contact'),
            'path':'/contact'
        },
        {
            'label':t('experience'),
            'path':'/experience'
        },
        {
            'label':t('skills'),
            'path':'/skills'
        },
        {
            'label':t('education'),
            'path':'/education'
        },
        {
            'label':t('projects'),
            'path':'/projects'
        },
        {
            'label':t('resume'),
            'path':'/category/resume'
        },
    ]
    
    return (
        <footer>
            <main className='footer-info' style={{backgroundColor:`${theme.colors.footer}`}}>
                <section className="container">
                    <aside className="company">
                            <NavLink className='logo' to='/'>
                                <img src={logo} alt="Logo" />
                                <Typography text='Essi Junior'/>
                            </NavLink>
                        <aside>
                            <NavLink to='/about'><Typography text={t('about')} /></NavLink>
                            <NavLink to='/contact'><Typography text={t('contact')} /></NavLink>
                        </aside>
                        <aside className="links">
                            <NavLink to='#'><Instagram /></NavLink>
                            <NavLink to='#'><Public /></NavLink>
                            <NavLink to='#'><Twitter /></NavLink>
                            <NavLink to='#'><YouTube /></NavLink>
                        </aside>
                        <Typography text={t('copyright')} style={is_mobile_2?{color:'white', fontSize:'13px', width:'100%'}:{color:'white', fontSize:'13px', width:'70%'}} />
                    </aside>
                    <aside className="categories">
                        <Typography text={t('links')} style={is_mobile_1? {color:'orange'}:{color:'white'}} />
                        <aside className="cats">
                            {navlinks.map((elt, i) => (
                            <NavLink to={elt.path} key={i}  activeClassName="active">
                                <Typography text={elt.label}/>
                            </NavLink>
                            ))}
                        </aside>
                    </aside>
                    <aside className="shops">
                        <Typography text={t('shops')} style={is_mobile_1? {color:'orange'}:{color:'white'}} />
                        <aside className="shop">
                            <Typography text='Yaounde' style={{color:'white'}} />
                            <Typography text='Bastos traffic circle, street 403-2' style={{color:'white'}} />
                        </aside>
                        <aside className="shop">
                            <Typography text='Douala' style={{color:'white'}} />
                            <Typography text='Akwa, street 1001-24' style={{color:'white'}} />
                        </aside>
                        <aside className="shop">
                            <Typography text='Berlin' style={{color:'white'}} />
                            <Typography text='Town center, xxx-xx-xxxx' style={{color:'white'}} />
                        </aside>
                    </aside>
                    <aside className="help">
                        <Typography text={t('help')} style={is_mobile_1? {color:'orange'}:{color:'white'}} />
                        <aside className="info">
                            <code>
                                <Email/>
                                nessipjunior@gmail.com
                            </code>
                            <code>
                                <Phone/>
                                +237 690-743-737
                            </code>
                        </aside>

                    </aside>
                </section>
            </main>
            <main className="foot-toolbar">
                <div className='container'>
                    <Typography text="Essi Junior's portfolio"  style={{color:'white'}} />
                    <div className="lang"><Language /></div>
                </div>
            </main>
        </footer>
    )
}

export default Footer