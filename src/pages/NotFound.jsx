// REACT COMPONENT
import { useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom';

// CUSTOMIZED COMPONENTS
import Typography from '@/components/Typography/Typography';

// ASSETS
import notFoundLottie from '@/assets/lotties/not_found.json'

// UTILS
import AnimationLottie from '@/utils/animation-lottie';

// STYLES
import '@/styles/not_found.scss'

const NotFound = () => {
    const is_sm = useMediaQuery('(max-width: 990px)')
    return (
        <main className='not-found' >
            <AnimationLottie animation={notFoundLottie} width={is_sm ? 300 : 500} margin='0' height={is_sm ? 200 :350}/>
            
            <Typography text="Page not found"  className='heading' style={is_sm ? {fontSize:'35px'}:{}}/>

            <Typography text="The requested URL was not found on this server. That’s all we know " className='description' style={is_sm ? {fontSize:'17px'}:{}}/>

            <Link
                    to='/'
                    className='to-home' 
                    variant="outline"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                        </svg>
                        <span className='link ms-2'>Back to home</span>
                </Link>


        </main>
    );
}

export default NotFound;