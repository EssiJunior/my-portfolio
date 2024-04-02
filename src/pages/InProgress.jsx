// REACT COMPONENTS IMPORTS
import { Link } from 'react-router-dom'

// CUSTOMIZED CONTAINERS
import Typography from '@/components/Typography/Typography'

// UTILITIES
import { themeProps } from '@/utils/prop-types'
import AnimationLottie from '@/utils/animation-lottie'

// STYLES
import '@/styles/in_progress.scss'

// ASSETS
import doing from '@/assets/lotties/doing.json'

const InProgress = ({theme}) => {
    return (
        <main className='doing' style={{backgroundColor:`${theme.colors.bg}`, color:`${theme.colors.text}`}}>
            <div className="wrapper">
                <AnimationLottie animationPath={doing} width='40%'/>
                <Typography text='In development...' />
                <Link to='/'><Typography text='< Go to home' className='blue-text-gradient' /></Link>
            </div>
        </main>
    )
}

InProgress.propTypes = themeProps;
export default InProgress