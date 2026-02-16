import React from 'react'

const FloatingCard = ({className, children}) => {
    return (
        <div
            className={`${className} absolute right-12 -translate-x-1/2 top-10 px-1 py-1 bg-secondary/25 backdrop-blur border border-secondary rounded-xl flex animation-moveRotate font-space_mono `}
        >
            {children}
        </div>
    )
}

export default FloatingCard