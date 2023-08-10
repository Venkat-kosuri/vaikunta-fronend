import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { clientImages, clientImages3 } from "./clientImages";

const HomePage = () => {
  const carouselOptions = {
    loop: true,
    nav: true,
    responsive: {
      768: {
        items: 7,
      },
    },
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    dots: true,
  };

  const firstCarouselOptions = {
    ...carouselOptions,
    dots: false,
    nav: false,
    rtl: false, // Slide from left to right
  };

  const secondCarouselOptions = {
    ...carouselOptions,
    dots: true,
    nav: true,
    rtl: true, // Slide from right to left
  };

  return (
    <div className="container-fluid px-4 ">
      <div className="container mx-auto px-4 mt-5 mb-4 md:mb-10 flex flex-wrap items-center justify-center">
        <div className="text-center md:w-[35rem]">
          <h6 className="text-1xl font-medium md:mb-3 mb-0 text-[#F5821F] uppercase">
            Empowering an Array of Clients
          </h6>
          <span className="text-2xl md:text-4xl font-bold md:mb-0 mb-3">
            Our Current
            <span className="text-[#F5821F] px-3 md:text-4xl font-bold">
              Clientele
            </span>
          </span>
        </div>
      </div>
      <div
        className="container-fluid mx-auto  md:mb-20"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <OwlCarousel className="owl-theme" {...firstCarouselOptions}>
          {clientImages.map((image) => (
            <div className="item mx-4" key={image.id}>
              <img
                className="md:w-[100px] md:h-[100px] object-contain mx-auto"
                src={image.url}
                alt={`Client ${image.id}`}
              />
            </div>
          ))}
        </OwlCarousel>
      </div>

      <div
        className="container-fluid mx-auto md:my-20 my-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <OwlCarousel className="owl-theme" {...secondCarouselOptions}>
          {clientImages3.map((image) => (
            <div className="item mx-4" key={image.id}>
              <img
                className="md:w-[150px] md:h-[150px] object-contain mx-auto"
                src={image.url}
                alt={`Client ${image.id}`}
              />
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default HomePage;
