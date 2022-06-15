import React from "react";
import Social from "../social/Social";
import TypingEffect from "../typingEffect/TypingEffect";

const Intro = ({ loading }) => {
  return (
    <div
      id="intro-section"
      className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5 m-12"
      data-aos="fade-down"
    >
      <img
        src={require("../../assets/images/avatar.jpg").default}
        alt="avatar"
        className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"
      />
      <div className="text-center mt-5">
        <h1 className="text-3xl text-gray-900 font-bold tracking-wider uppercase">
          Salman
        </h1>
        {/* <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2 designation">
          Full Stack Developer / Web Developer
        </p> */}
        <TypingEffect />
        <Social />
      </div>
    </div>
  );
};

export default Intro;
