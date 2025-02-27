import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variant";

const experiences = [
  {
    job: "JavaScript programming",
    company: "Currently on career brake",
    date: "2024-08 - present",
    responsibilities: [
      "Taking individual courses on JavaScript.",
      "Built a foundation in HTML, CSS, and JavaScript by creating responsive web pages and projects like a calculator, to-do list app, and webpage, while learning debugging, DOM manipulation, and event handling.",
      "Focused on clean, maintainable code and version control with Git/GitHub.",
    ],
  },
  {
    job: "Technical Administrator",
    company: "Balticdiag Technology",
    date: "2021 - 2024",
    responsibilities: [
      "Management, administration and maintenance of ISand diagnostic equipment.",
      "Ensuring efficient use of IT resources and planningahead the need for additional equipment.",
      "Technical support to customers via phone, email, orhelpdesk.",
      "Development and maintenance of technicaldocumentation, including user manuals and trainingmaterials.",
    ],
  },
  {
    job: "Python programming",
    company: "CodeAcademy",
    date: "2021 - 2022",
    responsibilities: [
      "Theoretical and practicall lessons about: basics of programming concepts, syntax, and data types, and thenmoved on to more advanced topics like webdevelopment, data science, and machine learning.",
      "Practical tasks: created a program for currencyexchange and an online store from scratch on Django framework.",
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between md:gap-3">
      {experiences.map((experience, id) => {
        return (
          <React.Fragment key={id}>
            <SingleExperience experience={experience} />
            {id < 2 ? (
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
              >
                <FaArrowRight className="text-violet-100 text-6xl lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AllExperience;
