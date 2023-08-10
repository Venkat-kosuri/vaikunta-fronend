import React, { useState, useEffect } from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
} from "react-icons/ai";
import logo from "../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [location]);

  return (
    <div>
      <nav className="bg-[#15102A] ">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Left side of the navbar */}
            <div className="flex items-center">
              <div className="md:ml-6 md:flex">
                {isMobile ? (
                  <div className="flex">
                    <span className="flex text-[#F5821F] hover:text-[#fff] cursor-pointer mt-1">
                      <AiOutlineEnvironment size={20} />
                    </span>
                    <span>
                      <a
                        href="https://goo.gl/maps/epH5zXoJPbNbwVVa8"
                        className="text-white hover:text-[#F5821F] ml-3 text-[14px]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Directions
                      </a>
                    </span>
                  </div>
                ) : (
                  <>
                    <span className="hidden md:block text-white hover:text-[#F5821F]">
                      <AiOutlineMail
                        className="inline text-[#F5821F] hover:text-[#fff]"
                        size={20}
                      />
                      <a
                        href="https://mail.google.com/mail/?view=cm&amp;to=cauveryprints10@gmail.com"
                        className="text-white hover:text-[#F5821F] ml-3"
                        target="_blank"
                      >
                        cauveryprints10@gmail.com
                      </a>
                    </span>
                    <span className="mx-2 hidden md:block text-white">|</span>

                    <span className="text-[#F5821F] hover:text-[#fff] cursor-pointer mt-1">
                      <AiOutlineEnvironment size={20} />
                    </span>
                    <span>
                      <a
                        href="https://goo.gl/maps/epH5zXoJPbNbwVVa8"
                        className="text-white hover:text-[#F5821F] text-[14px] ml-3"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        # 544, 1st Main, 1st Cross R.T. Nagar, Bangalore -
                        560032.
                      </a>
                    </span>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex">
                <span className="text-white hover:text-[#F5821F]">
                  <AiOutlinePhone
                    className="inline text-[#F5821F] hover:text-[#fff]"
                    size={20}
                  />

                  <a
                    href="tel:+919844030692"
                    className="text-white hover:text-[#F5821F] ml-3"
                  >
                    +91 98440 30692
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="  top-0 container mx-auto p-2 ">
        <div className="flex items-center justify-between">
          <div className="pt-4 flex items-center">
            <Link to="/">
              <img src={logo} alt="" className="h-[75px] w-auto" />
            </Link>
          </div>

          <div className="hidden space-x-6 md:flex">
            <Link to="/" className="hover:text-[#F5821F] font-bold">
              Home
            </Link>
            <Link to="/about-us" className="hover:text-[#F5821F] font-bold">
              About Us
            </Link>
            <Link to="/products" className="hover:text-[#F5821F] font-bold">
              Products
            </Link>

            <Link to="/contact-us" className="hover:text-[#F5821F] font-bold">
              Contact Us
            </Link>
          </div>
          <span>
            <a
              href="#"
              className="hidden p-3 px-6 pt-2 text-white bg-[#15102A] rounded-full baseline hover:bg-[#F5821F] md:block transition-colors duration-300 ease-in-out"
            >
              Get Started
            </a>
          </span>
          <button
            className="block hamburger md:hidden focus:outline-none p-2 rounded-md text-gray-900 hover:text-gray-700 transition duration-300 ease-in-out transform hover:scale-110"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center">
            <div
              className="absolute w-screen h-screen bg-black opacity-100"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
            <div className="w-4/5 max-w-xs bg-white rounded-lg shadow-md relative">
              <button
                className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex-col items-center py-8 space-y-6 font-bold overflow-y-auto">
                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-800 font-bold hover:bg-gray-100"
                >
                  Home
                </Link>

                <Link
                  to="/about-us"
                  className="block px-4 py-2 text-gray-800 font-bold hover:bg-gray-100"
                >
                  About Us
                </Link>

                <Link
                  to="/products"
                  className="block px-4 py-2 text-gray-800 font-bold hover:bg-gray-100"
                >
                  Products
                </Link>

                <Link
                  to="/contact-us"
                  className="block px-4 py-2 text-gray-800 font-bold hover:bg-gray-100"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
