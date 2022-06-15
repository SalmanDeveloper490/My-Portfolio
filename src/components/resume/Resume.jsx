import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Resume = () => {
  return (
    <div
      id="resume-section"
      className="max-w-lg w-full text-center m-auto pb-20"
      data-aos="fade-left"
    >
      <h2 className="text-3xl font-bold uppercase">
        Want to know more about me download my resume.
      </h2>
      <a
        href="https://drive.google.com/file/d/1pFiauDCTp_U3sQAvjG7FuvYO_b8RV3bl/view?usp=sharing"
        className="mt-6 mb-5 w-80 h-12 font-display text-white text-base text-xl py-4 px-7 cursor-pointer flex justify-center items-center capitalize mx-auto hover:bg-yellow-600 bg-blue-600 shadow-2xl"
        target="_blank"
        rel="noreferrer"
      >
        Download Resume{" "}
        <AiOutlineCloudDownload className="ml-1 text-2xl text-white" />
      </a>
    </div>
  );
};

export default Resume;
