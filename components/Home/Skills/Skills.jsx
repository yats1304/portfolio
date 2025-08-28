"use client";
import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { BiLogoCss3 } from "react-icons/bi";
import { SiTailwindcss, SiJavascript, SiReact, SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const firstRowSkills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <BiLogoCss3 /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Python", icon: <FaPython /> },
];

const secondRowSkills = [
  { name: "MySQL", icon: <SiMysql /> }
];

const Skills = () => {
  return (
    <div id="skills" className="text-white pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My <span className="text-cyan-300">Skills</span>
      </h1>

      {/* First row */}
      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {firstRowSkills.map((skill,i) => (
          <Tilt
            key={skill.name}
            scale={1.5}
            transitionSpeed={400}
            className="cursor-pointer"
          >
            <div data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-delay={i * 100} 
                className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105">
              <div className="text-5xl mb-4 text-gray-300">{skill.icon}</div>
              <p className="mt-1 text-gray-400">{skill.name}</p>
            </div>
          </Tilt>
        ))}
      </div>

      {/* Second row */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {secondRowSkills.map((skill) => (
          <Tilt
            key={skill.name}
            scale={1.5}
            transitionSpeed={400}
            className="cursor-pointer"
          >
            <div data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-delay={700}
            className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105">
              <div className="text-5xl mb-4 text-gray-300">{skill.icon}</div>
              <p className="mt-1 text-gray-400">{skill.name}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Skills;
