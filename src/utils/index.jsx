import {
  cara,
  flikart,
  flytravel,
  portfolio,
  // recho,
  colorfol,
  // eCommerce,
  // realEstate,
  scoreify,
  vasesDhonneur,
  threeR,
  syneduc,
  studentResultSystem,
  evShine,
  ednShine,
  cravies,
  gpt3
} from "../assets/projects";
import { FaPython, FaPersonChalkboard,  FaNode, FaPhp, FaReact } from "react-icons/fa6";
import { SiJavascript, SiNextdotjs, SiReact, SiGit, SiGithub, SiSwagger, SiThreedotjs, SiTailwindcss, SiReacthookform, SiFramer, SiExpress, SiFastapi, SiDjango, SiLaravel, SiMongodb, SiMysql, SiMongoose, SiRedux, SiI18Next, SiGitlab, SiVercel, SiCpanel, SiGithubactions, SiOvh, SiFilezilla, SiSass, SiElectron } from "react-icons/si";
import { MdEngineering } from "react-icons/md";

// Tech tools with icons and labels
const toolsLibrary = {
  react: {
    icon: <SiReact size={30}/>, 
    label: "React"
  },
  next: {
    icon: <SiNextdotjs size={30}/>, 
    label: "Next.js"
  },
  tailwind: {
    icon: <SiTailwindcss size={30}/>,
    label: "Tailwind CSS"
  },
  framer: {
    icon: <SiFramer size={30}/>,
    label: "Framer Motion"
  },
  gsap: {
    icon: null,
    label: "GSAP"
  },
  aceternity: {
    icon: null,
    label: "Aceternity UI"
  },
  preline: {
    icon: null,
    label: "Preline UI"
  },
  javascript: {
    icon: <SiJavascript size={30}/>,
    label: "JavaScript"
  },
  python: {
    icon: <FaPython size={30}/>,
    label: "Python"
  },
  nodejs: {
    icon: <FaNode size={30}/>,
    label: "Node.js"
  },
  express: {
    icon: <SiExpress size={30}/>,
    label: "Express.js"
  },
  fastapi: {
    icon: <SiFastapi size={30}/>,
    label: "FastAPI"
  },
  django: {
    icon: <SiDjango size={30}/>,
    label: "Django"
  },
  php: {
    icon: <FaPhp size={30}/>,
    label: "PHP"
  },
  laravel: {
    icon: <SiLaravel size={30}/>,
    label: "Laravel"
  },
  mongodb: {
    icon: <SiMongodb size={30}/>,
    label: "MongoDB"
  },
  mysql: {
    icon: <SiMysql size={30}/>,
    label: "MySQL"
  },
  mongoose: {
    icon: <SiMongoose size={30}/>,
    label: "Mongoose"
  },
  threejs: {
    icon: <SiThreedotjs size={30}/>,
    label: "Three.js"
  },
  electron: {
    icon: <SiElectron size={30}/>,
    label: "Electron.js"
  },
  reactNative: {
    icon: <FaReact size={30}/>,
    label: "React Native"
  },
  redux: {
    icon: <SiRedux size={30}/>,
    label: "Redux"
  },
  reactHookForm: {
    icon: <SiReacthookform size={30}/>,
    label: "React Hook Form"
  },
  i18next: {
    icon: <SiI18Next size={30}/>,
    label: "i18next"
  },
  emailjs: {
    icon: null,
    label: "EmailJS"
  },
  nodemailer: {
    icon: <FaNode size={30}/>,
    label: "Nodemailer"
  },
  swagger: {
    icon: <SiSwagger size={30}/>,
    label: "Swagger UI"
  },
  git: {
    icon: <SiGit size={30}/>,
    label: "Git"
  },
  github: {
    icon: <SiGithub size={30}/>,
    label: "GitHub"
  },
  gitlab: {
    icon: <SiGitlab size={30}/>,
    label: "GitLab"
  },
  vercel: {
    icon: <SiVercel size={30}/>,
    label: "Vercel"
  },
  cpanel: {
    icon: <SiCpanel size={30}/>,
    label: "cPanel"
  },
  githubActions: {
    icon: <SiGithubactions size={30}/>,
    label: "GitHub Actions"
  },
  ovhCloud: {
    icon: <SiOvh size={30}/>,
    label: "OVH Cloud"
  },
  filezilla: {
    icon: <SiFilezilla size={30}/>,
    label: "FileZilla"
  },
  sass: {
    icon: <SiSass size={30}/>,
    label: "SASS"
  }
};

