import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import SubProjectText from "./SubProjectText";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variant";

const projects = [
  {
    name: "Amazon copy",
    align: "right",
    image: "./website-img-2.webp",
    link: "https://tgignas.github.io/Amazon-project-JS/amazon.html",
  },
  {
    name: "Movie app",
    align: "left",
    image: "./website-img-1.jpg",
    link: "https://tgignas.github.io/Find-My-Movie-Web/",
  },
];

const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectText />
      </motion.div>
      <div className="flex flex-col gap-2 mx-auto mt-7 mb-15 max-w-[900px]">
        {projects.map((project, id) => {
          return (
            <SingleProject
              key={id}
              name={project.name}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
      <motion.div
        variants={fadeIn("right", 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <SubProjectText />
      </motion.div>
    </div>
  );
};

export default ProjectMain;
