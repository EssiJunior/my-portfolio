import React from 'react'

import './typography.scss'

const Typography = ({text, style, isGradient=false, className}) => {
    return (
        <p className={isGradient ? `typography green-text-gradient ${className}`:`typography ${className}`} style={style} >{text}</p>
    )
}

export default Typography
