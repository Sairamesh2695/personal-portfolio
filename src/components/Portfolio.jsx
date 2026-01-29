import React from "react";
import ecommerce from "../assets/portfolio/ecommerce.jpg";
import resumescreening from "../assets/portfolio/resumescreening.jpg";
import banking from "../assets/portfolio/banking-system.png";
import spam from "../assets/portfolio/spam.png";
import quiz from "../assets/portfolio/quiz.png";
import list from "../assets/portfolio/to-do-list.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ecommerce,
      code: "https://github.com/Sairamesh2695/ecom-product-catalog.git",
    },
    {
      id: 2,
      src: spam,
      code: "https://github.com/Sairamesh2695/SMS-spam-Classifier.git",
    },
    {
      id: 3,
      src: banking,
      code: "https://github.com/Sairamesh2695/Bank-Management-System.git",
    },
    {
      id: 4,
      src: quiz,
      code: "https://github.com/Sairamesh2695/Quiz-Application.git",
    },
    {
      id: 5,
      src: resumescreening,
      code: "https://github.com/Sairamesh2695/Resume-Screening-App.git",
    },
    {
      id: 6,
      src: list,
      code: "https://github.com/Sairamesh2695/ToDo-List.git",
    },
  ];


  return (
    <div
      id="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="justify-center text-7xl inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />

              <div className="flex items-center justify-center">
                <a
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 text-center duration-200 hover:scale-105"
                >
                  Code
                </a>

                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;