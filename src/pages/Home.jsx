// CUSTOMIZED CONTAINERS
import Hero from '@/containers/Hero/Hero'
import About from '@/containers/About/About'
import Experience from '@/containers/Experience/Experience'
import Skills from '@/containers/Skills/Skills'
import Education from '@/containers/Education/Education'
import Projects from '@/containers/Projects/Projects'
import ContactBloc from '@/containers/ContactBloc/ContactBloc'

// CUSTOMIZED COMPONENTS
import SEO from '../components/SEO/SEO'

// UTILITIES
import { baseURL } from '../utils'
import { themeProps } from '../utils/prop-types'


const Home = ({theme, skillsRef, educationRef }) => {
    return (
        
        <main className='home' style={{backgroundColor:`${theme.colors.bg}`, color:`${theme.colors.text}`}}>
            {/* SEO COMPONENT */}
            <SEO 
                title={`Essi Junior's portfolio - Homepage`} 
                description="This is Essi Junior's portfolio website homepage. Here you can view all his professional skills, academic level, resume, public works and work mentatility."
                name='Essi Junior' 
                type='homepage' 
                link={`${baseURL}`} />
            
            {/* PAGE COMPONENTS */}
            <Hero theme={theme}/>
            <About theme={theme}/>
            <Experience theme={theme}/>
            <Skills theme={theme} skillsRef={skillsRef} />
            <Education theme={theme} educationRef={educationRef} />
            <Projects theme={theme}/>
            <ContactBloc theme={theme}/> 
        </main>
    )
}

Home.propTypes = themeProps;
export default Home