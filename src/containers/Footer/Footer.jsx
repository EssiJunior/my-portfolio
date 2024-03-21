import React from 'react'

import './footer.scss'
import { NavLink } from 'react-router-dom'
import Typography from '../../components/Typography/Typography'
import { Email, Instagram, Phone, PhoneAndroid, Public, Twitter, Web, YouTube } from '@mui/icons-material'
import Language from '../../components/Language/Language'
import { useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    //State for translation
    const {t,i18n} = useTranslation();

    const is_mobile_1 = useMediaQuery('(max-width: 800px)')
    const is_mobile_2 = useMediaQuery('(max-width: 550px)')
    
    const navlinks = [
        {
            'label':t('exterior'),
            'path':'/category/exterior'
        },
        {
            'label':t('evAccesories'),
            'path':'/category/ev_accesories'
        },
        {
            'label':t('overland'),
            'path':'/category/overland'
        },
        {
            'label':t('interior'),
            'path':'/category/interior'
        },
        {
            'label':t('performance'),
            'path':'/category/performance'
        },
        {
            'label':t('trailerAndTowing'),
            'path':'/category/trailer_and_towing'
        },
        {
            'label':t('wheels'),
            'path':'/category/wheels'
        },
        {
            'label':t('automotiveLighting'),
            'path':'/category/automotive_lighting'
        },
        {
            'label':t('carCare'),
            'path':'/category/car_care'
        },
        {
            'label':t('electronics'),
            'path':'/category/electronics'
        },
        {
            'label':t('all'),
            'path':'/products'
        },
    ]
    
    return (
        <footer>
            <main className='footer-info'>
                <section className="container">
                    <aside className="company">
                        <NavLink to='/'><Typography text='LOGO HERE' style={{fontWeight:700, fontSize:'1.5rem', width:'100%'}}/></NavLink>
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
                        <Typography text={<>&copy;Powerksoft solutions 2024, {t('copyright')}</>} style={is_mobile_2?{color:'white', fontSize:'13px', width:'100%'}:{color:'white', fontSize:'13px', width:'70%'}} />
                    </aside>
                    <aside className="categories">
                        <Typography text={t('categories')} style={is_mobile_1? {color:'orange'}:{color:'white'}} />
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
                                email@example.com
                            </code>
                            <code>
                                <Phone/>
                                +237 xxx-xxx-xxx
                            </code>
                        </aside>

                    </aside>
                </section>
            </main>
            <main className="foot-toolbar">
                <div className='container'>
                    <Typography text='&copy;e-commerce' style={{color:'white'}} />
                    <div className="lang"><Language /></div>
                </div>
            </main>
        </footer>
    )
}

export default Footer