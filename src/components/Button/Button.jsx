// # +====================================================================================+ #
// # |===============================     Powerk-soft     ================================| #
// # |==============================    e-commerce app     ===============================| #
// # |======================= Programmer: NDANG ESSI Pierre Junior =======================| #
// # +====================================================================================+ #

import React from 'react'

import './button.scss'

const Button = ({text = null, width, icon, bg, fontWeight,borderWidth}) => {
    return (
        <button style={{background:bg, width:width}} className='button-s'>
            {icon}
            {
                text !== null && <span  style={{fontWeight: fontWeight,borderWidth:borderWidth}}>{text}</span>
            }
        </button>
    )
}

export default Button