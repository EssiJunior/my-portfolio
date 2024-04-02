// UTILITIES
import { typographyProps } from '@/utils/prop-types';

// STYLE
import './typography.scss'

const Typography = ({text, style, isGradient=false, className}) => {
    return (
        <p className={isGradient ? `typography green-text-gradient ${className}`:`typography ${className}`} style={style} >{text}</p>
    )
}

Typography.propTypes = typographyProps;
export default Typography
