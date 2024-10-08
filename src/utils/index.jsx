// import { FaGitAlt, FaNodeJs, FaSass } from "react-icons/fa6";
import { cara, flikart, flytravel, portfolio, proservice, recho, colorfol, cia, eCommerce, realEstate } from "../assets/projects";
// import { SiMongodb, SiMui, SiTailwindcss } from "react-icons/si";
// import { GitHub } from "@mui/icons-material";
// import { GrReactjs } from "react-icons/gr";
// import { TbBrandThreejs } from "react-icons/tb";

export const navlinks = (t) => [
    {
        'label': t('about'),
        'path': '/about'
    },
    {
        'label': t('contact'),
        'path': '/contact'
    },
    {
        'label': t('experience'),
        'path': '/experience'
    },
    {
        'label': t('projects'),
        'path': '/projects'
    },
    {
        'label': t('resume'),
        'path': '/resume'
    },
]

const services = [
    {
        title: "Web Developer",
    },
    {
        title: "Mobile Developer",
    },
    {
        title: "Desktop Developer",
    },
    {
        title: "Software Engineer",
    },
];

//   const technologies = [
//     {
//       name: "Python",
//       icon: python,
//     },
//     {
//       name: "HTML 5",
//       icon: html,
//     },
//     {
//       name: "CSS 3",
//       icon: css,
//     },
//     {
//       name: "JavaScript",
//       icon: javascript,
//     },
//     {
//       name: "React JS",
//       icon: reactjs,
//     },
//     {
//       name: "Redux Toolkit",
//       icon: redux,
//     },
//     {
//       name: "Docker",
//       icon: docker,
//     },
//     {
//       name: "Node JS",
//       icon: nodejs,
//     },
//     {
//       name: "MongoDB",
//       icon: mongodb,
//     },
//     {
//       name: "Three JS",
//       icon: threejs,
//     },
//     {
//       name: "git",
//       icon: git,
//     },
//     {
//        name: "Kotlin",
//        icon: kotlin,
//     },
//     {
//       name: "Java",
//       icon: java,
//     },
//     {
//       name: "Photoshop",
//       icon: photoshop,
//     },
//   ];

