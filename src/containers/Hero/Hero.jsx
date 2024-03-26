// REACT COMPONENTS IMPORTS
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// CUSTOMIZED COMPONENTS
import Typography from '@/components/Typography/Typography'
import Button from '@/components/Button/Button'

// UTILITIES
import { themeProps } from '@/utils/prop-types'

// ASSETS 
import { DownloadSharp, EmailSharp, Facebook, GitHub, LinkedIn, Twitter } from '@mui/icons-material'
import resume from "@/assets/data/ESSI Junior - Resume.pdf"

// STYLES
import './hero.scss'

const Hero = ({theme}) => {
    //State for translation
    const {t} = useTranslation();

    return (
        <section className={`hero ${theme.hero.gradient}`}>       
            <div className="container-hero ">
                <div className="brand" style={{color:theme.colors.text}}>
                    <Typography text={t('present')} style={{fontSize:'1.25rem'}} />
                    <Typography text={t('me')} style={{fontSize:'2.75rem', fontWeight:'700'}}/>
                    <Typography text={t('intro')} style={{marginBottom:'3rem'}} />
                    
                    <div className="my-6 flex items-center gap-5">

                        <Link
                            to='https://github.com/EssiJunior'
                            target='_blank'
                            className={`transition-all text-[${theme.colors.text}] hover:scale-125 duration-300`}
                        >
                            <GitHub size={30} />
                        </Link>

                        <Link
                            to='https://www.linkedin.com/in/pierre-junior-ndang-essi-86290b254/'
                            target='_blank'
                            className={`transition-all text-[${theme.colors.text}] hover:scale-125 duration-300`}
                        >
                            <LinkedIn size={30} />
                        </Link>

                        <Link
                            to='https://web.facebook.com/torres.essi'
                            target='_blank'
                            className={`transition-all text-[${theme.colors.text}] hover:scale-125 duration-300`}
                        >
                            <Facebook size={30} />
                        </Link>
                        
                        <Link
                            to='https://twitter.com/EssiJunior7'
                            target='_blank'
                            className={`transition-all text-[${theme.colors.text}] hover:scale-125 duration-300`}
                        >
                            <Twitter size={30} />
                        </Link>
                    </div>

                    <div className="more">
                        <Link to='products'><Button text={t('contactMe')} bg={theme.tag ===  'light'? 'black':''} icon={<EmailSharp />}/></Link>
                        <a href={resume} target='_blank'><Button text={t('download')} bg={theme.tag ===  'light'? 'black':''} icon={<DownloadSharp />}/></a>

                    </div>
                </div>
                <div className="actions"/>
            </div>
        </section>
        
    )
}
Hero.propTypes = themeProps
export default Hero