import React, { useEffect, useState } from 'react'
import Typography from '../../components/Typography/Typography'
import SearchBar from '../../components/SearchBar/SearchBar'

import './navbar.scss'

import { Menu, Person2, Person2Outlined, Search, ShoppingCart, ShoppingCartOutlined } from '@mui/icons-material'
import { Link, NavLink } from 'react-router-dom'
import { Box, Drawer, List, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import Language from '../../components/Language/Language'
import logo from '../../assets/at-color.png'
import logoWhite from '../../assets/at-clay.png'

const color = '#F26100'
const logoStyle = {fontWeight:700, fontSize:'1.5rem', width:'20%'}
const Navbar = ({themeToggler, theme}) => {
    
    //State for translation
    const {t,i18n} = useTranslation();

    const is_mobile = useMediaQuery('(max-width: 1100px)')
    const is_mobile_1 = useMediaQuery('(max-width: 700px)')
    // const is_mobile_2 = useMediaQuery('(max-width: 420px)')

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

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

    const DrawerList = (
        <Box sx={{ width: 300, height:'100%', backgroundColor:`${theme.colors.navbar}`, color:`${theme.colors.navbarText}`}} role="presentation" onClick={toggleDrawer(false)} className='drawer'>
            <List>
                {navlinks.map((elt, i) => (
                    <NavLink to={elt.path} key={i}  activeClassName="active">
                        <Typography text={elt.label}/>
                    </NavLink>
                ))}
            </List>
        </Box>
    );
    
    return (
        <nav className='navbar' style={{backgroundColor:`${theme.colors.navbar}`, color:`${theme.colors.navbarText}`}}>
            <section className="toolbar">
                {
                    is_mobile ?
                    <>
                        <div className="menu">
                            <Link className='logo' to='/'>
                                <img src={theme.tag === 'light'? logo : logoWhite} alt="Logo" />
                                <Typography text='Essi Junior' isGradient={theme.tag === 'light'? true : false} />
                            </Link>
                        </div>
                        
                    </>:
                    <Link className='logo' to='/'>
                        <img src={theme.tag === 'light'? logo : logoWhite} alt="Logo" />
                        <Typography text='Essi Junior' isGradient={theme.tag === 'light'? true : false} />
                    </Link>
                }
                
                
                <nav className='links' style={is_mobile ? {display:'none'}:{}}>
                    {
                        navlinks.map((elt, i) => {
                            return (
                                <NavLink to={elt.path} key={i}  activeClassName="active">
                                    <Typography text={elt.label}/>
                                </NavLink>
                            )
                        })
                    }
                </nav>
                
                <section className="actions">
                    {
                        is_mobile ?
                        <>
                            <label className="ui-switch">
                            <input type="checkbox"  onClick={themeToggler} />
                            <div className="slider-2">
                                <div className="circle"></div>
                            </div>
                            </label>

                            <Menu sx={{fontSize:'2.5rem',marginLeft:'0.5rem', cursor:'pointer', color:'#11998e'}} onClick={toggleDrawer(true)}/>
                        </>:
                        <>
                            <label className="switch">
                                <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
                                <span className="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>   
                                <input type="checkbox" className="input" onClick={themeToggler}/>
                                <span className="slider"></span>
                            </label>
                            
                        </>
                    }
                </section>
            </section>

            <Drawer open={open} anchor='right' onClose={toggleDrawer(false)} >
                {DrawerList}
            </Drawer>
        </nav>
    )
}

export default Navbar