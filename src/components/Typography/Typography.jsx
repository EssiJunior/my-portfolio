import React from 'react'

import './typography.scss'

const Typography = ({text, style, isGradient=false}) => {
    return (
        <p className={isGradient ? 'typography green-text-gradient':'typography'} style={style} >{text}</p>
    )
}

export default Typography