export const navlinks = (t) => [
  {
    label: t("about"),
    path: "/about",
  },
  {
    label: t("contact"),
    path: "/contact",
  },
  {
    label: t("experience"),
    path: "/experience",
  },
  {
    label: t("projects"),
    path: "/projects",
  },
  {
    label: t("resume"),
    path: "/resume",
  },
];

const services = [
  {
    title: "IT instructor",
  },
  {
    title: "Software Developer",
  },
  {
    title: "Software Engineer",
  },
];

const experiences_tech = (t) => [
  // {
  //   id: 1,
  //   title: t("gDes"),
  //   company: "Personal, Benevolent",
  //   icon: <DesignServicesOutlined size={30} />,
  //   date: `${t("since")} - Mar 2025`,
  // },
  {
    id: 2,
    title: t("itIns"),
    company: "CIA Formation",
    icon: <FaPersonChalkboard size={30} />,
    date: `${t("since")} - Aug 2024`,
  },
  {
    id: 3,
    title: t("se"),
    company: `${t("p")}, Powerk-soft, Pro service, Leratel`,
    icon: <MdEngineering size={30} />,
    date: `${t("since")} - Sept 2022`,
  },
  {
    id: 4,
    title: t("js"),
    company: `PS Holdings, CIA Formation, Powerk-soft, Pro service, Flikart +, ${t("i")}`,
    icon: <SiJavascript size={30} />,
    date: `${t("since")} - Sept 2022`,
  },
  {
    id: 5,
    title: t("py"),
    company: `${t("p")}, ${t("i")}, Powerk-soft, Pro service`,
    icon: <FaPython size={30} />,
    date: `${t("since")} - Sept 2020`,
  },
];

const experiences = (t) => [
  // {
  //   id: 1,
  //   title: t("gDes"),
  //   company_name: "Personal, Benevolent",
  //   date: `${t("since")} - Mar 2025`,
  //   points: [
  //     t("exp.graphic_designer.point1"),
  //     t("exp.graphic_designer.point2"),
  //   ],
  // },
  {
    id: 2,
    title: t("itIns"),
    company_name: "CIA Formation",
    date: `${t("since")} - Aug 2024`,
    points: [
      t("exp.it_instructor.point1"),
      t("exp.it_instructor.point2"),
      t("exp.it_instructor.point3"),
      t("exp.it_instructor.point4"),
      t("exp.it_instructor.point5"),
      t("exp.it_instructor.point6"),
    ],
  },
  {
    id: 3,
    title: t("js"),
    company_name: `CIA Formation, Powerk-soft, Pro service, Flikart +, ${t(
      "i"
    )}`,
    date: `${t("since")} - Oct 2022`,
    points: [
      t("exp.js_developer.point1"),
      t("exp.js_developer.point2"),
      t("exp.js_developer.point3"),
      t("exp.js_developer.point4"),
      t("exp.js_developer.point5"),
      t("exp.js_developer.point6"),
      t("exp.js_developer.point7"),
      t("exp.js_developer.point8"),
    ],
  },
  {
    id: 4,
    title: t("py"),
    company_name: `${t("p")}, ${t("i")}, Powerk-soft, Pro service`,
    date: `${t("since")} - Sept 2021`,
    points: [
      t("exp.python_developer.point1"),
      t("exp.python_developer.point2"),
      t("exp.python_developer.point3"),
    ],
  },
  {
    id: 5,
    title: t("se"),
    company_name: `${t("p")}, Powerk-soft, Pro service, Leratel`,
    date: `${t("since")} - Sept 2021`,
    points: [
      t("exp.software_engineer.point1"),
      t("exp.software_engineer.point2"),
      t("exp.software_engineer.point3"),
      t("exp.software_engineer.point4"),
    ],
  },
];


