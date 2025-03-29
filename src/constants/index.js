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
            "Developed frontend components for homepage using NextJs and TypeScript.",
            "Collaborated with a team of developers to create the website from scratch, focusing on user-centric design and functionality.",
            "Actively participated in design discussions, offering insights and suggestions to enhance the overall user experience.",
        ],
    },
    {
        title: "Web Developer Intern",
        company_name: "Learn with One",
        icon: learnwithone,
        iconBg: "#f5f6be",
        date: "Aug 2024 - Present",
        points: [
            "Developed and maintained a React.js & Three.js website, enhancing user interactivity, now serving 200+ active users.",
            "Resolved a critical login issue, ensuring seamless access.",
            "Optimized blog page layout, increasing user engagement.",
            "Integrated WhatsApp API, enabling automated session updates for students.",
            "Boosted website traffic by 40% through SEO improvements and indexing.",
            "Optimized Firebase hosting with caching and file reduction, reducing download size by 34.1%, resulting in faster load times and lower bandwidth costs.",
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
        name: 'MoshHi',
        description: 'A real-time chat application built using the MERN stack and WebSocket.io, allowing users to chat seamlessly with others. The app supports profile image uploads, displays active status, and ensures secure messaging with encryption. Email verification is implemented to enhance security and reliability. The goal is to provide a smooth and secure chatting experience with real-time updates.',
        github_link: 'https://github.com/DivyanshD07/ChatApp',
        live_link: 'https://mosh-hi.vercel.app/'
    },
    {
        // iconUrl: pricewise,
        // theme: 'btn-back-red',
        name: 'Fitness-Bot',
        description: 'A web app that answers all your fitness-related questions through voice. The idea is to create a hands-free experience where users can ask health and workout queries and get instant audio responses, making fitness guidance more accessible and convenient.',
        github_link: 'https://github.com/DivyanshD07/Fitness-Bot',
        live_link: 'Under development'
    },
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
    {
        // iconUrl: pricewise,
        // theme: 'btn-back-red',
        name: 'Contact Managment APIs',
        description: 'A secure and scalable backend for managing contacts, built using Node.js, Express, and MongoDB. Features include user authentication (JWT), CRUD operations for contacts, and middleware-based route protection.',
        github_link: 'https://github.com/DivyanshD07/contact-managment',
        live_link: 'NA'
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