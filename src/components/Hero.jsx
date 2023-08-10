import React, { useEffect } from "react";
import slider1 from "../assets/images/slider1.png";
import slider2 from "../assets/images/slider-2.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { clientImages, clientImages3 } from "./clientImages";
import "./hero.css";

const Hero = () => {
  const carouselOptions = {
    loop: true,
    nav: false,
    responsive: {
      768: {
        items: 7,
      },
    },
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 3000,
    autoplayHoverPause: false,
    dots: false,
  };

  const firstCarouselOptions = {
    ...carouselOptions,
    dots: false,
    nav: false,
    rtl: false, // Slide from left to right
  };

  const secondCarouselOptions = {
    ...carouselOptions,
    dots: false,
    nav: false,
    rtl: false, // Slide from right to left
  };

  useEffect(() => {
    new Swiper(".intro-carousel", {
      speed: 2000,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: "auto",
    });
  }, []);

  return (
    <div className="intro intro-carousel swiper relative">
      <div className="swiper-wrapper  ">
        <div
          className="swiper-slide carousel-item-a intro-item bg-image covering-text"
          style={{
            backgroundImage: `url(${slider1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="container mx-auto px-4 my-16">
            <div className="overlay overlay-a"></div>
            <div className="intro-content">
              <div className="flex flex-col items-center justify-center h-full sm:pt-12 md:pt-5">
                <div className="intro-body">
                  <div className="container">
                    <h1 className="intro-title mb-2 text-2xl sm:text-5xl text-white">
                      <span className="color-b ">Professional </span>
                      <br className="hidden sm:block lg:hidden xl:block" />
                      Printing Services
                    </h1>
                    <p className="intro-subtitle intro-price">
                      <a href="#">
                        <span className="price-a hover:bg-[#F5821F] hover:text-white text-white">
                          Get a Quote
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mx-auto carousel-logos flex flex-col items-end justify-end pb-10 xl:pb-16 ">
            <OwlCarousel
              className="owl-theme bg-[#FFFFFF] opacity-90 p-4 sm:p-2 xl:p-3 md:p-2"
              {...firstCarouselOptions}
            >
              {clientImages.map((image) => (
                <div className="item mx-4 " key={image.id}>
                  <img
                    className="md:w-[100px] md:h-[100px] object-contain mx-auto"
                    src={image.url}
                    alt={`Client ${image.id}`}
                  />
                </div>
              ))}
            </OwlCarousel>
            <OwlCarousel
              className="owl-theme bg-[#FFFFFF] opacity-90 p-4 sm:p-2 xl:p-3 md:p-2 hidden  "
              {...secondCarouselOptions}
            >
              {clientImages3.map((image) => (
                <div className="item mx-4 " key={image.id}>
                  <img
                    className="md:w-[100px] md:h-[100px] object-contain mx-auto"
                    src={image.url}
                    alt={`Client ${image.id}`}
                  />
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
        <div
          className="swiper-slide carousel-item-a intro-item bg-image covering-text"
          style={{
            backgroundImage: `url(${slider2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="container mx-auto px-4 my-16">
            <div className="overlay overlay-a"></div>
            <div className="intro-content">
              <div className="flex flex-col items-center justify-center h-full sm:pt-12 md:pt-5">
                <div className="intro-body">
                  <div className="container">
                    <h1 className="intro-title mb-2 text-2xl sm:text-5xl text-white">
                      <span className="color-b">High-Quality </span>
                      <br className="hidden sm:block lg:hidden xl:block" />
                      Printing Services
                    </h1>
                    <p className="intro-subtitle intro-price">
                      <a href="#">
                        <span className="price-a hover:bg-[#F5821F] hover:text-white text-white">
                          Get a Quote
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mx-auto carousel-logos flex flex-col items-end justify-end pb-10 xl:pb-16">
            <OwlCarousel
              className="owl-theme bg-[#FFFFFF] opacity-90 p-4 sm:p-2 xl:p-3 md:p-2"
              {...firstCarouselOptions}
            >
              {clientImages.map((image) => (
                <div className="item mx-4 " key={image.id}>
                  <img
                    className="md:w-[100px] md:h-[100px] object-contain mx-auto"
                    src={image.url}
                    alt={`Client ${image.id}`}
                  />
                </div>
              ))}
            </OwlCarousel>
            <OwlCarousel
              className="owl-theme bg-[#FFFFFF] opacity-90 p-4 sm:p-2 xl:p-3 md:p-2 hidden "
              {...secondCarouselOptions}
            >
              {clientImages3.map((image) => (
                <div className="item mx-4 " key={image.id}>
                  <img
                    className="md:w-[100px] md:h-[100px] object-contain mx-auto"
                    src={image.url}
                    alt={`Client ${image.id}`}
                  />
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
        <div
          className="swiper-slide carousel-item-a intro-item bg-image covering-text"
          style={{
            backgroundImage: `url(${slider2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="container mx-auto px-4 my-16">
            <div className="overlay overlay-a"></div>
            <div className="intro-content">
              <div className="flex flex-col items-center justify-center h-full sm:pt-12 md:pt-5">
                <div className="intro-body">
                  <div className="container">
                    <h1 className="intro-title mb-2 text-2xl sm:text-5xl text-white">
                      <span className="color-b">Customized </span>
                      <br className="hidden sm:block lg:hidden xl:block" />
                      Printing Solutions
                    </h1>
                    <p className="intro-subtitle intro-price">
                      <a href="#">
                        <span className="price-a hover:bg-[#F5821F] hover:text-white text-white">
                          Get a Quote
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mx-auto carousel-logos flex flex-col items-end justify-end pb-10 xl:pb-16">
            <OwlCarousel
              className="owl-theme bg-[#FFFFFF] opacity-90 p-4 sm:p-2 xl:p-3 md:p-2"
              {...firstCarouselOptions}
            >
              {clientImages.map((image) => (
                <div className="item mx-4 " key={image.id}>
                  <img
                    className="md:w-[100px] md:h-[100px] object-contain mx-auto"
                    src={image.url}
                    alt={`Client ${image.id}`}
                  />
                </div>
              ))}
            </OwlCarousel>
            <OwlCarousel
              className="owl-theme bg-[#FFFFFF] opacity-90 p-4 sm:p-2 xl:p-3 md:p-2 hidden "
              {...secondCarouselOptions}
            >
              {clientImages3.map((image) => (
                <div className="item mx-4 " key={image.id}>
                  <img
                    className="md:w-[100px] md:h-[100px] object-contain mx-auto"
                    src={image.url}
                    alt={`Client ${image.id}`}
                  />
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
      <div className="hidden sm:block swiper-pagination"></div>
    </div>
  );
};

export default Hero;
