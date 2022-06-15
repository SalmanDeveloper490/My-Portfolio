import React from "react";

const About = () => {
  return (
    <div
      id="about-section"
      className="max-w-6xl mt-14 mx-auto py-20"
      data-aos="fade-right"
    >
      <h2 className="text-3xl font-bold text-center uppercase">
        Hi 👋 all, I'm Salman
      </h2>
      <hr className="heading-seperator" />
      <p className="text-base sm:text-xl text-center text-gray-600 leading-tight mt-4 lg:px-32">
        A passionate{" "}
        <strong class="font-bold underline uppercase">
          Full Stack Web Developer
        </strong>
        , born and brought Amritsar (Punjab) in India. I am a Full Stack Web
        Developer with React.js, Nodejs, Express, PHP, MYSQL, MONGODB as my tech
        stack.Working with the clients, my goal is always driven towards
        providing amazing experience with the best level of quality and service
        to them.I love learning about new technologies, what problems are they
        solving and How can I use them to build better and scalable products.
      </p>
    </div>
  );
};

export default About;
