import {
  cara,
  flikart,
  flytravel,
  portfolio,
  recho,
  colorfol,
  eCommerce,
  realEstate,
} from "../assets/projects";
import { FaAndroid, FaPython, FaPersonChalkboard } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { MdEngineering } from "react-icons/md";

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
  {
    id: 1,
    title: t("itIns"),
    company: "CIA Formation",
    icon: <FaPersonChalkboard size={30} />,
    date: `${t("since")} - Oct 2024`,
  },
  {
    id: 2,
    title: t("se"),
    company: `${t("p")}, Powerk-soft, Pro service, Leratel`,
    icon: <MdEngineering size={30} />,
    // iconBg: "#383E56",
    date: `${t("since")} - Sept 2022`,
  },
  {
    id: 3,
    title: t("js"),
    company: `CIA Formation, Powerk-soft, Pro service, Flikart +, ${t("i")}`,
    icon: <SiJavascript size={30} />,
    // iconBg: "#383E56",
    date: `${t("since")} - Sept 2022`,
  },
  {
    id: 4,
    title: t("py"),
    company: `${t("p")}, ${t("i")}, Powerk-soft, Pro service`,
    icon: <FaPython size={30} />,
    // iconBg: "#383E56",
    date: `${t("since")} - Sept 2020`,
  },
];

const experiences = (t) => [
  {
    id: 1,
    title: t("itIns"),
    company_name: "CIA Formation",
    // icon: starbucks,
    // iconBg: "#383E56",
    date: `${t("since")} - Oct 2024`,
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
    id: 2,
    title: t("js"),
    company_name: `CIA Formation, Powerk-soft, Pro service, Flikart +, ${t(
      "i"
    )}`,
    // icon: starbucks,
    // iconBg: "#383E56",
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
    id: 3,
    title: t("py"),
    company_name: `${t("p")}, ${t("i")}, Powerk-soft, Pro service`,
    // icon: shopify,
    // iconBg: "#383E56",
    date: `${t("since")} - Sept 2021`,
    points: [
      t("exp.python_developer.point1"),
      t("exp.python_developer.point2"),
      t("exp.python_developer.point3"),
    ],
  },
  {
    id: 4,
    title: t("se"),
    company_name: `${t("p")}, Powerk-soft, Pro service, Leratel, Acedmic`,
    // icon: shopify,
    // iconBg: "#383E56",
    date: `${t("since")} - Sept 2021`,
    points: [
      t("exp.software_engineer.point1"),
      t("exp.software_engineer.point2"),
      t("exp.software_engineer.point3"),
      t("exp.software_engineer.point4"),
    ],
  },
];

