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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
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
    title: "Architectural Design",
    icon: web,  // Web icon for design services
  },
  {
    title: "Interior Design",
    icon: mobile,  // Mobile icon for interior design
  },
  {
    title: "Urban Planning",
    icon: backend,  // Backend icon for urban planning
  },
  {
    title: "Sustainable Architecture",
    icon: creator,  // Creator icon for eco-friendly design
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
    title: "Junior Architect",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Assisted in the design and development of commercial projects, including cafes and retail spaces.",
      "Collaborated with senior architects to ensure designs aligned with brand identity and functionality.",
      "Prepared technical drawings and ensured compliance with local building codes.",
      "Participated in site visits to monitor construction progress and quality control.",
    ],
  },
  {
    title: "Architect",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Led architectural designs for Tesla's sustainable facilities and showrooms.",
      "Collaborated with engineers and stakeholders to integrate eco-friendly solutions into architectural plans.",
      "Supervised the design team to create innovative and functional workspaces.",
      "Ensured compliance with environmental regulations and implemented energy-efficient technologies.",
    ],
  },
  {
    title: "Senior Architect",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Led the architectural design for Shopify's office spaces and retail environments.",
      "Introduced sustainable building materials and eco-friendly designs into corporate architecture.",
      "Worked with global teams to ensure brand consistency across various international projects.",
      "Managed a team of architects and designers to deliver high-quality workspaces.",
    ],
  },
  {
    title: "Lead Architect",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Leading architectural design for Meta’s innovative campus and cutting-edge facilities.",
      "Collaborating with engineers, urban planners, and sustainability experts to drive forward-thinking designs.",
      "Implementing immersive spaces that reflect Meta's commitment to future tech and sustainability.",
      "Mentoring junior architects and overseeing the full project lifecycle from concept to construction.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "Lakshita's architectural vision transformed our space into a masterpiece, balancing aesthetics and functionality perfectly.",
    name: "Sara Lee",
    designation: "Homeowner",
    company: "Private Residence",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lakshita's attention to detail and innovative designs made our office a place of inspiration and productivity.",
    name: "Chris Brown",
    designation: "CEO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Working with Lakshita was an incredible experience. Her designs not only met but exceeded our expectations, breathing new life into our project.",
    name: "Lisa Wang",
    designation: "Project Manager",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];


const projects = [
  {
    name: "Modern Residence",
    description:
      "A luxury residential project featuring a modern architectural design with sustainable materials and smart home technologies.",
    tags: [
      {
        name: "modern-design",
        color: "blue-text-gradient",
      },
      {
        name: "sustainability",
        color: "green-text-gradient",
      },
      {
        name: "smart-tech",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,  // Keep the same image
    source_code_link: "https://example.com/",  // Replace with relevant link if needed
  },
  {
    name: "Corporate Office Tower",
    description:
      "A high-rise office building designed to maximize natural light and energy efficiency, creating a productive and eco-friendly workspace.",
    tags: [
      {
        name: "commercial",
        color: "blue-text-gradient",
      },
      {
        name: "energy-efficient",
        color: "green-text-gradient",
      },
      {
        name: "modern-aesthetic",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,  // Keep the same image
    source_code_link: "https://example.com/",  // Replace with relevant link if needed
  },
  {
    name: "Urban Park Pavilion",
    description:
      "A public space project that blends modern design with natural landscapes, offering a unique experience for city dwellers and visitors.",
    tags: [
      {
        name: "urban-planning",
        color: "blue-text-gradient",
      },
      {
        name: "sustainable-materials",
        color: "green-text-gradient",
      },
      {
        name: "landscape-architecture",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,  // Keep the same image
    source_code_link: "https://example.com/",  // Replace with relevant link if needed
  },
];


export { services, technologies, experiences, testimonials, projects };
