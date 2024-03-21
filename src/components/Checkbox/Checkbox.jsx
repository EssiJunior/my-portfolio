// # +====================================================================================+ #
// # |===============================     Powerk-soft     ================================| #
// # |==============================    e-commerce app     ===============================| #
// # |======================= Programmer: NDANG ESSI Pierre Junior =======================| #
// # +====================================================================================+ #

import React from 'react'

import './check_box.scss'
import { FormHelperText } from '@mui/joy'

const Checkbox = ({label}) => {
    return (
        <div className="checkbox-wrapper">
            <input id="terms-checkbox-37" name="checkbox" type="checkbox" />
            <label className="terms-label" for="terms-checkbox-37">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200" className="checkbox-svg">
                <mask fill="white" id="path-1-inside-1_476_5-37">
                    <rect height="200" width="200"></rect>
                </mask>
                <rect mask="url(#path-1-inside-1_476_5-37)" stroke-width="40" className="checkbox-box" height="200" width="200"></rect>
                <path stroke-width="15" d="M52 111.018L76.9867 136L149 64" className="checkbox-tick"></path>
                </svg>
                <FormHelperText className="label-text">{label}</FormHelperText>
                
            </label>
        </div>
    )
}

export default Checkbox