// Tech icons

// const react = {
//   icon: <SiReact size={30}/>, 
//   label: "ReactJS"
// }
// const next = {
//   icon: <SiNextdotjs size={30}/>, 
//   label: "FrontEnd"
// }


const projects = [
  {
    id: 1,
    name: "My portfolio",
    description:
      "This is my portfolio website (this site). I used ReactJS, TailwindCSS, Framer motion, ThreeJS, and other npm libraries for the UI. I utilised emailJS to bear mail messages. I deployed the site on CPanel with Github actions bearing the CI/CD pipeline.",
    tools: [
      toolsLibrary.react,
      toolsLibrary.tailwind,
      toolsLibrary.framer,
      toolsLibrary.i18next,
      toolsLibrary.emailjs,
      toolsLibrary.cpanel,
      toolsLibrary.git,
      toolsLibrary.github,
      toolsLibrary.githubActions,
    ],
    role: "FrontEnd Developer",
    code: "https://github.com/EssiJunior/my-portfolio.git",
    demo: "https://essijunior.com",
    image: portfolio,
  },
  {
    id: 2,
    name: "Scoreify",
    description:
      "I build the web app that manages exams results. I use ReactJS, TailwindCSS, Framer Motion, React Hook Form, and other npm libraries for the UI. I use FastAPI, Python, and other libraries to develop and document Rest APIs. The database is a NoSQL type, MongoDB. I use pymongo to bear it. I deployed the site on CPanel with Github actions bearing the CI/CD pipeline.",
    tools: [
      toolsLibrary.react,
      toolsLibrary.tailwind,
      toolsLibrary.framer,
      toolsLibrary.reactHookForm,
      toolsLibrary.fastapi,
      toolsLibrary.python,
      toolsLibrary.swagger,
      toolsLibrary.mongodb,
      toolsLibrary.cpanel,
      toolsLibrary.git,
      toolsLibrary.github,
      toolsLibrary.githubActions,
    ],
    role: "Fullstack Developer",
    code: "",
    demo: "https://scoreify.essijunior.com/",
    image: scoreify,
  },
  {
    id: 3,
    name: "Reduce-Reuse-Recycle",
    description:
      "I and my team built the web site for the 2024 Mountain Hub Hackathon. We used FrontEnd, TailwindCSS, Aceternity UI, and other npm libraries for the UI. Django, Django-rest, Swagger UI, and related libraries to develop and document Rest APIs. The database was an NoSQL type, MongoDB. I intervened in the development of the frontend. ",
    tools: [
      toolsLibrary.next,
      toolsLibrary.react,
      toolsLibrary.tailwind,
      toolsLibrary.aceternity,
      toolsLibrary.vercel,
      toolsLibrary.git,
      toolsLibrary.github
    ],
    role: "FrontEnd Developer",
    code: "",
    demo: "https://3r-platform.vercel.app/",
    image: threeR,
  },
];

