import '../styles/in_progress.scss'
import AnimationLottie from '../utils/animation-lottie'
import doing from '../assets/lotties/doing.json'
import Typography from '../components/Typography/Typography'
import { Link } from 'react-router-dom'

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

export default InProgress