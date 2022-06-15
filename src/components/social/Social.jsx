import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillCodeSandboxCircle,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Social = ({ dark }) => {
  return (
    <div className="flex align-center justify-center mt-2">
      <a
        href="https://github.com/SalmanDeveloper490?tab=repositories"
        className="text-3xl p-3 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300
        git-icon"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/salman-khan-aa514020b/"
        className="text-3xl p-3 text-blue-600 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://twitter.com/salmanbeas"
        className="text-3xl p-3 text-blue-600 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillTwitterCircle />
      </a>
      <a
        href="mailto:salman.me2110@gmail.com"
        className="text-3xl p-3 text-red-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
      >
        <SiGmail />
      </a>
    </div>
  );
};

export default Social;
