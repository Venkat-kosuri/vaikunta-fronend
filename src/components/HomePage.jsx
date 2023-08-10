import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
// import product from "../assets/images/product.png";
import Hero from "./Hero";
import Carousel from "./Carousel";
// import Clients from "./Client";
import Upcoming from "./Upcoming";
import Best from "./Best";
const HomePage = () => {
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
  return (
    <>
      <Hero />
      {/* <Clients /> */}
      <Carousel />
      <Upcoming />
      <Best />

      {/* <div
        className="container mx-auto px-4 my-14 flex flex-wrap items-center"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
          <div className="max-w-sm md:max-w-md lg:max-w-[35rem] text-center md:text-left">
            <h6 className="text-1xl font-medium mb-4 text-[#F5821F] uppercase">
              Let’s get printing
            </h6>
            <span className="text-3xl md:text-5xl font-medium">
              Reasons to get{" "}
              <span className="text-[#F5821F]">Printing started</span>
            </span>
            <span className="pl-1 text-3xl md:text-5xl font-medium">
              with us
            </span>
            <p className="pt-5 text-1xl">
              We have all the equipment, know-how and everything you will need
              to receive fast, reliable printing services with high-quality
              results. Chat live with us today to get things moving.
            </p>
          </div>
        </div>
        <div
          className="w-full md:w-1/2 px-4"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <img src={product} alt="Image" className="object-cover rounded-lg" />
        </div>
      </div> */}
      <div className="container mx-auto px-4 md:my-20 my-10  md:flex md:flex-row flex-col">
        <div
          className="text-center py-6 md:py-12 w-full md:w-1/2"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <span className="text-2xl md:text-4xl font-bold">
            <span className="text-[#F5821F] px-3 md:text-4xl font-bold">
              Say Hi! Send us{" "}
              <span className="text-2xl md:text-4xl text-black font-bold">
                a message..
              </span>
            </span>
          </span>
          <p className="mt-4 md:mt-8">
            Feel free to reach out to our team experts and get your queries
            sorted out!
          </p>
        </div>
        <form className="w-full md:w-1/2">
          <div className="flex md:flex-row flex-col w-full">
            <div className="mb-4 w-full">
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-bold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Enter your first name"
              />
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Enter your email address"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-gray-700 font-bold mb-2"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your mobile number"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="border-2 hover:bg-[#15102A] border-white text-white text-lg px-4 py-2 flex items-center transition-colors bg-[#F5821F] hover:text-[#fff] rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default HomePage;
