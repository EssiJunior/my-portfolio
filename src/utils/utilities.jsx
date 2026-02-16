import { GitHub, LinkedIn, X } from "@mui/icons-material"
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoElectron } from "react-icons/io5";
import { BiLogoJavascript } from "react-icons/bi";
import { SiMui, SiNextdotjs, SiPhp } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { FaAndroid, FaAws, FaDocker, FaFigma, FaGit, FaJava, FaMarkdown, FaNodeJs, FaPython, FaReact, FaSass } from "react-icons/fa6";
import { SiFastapi, SiJavascript, SiKotlin, SiMongodb, SiMysql, SiPostgresql, SiRedux, SiSwagger, SiTailwindcss } from "react-icons/si";

export function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}


export const defaultLottieOptions = (lottie) => {
    return {
        loop: true,
        autoplay: true,
        animationData: lottie,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
}

export const social = [
    {
        "name": "Github",
        "link": 'https://github.com/EssiJunior',
        "icon": <GitHub size={30} />
    },
    {
        "name": "LinkedIn",
        "link": 'https://www.linkedin.com/in/essijunior/',
        "icon": <LinkedIn size={30} />
    },
    {
        "name": "X (Formally Twitter)",
        "link": 'https://twitter.com/EssiJunior7',
        "icon": <X size={30} />
    },
]

export const tech = [
    {
        'label': 'Python',
        'icon': <FaPython size='20' />
    },
    {
        'label': 'JavaScript',
        'icon': <BiLogoJavascript size='20' />
    },
    {
        'label': 'FastAPI',
        'icon': <SiFastapi size='20' />
    },
    {
        'label': 'Next.js',
        'icon': <SiNextdotjs size='20' />
    },
    {
        'label': 'React.js',
        'icon': <FaReact size='20' />
    },
    {
        'label': 'React Native',
        'icon': <RiReactjsLine size='20' />
    },
    {
        'label': 'PHP',
        'icon': <SiPhp size='20' />
    }
]

export const skills = [
    {
        id: 3,
        icon: <SiJavascript size={40} />,
        tag: 'Javascript',
    },
    {
        id: 4,
        icon: <FaReact size={40} />,
        tag: 'React',
    },
    {
        id: 5,
        icon: <SiTailwindcss size={40} />,
        tag: 'Tailwind',
    },
    {
        id: 6,
        icon: <SiMongodb size={40} />,
        tag: 'MongoDB',
    },
    {
        id: 7,
        icon: <SiMysql size={40} />,
        tag: 'MySQL',
    },
    {
        id: 8,
        icon: <SiPostgresql size={40} />,
        tag: 'PostgreSQL',
    },
    {
        id: 9,
        icon: <FaGit size={40} />,
        tag: 'Git',
    },
    {
        id: 10,
        icon: <FaAws size={40} />,
        tag: 'AWS',
    },
    {
        id: 12,
        icon: <FaDocker size={40} />,
        tag: 'Docker',
    },
    {
        id: 13,
        icon: <FaFigma size={40} />,
        tag: 'Figma',
    },
    {
        id: 14,
        icon: <SiMui size={40} />,
        tag: 'MaterialUI',
    },
    {
        id: 15,
        icon: <FaNodeJs size={40} />,
        tag: 'NodeJS',
    },
    {
        id: 16,
        icon: <FaPython size={40} />,
        tag: 'Python',
    },
    {
        id: 17,
        icon: <SiFastapi size={40} />,
        tag: 'FastAPI',
    },
    {
        id: 18,
        icon: <FaMarkdown size={40} />,
        tag: 'Markdown',
    },
    {
        id: 21,
        icon: <FaJava size={40} />,
        tag: 'Java',
    },
    {
        id: 22,
        icon: <SiKotlin size={40} />,
        tag: 'Kotlin',
    },
    {
        id: 24,
        icon: <RiReactjsLine size={40} />,
        tag: 'ReactNative',
    },
    {
        id: 25,
        icon: <IoLogoElectron size={40} />,
        tag: 'ElectronJS',
    },
    {
        id: 26,
        icon: <FaAndroid size={40} />,
        tag: 'Android',
    },
    {
        id: 27,
        icon: <FaSass size={40} />,
        tag: 'Scss',
    },
    {
        id: 28,
        icon: <SiRedux size={40} />,
        tag: 'Redux',
    },
    {
        id: 29,
        icon: <TbBrandThreejs size={40} />,
        tag: 'ThreeJS',
    },
    {
        id: 30,
        icon: <SiNextdotjs size={40} />,
        tag: 'NextJS',
    },
    {
        id: 31,
        icon: <SiSwagger size={40} />,
        tag: 'Swagger',
    },
    {
        id: 32,
        icon: <SiPhp size={40} />,
        tag: 'PHP',
    }
]
