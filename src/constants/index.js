import {
  mobile,
  android,
  kotlin,
  firebase,
  mysql,
  java,
  backend,
  creator,
  web,
  isyaratku,
  javascript,
  typescript,
  intplan,
  html,
  bangkit,
  goto,
  pln,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  php,
  disaster,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FrontEnd Developer",
    icon: mobile,
  },
  {
    title: "BackEnd Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "JavaScript Libraries",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Android",
    icon: android,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "InspiringApps",
    icon: goto,
    iconBg: "#FFFFFF",
    date: "Jun 2021 - Jul 2023",
    points: [
      "Implemented agile processes and CI/CD pipelines, reducing software deployment time by 40% and improving code quality by 25%.",
      "Collaborated with product management and UI/UX designers to deliver a revamped user interface, leading to a 15% increase in user engagement and a 10% reduction in user errors.",
      "Utilize powerful UI frameworks such as Vue.js, Nuxt.js, React, Tailwind UI, and others to optimize development speed.",
      "Skills: Vue.js, Nuxt.js, Tailwind UI, React, ...",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Savas Labs",
    icon: goto,
    iconBg: "#FFFFFF",
    date: "Feb 2018 - Jun 2021",
    points: [
      "Collaborate with executives, management, and partners to support UI development needs.",
      "Construct and implement technology best practices, guidelines, and repeatable processes.",
      "Architect and implement robust backend systems, ensuring seamless data management, and optimizing performance for web applications.",
      "Skills: Express, MongoDB, Node.js, Redux, TypeScript, ...",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Episode Six",
    icon: bangkit,
    iconBg: "#FFFFFF",
    date: "Apr 2016 - Jan 2018 ",
    points: [
      "Deliver optimal user experience using the latest frontend technologies.",
      "Build highly reusable UI components that compose the Tradefull design system.",
      "Develop high-performance user interface code that aligns with PageSpeed insights.",
      "Skills: MySQL, JavaScript, React.js, ...",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Kunai",
    icon: pln,
    iconBg: "#FFFFFF",
    date: "Jun 2014 - Apr 2016",
    points: [
      "Converted wireframes and designs into responsive and user-friendly websites, ensuring pixel-perfect implementation.",
      "Worked as a collaborative member of the Agile team.",
      "Skills: Agile Methodologies, JavaScript, React.js, CSS, SCSS, ...",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Intplan",
    description:
      "Intplan (Inspection to Platinum) is a tools to facilitate implementation and monitoring customer sampling according to DLPD, TO, and LBKB on PLN UP 3 Makassar Utara.",
    tags: [
      {
        name: "kotlin",
        color: "white-text-gradient",
      },
      {
        name: "typescript",
        color: "white-text-gradient",
      },
      {
        name: "mvvm",
        color: "white-text-gradient",
      },
    ],
    image: intplan,
    source_code_link: "https://github.com/raflisalam/PLN_IntPlan",
  },
  {
    name: "Isyaratku",
    description:
      "Isyaratku is a real-time Indonesian Sign Language translator application using the YOLOv5 method, designed to assist who struggle to understand sign language's.",
    tags: [
      {
        name: "kotlin",
        color: "white-text-gradient",
      },
      {
        name: "YOLOv5",
        color: "white-text-gradient",
      },
      {
        name: "object-detection",
        color: "white-text-gradient",
      },
    ],
    image: isyaratku,
    source_code_link: "https://github.com/raflisalam/Isyaratku",
  },
  {
    name: "Disaster Tracker",
    description:
      "The Disaster tracker is an application designed to track natural disasters, such as floods, earthquakes, fires, and volcanic eruptions, in Indonesia.",
    tags: [
      {
        name: "kotlin",
        color: "white-text-gradient",
      },
      {
        name: "hilt",
        color: "white-text-gradient",
      },
      {
        name: "mvvm",
        color: "white-text-gradient",
      },
      {
        name: "clean-architecture",
        color: "white-text-gradient",
      },
    ],
    image: disaster,
    source_code_link:
      "https://github.com/GG-3-0-Mobile-Engineering/ME15-DisasterApps-GG3MEGP0582-MuhammadRafliSalam",
  },
];

export { services, technologies, experiences, testimonials, projects };
