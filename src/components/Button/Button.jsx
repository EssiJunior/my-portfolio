// STYLE
import './button.scss'

// UTILITIES
import { buttonProps } from '@/utils/prop-types';

const Button = ({text = null, margin, width, icon, bg, fontWeight,borderWidth, color}) => {
    return (
        <button style={{background:bg, width:width, margin:margin}} className='button-s'>
            {icon}
            {
                text !== null && <span  style={{fontWeight: fontWeight,borderWidth:borderWidth, color:color}}>{text}</span>
            }
        </button>
    )
}

Button.propTypes = buttonProps;
export default Button