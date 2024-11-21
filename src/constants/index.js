import { deepthoughtedutech, learnwithone, marketinger } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    cpp,
    threejs
} from "../assets/icons";
import { NotFound } from "../pages";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: threejs,
        name: "Three.js",
        type: "Frontend",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Backend",
    },
];

export const experiences = [
    {
        title: "Behavioral Data Scientist and Growth Hacking Intern",
        company_name: "DeepThought Growth Management System",
        icon: deepthoughtedutech,
        iconBg: "#accbe1",
        date: "April 2023 - May 2023",
        points: [
            "Analyzed product usage data to identify insights and opportunities for user growth.",
            "Implemented data management strategies to organize and optimize data for analysis purposes.",
            "Conducted a comprehensive user survey to gather feedback and insights on product usage barriers.",
            "Utilized survey results to develop targeted strategies for increasing product adoption.",
            "Designed and executed a successful campaign aimed at educating users on product features and benefits.",
            "Actively participated in various company activities, contributing to a positive and collaborative work culture."
        ],
    },
    {
        title: "Frontend Web Developer Intern",
        company_name: "Marketinger IT Solutions LLP",
        icon: marketinger,
        iconBg: "#e0e0e0",
        date: "Feb 2024 - April 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer Intern",
        company_name: "Learn with One",
        icon: learnwithone,
        iconBg: "#f5f6be",
        date: "Aug 2024 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Redesigned and optimized the blog page layout, improving user experience by arranging blogs based on their latest uploads.",
            "Resolved a critical issue where users couldn't see content immediately after signing up, ensuring consistent access both during signup and after logging in.",
            "Adapted game dimensions to be responsive across different devices, improving accessibility and gameplay on various screen sizes.",
            "Developed an API to integrate WhatsApp with the web platform, allowing student session information to be sent via WhatsApp messages.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/DivyanshD07',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/divyansh-dhyani-0300851bb/',
    }
];

export const projects = [
    {
        // iconUrl: pricewise,
        // theme: 'btn-back-red',
        name: 'Ad-Muter',
        description: 'A google extension to mute and skip ads whenever they come in between your video. The idea is to make enhance user experience while watching live streams where we always have to adjust ads volume.',
        github_link: 'https://github.com/DivyanshD07/AdMuterExtension',
        live_link: 'NA'
    },
    {
        // iconUrl: pricewise,
        // theme: 'btn-back-red',
        name: 'Podcast Stream App',
        description: 'A Fullstack project made using Reactjs, Nodejs and MongoDb, where users can upload their podcasts and other people can see them, like them, and comment.',
        github_link: 'https://github.com/DivyanshD07/PodcastStreamApp',
        live_link: ''
    },
    {
        // iconUrl: pricewise,
        // theme: 'btn-back-red',
        name: 'Stack-based Virtual Machine',
        description: 'A stack-based virtual machine is a computing system that uses a stack structure to manage data and execute instructions. Operands are pushed onto the stack and popped off for computation, making the instruction set compact and hardware-agnostic.',
        github_link: 'https://github.com/DivyanshD07/stack-vm',
        live_link: 'NA'
    },
    {
        // iconUrl: pricewise,
        // theme: 'btn-back-red',
        name: 'Spiderman Tunnel',
        description: 'A fun site using Three.js, where the camera moves through a visually stunning wormhole, offering an immersive perspective experience. The animation is made for fun.',
        github_link: 'https://github.com/DivyanshD07/Spiderman_Tunnel',
        live_link: 'https://spiderman-tunnel.vercel.app/'
    },
    // {
    //     // iconUrl: pricewise,
    //     // theme: 'btn-back-red',
    //     name: 'FindWork',
    //     description: 'Frontend template of first page of website made to find jobs in Japan. The website is made using NextJs, Tailwindcss and Typescript and hosted using vercel.',
    //     github_link: 'https://github.com/DivyanshD07/FindWork.git',
    //     live_link: 'https://find-work-liard.vercel.app/'
    // },
];