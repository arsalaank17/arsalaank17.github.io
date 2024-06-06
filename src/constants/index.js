import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  git,
  meta,
  shopify,
  carrent,
  jobit,
  tripguide,
  postgresql,
  django,
  python,
  spring,
  java,
  haskell,
  programming,
  website,
  dsa
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Coursework",
    title: "Coursework",
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
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
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
    name: "Django",
    icon: django,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Postgres",
    icon: postgresql,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "haskell",
    icon: haskell,
  },

];

const experiences = [
  {
    title: "Software Systems",
    company_name: "Module 2",
    icon: programming,
    iconBg: "#383E56",
    date: "2021",
    points: [
      "Learned the concepts related to Object Oriented Programming like encapsulation, inheritance , polymorphism , and abstraction",
      "Learned to use Software Engineering models (UML diagrams: class, activity, statecharts) and understand waterfall development processes.",
      "Distinguish testing levels (unit, system), grasp test plan principles, acquire project management, planning, time and self-management skills, and reflect on planning behaviors.",
      "Multi-threading in Java, focusing on correctness with preconditions and postconditions, and address Java security aspects.",
    ],
  },
  {
    title: "Data & Information",
    company_name: "Module 4",
    icon: website,
    iconBg: "#E6DEDD",
    date: "2021",
    points: [
      " Learned to design, implement, and test complex systems using databases, scripting frameworks, and RESTful services, focusing on structured and semi-structured data and security.",
      "Executed a large project using agile methods (SCRUM, task boards), gaining experience with stakeholders and teamwork.",
      "Identified and prioritize business requirements, design UML class diagrams, and develop web-based applications.",
      "Implemented multi-tier web apps, handled XML/JSON data, integrate with RESTful services, and ensure security against unauthorized access and injections.",
    ],
  },
  {
    title: "Data Structures & Algorithms",
    company_name: "Module 7",
    icon: dsa,
    iconBg: "#383E56",
    date: "2022",
    points: [
      "Understand and use discrete structures (graphs, networks, regular expressions, etc.) for modeling and problem-solving.",
      "Work with formal techniques (mathematical induction, dynamic programming, analysis of algorithms) to solve complex problems.",
      "Implement and test algorithms for discrete structures, use efficient data structures, and document computational results.",
      "Engage in a larger project on the graph isomorphism problem, involving the implementation, testing, and documentation of algorithms.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      
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
    name: "Project",
    description:
      "I am the best",
    tags: [
      {
        name: "Hire me",
        color: "blue-text-gradient",
      },
      {
        name: "Right now",
        color: "green-text-gradient",
      },
      {
        name: "bro",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job 2",
    description:
      "I will do anything",
    tags: [
      {
        name: "Just hire me",
        color: "blue-text-gradient",
      },
      {
        name: "HIRE",
        color: "green-text-gradient",
      },
      {
        name: "now",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Please",
    description:
      "Now",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Haskell",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
