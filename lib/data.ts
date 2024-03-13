import React from "react";
import {CgWorkAlt} from "react-icons/cg";
import {LuGraduationCap} from "react-icons/lu";
import omrImg from "@/public/omr.png";
import ovationImg from "@/public/ovation.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated",
    location: "FPT Aptech",
    description:
      "I graduated after 2 years of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Internship Front-End Developer",
    location: "Smart Loyalty",
    description:
      "I worked as an internship front-end developer. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "11/2023 - 03/2024",
  }
] as const;

export const projectsData = [
  {
    title: "Online Mobile Recharge",
    description:
      "Using .NET Core Web API to handle server side logic, SQL Server as the database and .NET Core MVC following the MVC Pattern to create a structured and maintainable application.",
    tags: ["HTML/CSS", "Javascript", "PHP", "Laravel", "SQL Server"],
    imageUrl: omrImg,
  },
  {
    title: "Ovation Ticket Show",
    description:
      "Using Java Spring Boot to handle server side logic, MySQL as the database and using React & Next.js, Tailwind CSS to build UI, manage state with Redux",
    tags: ["React", "TypeScript", "Next.js", "Redux", "Java", "Java Spring Boot", "MySQL"],
    imageUrl: ovationImg,
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "C/C#",
  ".NET/.NET Core",
  "Java",
  "Java Spring Boot",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "Redux",
  "Framer Motion",
] as const;