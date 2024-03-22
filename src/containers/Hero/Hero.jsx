import React from 'react'

import './hero.scss'
import Typography from '../../components/Typography/Typography'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import { DownloadSharp, EmailSharp, Facebook, GitHub, LinkedIn, Twitter } from '@mui/icons-material'

import resume from "../../assets/data/ESSI Junior - Resume.pdf"

const Hero = ({theme}) => {
    return (
        <section className={`hero ${theme.hero.gradient}`}>       
            <div className="container-hero">
                <div className="brand" style={{color:theme.colors.text}}>
                    <Typography text='Hi, i am' style={{fontSize:'1.25rem'}} />
                    <Typography text=' Essi Junior' style={{fontSize:'2.75rem', fontWeight:'700'}}/>
                    <Typography text='I am a Fullstack software developer and a software engineer.' style={{marginBottom:'3rem'}} />
                    
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
                        <Link to='products'><Button text='Contact me' bg={theme.tag ===  'light'? 'black':''} icon={<EmailSharp />}/></Link>
                        <a href={resume} target='_blank'><Button text='Download resume' bg={theme.tag ===  'light'? 'black':''} icon={<DownloadSharp />}/></a>

                    </div>
                </div>
                <div className="actions"/>
            </div>
        </section>
        
        // <section className="hero relative flex flex-col items-center justify-between py-4 lg:py-12">       
            
        //     <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        //         <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
        //         <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[1.6rem] lg:leading-[2.5rem]">
        //             Hello, <br />
        //             I am {' '}
        //             <span className=" text-pink-500">Essi Junior</span>
        //             {` , I'm a `}
        //             <span className=" text-[#16f2b3]">FullStack developer and software engineer.</span>
        //             .
        //         </h1>

        //         <div className="my-12 flex items-center gap-5">
        //             <Link
        //             href='AA'
        //             target='_blank'
        //             className={`transition-all text-[${theme.colors.text}] hover:scale-125 duration-300`}
        //             >
        //             <GitHub size={30} />
        //             </Link>
        //             <Link
        //             href='AA'
        //             target='_blank'
        //             className={`transition-all text-[${theme.colors.text}] hover:scale-125 duration-300`}
        //             >
        //             <LinkedIn size={30} />
        //             </Link>
        //             <Link
        //             href='AA'
        //             target='_blank'
        //             className={`transition-all text-[${theme.colors.text}] hover:scale-125 duration-300`}
        //             >
        //             <Facebook size={30} />
        //             </Link>
        //             <Link
        //             href='AA'
        //             target='_blank'
        //             className={`transition-all text-[${theme.colors.text}] hover:scale-125 duration-300`}
        //             >
        //             <LinkedIn size={30} />
        //             </Link>
        //             <Link
        //             href='AA'
        //             target='_blank'
        //             className={`transition-all text-[${theme.colors.text}] hover:scale-125 duration-300`}
        //             >
        //             <Twitter size={30} />
        //             </Link>
        //         </div>

        //         <div className="flex items-center gap-3">
        //             <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
        //             <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
        //                 <span>Contact me</span>
        //                 <Email size={16} />
        //             </button>
        //             </Link>

        //             <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href='AA'
        //             >
        //             <span>Get Resume</span>
        //             <Download size={16} />
        //             </Link>
        //         </div>

        //         </div>

        //         <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative  border bg-gradient-to-r to-[#0a0d37]">
        //         <div className="flex flex-row">
        //             <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        //             <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        //         </div>
        //         <div className="px-4 lg:px-8 py-5">
        //             <div className="flex flex-row space-x-2">
        //             <div className="h-3 w-3 rounded-full bg-red"></div>
        //             <div className="h-3 w-3 rounded-full bg-orange-400"></div>
        //             <div className="h-3 w-3 rounded-full bg-green"></div>
        //             </div>
        //         </div>
        //         <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        //             <code className="font-mono text-xs md:text-sm lg:text-base">
        //             <div className="blink">
        //                 <span className="mr-2 text-pink-500">const</span>
        //                 <span className="mr-2 text-white">me</span>
        //                 <span className="mr-2 text-pink-500">=</span>
        //                 <span className="text-gray-400">{'{'}</span>
        //             </div>
        //             <div>
        //                 <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
        //                 <span className="text-gray-400">{`'`}</span>
        //                 <span className="text-amber-300">NDANG ESSI Pierre Junior</span>
        //                 <span className="text-gray-400">{`',`}</span>
        //             </div>
        //             <div className="ml-4 lg:ml-8 mr-2">
        //                 <span className=" text-white">skills:</span>
        //                 <span className="text-gray-400">{`['`}</span>
        //                 <span className="text-amber-300">React</span>
        //                 <span className="text-gray-400">{"', '"}</span>
        //                 <span className="text-amber-300">NextJS</span>
        //                 <span className="text-gray-400">{"', '"}</span>
        //                 <span className="text-amber-300">Redux</span>
        //                 <span className="text-gray-400">{"', '"}</span>
        //                 <span className="text-amber-300">Express</span>
        //                 <span className="text-gray-400">{"', '"}</span>
        //                 <span className="text-amber-300">NestJS</span>
        //                 <span className="text-gray-400">{"', '"}</span>
        //                 <span className="text-amber-300">MySql</span>
        //                 <span className="text-gray-400">{"', '"}</span>
        //                 <span className="text-amber-300">MongoDB</span>
        //                 <span className="text-gray-400">{"', '"}</span>
        //                 <span className="text-amber-300">Docker</span>
        //                 <span className="text-gray-400">{"', '"}</span>
        //                 <span className="text-amber-300">AWS</span>
        //                 <span className="text-gray-400">{"'],"}</span>
        //             </div>
        //             <div>
        //                 <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
        //                 <span className="text-orange-400">true</span>
        //                 <span className="text-gray-400">,</span>
        //             </div>
        //             <div>
        //                 <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
        //                 <span className="text-orange-400">true</span>
        //                 <span className="text-gray-400">,</span>
        //             </div>
        //             <div>
        //                 <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
        //                 <span className="text-orange-400">true</span>
        //                 <span className="text-gray-400">,</span>
        //             </div>
        //             <div>
        //                 <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
        //                 <span className="text-orange-400">function</span>
        //                 <span className="text-gray-400">{'() {'}</span>
        //             </div>
        //             <div>
        //                 <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
        //                 <span className="text-gray-400">{`(`}</span>
        //             </div>
        //             <div>
        //                 <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
        //                 <span className="mr-2 text-white">hardWorker</span>
        //                 <span className="text-amber-300">&amp;&amp;</span>
        //             </div>
        //             <div>
        //                 <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
        //                 <span className="mr-2 text-white">problemSolver</span>
        //                 <span className="text-amber-300">&amp;&amp;</span>
        //             </div>
        //             <div>
        //                 <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
        //                 <span className="mr-2 text-white">skills.length</span>
        //                 <span className="mr-2 text-amber-300">&gt;=</span>
        //                 <span className="text-orange-400">5</span>
        //             </div>
        //             <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
        //             <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
        //             <div><span className="text-gray-400">{`};`}</span></div>
        //             </code>
        //         </div>
        //         </div>
        //     </div>
            
        // </section>
    )
}

export default Hero