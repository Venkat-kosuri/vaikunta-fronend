import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
import badgecat from "../assets/images/badgecat.png";
import crystalcat from "../assets/images/crystalcat.png";
import DigitalPrintingi8 from "../assets/images/Digital-Printingi8.jpg";
import medalcat from "../assets/images/medalcat.png";
import premiumtrophy from "../assets/images/premiumtrophycat.png";
import trophywood from "../assets/images/trophywoodmetalcat.png";
import penscat from "../assets/images/penscat.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Upcoming = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  const cards = [
    {
      id: 1,
      imageSrc: badgecat,
      title: " Badge and Accessories",
    },
    {
      id: 2,
      imageSrc: premiumtrophy,
      title: "Trophies Premium",
    },
    {
      id: 3,
      imageSrc: trophywood,
      title: "Trophies Wood, Metal & Fiber",
    },
    {
      id: 4,
      imageSrc: medalcat,
      title: "Medals",
    },
    {
      id: 5,
      imageSrc: crystalcat,
      title: "Trophies Crystal",
    },
    {
      id: 6,
      imageSrc: penscat,
      title: "Pens Metals, Plastic & Wood",
    },
    {
      id: 7,
      imageSrc: DigitalPrintingi8,
      title: "Digital Printing",
    },
  ];

  const renderCards = () => {
    return cards.map((card) => (
      <div className="container mx-auto mb-6" key={card.id}>
        <div
          className="max-w-sm bg-[#fff] border p-5 border-gray-200 rounded-lg shadow hover:shadow-lg dark:border-gray-700"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <a href="#">
            <img
              src={card.imageSrc}
              alt={card.title}
              className="rounded-t-lg h-64 w-full object-cover border border-gray-300 hover:scale-105 hover:transition-all hover:duration-500"
            />
          </a>
          <div className="p-5 flex flex-col items-center">
            <a href="#">
              <h5 className="mb-2 text-1xl font-bold tracking-tight text-[#15102A] text-center">
                {card.title}
              </h5>
            </a>
            <Link
              to="/products"
              className="inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-[#fff] rounded-lg hover:bg-[#15102A] bg-[#F5821F] focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors mt-4"
            >
              {" "}
              <span className="mr-1">View All </span>{" "}
              <FaArrowRight
                className="ml-1 transition-transform duration-300"
                size={18}
              />
            </Link>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="container mx-auto px-4 my-14 flex flex-wrap items-center justify-center md:justify-center">
        <div className="text-center md:w-[35rem]">
          <h6
            className="text-1xl font-medium mb-3 text-[#F5821F] uppercase"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            The Latest Trends
          </h6>
          <span
            className="text-2xl md:text-4xl font-bold"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Explore Our
            <span
              className="text-[#F5821F] px-3 md:text-4xl font-bold"
              data-aos="fade-up"
              data-aos-duration="1300"
            >
              Curated Popular{" "}
              <span
                className="text-2xl md:text-4xl text-black font-bold"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                Categories
              </span>
            </span>
          </span>
        </div>

        <div className="container mx-auto mt-5 md:mt-0 px-4 flex flex-wrap items-center justify-center md:justify-end ">
          <Link to="/products">
            {" "}
            <button className="inline-flex items-center border-2 hover:bg-[#15102A] border-[#F5821F] hover:border-[#15102A] text-[#fff] text-lg px-4 py-2 transition-colors bg-[#F5821F] hover:text-[#fff] rounded-full w-auto">
              View All
              <FaArrowRight className="ml-2" />
            </button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 my-16 grid gap-2 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {renderCards()}
      </div>
    </>
  );
};

export default Upcoming;
