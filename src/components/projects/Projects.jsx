import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { ProjectsData } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import Slider from "react-slick";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 799,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          infinite: true,
          pauseOnHover: true,
        },
      },
    ],
  };
  return (
    <div
      id="projects-section"
      className="max-w-6xl mx-auto pb-20"
      data-aos="fade-left"
    >
      <h2 className="text-3xl text-center font-bold uppercase">
        Some of my Projects
      </h2>
      <hr className="heading-seperator" />
      <Slider {...settings}>
        {ProjectsData.map((project) => (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </Slider>
      <a
        href="https://github.com/SalmanDeveloper490?tab=repositories"
        className="my-14 mb-5 w-80 h-12 font-display text-white text-base text-xl py-4 px-7 cursor-pointer flex justify-center items-center capitalize mx-auto hover:bg-yellow-600 bg-blue-600 shadow-2xl"
        target="_blank"
        rel="noreferrer"
      >
        Check More Projects{" "}
        <BsArrowRightShort className="ml-1 text-2xl text-white" />
      </a>
    </div>
  );
};

export default Projects;
