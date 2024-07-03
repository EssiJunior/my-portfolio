import {  EmailSharp } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { motion } from "framer-motion";

// CUSTOMIZED COMPONENTS
import SEO from "@/components/SEO/SEO";

// UTILS
import { themeProps } from "@/utils/prop-types";
import { baseURL } from "@/utils";
import { textVariant } from "@/utils/motion";

// STYLES
import { styles } from "@/styles/styles";
import '../styles/about.scss';
import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { useTranslation } from "react-i18next";
import { me1, me2, me3, me4, me5 } from "../assets/me";
import Typography from "../components/Typography/Typography";
import Button from "../components/Button/Button";
import { useTheme } from "styled-components";

const About = () => {
    const theme = useTheme()

    //State for translation
    const { t } = useTranslation();
    const [inTrans, setInTrans] = useState(false);

    return (
        <main className="about" style={{ backgroundColor: `${theme.colors.bg}`, color: `${theme.colors.text}`}}>
            <Breadcrumb theme={theme} label='about' to='/about' icon="kthelypq.json" />
            <SEO
                title={`Essi Junior's portfolio - About`}
                description="This is Essi Junior's portfolio website about page. Here you can know more about me personaly."
                name='Essi Junior'
                type='about'
                link={`${baseURL}/about`} />

            <motion.div variants={textVariant()} className="mt-12">
                <p className={`${styles.sectionSubText} text-center ${theme.global.subHeading}`}>
                    {t('allA')}
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    {t('about')}
                </h2>
            </motion.div>

            
            <section className="relative flex flex-col items-center justify-between py-4 lg:py-12 w-11/12">       
                <div className="grid">
                    <div className="order-1 lg:order-2 from-[#0d1224] border-secondary relative  border bg-gradient-to-r to-[#0a0d37]">
                    <div className="flex flex-row">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
                    </div>
                    <div className="px-4 lg:px-8 py-5">
                        <div className="flex flex-row space-x-2">
                        <div className="h-3 w-3 rounded-full bg-red"></div>
                        <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                        <div className="h-3 w-3 rounded-full bg-green"></div>
                        </div>
                    </div>
                    <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                        <code className="font-mono text-xs md:text-sm lg:text-base">
                        <div className="blink">
                            <span className="mr-2 text-pink-500">const</span>
                            <span className="mr-2 text-white">me</span>
                            <span className="mr-2 text-pink-500">=</span>
                            <span className="text-gray-400">{'{'}</span>
                        </div>
                        <div>
                            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                            <span className="text-gray-400">{`'`}</span>
                            <span className="text-amber-300">NDANG ESSI Pierre Junior</span>
                            <span className="text-gray-400">{`',`}</span>
                        </div>
                        <div>
                            <span className="ml-4 lg:ml-8 mr-2 text-white">nationality:</span>
                            <span className="text-gray-400">{`'`}</span>
                            <span className="text-amber-300">Cameroonian</span>
                            <span className="text-gray-400">{`',`}</span>
                        </div>
                        <div className="ml-4 lg:ml-8 mr-2">
                            <span className=" text-white">languages:</span>
                            <span className="text-gray-400">{`['`}</span>
                            <span className="text-amber-300">English</span>
                            <span className="text-gray-400">{"', '"}</span>
                            <span className="text-amber-300">French</span>
                            <span className="text-gray-400">{"'],"}</span>
                        </div>
                        <div className="ml-4 lg:ml-8 mr-2">
                            <span className=" text-white">skills:</span>
                            <span className="text-gray-400">{`['`}</span>
                            <span className="text-amber-300">React</span>
                            <span className="text-gray-400">{"', '"}</span>
                            <span className="text-amber-300">React Native</span>
                            <span className="text-gray-400">{"', '"}</span>
                            <span className="text-amber-300">Redux</span>
                            <span className="text-gray-400">{"', '"}</span>
                            <span className="text-amber-300">Express</span>
                            <span className="text-gray-400">{"', '"}</span>
                            <span className="text-amber-300">FastAPI</span>
                            <span className="text-gray-400">{"', '"}</span>
                            <span className="text-amber-300">MySql</span>
                            <span className="text-gray-400">{"'"}</span>
                            <br />
                            <span className="text-gray-400">{", '"}</span>
                            <span className="text-amber-300">PostgreSQL</span>
                            <span className="text-gray-400">{"', '"}</span>
                            <span className="text-amber-300">MongoDB</span>
                            <span className="text-gray-400">{"', '"}</span>
                            <span className="text-amber-300">Docker</span>
                            <span className="text-gray-400">{"', '"}</span>
                            <span className="text-amber-300">AWS</span>
                            <span className="text-gray-400">{"'],"}</span>
                        </div>
                        <div>
                            <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                            <span className="text-orange-400">true</span>
                            <span className="text-gray-400">,</span>
                        </div>
                        <div>
                            <span className="ml-4 lg:ml-8 mr-2 text-white">disciplined:</span>
                            <span className="text-orange-400">true</span>
                            <span className="text-gray-400">,</span>
                        </div>
                        <div>
                            <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                            <span className="text-orange-400">true</span>
                            <span className="text-gray-400">,</span>
                        </div>
                        <div>
                            <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                            <span className="text-orange-400">true</span>
                            <span className="text-gray-400">,</span>
                        </div>
                        <div>
                            <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                            <span className="text-orange-400">function</span>
                            <span className="text-gray-400">{'() {'}</span>
                        </div>
                        <div>
                            <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                            <span className="text-gray-400">{`(`}</span>
                        </div>
                        <div>
                            <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                            <span className="mr-2 text-white">hardWorker</span>
                            <span className="text-amber-300">&amp;&amp;</span>
                        </div>
                        <div>
                            <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                            <span className="mr-2 text-white">disciplined</span>
                            <span className="text-amber-300">&amp;&amp;</span>
                        </div>
                        <div>
                            <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                            <span className="mr-2 text-white">problemSolver</span>
                            <span className="text-amber-300">&amp;&amp;</span>
                        </div>
                        <div>
                            <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                            <span className="mr-2 text-white">skills.length</span>
                            <span className="mr-2 text-amber-300">&gt;=</span>
                            <span className="text-orange-400">5</span>
                        </div>
                        <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
                        <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
                        <div><span className="text-gray-400">{`};`}</span></div>
                        </code>
                    </div>
                    </div>
                </div>

            </section>
            
            <Typography text={`_${t('ai')}`}  style={{fontSize:'1.75rem', width:'90%', margin:'2rem auto 0 auto', fontStyle:'italic', fontWeight:600}} className={`${theme.global.subHeading}`}/>

            <div className="parallax">
                <div className={inTrans ? `box`:`box super-box`} >
                    <img src={me2} alt="my image" loading='lazy' />
                    <span className={`bg-primary text-white`}>{t('a1')}</span>
                </div>
                <div className="box" onMouseEnter={() => setInTrans(true)} onMouseLeave={() => setInTrans(false)}>
                    <img src={me3} alt="my image" loading='lazy' />
                    <span className={`bg-primary text-white`}>{t('a2')}</span>
                </div>
                <div className="box" onMouseEnter={() => setInTrans(true)} onMouseLeave={() => setInTrans(false)}>
                    <img src={me4} alt="my image" loading='lazy' />
                    <span className={`bg-primary text-white`}>{t('a3')}</span>
                </div>
                <div className="box" onMouseEnter={() => setInTrans(true)} onMouseLeave={() => setInTrans(false)}>
                    <img src={me1} alt="my image" loading='lazy' />
                    <span className={`bg-primary text-white`}>{t('a4')}</span>
                </div>
                <div className="box" onMouseEnter={() => setInTrans(true)} onMouseLeave={() => setInTrans(false)}>
                    <img src={me5} alt="my image" loading='lazy' />
                    <span className={`bg-primary text-white`}>{t('a5')}</span>
                </div>
            </div>
            
            <div className="footer-heading">
                <Typography className="gradient__text" text={`_${t('newsMessage')}`} />
                <Link to='/contact'><Button text={t('contactMe')} bg={theme.tag ===  'light'? 'black':'white'} color={theme.colors.bg} fontWeight={600} icon={<EmailSharp sx={{color:theme.colors.bg}} />}/></Link>
                </div>
        </main>
    )
}

About.propTypes = themeProps;
export default About