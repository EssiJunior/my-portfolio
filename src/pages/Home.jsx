// CUSTOMIZED CONTAINERS
import Hero from '@/containers/Hero/Hero'
import About from '@/containers/About/About'
import Experience from '@/containers/Experience/Experience'
import Skills from '@/containers/Skills/Skills'
import Education from '@/containers/Education/Education'
import Projects from '@/containers/Projects/Projects'
import ContactBloc from '@/containers/ContactBloc/ContactBloc'
import {motion} from 'framer-motion'

// CUSTOMIZED COMPONENTS
import SEO from '@/components/SEO/SEO'

// UTILITIES
import { themeProps } from '@/utils/prop-types'
import { useTheme } from 'styled-components'
import { baseURL } from '../utils'

const Home = ({ skillsRef, educationRef }) => {
    const theme = useTheme()
    
    return (
        
        <motion.main 
        
        // initial={{opacity:0}}
        // animate={{opacity:1}}
        // exit={{opacity:0, transition: {duration:1}}}

        className='home' style={{backgroundColor:`${theme.colors.bg}`, color:`${theme.colors.text}`}}>
            {/* SEO COMPONENT */}
            <SEO 
                title={`Essi Junior's portfolio - Homepage`} 
                description="This is Essi Junior's portfolio website homepage. Here you can view all his professional skills, academic level, resume, public works and work mentatility."
                name='Essi Junior' 
                type='homepage' 
                link={`${baseURL}`} />
            
            {/* PAGE COMPONENTS */}
            <Hero/>
            <About/>
            <Experience/>
            <Skills skillsRef={skillsRef} />
            <Education educationRef={educationRef} />
            <Projects />
            <ContactBloc/> 
        </motion.main>
    )
}

Home.propTypes = themeProps;
export default Home