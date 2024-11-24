import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "ReduxJs",
    icon: <SiRedux className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in Redux.js for managing complex application states efficiently. Experienced in implementing Redux for predictable state management, enhancing app performance, and improving scalability.",
  },
  {
    id: nanoid(),
    title: "Tailwind css",
    icon: <SiTailwindcss className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in Tailwind CSS, leveraging its utility-first approach to rapidly build responsive and customizable designs. Adept at creating pixel-perfect layouts while maintaining clean and efficient code..",
  },
  {
    id: nanoid(),
    title: "Bootstrap",
    icon: <FaBootstrap className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in using Bootstrap to design responsive, mobile-first websites. Proficient in integrating Bootstrap’s pre-built components and grid system to create modern, user-friendly interface.",
  },
];

import unsplash from "./assets/unsplash-image.png";
import comfy from "./assets/comfy-store.png";
import mixMaster from "./assets/hotel_menu.png";
import contentfull from "./assets/contentfull-cms.png";
import portfolio from "./assets/rj_portfolio.png";

export const projects = [
  {
    id: nanoid(),
    img: unsplash,
    url: "https://gentle-wisp-9704f0.netlify.app/",
    github: "https://github.com/nikhjos/image-search",
    title: "Unsplash Images",
    text: "Revolutionize your visual journey with an innovative image search app powered by unsplash API, delivering endless inpiration at your fingertips.",
  },
  {
    id: nanoid(),
    img: comfy,
    url: "https://main--glittery-tarsier-adf9e1.netlify.app/",
    github: "https://github.com/nikhjos/comfy-store",
    title: "Comfy Store",
    text: "Indulge in a seamless shopping experiance at comfy store, offering a curated selection of product just a click away.",
  },
  {
    id: nanoid(),
    img: mixMaster,
    url: "https://gorgeous-centaur-308723.netlify.app/",
    github: "https://github.com/nikhjos/hotelMenuItem",
    title: "Mix Master",
    text: "Created a website featuring a hotel food menu with a convenient filter feature for easy navigation and selection",
  },
  {
    id: nanoid(),
    img: contentfull,
    url: "https://charming-donut-45ebf9.netlify.app/",
    github: "https://github.com/nikhjos/contentful-cms",
    title: "Contentfull cms",
    text: "Elevate web presence with a dynamic and cutomizable web app fueled by contentful cms, ensuring seamless content management and engaging user experiance.",
  },
  {
    id: nanoid(),
    img: portfolio,
    url: "https://bejewelled-khapse-4d2c33.netlify.app/",
    github: "https://github.com/nikhjos/rasika-portfolio",
    title: "portfolio App",
    text: "portfolio website that shwcase all client deatails, including education, experiance and personal informmation",
  },
];