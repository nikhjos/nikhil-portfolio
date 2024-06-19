import { nanoid } from "nanoid";
import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";

export const navlinks = [
  { id: nanoid(), href: "#hero", text: "Home" },
  { id: nanoid(), href: "#about", text: "About" },
  { id: nanoid(), href: "#services", text: "Services" },
  { id: nanoid(), href: "#portfolios", text: "Portfolio" },
  { id: nanoid(), href: "#contact", text: "Contact" },
];

export const allPageLinks = [
  { id: nanoid(), href: "/", text: "Home" },
  { id: nanoid(), href: "/projects", text: "Projects" },
];

export const socialLinks = [
  { id: nanoid(), href: "https/:www.instagram.com", icon: <BsInstagram /> },
  { id: nanoid(), href: "https://wa.me/917350567289", icon: <BsWhatsapp /> },
  { id: nanoid(), href: "https/:www.linkedin.com", icon: <BsLinkedin /> },
  {
    id: nanoid(),
    href: "https://mail.google.com/mail/u/0/#inbox?compose=new",
    icon: <MdEmail />,
  },
];

import {
  FaCss3,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux, SiTailwindcss, SiDaisyui } from "react-icons/si";

export const skills = [
  { id: nanoid(), text: "html", icon: <FaHtml5 /> },
  { id: nanoid(), text: "css", icon: <FaCss3 /> },
  {
    id: nanoid(),
    text: "javascript",
    icon: <IoLogoJavascript />,
  },
  { id: nanoid(), text: "reactjs", icon: <FaReact /> },

  { id: nanoid(), text: "redux", icon: <SiRedux /> },
  { id: nanoid(), text: "tailwind css", icon: <SiTailwindcss /> },
  {
    id: nanoid(),
    text: "daisy ui",
    icon: <SiDaisyui />,
  },
  { id: nanoid(), text: "bootstrap", icon: <FaBootstrap /> },
];

export const Info = [
  {
    id: nanoid,
    title: "Personal Info",
    name: "Nikhil Rajendra Joshi",
    dob: "12 sept 1995",
    email: "joshinikhil505@gmail.com0",
    mob: "+91 7350567289",
    education: [
      {
        id: nanoid(),
        title: "education",
        degree: "Bachelor in Computer Science",
        collage: "shivchhatrapati mahavidhyalaya",
        city: "aurangaabd",
      },
    ],
    experiance: [
      {
        id: nanoid(),
        title: "experiance",
        designation: "Billing and Inventory Specialist",
        company: "swagati engineering",
        duration: "2014 to 2022",
      },
    ],
  },
];

import { LuCode2 } from "react-icons/lu";
import { FaPaintBrush } from "react-icons/fa";

export const serviceList = [
  {
    id: nanoid(),
    icon: <FaPaintBrush />,
    name: "Web Design",
    text: " where design meets functionality ",
  },
  {
    id: nanoid(),
    icon: <LuCode2 />,
    name: "Front-End Development",
    text: "Innovative web development soultion ",
  },
];

import img1 from "../assets/unsplash-image.png";
import img2 from "../assets/contentfull-cms.png";
import img3 from "../assets/vaibhav-portfolio.png";
import img4 from "../assets/comfy-store.png";
import img5 from "../assets/hotel_menu.png";
import img6 from "../assets/rj_portfolio.png";
import img7 from "../assets/loremIpsum.png";

import { FaGithubSquare } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

export const portfolioList = [
  {
    id: nanoid(),
    img: img1,
    href: "https://gentle-wisp-9704f0.netlify.app/",
    githref: "https://github.com/nikhjos/image-search",
    github: <FaGithubSquare />,
    website: <CgWebsite />,
    feature: true,
    title: "Unsplash-Imgae",
    desc: "Revolutionize your visual journey with an innovative image search app powered by unsplash API, delivering endless inpiration at your fingertips",
  },
  {
    id: nanoid(),
    img: img2,
    href: "https://charming-donut-45ebf9.netlify.app/",
    githref: "https://github.com/nikhjos/contentful-cms",
    github: <FaGithubSquare />,
    website: <CgWebsite />,
    feature: true,
    title: "Contentfull cms",
    desc: "Elevate web presence with a dynamic and cutomizable web app fueled by contentful cms, ensuring seamless content management and engaging user experiance",
  },
  {
    id: nanoid(),
    img: img3,
    href: "https://preeminent-belekoy-cc4f83.netlify.app/",
    githref: "https://github.com/nikhjos/nikhil-portfolio",
    github: <FaGithubSquare />,
    website: <CgWebsite />,
    title: "vj portfolio",
    desc: "portfolio website that shwcase all client deatails, including education, experiance and personal informmation",
  },
  {
    id: nanoid(),
    img: img4,
    href: "https://main--glittery-tarsier-adf9e1.netlify.app/",
    githref: "https://github.com/nikhjos/comfy-store",
    github: <FaGithubSquare />,
    website: <CgWebsite />,
    feature: true,
    title: "Comfy-store",
    desc: "Indulge in a seamless shopping experiance at comfy store, offering a curated selection of product just a click away",
  },
  {
    id: nanoid(),
    img: img5,
    href: "https://gorgeous-centaur-308723.netlify.app/",
    githref: "https://github.com/nikhjos/hotelMenuItem",
    github: <FaGithubSquare />,
    website: <CgWebsite />,
    title: "Hotel menu",
    desc: "Created a website featuring a hotel food menu with a convenient filter feature for easy navigation and selection",
  },
  {
    id: nanoid(),
    img: img6,
    href: "https://bejewelled-khapse-4d2c33.netlify.app/",
    githref: "https://github.com/nikhjos/rasika-portfolio",
    github: <FaGithubSquare />,
    website: <CgWebsite />,
    title: "rasika portfolio",
    desc: "portfolio website that shwcase all client deatails, including education, experiance and personal informmation",
  },
  {
    id: nanoid(),
    img: img7,
    href: "https://main--loremipsumgenerts.netlify.app/",
    githref: "https://github.com/nikhjos/react-lorem-ipsum-generator",
    github: <FaGithubSquare />,
    website: <CgWebsite />,
    title: "lorem ipsum generator",
    desc: "application that create lorem ipsum text paragraph with control",
  },
];

import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare, FaMobileAlt, FaMapMarkerAlt } from "react-icons/fa";

export const contactList = [
  {
    id: nanoid(),
    icon: <FaMobileAlt />,
    name: "Mobile",
    text: "+91 7350567289",
    style: "#128C7E",
  },
  {
    id: nanoid(),
    icon: <MdEmail />,
    name: "Email",
    text: "joshinikhil505@gmail.com",
    style: "#d44638",
  },
  {
    id: nanoid(),
    icon: <FaMapMarkerAlt />,
    name: "Address",
    text: "Chhatrapati SambhajiNagar, MH-431003",
    style: "#d44638",
  },
];

//  href: "https://mail.google.com/mail/u/0/#inbox?compose=new",
//    href: "https://wa.me/917350567289",
