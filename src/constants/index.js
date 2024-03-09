import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  asiainfo,
  hdzb,
  library,
  recipe,
  halloween,
  pencilpaws,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "AsiaInfo Technologies",
    icon: asiainfo,
    iconBg: "#383E56",
    date: "April 2011 - January 2014",
    points: [
      "Engaged in developments of old platform refactor",
      "Developed backends of a few web applications",
      "Developed parts of web applications frontends",
      "Engaged in testing works of web applications",
      "TroubleShooting and fixing bugs of web applications",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "HDZB co. Ltd.",
    icon: hdzb,
    iconBg: "#383E56",
    date: "October 2014 - September 2022",
    points: [
      "Engaged in products designing and technology selections",
      "Developed backends of a few web applications",
      " Developed parts of web applications frontends",
      "Engaged in developments of internal tool libraries",
      "TroubleShooting and fixing bugs of web applications",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelancer",
    icon: web,
    iconBg: "#383E56",
    date: "January 2023 - Present",
    points: [
      "Developing and maintaining web applications using MERN stack and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Jess proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jess does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Jess optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Online Library",
    description:
      "Web-based platform that allows users to search, view and buy a wide array of digital resources including ebooks, journals, audio, and video materials.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: library,
    source_code_link: "https://github.com/jesslee2023/team-7-react-project",
    deploy_link: "https://online-library-jess-react.netlify.app",
  },
  {
    name: "Recipe Finder",
    description:
      "Web application that enables users to search for varities of recipes, view the details for different recipes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: recipe,
    source_code_link: "https://github.com/jesslee2023/Team6-collaborative-work",
    deploy_link: "https://hungry-chief-team6.netlify.app",
  },
  {
    name: "Hallotween Town",
    description:
      "A website is dedicated to celebrating the spookiest time of the year and showcasing the best Halloween-themed events, activities, and attractions.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: halloween,
    source_code_link: "https://github.com/jesslee2023/Halloween-town",
    deploy_link: "https://halloween-jess.netlify.app",
  },
  {
    name: "Draw and Guess",
    description: "A website is dedicated to show the game of Draw and Guess.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: pencilpaws,
    source_code_link: "https://github.com/jesslee2023/PencilPawsBeta",
    deploy_link: "https://jesslee-pencilpaws.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