const realisations = [
  {
    id: "edn-shine",
    name: "Editions Shine Ministries",
    description:
      "I built the web site of a house of editions. I used FrontEnd, TailwindCSS, Aceternity UI, and other npm libraries for the UI. FastAPI for the site's server (as it's a dynamic website). I deployed the site on OVH Cloud, using FileZilla.",
    tools: [
      toolsLibrary.next,
      toolsLibrary.tailwind,
      toolsLibrary.aceternity,
      toolsLibrary.fastapi,
      toolsLibrary.ovhCloud,
      toolsLibrary.git,
      toolsLibrary.github
    ],
    role: "Fullstack Developer",
    code: "",
    demo: "https://éditions-shine-ministries.com/",
    image: ednShine,
  },
  {
    id: "ev-shine",
    name: "Evangéliste Shine Ministries",
    description:
      "I built the web site of a Christian evangelist. I used FrontEnd, TailwindCSS, Aceternity UI, and other npm libraries for the UI. I used FrontEnd, TailwindCSS, Aceternity UI, and other npm libraries for the UI. FastAPI for the site's server (as it's a dynamic website). I deployed the site on OVH Cloud, using FileZilla.",
    tools: [
      toolsLibrary.next,
      toolsLibrary.tailwind,
      toolsLibrary.aceternity,
      toolsLibrary.fastapi,
      toolsLibrary.ovhCloud,
      toolsLibrary.git,
      toolsLibrary.github
    ],
    role: "Fullstack Developer",
    code: "",
    demo: "https://evangeliste-shine-ministries.com/",
    image: evShine,
  },
  {
    id: "vases-d-honneurs",
    name: "Assemblee des Vases d'honneur",
    description:
      "I built the web site of a Christian association. I used FrontEnd, TailwindCSS, Aceternity UI, and other npm libraries for the UI. I deployed the site on CPanel with Github actions bearing the CI/CD pipeline.",
    tools: [
      toolsLibrary.next,
      toolsLibrary.tailwind,
      toolsLibrary.aceternity,
      toolsLibrary.cpanel,
      toolsLibrary.git,
      toolsLibrary.github,
      toolsLibrary.githubActions,
    ],
    role: "FrontEnd Developer",
    code: "",
    demo: "https://ass-vasesdhonneur.com/",
    image: vasesDhonneur,
  },
  {
    id: "cara",
    name: "CARA",
    description:
      "I built the web site of a company that promotes services for African and Russian partneships. I used ReactJS, Tailwind CSS, Preline UI and other npm libraries for the UI. I utilized nodemailer to bear mail messages.",
    tools: [toolsLibrary.react, toolsLibrary.tailwind, toolsLibrary.preline, toolsLibrary.cpanel, toolsLibrary.git, toolsLibrary.github],
    role: "FrontEnd Developer",
    code: "",
    demo: "https://russiaafrica.org",
    image: cara,
  },
  {
    id: "fly-travel",
    name: "Fly Travel Agency",
    description:
      "I built the static website of a traveling agency company. I used ReactJS, TailwindCSS, Material UI, emailJS, saas, i18next and other npm libraries for the UI.",
    tools: [
      toolsLibrary.react,
      toolsLibrary.tailwind,
      toolsLibrary.sass,
      toolsLibrary.cpanel,
      toolsLibrary.git,
      toolsLibrary.github,
    ],
    role: "FrontEnd Developer",
    code: "",
    demo: "https://flytravel.agency",
    image: flytravel,
  },
  {
    id: "colorfol-artists",
    name: "Colorfol artists",
    description:
      "I maintained and built new interfaces of Colorfol artists web app. I used ReactJS, TailwindCSS, Material UI and other npm libraries for the UI.",
    tools: [
      toolsLibrary.react, 
      toolsLibrary.tailwind, 
      toolsLibrary.git, 
      toolsLibrary.gitlab
    ],
    role: "FrontEnd Developer",
    code: "",
    demo: "https://www.artists.colorfol.com/",
    image: colorfol,
  },
  {
    id: "srms",
    name: "Student Result System",
    description:
      "I and my team worked on the development of a desktop app that manages exams results for a school in the South region of Cameroon. We used ElectronJS for the UI, NodeJS, ExpressJS, and other npm libraries for the backend, MySQL for the database, Git for version control, and Github for the hosting of the code.",
    tools: [
      toolsLibrary.electron, 
      toolsLibrary.nodejs, 
      toolsLibrary.express, 
      toolsLibrary.mysql, 
      toolsLibrary.git, 
      toolsLibrary.github
    ],
    role: "Desktop Frontend Developer",
    code: "",
    demo: "",
    image: studentResultSystem,
  },
  {
    id: "syneduc",
    name: "Syneduc",
    description:
      "I worked in the development of an e-learning platform for a company. We used Laravel. I improved my PHP level and my knowledge of the Laravel framework.",
    tools: [
      toolsLibrary.laravel, 
      toolsLibrary.php, 
      toolsLibrary.mysql, 
      toolsLibrary.git, 
      toolsLibrary.gitlab
    ],
    role: "FrontEnd Developer",
    code: "",
    demo: "https://syneduc.com/",
    image: syneduc,
  },
  {
    id: "flikart",
    name: "Flikart +",
    description:
      "I built the web site of a company that promotes african culture. I used ReactJS, TailwindCSS, Material UI, ThreeJS and other npm libraries for the UI. I utilized NodeJS, ExpressJS, Nodemailer, Swagger UI, Mongoose and related libraries to develop and document Rest APIs. The database was a NoSQL type, MongoDB. We used Mongoose to bear it. I deployed the site on CPanel with Github actions bearing the CI/CD pipeline.",
    tools: [
      toolsLibrary.react,
      toolsLibrary.tailwind,
      toolsLibrary.threejs,
      toolsLibrary.nodejs,
      toolsLibrary.express,
      toolsLibrary.swagger,
      toolsLibrary.mongodb,
      toolsLibrary.cpanel,
      toolsLibrary.git,
      toolsLibrary.github,
      toolsLibrary.githubActions,
    ],
    role: "FullStack Developer",
    code: "",
    demo: "https://flikart.org",
    image: flikart,
  },
  {
    id: "chp-compta",
    name: "CHP compta",
    description:
      "I built a medical items task management cross platform mobile application. I used React native, and other npm libraries for the UI. I utilized FastAPI and related libraries to develop the server. The database was a NoSQL type, MongoDB.",
    tools: [toolsLibrary.reactNative, toolsLibrary.fastapi, toolsLibrary.redux, toolsLibrary.mongodb, toolsLibrary.git, toolsLibrary.github],
    role: "FullStack Mobile Developer",
    code: "",
    demo: "",
    image: "",
  },
  // {
  //   id: "e-c",
  //   name: "Car components e-commerce",
  //   description:
  //     "I and my team built an car items e-commerce web application. We used ReactJS, TailwindCSS, Material UI, and other npm libraries for the UI. We utilized Django, Django-rest, Swagger UI, and related libraries to develop and document Rest APIs. The database was an SQL type, PostgreSQL.",
  //   tools: [
  //     toolsLibrary.react,
  //     "Tailwind CSS",
  //     "Material UI",
  //     "Django",
  //     "Django-rest",
  //     "Swagger UI",
  //     "PostgreSQL",
  //     "AWS Amplify",
  //     "AWS Apprunner",
  //     "Git",
  //     "Github",
  //   ],
  //   role: "FrontEnd Developer and software engineer",
  //   code: "",
  //   demo: "",
  //   image: eCommerce,
  // },
  // {
  //   id: "r-e",
  //   name: "Real Estate",
  //   description:
  //     "I developed a fullstack real estate web app. I used FastAPI, Python, Pymongo and related packages to develop the API. I utilized ReactJS, Redux toolkit, Material UI, Bootstrap and other npm libraries for the UI. The database was a NoSQL type, MongoDB. i used Pymongo to bear it.",
  //   tools: [
  //     toolsLibrary.react,
  //     "Material UI",
  //     "Redux",
  //     "FastAPI",
  //     "MongoDB",
  //     "Git",
  //     "Github",
  //   ],
  //   code: "",
  //   role: "Fullstack Developer",
  //   demo: "",
  //   image: realEstate,
  // },
  // {
  //   id: "b-t",
  //   name: "Bus tickets",
  //   description:
  //     "I developed a fullstack bus tickets reservation web and desktop app. I used FastAPI, Python, Pymongo and related packages to develop the web and desktop API. I utilized ReactJS, Redux toolkit, Material UI, Bootstrap and other npm libraries for the web UI, and ElectronJS to develop the desktop UI. The database was a NoSQL type, MongoDB. i used Pymongo to bear it.",
  //   tools: [
  //     toolsLibrary.react,
  //     "Material UI",
  //     "Redux",
  //     "FastAPI",
  //     "MongoDB",
  //     "ElectronJS",
  //     "Git",
  //     "Github",
  //   ],
  //   code: "",
  //   role: "Fullstack Developer",
  //   demo: "",
  //   image: "",
  // },
  // {
  //   id: "recho",
  //   name: "Recho",
  //   description:
  //     "I and a friend developed a web app for Echographic consultations. We created the UI using ReactJS, Material UI, TailwindCSS, Preline and related npm libraries. We developed the rest APIs with Node.JS, express.JS, nodemailer and related npm libraries. The database was a NoSQL type, MongoDB. We used Mongoose to bear it.",
  //   tools: [
  //     toolsLibrary.react,
  //     "Tailwind CSS",
  //     "Material UI",
  //     "Preline",
  //     "node",
  //     "Express",
  //     "MongoDB",
  //     "Git",
  //     "Github",
  //   ],
  //   role: "Fullstack Developer",
  //   code: "",
  //   demo: "",
  //   image: recho,
  // },
  // {
  //   id: "pharma",
  //   name: "Pharma",
  //   description:
  //     "I developed the beta version of an android mobile app which manages, organizes and presents medical drugs to users. I used Kotlin programming language to develop the backend. I utilized Android XML, Material Design, and related packages to develop the android UI. The database was an SQL type, SQLite.",
  //   tools: ["Android", "Kotlin", "Material design", "XML", "SQLite"],
  //   code: "",
  //   demo: "",
  //   image: "",
  //   role: "Android Developer",
  // },
];


