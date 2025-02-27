import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaDocker } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import SingleSkill from "./SingleSkill";
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

const AllSkills = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-4 relative max-w-[1200px] mx-auto">
        {skills.map((skill, id) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${id}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <SingleSkill key={id} text={skill.skill} imgSvg={skill.icon} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
