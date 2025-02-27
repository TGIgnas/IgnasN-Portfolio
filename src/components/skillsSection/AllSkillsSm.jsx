import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaDocker } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variant";

const skills = [
  {
    skill: "HTML",
    icon: <FaHtml5 />,
  },
  {
    skill: "CSS",
    icon: <IoLogoCss3 />,
  },
  {
    skill: "GitHub",
    icon: <FaGithub />,
  },
  {
    skill: "JavaScript",
    icon: <IoLogoJavascript />,
  },
  {
    skill: "Docker",
    icon: <FaDocker />,
  },
  {
    skill: "React",
    icon: <FaReact />,
  },
  {
    skill: "TailWindCSS",
    icon: <RiTailwindCssFill />,
  },
];

const AllSkillsSm = () => {
  return (
    <div className=" grid md:grid-cols-4 sm:grid-cols-2 gap-10 md:mb-5 sm:mb-3">
      {skills.map((skill, id) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            key={id}
            className="flex flex-col items-center"
          >
            <span className="text-white text-6xl">{skill.icon}</span>
            <p className="text-center mt-4 text-white">{skill.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSm;
