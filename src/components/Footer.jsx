import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import ContactButton from "./ContactButton";
import { FaPhone, FaEnvelope, FaMapPin } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        setShowBackToTop(true);
        setShowWhatsApp(true);
      } else {
        setShowBackToTop(false);
        setShowWhatsApp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <footer className="bg-[#15102A] text-white py-10">
        <div className="container mx-auto flex flex-wrap  px-5  md:text-start">
          <div
            className="w-full md:w-1/4  px-5 sm:px-2 mb-6 md:mb-0 text-start"
            data-aos="fade-up"
          >
            <h6 className="text-lg font-bold mb-4 text-start">
              <img
                src={logo}
                alt=""
                className="h-[75px] mx-auto md:ml-0  text-start w-auto rounded-lg"
                data-aos="fade-up"
                data-aos-duration="1200"
              />
            </h6>
            <p className="text-sm">
              we specialize in delivering personalized printing solutions and
              premium corporate gifts that leave a lasting impression. With our
              expertise and commitment to excellence,
            </p>
            <p className="text-sm mt-1">
              we go above and beyond to exceed your expectations and elevate
              your brand's image. Trust us to enhance our top-quality services
              in Bengaluru.
            </p>
          </div>

          <div
            className="w-full md:w-1/4  px-5 sm:px-0 lg:pl-5 xl:pl-10 mb-6 md:mb-0"
            data-aos="fade-up"
          >
            <h6 className="text-lg font-bold mb-4">Get in Touch</h6>
            <div className="text-sm mb-2" data-aos="fade-up">
              <div className="flex  justify-start sm:justify-normal items-center ">
                <FaPhone className=" inline md:text-[20px] text-[1rem] sm:mr-1" />
                <div className="ml-2">
                  <a href="tel:+918431059686" className="text-white">
                    +91-8431059686 ,
                  </a>

                  <a href="tel:+918618331760" className="text-white ml-1">
                    +91-8618331760,
                  </a>
                  <br />
                  <a href="tel:+919743361222" className="text-white ml-1">
                    +91-9743361222,
                  </a>
                </div>
              </div>
            </div>

            <div className="text-sm mb-2" data-aos="fade-up">
              <div className="flex  justify-start sm:justify-normal items-center ">
                <FaEnvelope className="inline md:text-[20px] text-[1rem] sm:mr-1" />
                <div className="ml-2">
                  <a
                    href="https://mail.google.com/mail/?view=cm&amp;to=cauveryprints10@gmail.com"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="fade-up"
                  >
                    cauveryprints10@gmail.com,
                  </a>
                  <br />
                  <a
                    href="https://mail.google.com/mail/?view=cm&amp;to=cauveryprints@yahoo.co.in"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="fade-up"
                  >
                    cauveryprints@yahoo.co.in
                  </a>
                </div>
              </div>
            </div>

            <div className="text-sm mb-2" data-aos="fade-up">
              <div className="flex  justify-start sm:justify-normal items-center ">
                <FaMapPin className="inline md:text-[20px] text-[1rem] sm:mr-1" />{" "}
                <div className="ml-2">
                  <a
                    href="https://goo.gl/maps/epH5zXoJPbNbwVVa8"
                    className="text-white text-[14px] ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="fade-up"
                  >
                    #544, 1st Main, 1st Cross
                  </a>
                  <br className=" block sm:hidden" />
                  <a
                    href="https://goo.gl/maps/epH5zXoJPbNbwVVa8"
                    className="text-white text-[14px] ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="fade-up"
                  >
                    R.T. Nagar, Bangalore - 560032.
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-full  md:w-1/4  px-5 sm:px-10 sm:text-center mb-6 md:mb-0"
            data-aos="fade-up"
          >
            <h6 className="text-lg font-bold mb-4">Useful Links</h6>
            <ul className="text-md flex justify-center flex-col">
              <li className="mb-2 flex  justify-start sm:justify-center items-center">
                <BiChevronRight className="text-2xl" />
                <Link to="/" className="mr-2 w-20">
                  Home
                </Link>
              </li>
              <li className="mb-2 flex  justify-start sm:justify-center items-center">
                <BiChevronRight className="mr-1 text-2xl" />
                <Link to="/about-us" className="w-20">
                  About Us
                </Link>
              </li>
              <li className="mb-2 flex  justify-start sm:justify-center items-center">
                <BiChevronRight className="mr-1 text-2xl" />
                <Link to="#" className="w-20">
                  Products
                </Link>
              </li>
              <li className="mb-2 flex  justify-start sm:justify-center items-center">
                <BiChevronRight className="mr-1 text-2xl" />
                <Link to="/contact-us" className="w-20">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="w-full md:w-1/4 px-5  mb-6 md:mb-0"
            data-aos="fade-up"
          >
            <h6 className="text-lg font-bold mb-4">Connect with Us</h6>
            <div className="flex space-x-4 md:justify-start ">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:bg-[#15102A] bg-[#F5821F] hover:transition-all hover:duration-300 hover:animate-pulse p-2 rounded-full"
              >
                <FaLinkedinIn className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white  hover:bg-[#15102A] bg-[#F5821F] hover:transition-all hover:duration-300 hover:animate-pulse p-2 rounded-full"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:bg-[#15102A] bg-[#F5821F] hover:transition-all hover:duration-300 hover:animate-pulse p-2 rounded-full"
              >
                <FaFacebook className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-[#15102A] text-white py-10 relative flex flex-col">
        {showBackToTop && (
          <button
            className="fixed bottom-8 right-8 bg-white text-[#15102A] text-2xl p-2 rounded-full shadow-lg transition-all duration-300 hover:bg-gray-300 hover:text-[#F5821F]"
            onClick={scrollTop}
          >
            <FaArrowUp />
          </button>
        )}

        {showWhatsApp && <ContactButton />}
      </footer>
    </div>
  );
};

export default Footer;
