import { Facebook, GitHub, LinkedIn, X } from "@mui/icons-material"
import { FaAndroid, FaNodeJs, FaPython, FaReact } from "react-icons/fa6";
import { SiFastapi, } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoElectron } from "react-icons/io5";
import { BiLogoJavascript } from "react-icons/bi";

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
        "Name": "Github",
        "link": 'https://github.com/EssiJunior',
        "icon": <GitHub size={30} />
    },
    {
        "Name": "LinkedIn",
        "link": 'https://www.linkedin.com/in/pierre-junior-ndang-essi-86290b254/',
        "icon": <LinkedIn size={30} />
    },
    {
        "Name": "Facebook",
        "link": 'https://web.facebook.com/torres.essi',
        "icon": <Facebook size={30} />
    },
    {
        "Name": "X (Formally Twitter)",
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
        'label': 'React',
        'icon': <FaReact size='20' />
    },
    {
        'label': 'React Native',
        'icon': <RiReactjsLine size='20' />
    },
    {
        'label': 'Electron',
        'icon': <IoLogoElectron size='20' />
    },
    {
        'label': 'NodeJS',
        'icon': <FaNodeJs size='20' />
    },
    {
        'label': 'Android',
        'icon': <FaAndroid size='20' />
    },
]
