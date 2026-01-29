import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 via-gray
        to-black text-white"
    >
      <div
        className="max-w-screen-lg p-1 mx-auto flex flex-col justify-center
      w-full h-full"
      >
        <div className="pb-8">
          <p className="justify-center font-signature text-7xl inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am an Electrical Engineering undergraduate at NIT Rourkela, with a
          strong interest in problem-solving and technology beyond my core
          academic curriculum. While my degree is rooted in electrical
          engineering, I have independently developed a solid foundation in
          software development, particularly in Java programming and backend
          development using Spring Boot. I have hands-on experience working with
          databases such as MySQL and MongoDB, and I actively practice Data
          Structures and Algorithms to strengthen my logical thinking and coding
          efficiency.
        </p>

        <br />

        <p className="text-xl">
          Driven by curiosity and a passion for building impactful systems, I am
          expanding my skill set toward full-stack development, focusing on the
          Java stack, while also gaining exposure to automation testing using
          Selenium. I enjoy learning through hands-on projects and continuous
          self-improvement. With a strong engineering mindset and the ability to
          adapt across domains, I am preparing myself for challenging software
          roles where I can contribute meaningfully and grow as a versatile
          engineer.
        </p>
      </div>
    </div>
  );
};

export default About;