const tests = [
  {
    id: "cravies",
    name: "Cravies",
    description:
      "I was given this 2 pages app as a test tobe done in 2 days. I achieved the work in 20 hrs. Finally I didn't obtained the job, maybe someone did better. Nevertheles, this is an experience I loved.",
    tools: [
      toolsLibrary.react,
      toolsLibrary.tailwind,
      toolsLibrary.vercel,
      toolsLibrary.git,
      toolsLibrary.github
    ],
    role: "FrontEnd Developer",
    code: "",
    demo: "https://nepj-cravies.vercel.app/",
    image: cravies,
  },
  // {
  //   id: "iphone-15pr0",
  //   name: "iPhone 15 pro",
  //   description:
  //     "I worked step by step on a @jamastery tutorial on YouTube, which was my first ever Next.js application. I studied the difference between React and Next.js practically.",
  //   tools: [
  //     toolsLibrary.react,
  //     toolsLibrary.next,
  //     toolsLibrary.tailwind,
  //     toolsLibrary.gsap,
  //     toolsLibrary.vercel,
  //     toolsLibrary.git,
  //     toolsLibrary.github
  //   ],
  //   role: "FrontEnd Developer",
  //   code: "",
  //   demo: "https://apple-website-pink.vercel.app/",
  //   image: gpt3,
  // },
  {
    id: "gpt-3",
    name: "GPT-3",
    description:
      "I worked step by step on a @jamastery tutorial on YouTube, understanding how each pat of the code is done. Above that, I incorporated the Code bespratices mentality that @jsmastery teaches. Implementing this tutorial was a crucial step in my career, it's why it is here.",
    tools: [
      toolsLibrary.react,
      toolsLibrary.vercel,
      toolsLibrary.git,
      toolsLibrary.github
    ],
    role: "FrontEnd Developer",
    code: "",
    demo: "https://essijunior-gpt-3.vercel.app/",
    image: gpt3,
  },
];

const myImage =
  "https://z-p3-scontent.fnsi1-2.fna.fbcdn.net/v/t39.30808-6/422269500_1743037766183745_2393162712879109188_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE8hoVEqHlImYi7FT0iVx45OT-p4lnyOOs5P6niWfI4659BJzi1gBbU_JCiV4ybHxSXZXM5JRoZTTp8LUxNqm7f&_nc_ohc=hyuVx3kqXY8AX8PNgdR&_nc_zt=23&_nc_ht=z-p3-scontent.fnsi1-2.fna&oh=00_AfCnaQc0K-0otOsUXUzNpjR1UcJPYKza6QbIlllvpLTcYQ&oe=660769FB";

  // const baseURL = 'http://localhost:5173'
const baseURL = "https://essijunior.com";

const yearsOfExp = Number(
(
  (Date.now() - new Date("2021-08-01T00:00:00Z").getTime()) /
  (1000 * 60 * 60 * 24 * 365.25)
).toFixed(1)
);

export { services, experiences_tech, experiences, projects, realisations, tests, myImage, baseURL, yearsOfExp, toolsLibrary };
