
export const navLinks = [
{
    id: "about",
    title: "About",
},
{
    id: "experience",
    title: "Experience",
},
{
    id: "project",
    title: "Projects",
},
{
    id: "contact",
    title: "Contact",
},
];
  
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
//     // {
//     //   name: "Kotlin",
//     //   icon: kotlin,
//     // },
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
        id:1,
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
        id:2,
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
        id:3,
        title: "React.js Developer",
        company_name: "Powerk-soft, Pro service, Flikart +, For individuals",
        // icon: starbucks,
        // iconBg: "#383E56",
        date: "Since - Oct 2022",
        points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers."
        ],
    },
    {
        id:4,
        title: "React Native Developer",
        company_name: "Personal, For Individuals, Leratel",
        date: "Since - Nov 2022",
        points: [
            "Developing mobile cross-platform applications using React Native and other related technologies.",
            "In some projects teams with friends including designers and other developers to create high-quality products, one of those was presented at the 2022 Github Hackaton.",
        ],
    },
    {
        id:5,
        title: "Electron.js Developer",
        company_name: "Powerk-soft",
        date: "Since - July 2023",
        points: [
        "Developing and maintaining desktop applications using Electron.js.",
        "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
        "Implementing responsive design.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        id:6,
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

const testimonials = [
{
    testimonial:
    "I really liked the color shades and colors he used in one application he made for me.",
    name: "Francis Kamadjou",
    designation: "CEO",
    company: "Powerksoft",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
},
{
    testimonial:
    "I liked the simplicity of my website, he realy just made it simple but awesome",
    name: "Pastor Mama Aissatou",
    designation: "lawyer",
    company: "CRTV",
    image: "../assets/Bronze.jpg",
},
{
    testimonial:
    "He made a nice e-commerce dashboard for the management of my products, really nice and cool to use.",
    name: "Aboubakar",      
    designation: "CTO",
    company: "Pro Service",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
},
];

const projects = [
    // {
    //     id: 1,
    //     name: 'E-commerce',
    //     description: "I and my team built an e-commerce web application. We used ReactJS, TailwindCSS, Material UI, ThreeJS and other npm libraries for the UI. I utilized NodeJS, ExpressJS, Nodemailer, Swagger UI, Mongoose and related libraries to develop and document Rest APIs. The database was a NoSQL type, MongoDB. We used Mongoose to bear it.",
    //     tools: ['React', 'TailwindCSS', 'Material UI','ThreeJS', 'NodeJS','ExpressJS','Nodemailer','Swagger UI', 'Mongoose', 'MongoDB', 'CPanel', 'Git','Github'],
    //     role: 'Fullstack Developer',
    //     code: '',
    //     demo: '',
    //     image: '',
    // },
    {
        id: 1,
        name: 'Flikart +',
        description: "I built the web site of a company that promotes african culture. I used ReactJS, TailwindCSS, Material UI, ThreeJS and other npm libraries for the UI. I utilized NodeJS, ExpressJS, Nodemailer, Swagger UI, Mongoose and related libraries to develop and document Rest APIs. The database was a NoSQL type, MongoDB. We used Mongoose to bear it.",
        tools: ['React', 'TailwindCSS', 'Material UI','ThreeJS', 'NodeJS','ExpressJS','Nodemailer','Swagger UI', 'Mongoose', 'MongoDB', 'CPanel', 'Git','Github'],
        role: 'Fullstack Developer',
        code: '',
        demo: 'flikart.org',
        image: '',
    },
    {
        id: 2,
        name: 'Pro Service',
        description: "I and a friend built an e-commerce web applcation for a company. We used ReactJS, TailwindCSS, and other npm libraries for the UI. We utilized FastAPI and related libraries to develop Rest APIs. The database was a NoSQL type, MongoDB. We used Pymongo to bear it. We used the SCRUM agile methodology to manage the software lifecycle.",
        tools: ['React', 'Bootstrap', 'Material UI', 'FastAPI', 'Pymongo', 'MongoDB', 'JWT', 'CPanel', 'Trello', 'Git','Github'],
        role: 'Fullstack Developer and software engineer',
        code: '',
        demo: 'proservice.cm',
        image: '',
    },
    {
        id: 3,
        name: 'Dask',
        description: "I and my team built a task management cross platform mobile applcation we presented at github hackaton. We used React native, and other npm libraries for the UI. We utilized Node.js, Socket.io and related libraries to develop websocket. The database was an SQL type, SQLite. We also used firebase to bear authentication.",
        tools: ['React native', 'SQLite', 'Trello', 'Git','Github'],
        role: 'React native Developer',
        code: 'https://github.com/EssiJunior/Dask',
        demo: 'https://play.google.com/store/apps/details?id=com.dilane3.dask',
        image: '',
    },
    {
        id: 4,
        name: 'Recho',
        description: 'I and a friend developed a web app for Echographic consultations. We created the UI using ReactJS, Material UI, TailwindCSS, Preline and related npm libraries. We developped the rest APIs with Node.JS, express.JS, nodemailer and related npm libraries. The database was a NoSQL type, MongoDB. We used Mongoose to bear it.',
        tools: ['React', 'Tailwind CSS', "Material UI", "Preline", "NodeJS", "Express", "Nodemailer","MongoDB",  "Mongoose", 'Git','Github'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: '',
    },
    {
        id: 5,
        name: 'Real Estate',
        description: 'I developped a fullstack real estate web app. I used FastAPI, Python, Pymongo and related packages to develop the API. I utilized ReactJS, Redux toolkit, Material UI, Bootstrap and other npm libraries for the UI. The database was a NoSQL type, MongoDB. i used Pymongo to bear it.',
        tools: ['React', 'Bootstrap', 'Material UI', 'Redux toolkit', 'Python', 'FastAPI', 'MongoDB', 'Pymongo', 'JWT', 'Git','Github'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: '',
    },
    {
        id: 6,
        name: 'Bus tickets',
        description: 'I developped a fullstack bus tickets reservation web and desktop app. I used FastAPI, Python, Pymongo and related packages to develop the web and desktop API. I utilized ReactJS, Redux toolkit, Material UI, Bootstrap and other npm libraries for the web UI, and ElectronJS to develop the desktop UI. The database was a NoSQL type, MongoDB. i used Pymongo to bear it.',
        tools: ['React', 'Bootstrap', 'Material UI', 'Redux toolkit', 'Python', 'FastAPI', 'MongoDB', 'Pymongo', 'JWT', 'ElectronJS', 'Git','Github'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: '',
    },
    {
        id: 7,
        name: 'Pharma',
        description: "I developped the beta version of an android mobile app which manages, organises and presents medical drugs to users. I used Koltlin programming language to develop the backend. I utilized Android XML, Material Design, and related packages to develop the android UI. The database was an SQL type, SQLite.",
        tools: ['Android', 'Kotlin', 'Material design', 'XML', "SQLite"],
        code: '',
        demo: '',
        image: '',
        role: 'Android Developer',
    }
];


export { services, experiences, testimonials, projects };
