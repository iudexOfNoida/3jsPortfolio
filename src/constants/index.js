import { ionLogo, barcoLogo } from "../assets/images";
import {
    contact,
    cplusplus,
    css,
    git,
    github,
    html,
    java,
    linkedin,
    linux,
    qt,
    react,
    tailwindcss,
    vscode
} from "../assets/icons";

export const skills = [
    {
        imageUrl: cplusplus,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: qt,
        name: "Qt",
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
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: linux,
        name: "linux",
        type: "kernel",
    },
    {
        imageUrl: vscode,
        name: "vscode",
        type: "backend",
    },
    {
        imageUrl: java,
        name: "java",
        type: "backend",
    },
];

export const experiences = [
    {
        title: "Software Development Engineer",
        company_name: "Barco",
        icon: barcoLogo,
        iconBg: "#ef0000",
        date: "July 2023 - Present",
        points: [
            "Developing and maintaining software on C++ with front end on QML and Qt framework. Working in 'clickshare' team",
            "Created the onboarding screen seen by the customer impacting all Barco customers around the globe.",
            "Following object oriented programming principles in day to day tasks.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Software Development Engineer Intern",
        company_name: "ION Trading",
        icon: ionLogo,
        iconBg: "#051650",
        date: "May 2022 - July 2022",
        points: [
            "As a summer intern worked with 'clearing derivatives' team to handle real life problems faced in day to day trading.",
            "Used java to create an api to aid onboarding of customers on ion trading platforms.",
            "Used various tools and technologies and designed the solution from scratch."
        ],
    }
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
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: barcoLogo,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    }
];