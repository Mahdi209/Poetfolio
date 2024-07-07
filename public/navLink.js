import { FaReact } from "react-icons/fa6";
import { AiOutlineHtml5 } from "react-icons/ai";
import { ImCss3 } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

import food from "./food.png";
import htmlProject from "./htmlProject.png";
import pokemon from "./pokemon.png";
import todo from "./todo.png";
import car from "./carRenal.png";

export const skills = [
  {
    icon: FaReact,
    name: "React",
  },
  {
    icon: RiNextjsFill,
    name: "Next Js",
  },
  {
    icon: SiRedux,
    name: "Redux Toolkit",
  },
  {
    icon: RiTailwindCssFill,
    name: "Tailwind",
  },
  {
    icon: AiOutlineHtml5,
    name: "html5",
  },
  {
    icon: ImCss3,
    name: "css",
  },
  {
    icon: IoLogoJavascript,
    name: "Javascript",
  },
  {
    icon: SiExpress,
    name: "Express js",
  },
  {
    icon: IoLogoFirebase,
    name: "firebase",
  },
  {
    icon: SiMongodb,
    name: "Mongodb",
  },
  {
    icon: FaGitAlt,
    name: "Git",
  },
  {
    icon: FaGithub,
    name: "Github",
  },
];

export const navLink = [
  {
    to: "/",
    name: "Home",
  },
  {
    to: "projects",
    name: "Projects",
  },
  {
    to: "contact",
    name: "Contact",
  },
  {
    to: "about",
    name: "About",
  },

];

export const projects = [
  {
    name: "Todo List",
    description: "todo list you can add and remove tasks and completion tasks",
    github: {
      name: "github",
      Link: "https://github.com/Mahdi209/react-todo-starting-point",
    },
    live: { name: "Live demo", Link: "https://todoapp-myproject.netlify.app/" },
    image: todo,
  },
  {
    name: "Pokemon Project",
    description: "pokemon project show pokemon cards and information",
    github: {
      name: "github",
      Link: "https://github.com/Mahdi209/JS-Pokemon_API_Project",
    },
    live: { name: "Live demo", Link: "https://pokemon-card-task.netlify.app/" },
    image: pokemon,
  },
  {
    name: "Food Project",
    description: "food project show available food items in my collection",
    github: {
      name: "github",
      Link: "https://github.com/Mahdi209/Food-project",
    },
    live: { name: "Live demo", Link: "https://main--toto-web.netlify.app/" },
    image: food,
  },
  {
    name: "Shop Project",
    description:
      " shop project show the products and services available on  website",
    github: {
      name: "github",
      Link: "https://github.com/Mahdi209/shop-Project",
    },
    live: { name: "Live Demo", Link: "https://bestshop-project.netlify.app/" },
    image: htmlProject,
  },
  {
    name: "Car Rental IQ Project",
    description:
      "A website aggregating Iraq car rentals, enabling listings and bookings.",
    github: {
      name: "Front-End",
      Link: "https://github.com/Mahdi209/carRentalIQ-front",
    },
    live: { name: "Back-End", Link: "https://github.com/Mahdi209/Car-Rental-Project-BackEnd" },
    image: car,
  },
];
