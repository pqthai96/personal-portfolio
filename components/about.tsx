"use client"

import React from 'react';
import SectionHeading from "@/components/section-heading";
import {motion} from "framer-motion";
import {useSectionInView} from "@/lib/hooks";

function About() {

  const {ref} = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.175}}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I decided to pursue my passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development at FPT Aptech</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Java, Java Spring Boot
        </span>
        . I am also familiar with TypeScript. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <span className="italic">When I'm not coding</span>, I enjoy about outdoor travel, exploring remote natural areas, and challenging myself through hiking and mountain climbing experiences.
      </p>
    </motion.section>
  );
}

export default About;