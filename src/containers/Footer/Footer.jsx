import React from 'react'

import './footer.scss'
import { NavLink } from 'react-router-dom'
import Typography from '../../components/Typography/Typography'
import { Email, Instagram, Phone, PhoneAndroid, Public, Twitter, Web, YouTube } from '@mui/icons-material'
import Language from '../../components/Language/Language'
import { useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { FaAndroid, FaNodeJs, FaPython, FaReact } from "react-icons/fa6";
import { SiFastapi, } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoElectron } from "react-icons/io5";

import logo from '../../assets/at-clay.png'

const Footer = ({theme, languageRef}) => {
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
        // {
        //     'label':t('skills'),
        //     'path':'/skills'
        // },
        // {
        //     'label':t('education'),
        //     'path':'/education'
        // },
        {
            'label':t('projects'),
            'path':'/projects'
        },
        {
            'label':t('resume'),
            'path':'/resume'
        },
    ]
    const tech = [
        {
            'label':'Python',
            'icon':<FaPython size='20' />
        },
        {
            'label':'JavaScript',
            'icon':<IoLogoElectron size='20' />
        },
        {
            'label':'FastAPI',
            'icon':<SiFastapi size='20' />
        },
        {
            'label':'React',
            'icon':<FaReact size='20' />
        },
        {
            'label':'React Native',
            'icon':<RiReactjsLine size='20' />
        },
        {
            'label':'Electron',
            'icon':<IoLogoElectron size='20' />
        },
        {
            'label':'NodeJS',
            'icon':<FaNodeJs size='20' />
        },
        {
            'label':'Android',
            'icon':<FaAndroid size='20' />
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
                    <aside className="tech text-white">
                        <Typography text='Top techs' style={is_mobile_1? {color:'orange'}:{color:'white'}} />
                        
                        <aside className="elts">
                            {tech.map((elt, i) => (
                                <div key={i}>
                                    {elt.icon}
                                    <Typography text={elt.label} style={{marginLeft:'0.5rem'}}/>
                                </div>
                            ))}
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
                                +237 690743737
                            </code>
                        </aside>

                    </aside>
                </section>
            </main>
            <main className="foot-toolbar">
                <div className='container'>
                    <Typography text="Essi Junior's portfolio"  style={{color:'white'}} />
                    <div className="lang"><Language languageRef={languageRef} /></div>
                </div>
            </main>
        </footer>
    )
}

export default Footer