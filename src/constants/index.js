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
  meta,
  vm1,
  tesla,
  shopify,
  carrent,
  jobit,
  todoApp,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React.js / Frontend Developer",
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
    title: "Full Stack Developer",
    company_name: "Vmedulife Software",
    icon: vm1,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
    "Developed responsive web applications by integrating frontend features with backend services for seamless performance.",
    "Contributed to core product modules such as Admission, Fees, Assessments, and Library Management, with a primary focus on the Fees module.",
    "Integrated secure payment gateways for online fee transactions, enabling smooth and reliable digital payments.",
    "Optimized fee handling processes, enhancing efficiency, stability, and overall user experience.",
    "Implemented an automated fee receipt system for instant payment verification and improved financial tracking.",
    "Added key enhancements including concession policies and installment templates, ensuring timely delivery and system reliability.",
    "Resolved client inquiries and issues, improving satisfaction and usability of the system.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Carpool Ride App",
    description:
      "A web application built using React JS,MongoDB and Node JS that allows users to search for rides and book carpool rides. Implemented features such as user authentication. Also implemented searching, sorting, and filtering options to make it easier for users to find and book rides.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap5",
        color: "pink-text-gradient",
      },
       {
        name: "Node js",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ambre1909/blah_blah",
  },
  {
    name: "E-Commerce Application",
    description:
      "A full-stack web application built with React.js, Node.js, and MongoDB, allowing users to browse, search, and purchase products seamlessly. Implemented user authentication, product search, sorting, and filtering, providing a smooth and user-friendly shopping experience.",
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
        name: "bootstrap5",
        color: "pink-text-gradient",
      },
       {
        name: "Node js",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ambre1909/railway-mern",
  },
  {
    name: "To-Do List Application",
    description:
      "A web application built with React.js and TypeScript that allows users to create, edit, delete, and organize tasks efficiently. Implemented task management and filtering features, providing a smooth and intuitive interface for better productivity and a seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typscript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap5",
        color: "pink-text-gradient",
      },
    ],
    image: todoApp,
    source_code_link: "https://github.com/ambre1909/todoList",
  },
];

export { services, technologies, experiences, testimonials, projects };
