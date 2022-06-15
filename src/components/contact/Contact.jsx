import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Social from "../social/Social";

const Contact = () => {
  return (
    <div
      id="contact-section"
      className="max-w-lg w-full text-center m-auto pb-20"
      data-aos="fade-right"
    >
      <h6 className="text-3xl font-bold uppercase">
        Interested in working together?
      </h6>
      <a
        href="mailto:salman.me2110@gmail.com"
        className="mt-6 mb-5 w-64 h-12 font-display text-white text-base text-xl py-4 px-7 cursor-pointer flex justify-center items-center capitalize mx-auto hover:bg-yellow-600 bg-blue-600 shadow-2xl"
      >
        get in touch <BsArrowRightShort className="ml-1 text-2xl text-white" />
      </a>
      <Social />
    </div>
  );
};

export default Contact;
