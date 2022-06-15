import React from "react";
import { AiOutlineFundProjectionScreen, AiFillGithub } from "react-icons/ai";

const ProjectCard = ({ project }) => {
  return (
    <div className="my-10 mx-5 bg-white shadow-xl project-card">
      <img
        src={project?.image}
        alt={project?.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-8">
        <h3 className="text-black text-center text-2xl font-bold">
          {project?.title}
        </h3>
        {/* <div className="my-6 grid grid-cols-4 gap-2 text-center">
          {project?.tags.map((tag) => (
            <div>
              <span className="px-4 py-2 rounded-full text-white bg-blue-600 font-semibold text-sm flex align-center justify-center w-full cursor-pointer">
                {tag}
              </span>
            </div>
          ))}
        </div> */}
        <p className="text-black text-center text-lg my-3 leading-tight">
          {project?.about}
        </p>
        <div className="flex justify-center items-center space-x-5 mt-5 project-link-buttons">
          {project?.demo && (
            <a
              href={project?.demo}
              className="flex justify-center items-center p-5 w-full bg-blue-600 text-white text-xl cursor-pointer h-12 block hover:bg-yellow-600"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineFundProjectionScreen className="mx-2 text-white text-xl" />{" "}
              Demo
            </a>
          )}
          {project?.github && (
            <a
              href={project?.github}
              className="flex justify-center items-center p-5 w-full bg-blue-600 text-white text-xl cursor-pointer h-12 block hover:bg-yellow-600 shadow-2xl"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="mx-2 text-white text-xl" /> Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
