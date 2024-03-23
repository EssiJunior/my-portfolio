import '@/styles/home.scss'
import Hero from '../containers/Hero/Hero'
import About from '../containers/About/About'
import Experience from '../containers/Experience/Experience'
import Skills from '../containers/Skills/Skills'

const Home = ({theme}) => {
    return (
        <main style={{backgroundColor:`${theme.colors.bg}`, color:`${theme.colors.text}`}}>
            
            <Hero theme={theme}/>
            <About theme={theme}/>
            <Experience theme={theme}/>
            <Skills theme={theme}/>
            Home
        </main>
    )
}

export default Home