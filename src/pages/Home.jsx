import '@/styles/home.scss'

const Home = ({theme}) => {
    return (
        <main style={{backgroundColor:`${theme.colors.bg}`, color:`${theme.colors.text}`}}>Home</main>
    )
}

export default Home