import '@/styles/home.scss'
import Hero from '../containers/Hero/Hero'

const Home = ({theme}) => {
    return (
        <main style={{backgroundColor:`${theme.colors.bg}`, color:`${theme.colors.text}`}}>
            
            <Hero theme={theme}/>
            Home
        </main>
    )
}

export default Home