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
  dsa,
  dashboard,
  pentago,
  tree,
  refinement,
  jpg,
  ceep,
  AI
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
    company_name: "",
    icon: programming,
    iconBg: "#383E56",
    date: "2021",
    points: [
      "Concepts of Object Oriented Programming like encapsulation, inheritance , polymorphism , and abstraction",
      "Software Engineering models (UML diagrams: class, activity, statecharts) and waterfall development processes.",
      "Distinguish testing levels (unit, system), grasp test plan principles.",
      "Multi-threading in Java, preconditions and postconditions, and Java security aspects.",
    ],
  },
  {
    title: "Data & Information",
    company_name: "",
    icon: website,
    iconBg: "#E6DEDD",
    date: "2021",
    points: [
      " Implement and test complex systems using databases, frameworks, and RESTful services.",
      "Executed a large project using agile methods (SCRUM, task boards), gaining experience with stakeholders and teamwork.",
      "Business requirements, design UML class diagrams, and develop web-based applications.",
      "Implemented multi-tier web apps, handled XML/JSON data and ensure security against unauthorized access and injections.",
    ],
  },
  {
    title: "Data Structures & Algorithms",
    company_name: "",
    icon: dsa,
    iconBg: "#383E56",
    date: "2022",
    points: [
      "Discrete structures (graphs, networks, regular expressions, etc.) for modeling and problem-solving.",
      "Formal techniques (mathematical induction, dynamic programming, analysis of algorithms) to solve complex problems.",
      "Algorithms for discrete structures, use efficient data structures, and document computational results.",
      "Project on the graph isomorphism problem, involving the implementation, testing, and documentation of algorithms.",
    ],
  },
  {
    title: "Data Science & AI",
    company_name: "",
    icon: AI,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Advanced ML/AI techniques including NLP, image analysis using neural networks, and decision analysis modeling.",
      "Compare various data modeling methods and algorithms, applying advanced statistical and mathematical techniques for business applications.",
      "Proficiency with distributed systems and infrastructures like Hadoop and MapReduce for efficient data processing.",
      "Comprehensive data analytics, including data scraping, cleansing, and ethical maintenance."
      
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
    name: "Twitter Dashboard",
    description:
      "The SPORTweet Dashboard is a front-end application designed to " +
      "categorize and display tweets related to different sports." +
      "The dashboard processes tweets one by one, categorizing them into sections." +
      "Additionally, it features interactive elements such as trendline graphs and a word cloud.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Twitter",
        color: "green-text-gradient",
      },
      {
        name: "Data Analysis",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/arsalaank17/Twitter-Dashboard",
  },
  {
    name: "Pentago Game",
    description:
      "This project is a text-based user interface (TUI) implementation of the board game Pentago. Demonstrates understanding of OOP principles, documentation within code and concurrency.",
    tags: [
      {
        name: "OOP",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Concurrency",
        color: "pink-text-gradient",
      },
    ],
    image: pentago,
    source_code_link: "https://github.com/arsalaank17/Pentago-game",
  },
  {
    name: "Tree watering web application",
    description:
      "This application is a user-friendly web application designed to monitor and manage the water levels of newly planted trees. This application aims to ensure that gardeners can easily track and maintain adequate water levels for each tree, preventing tree mortality due to insufficient watering.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Web Application",
        color: "green-text-gradient",
      },
      {
        name: "RESTful Services",
        color: "pink-text-gradient",
      },
      {
        name: "Databases",
        color: "yellow-text-gradient",
      },
    ],
    image: tree,
    source_code_link: "https://github.com/arsalaank17/TreeWatering",
  },
  {
    name: "Color Refinement Algorithm",
    description:
      "In this project, I implemented the color refinement algorithm in Python, " +
      "a fundamental graph isomorphism technique used in computer science. By applying this algorithm, " +  
      "I demonstrated its utility in graph theory applications such as automorphism detection " +
      "and graph classification, showcasing my skills in algorithm design, optimization, and Python programming.",
    tags: [
      {
        name: "Algorithms",
        color: "blue-text-gradient",
      },
      {
        name: "Data Structures",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: refinement,
    source_code_link: "https://github.com/arsalaank17/Color-Refinement",
  },

  {
    name: "JPEG Encoder",
    description:
      "In this project, we implemented the JPEG Encoding algorithm using Clash, a Haskell library for hardware description." +  
      "We designed hardware components for Color Space Conversion, Chrominance Subsampling, " +  
      "Discrete Cosine Transform (DCT), Quantization, and Run-Length Encoding (RLE). " +
      "This project demonstrates my skills in hardware design, functional programming, and image processing.",
    tags: [
      {
        name: "Haskell",
        color: "blue-text-gradient",
      },
      {
        name: "Functional Programming",
        color: "green-text-gradient",
      },
      {
        name: "Hardware",
        color: "pink-text-gradient",
      },
    ],
    image: jpg,
    source_code_link: "https://github.com/arsalaank17/JPEG-Encoder",
  },

  {
    name: "Full Stack Website for CEEP",
    description:
      "This project involves developing a platform for the Committee for Education Evaluation Panels (CEEP) using Django, " + 
      "React, and PostgreSQL. The platform supports organizing and overseeing evaluation panel sessions for the Technical " +
      "Computer Science (TCS) and Business and IT (BIT) bachelor programs. This project demonstrates my ability to develop comprehensive " + 
      "web applications using Django, React, and PostgreSQL. It showcases my skills in full-stack development, database management," +
      "and user interface design.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Full-stack",
        color: "pink-text-gradient",
      },
    ],
    image: ceep,
    source_code_link: "https://github.com/arsalaank17/Design-Project-CEEP",
  },
 
    



];

export { services, technologies, experiences, testimonials, projects };
