import { EasyBank, NetflixClone, Shortly, SuperGear, TravelSlider } from "../assets/projects/intex"

export const cards = [
  { id: 1, name: "Work", icon: "material-symbols-light:work" },
  { id: 2, name: "Services", icon: "ic:sharp-miscellaneous-services" },
  { id: 3, name: "About", icon: "cib:about-me" },
  { id: 4, name: "Details", icon: "solar:notebook-minimalistic-outline" },
]

export const services = [
  { 
    id: 1, 
    title: "Mobile & desktop design", 
    desc: "Whether it’s starting fresh or brushing up what you already have. We've worked on simple habit trackers to full-scale trading platforms.", 
    img: "https://cdn.prod.website-files.com/653437233b349b44eda5816c/65e4dfafaa8988f379a7d113_moblie-desk.png" 
  },
  { id: 2, 
    title: "Website & landing page design", 
    desc: "Every page is purposefully designed with clear goals, whether it's raising awareness or driving conversions.",
    img: "https://cdn.prod.website-files.com/653437233b349b44eda5816c/65e4dfbf094585887d921aa1_web-landing-pages.png" 
  },
  { id: 3, 
    title: "Web flow development", 
    desc: "We build our websites on Webflow, sticking to high industry standards like Client First.",
    img: "https://cdn.prod.website-files.com/653437233b349b44eda5816c/65e4dfeb88cf2b18b800b0c8_webflow-dev.png" 
  }
]

export const detailTags = [
  { id: 1, label: "Resume" },
  { id: 2, label: "Testimonials" },
  { id: 3, label: "Contacts" }
]

export const works = [
  { id: 1, title: "Netflix Clone", img: NetflixClone, stacks: ["React JS", "CSS", "Firebase"], link: "https://github.com/arielglvz/netflix-clone" },
  { id: 2, title: "Easy Bank Landing Page", img: EasyBank, stacks: ["HTML", "CSS", "javascript"], link: "https://github.com/arielglvz/easybank-landing-page" },
  { id: 3, title: "Shorty Landing Page", img: Shortly, stacks: ["HTML", "CSS", "javascript"], link: "https://github.com/arielglvz/shortly-landing-page" },
  { id: 4, title: "Super Gear Ecommerce Clone", img: SuperGear, stacks: ["React JS", "Tailwind CSS", "Firebase", "Stripe.js"], link: "https://github.com/arielglvz/react-ecommerce" },
  { id: 5, title: "Travel Website Slider", img: TravelSlider, stacks: ["HTML", "CSS", "javascript"], link: "https://github.com/arielglvz/web-image-slider" },
]

export const user = {
  name: "Ariel Galvez",
  address: "Bulacan, Philippines",
  position: "Frontend Web Developer",
  number: "09772089843",
  email: "arielglvz@gmail.com"
} 

export const about = {
  intro: "Building intuitive digital experiences with React & SEO expertise. Passionate about clean code & scalable web solutions.",
  summary: [
    "Front-end React Developer | 2+ years of experience",
    "Expertise in reusable components, debugging & SEO",
    "Background in data analysis & content quality assurance",
    "Passion for clean, impactful digital experiences"
  ],
  experiences: [
    {
      id: 1,
      position: "Frontend Development Engineer",
      company: "Dynamic Strategy Solutions Experts Corporation",
      year: "2022-2024"
    },
    {
      id: 2,
      position: "Content Analyst",
      company: "Straive (former SPi Global)",
      year: "2022-2024"
    },
    {
      id: 3,
      position: "Frontend Development Engineer",
      company: "Dynamic Strategy Solutions Experts Corporation",
      year: "2022-2024"
    },
    {
      id: 4,
      position: "Data Analyst",
      company: "Chromelab Technologies Inc.",
      year: "2019"
    },
    {
      id: 5,
      position: "SEO / Web Developer (Intern)",
      company: "Redkite Internet Marketing and Web Designs",
      year: "2018"
    },
  ],
  studies: {
    school: "University of Perpetual Help System Dalta",
    course: "BS Computer Science",
    year: "2019",
  },
  hobbies: "When not writing code, I focus on learning about emerging technologies, minimalism, and startup culture. I Like, watching vlogs about Software Engineers, trying some designs from social media.",
  techstack: {
    frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React JS", "SASS", "Tailwind CSS", "Wordpress"],
    backend: ["Firebase", "Mongo DB", "Node JS"],
    tools: ["Figma", "Git", "GitHub", "Gerrit", "VS Code", "Discord", "Teams", "JIRA", "Confluence"],
    others: ["Responsive Design", "Accessibility"],
    freetime: ["Workout", "Watch Youtube tutorials", "Music", "Jogging", "Listening to Podcast"]
  },
  socials: [
    {
      id: 1,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/arielglvz/"
    },
    {
      id: 2,
      title: "GithHub",
      link: "https://github.com/arielglvz"
    },
    {
      id: 3,
      title: "Instagram",
      link: "https://www.instagram.com/arielglvz/"
    },
  ]
};