import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import badgecat from "../assets/images/badgecat.png";
import crystalcat from "../assets/images/crystalcat.png";
import DigitalPrintingi8 from "../assets/images/Digital-Printingi8.jpg";
import medalcat from "../assets/images/medalcat.png";
import premiumtrophy from "../assets/images/premiumtrophycat.png";
import trophywood from "../assets/images/trophywoodmetalcat.png";
import penscat from "../assets/images/penscat.png";
import { FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    // autoplayTimeout: 3000,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  const cards = [
    {
      id: 1,
      imageSrc: badgecat,
      title: "Name Badge and Accessories",
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
      <div className="container mx-auto ">
        <div className="item " key={card.id}>
          <div className="max-w-sm bg-[#15102A]  border border-gray-200 rounded-lg shadow hover:shadow-lg  dark:border-gray-700">
            <a href="#">
              <img
                src={card.imageSrc}
                alt={card.title}
                className="rounded-t-lg h-64 w-full object-cover"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2  text-[15px] font-bold tracking-tight  text-white">
                  {card.title}
                </h5>
              </a>

              <a
                href="#"
                className="inline-flex  border-white  border-2 items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-[#15102A] bg-[#F5821F]  focus:ring-4 focus:outline-none focus:ring-blue-300  transition-colors"
              >
                <span className="mr-1">View All </span>
                <FaArrowRight
                  className="ml-1 transition-transform duration-300"
                  size={18}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="container mx-auto px-4 my-16 flex flex-wrap  items-center justify-center">
        <div className="text-center md:w-[38rem]">
          <h6
            className="text-1xl font-medium mb-3 text-[#F5821F] uppercase"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Unleash Your Business Potential
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
              Spectacular Product{" "}
              <span
                className="text-2xl md:text-4xl text-black font-bold"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                {" "}
                Categories
              </span>
            </span>
          </span>
        </div>
      </div>
      <div className="container mx-auto px-2">
        <OwlCarousel className="owl-theme" {...options}>
          {renderCards()}
        </OwlCarousel>
      </div>
    </>
  );
};

export default Carousel;