const projects = [
  {
    id: 1,
    name: "My portfolio",
    description:
      "This is my portfolio website (this site). I used ReactJS, TailwindCSS, Material UI, ThreeJS, and other npm libraries for the UI. I utilised emailJS to bear mail messages. I deployed the site on CPanel with Github actions bearing the CI/CD pipeline.",
    tools: [
      "React",
      "Tailwind CSS",
      "Material UI",
      "i18next",
      "sass",
      "emailJS",
      "CPanel",
      "Git",
      "Github",
      "Github actions",
    ],
    role: "React Developer",
    code: "https://github.com/EssiJunior/my-portfolio.git",
    demo: "https://essijunior.com",
    image: portfolio,
  },
  {
    id: 2,
    name: "Flikart +",
    description:
      "I built the web site of a company that promotes african culture. I used ReactJS, TailwindCSS, Material UI, ThreeJS and other npm libraries for the UI. I utilized NodeJS, ExpressJS, Nodemailer, Swagger UI, Mongoose and related libraries to develop and document Rest APIs. The database was a NoSQL type, MongoDB. We used Mongoose to bear it.",
    tools: [
      "React",
      "Tailwind CSS",
      "Material UI",
      "Threejs",
      "node",
      "ExpressJS",
      "Swagger UI",
      "MongoDB",
      "CPanel",
      "Git",
      "Github",
    ],
    role: "Fullstack Developer",
    code: "",
    demo: "https://flikart.org",
    image: flikart,
  },
  {
    id: 3,
    name: "Colorfol artists",
    description:
      "I maintained and built new interfaces of Colorfol artists web app. I used ReactJS, TailwindCSS, Material UI and other npm libraries for the UI.",
    tools: ["React", "Tailwind CSS", "Material UI", "Git", "Gitlab"],
    role: "React Developer",
    code: "",
    demo: "https://www.artists.colorfol.com/",
    image: colorfol,
  },
  {
    id: 4,
    name: "CARA",
    description:
      "I built the web site of a company that promotes services for African and Russian partneships. I used ReactJS, Tailwind CSS, Preline UI and other npm libraries for the UI. I utilized nodemailer to bear mail messages.",
    tools: ["React", "Tailwind CSS", "Preline UI", "CPanel", "Git", "Github"],
    role: "React Developer",
    code: "",
    demo: "https://russiaafrica.org",
    image: cara,
  },
  {
    id: 5,
    name: "CHP compta",
    description:
      "I built a medical items task management cross platform mobile application. I used React native, and other npm libraries for the UI. I utilized FastAPI and related libraries to develop the server. The database was a NoSQL type, MongoDB.",
    tools: ["React native", "FastAPI", "Redux", "MongoDB", "Git", "Github"],
    role: "React native Developer",
    code: "",
    demo: "",
    image: "",
  },
  {
    id: 8,
    name: "Car components e-commerce",
    description:
      "I and my team built an car items e-commerce web application. We used ReactJS, TailwindCSS, Material UI, and other npm libraries for the UI. We utilized Django, Django-rest, Swagger UI, and related libraries to develop and document Rest APIs. The database was an SQL type, PostgreSQL.",
    tools: [
      "React",
      "Tailwind CSS",
      "Material UI",
      "Django",
      "Django-rest",
      "Swagger UI",
      "PostgreSQL",
      "AWS Amplify",
      "AWS Apprunner",
      "Git",
      "Github",
    ],
    role: "React Developer and software engineer",
    code: "",
    demo: "",
    image: eCommerce,
  },
  {
    id: 9,
    name: "Fly Travel Agency",
    description:
      "I built the static website of a traveling agency company. I used ReactJS, TailwindCSS, Material UI, emailJS, saas, i18next and other npm libraries for the UI.",
    tools: [
      "React",
      "Tailwind CSS",
      "Material UI",
      "sass",
      "CPanel",
      "Git",
      "Github",
    ],
    role: "React Developer",
    code: "",
    demo: "https://flytravel.agency",
    image: flytravel,
  },
  {
    id: 10,
    name: "Real Estate",
    description:
      "I developed a fullstack real estate web app. I used FastAPI, Python, Pymongo and related packages to develop the API. I utilized ReactJS, Redux toolkit, Material UI, Bootstrap and other npm libraries for the UI. The database was a NoSQL type, MongoDB. i used Pymongo to bear it.",
    tools: [
      "React",
      "Material UI",
      "Redux",
      "FastAPI",
      "MongoDB",
      "Git",
      "Github",
    ],
    code: "",
    role: "Fullstack Developer",
    demo: "",
    image: realEstate,
  },
  {
    id: 11,
    name: "Bus tickets",
    description:
      "I developed a fullstack bus tickets reservation web and desktop app. I used FastAPI, Python, Pymongo and related packages to develop the web and desktop API. I utilized ReactJS, Redux toolkit, Material UI, Bootstrap and other npm libraries for the web UI, and ElectronJS to develop the desktop UI. The database was a NoSQL type, MongoDB. i used Pymongo to bear it.",
    tools: [
      "React",
      "Material UI",
      "Redux",
      "FastAPI",
      "MongoDB",
      "ElectronJS",
      "Git",
      "Github",
    ],
    code: "",
    role: "Fullstack Developer",
    demo: "",
    image: "",
  },
  {
    id: 12,
    name: "Recho",
    description:
      "I and a friend developed a web app for Echographic consultations. We created the UI using ReactJS, Material UI, TailwindCSS, Preline and related npm libraries. We developed the rest APIs with Node.JS, express.JS, nodemailer and related npm libraries. The database was a NoSQL type, MongoDB. We used Mongoose to bear it.",
    tools: [
      "React",
      "Tailwind CSS",
      "Material UI",
      "Preline",
      "node",
      "Express",
      "MongoDB",
      "Git",
      "Github",
    ],
    role: "Fullstack Developer",
    code: "",
    demo: "",
    image: recho,
  },
  {
    id: 13,
    name: "Pharma",
    description:
      "I developed the beta version of an android mobile app which manages, organizes and presents medical drugs to users. I used Kotlin programming language to develop the backend. I utilized Android XML, Material Design, and related packages to develop the android UI. The database was an SQL type, SQLite.",
    tools: ["Android", "Kotlin", "Material design", "XML", "SQLite"],
    code: "",
    demo: "",
    image: "",
    role: "Android Developer",
  },
];

const myImage =
  "https://z-p3-scontent.fnsi1-2.fna.fbcdn.net/v/t39.30808-6/422269500_1743037766183745_2393162712879109188_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE8hoVEqHlImYi7FT0iVx45OT-p4lnyOOs5P6niWfI4659BJzi1gBbU_JCiV4ybHxSXZXM5JRoZTTp8LUxNqm7f&_nc_ohc=hyuVx3kqXY8AX8PNgdR&_nc_zt=23&_nc_ht=z-p3-scontent.fnsi1-2.fna&oh=00_AfCnaQc0K-0otOsUXUzNpjR1UcJPYKza6QbIlllvpLTcYQ&oe=660769FB";
// const baseURL = 'http://localhost:5173'
const baseURL = "https://essijunior.com";

export { services, experiences_tech, experiences, projects, myImage, baseURL };