const experiences = [
    {
        id: 1,
        title: "Python Developer",
        company_name: "Personal, For individuals, Powerk-soft, Pro service",
        // icon: shopify,
        // iconBg: "#383E56",
        date: "Since - Sept 2021",
        points: [
            "Developing and maintaining, desktop (Tkinter) and backend web applications (FastAPI).",
            "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        id: 2,
        title: "Android Developer",
        company_name: "Personal, For an individual",
        // icon: shopify,
        // iconBg: "#383E56",
        date: "Since - July 2022",
        points: [
            "Developing android application using Kotlin and related technologies."
        ],
    },
    {
        id: 3,
        title: "JavaScript Developer",
        company_name: "CIA Formation, Powerk-soft, Pro service, Flikart +, For individuals",
        // icon: starbucks,
        // iconBg: "#383E56",
        date: "Since - Oct 2022",
        points: [
            "Developing and maintaining web applications using React.js/Next.js and other related technologies.",
            "Developing mobile cross-platform applications using React Native and other related technologies.",
            "Developing and maintaining desktop applications using Electron.js.",
            "Developing backend services and REST APIs using Node.js.",
            "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
            "In some projects teams with friends including designers and other developers to create high-quality products, one of those was presented at the 2022 Github Hackaton.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers."
        ],
    },
    {
        id: 4,
        title: "Software engineer",
        company_name: "Personal, Powerk-soft, Pro service, Leratel",
        // icon: shopify,
        // iconBg: "#383E56",
        date: "Since - Sept 2021",
        points: [
            "Managing software development life cycle in an Agile way using Trello and Github.",
            "Collaborating with cross-functional teams including designers, product manager, and other developers to create high-quality products.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Producing high quality documentation with Microsoft office and UML modeling softwares."
        ],
    },
];
// const react = <GrReactjs size='30' />
// const tailwind = <SiTailwindcss size='20' />
// const mui = <SiMui size='20' />
// const sass = <FaSass size='20' />
// const github = <GitHub size='20' />
// const git = <FaGitAlt size='20' />
// const threejs = <TbBrandThreejs size='20' />
// const node = <FaNodeJs size='20' />
// const mongo = <SiMongodb size='20' />

const projects = [
    {
        id: 1,
        name: 'My portfolio',
        description: "This is my portfolio website (this site). I used ReactJS, TailwindCSS, Material UI, ThreeJS, and other npm libraries for the UI. I utilised emailJS to bear mail messages. I deployed the site on CPanel with Github actions bearing the CI/CD pipeline.",
        tools: ['React', 'Tailwind CSS', 'Material UI', 'i18next', 'sass', 'emailJS', 'CPanel', 'Git', 'Github', 'Github actions'],
        role: 'React Developer',
        code: 'https://github.com/EssiJunior/my-portfolio.git',
        demo: 'https://essijunior.com',
        image: portfolio,
    },
    {
        id: 2,
        name: 'Flikart +',
        description: "I built the web site of a company that promotes african culture. I used ReactJS, TailwindCSS, Material UI, ThreeJS and other npm libraries for the UI. I utilized NodeJS, ExpressJS, Nodemailer, Swagger UI, Mongoose and related libraries to develop and document Rest APIs. The database was a NoSQL type, MongoDB. We used Mongoose to bear it.",
        tools: ['React', 'Tailwind CSS', 'Material UI', 'Threejs', 'node', 'ExpressJS', 'Swagger UI', 'MongoDB', 'CPanel', 'Git', 'Github'],
        role: 'Fullstack Developer',
        code: '',
        demo: 'https://flikart.org',
        image: flikart,
    },
    {
        id: 3,
        name: 'Colorfol artists',
        description: "I maintained and built new interfaces of Colorfol artists web app. I used ReactJS, TailwindCSS, Material UI and other npm libraries for the UI.",
        tools: ['React', 'Tailwind CSS', 'Material UI', 'Git', 'Gitlab'],
        role: 'React Developer',
        code: '',
        demo: 'https://www.artists.colorfol.com/',
        image: colorfol,
    },
    {
        id: 4,
        name: 'CARA',
        description: "I built the web site of a company that promotes services for African and Russian partneships. I used ReactJS, Tailwind CSS, Preline UI and other npm libraries for the UI. I utilized nodemailer to bear mail messages.",
        tools: ['React', 'Tailwind CSS', 'Preline UI', 'CPanel', 'Git', 'Github'],
        role: 'React Developer',
        code: '',
        demo: 'https://russiaafrica.org',
        image: cara,
    },
    {
        id: 5,
        name: 'CHP compta',
        description: "I built a medical items task management cross platform mobile application. I used React native, and other npm libraries for the UI. I utilized FastAPI and related libraries to develop the server. The database was a NoSQL type, MongoDB.",
        tools: ['React native', 'FastAPI', 'Redux', 'MongoDB', 'Git', 'Github'],
        role: 'React native Developer',
        code: '',
        demo: '',
        image: '',
    },
    {
        id: 8,
        name: 'Car components e-commerce',
        description: "I and my team built an car items e-commerce web application. We used ReactJS, TailwindCSS, Material UI, and other npm libraries for the UI. We utilized Django, Django-rest, Swagger UI, and related libraries to develop and document Rest APIs. The database was an SQL type, PostgreSQL.",
        tools: ['React', 'Tailwind CSS', 'Material UI', 'Django', 'Django-rest', 'Swagger UI', 'PostgreSQL', 'AWS Amplify', 'AWS Apprunner', 'Git', 'Github'],
        role: 'React Developer and software engineer',
        code: '',
        demo: '',
        image: eCommerce,
    },
    {
        id: 9,
        name: 'Fly Travel Agency',
        description: "I built the static website of a traveling agency company. I used ReactJS, TailwindCSS, Material UI, emailJS, saas, i18next and other npm libraries for the UI.",
        tools: ['React', 'Tailwind CSS', 'Material UI', 'sass', 'CPanel', 'Git', 'Github'],
        role: 'React Developer',
        code: '',
        demo: 'https://flytravel.agency',
        image: flytravel,
    },
    {
        id: 10,
        name: 'Real Estate',
        description: 'I developed a fullstack real estate web app. I used FastAPI, Python, Pymongo and related packages to develop the API. I utilized ReactJS, Redux toolkit, Material UI, Bootstrap and other npm libraries for the UI. The database was a NoSQL type, MongoDB. i used Pymongo to bear it.',
        tools: ['React', 'Material UI', 'Redux', 'FastAPI', 'MongoDB', 'Git', 'Github'],
        code: '',
        role: 'Fullstack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 11,
        name: 'Bus tickets',
        description: 'I developed a fullstack bus tickets reservation web and desktop app. I used FastAPI, Python, Pymongo and related packages to develop the web and desktop API. I utilized ReactJS, Redux toolkit, Material UI, Bootstrap and other npm libraries for the web UI, and ElectronJS to develop the desktop UI. The database was a NoSQL type, MongoDB. i used Pymongo to bear it.',
        tools: ['React', 'Material UI', 'Redux', 'FastAPI', 'MongoDB', 'ElectronJS', 'Git', 'Github'],
        code: '',
        role: 'Fullstack Developer',
        demo: '',
        image: '',
    },
    {
        id: 12,
        name: 'Recho',
        description: 'I and a friend developed a web app for Echographic consultations. We created the UI using ReactJS, Material UI, TailwindCSS, Preline and related npm libraries. We developed the rest APIs with Node.JS, express.JS, nodemailer and related npm libraries. The database was a NoSQL type, MongoDB. We used Mongoose to bear it.',
        tools: ['React', 'Tailwind CSS', 'Material UI', "Preline", 'node', "Express", 'MongoDB', 'Git', 'Github'],
        role: 'Fullstack Developer',
        code: '',
        demo: '',
        image: recho,
    },
    {
        id: 13,
        name: 'Pharma',
        description: "I developed the beta version of an android mobile app which manages, organizes and presents medical drugs to users. I used Kotlin programming language to develop the backend. I utilized Android XML, Material Design, and related packages to develop the android UI. The database was an SQL type, SQLite.",
        tools: ['Android', 'Kotlin', 'Material design', 'XML', "SQLite"],
        code: '',
        demo: '',
        image: '',
        role: 'Android Developer',
    }
];

const myImage = 'https://z-p3-scontent.fnsi1-2.fna.fbcdn.net/v/t39.30808-6/422269500_1743037766183745_2393162712879109188_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE8hoVEqHlImYi7FT0iVx45OT-p4lnyOOs5P6niWfI4659BJzi1gBbU_JCiV4ybHxSXZXM5JRoZTTp8LUxNqm7f&_nc_ohc=hyuVx3kqXY8AX8PNgdR&_nc_zt=23&_nc_ht=z-p3-scontent.fnsi1-2.fna&oh=00_AfCnaQc0K-0otOsUXUzNpjR1UcJPYKza6QbIlllvpLTcYQ&oe=660769FB'
// const baseURL = 'http://localhost:5173'
const baseURL = 'https://essijunior.com'

export { services, experiences, projects, myImage, baseURL };
