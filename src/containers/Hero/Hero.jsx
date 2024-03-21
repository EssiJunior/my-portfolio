import React from 'react'

import './hero.scss'
import Typography from '../../components/Typography/Typography'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className="hero">
            <div className="brand">
                <Typography text='Buy all car components you like' />
                <Typography text='Company brand name' style={{fontSize:'1.75rem', fontWeight:'700', marginBottom:'2rem'}}/>
                <Link to='products'><Button text='Visit store' bg='black'/></Link>
            </div>
            <div className="actions"/>
        </section>
    )
}

export default Hero