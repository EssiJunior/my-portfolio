// @flow strict

import Marquee from "react-fast-marquee";
import { FaAndroid, FaAws, FaBootstrap, FaCss3, FaDocker, FaFigma, FaGit, FaHtml5, FaJava, FaMarkdown, FaNodeJs, FaPython, FaReact, FaSass } from "react-icons/fa6";
import { SiCanva, SiFastapi, SiJavascript, SiKotlin, SiMaterialdesign, SiMicrosoftoffice, SiMongodb, SiMysql, SiPostgresql, SiRedux, SiSwagger, SiTailwindcss } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoElectron } from "react-icons/io5";
import { SiMui } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

const skillsData = [
    {
        id: 1,
        icon: <FaHtml5 size={40}/>,
        tag: 'HTML',
    },
    {
        id: 2,
        icon: <FaCss3 size={40}/>,
        tag: 'CSS',
    },
    {
        id: 3,
        icon: <SiJavascript size={40}/>,
        tag: 'Javascript',
    },
    {
        id: 4,
        icon: <FaReact size={40}/>,
        tag: 'React',
    },
    {
        id: 5,
        icon: <SiTailwindcss size={40}/>,
        tag: 'Tailwind',
    },
    {
        id: 6,
        icon: <SiMongodb size={40}/>,
        tag: 'MongoDB',
    },
    {
        id: 7,
        icon: <SiMysql size={40}/>,
        tag: 'MySQL',
    },
    {   
        id: 8,
        icon: <SiPostgresql size={40}/>,
        tag: 'PostgreSQL',
    },
    {
        id: 9,
        icon: <FaGit size={40}/>,
        tag: 'Git',
    },
    {
        id: 10,
        icon: <FaAws size={40}/>,
        tag: 'AWS',
    },
    {
        id: 11,
        icon: <FaBootstrap size={40}/>,
        tag: 'Bootstrap',
    },
    {
        id: 12,
        icon: <FaDocker size={40}/>,
        tag: 'Docker',
    },
    {   
        id: 13,
        icon: <FaFigma size={40}/>,
        tag: 'Figma',
    },
    {
        id: 14,
        icon: <SiMui size={40}/>,
        tag: 'MaterialUI',
    },
    {   
        id: 15,
        icon: <FaNodeJs size={40}/>,
        tag: 'NodeJS',
    },
    {
        id: 16,
        icon: <FaPython size={40}/>,
        tag: 'Python',
    },
    {
        id: 17,
        icon: <SiFastapi size={40}/>,
        tag: 'FastAPI',
    },
    {
        id: 18,
        icon: <FaMarkdown size={40}/>,
        tag: 'Markdown',
    },
    {
        id: 19,
        icon: <SiMicrosoftoffice size={40}/>,
        tag: 'M. Office',
    },
    {
        id: 20,
        icon: <FaBootstrap size={40}/>,
        tag: 'Bootstrap',
    },
    {
        id: 21,
        icon: <FaJava size={40}/>,
        tag: 'Java',
    },
    {
        id: 22,
        icon: <SiKotlin size={40}/>,
        tag: 'Kotlin',
    },
    {
        id: 23,
        icon: <SiCanva size={40}/>,
        tag: 'Canva',
    },
    {
        id: 24,
        icon: <RiReactjsLine  size={40}/>,
        tag: 'React-Native',
    },
    {
        id: 25,
        icon: <IoLogoElectron size={40}/>,
        tag: 'ElectronJS',
    },
    {   
        id: 26,
        icon: <FaAndroid size={40}/>,
        tag: 'Android',
    },
    {
        id: 27,
        icon: <FaSass size={40}/>,
        tag: 'Scss',
    },
    {
        id: 28,
        icon: <SiRedux  size={40}/>,
        tag: 'Redux',
    },
    {
        id: 29,
        icon: <TbBrandThreejs  size={40}/>,
        tag: 'ThreeJS',
    },
    {
        id: 30,
        icon: <SiSwagger size={40}/>,
        tag: 'Swagger',
    }
]

function Skills({theme, skillsRef}) {

    return (
        <div id="skills" className={`skills relative z-50`} ref={skillsRef}>
        <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

        <div className="flex justify-center -translate-y-[1px]">
            <div className="w-3/4">
            <div className={`h-[1px] bg-gradient-to-r from-transparent ${theme.skills.divider} to-transparent  w-full`} />
            </div>
        </div>

        <div className="flex justify-center lg:py-8">
                <div className="flex  items-center">
                <span className={`w-24 h-[2px] ${theme.global.headingBox}`}></span>
                <span className={`${theme.global.headingBox} w-fit text-white p-2 px-5 my-10 text-xl rounded-md`}>
                    Skills
                </span>
                <span className={`w-24 h-[2px] ${theme.global.headingBox}`}></span>
                </div>
            </div>

        <div className="w-full my-12">
            <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
            >
                {skillsData.map(skill => (
                    <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                    key={skill.id}>
                    <div className={`h-full w-full rounded-lg border border-[#1f223c] ${theme.global.headingBox} shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500`}>
                        <div className="flex -translate-y-[1px] justify-center">
                        <div className="w-3/4">
                            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                        </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-3 p-6">
                        <div className="h-8 sm:h-10">
                            {skill.icon}
                        </div>
                        <p className="text-white text-sm sm:text-lg">
                            {skill.tag}
                        </p>
                        </div>
                    </div>
                    </div>
                ))}
            </Marquee>
        </div>
        </div>
    );
}

export default Skills;