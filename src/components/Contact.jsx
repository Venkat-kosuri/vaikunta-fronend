import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import contactImage from "../assets/images/Contact.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Form from "./Form";
import {
  AiOutlineEnvironment,
  AiOutlinePhone,
  AiOutlineClockCircle,
} from "react-icons/ai";
const Contact = () => {
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

  const [formData, setFromData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (event) => {
    setFromData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    try {
      var result = await axios.post(
        "https://vaikuntaapi.onrender.com/sendmail"
      );
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div
        className="bg-banner-image bg-cover bg-center h-64 flex items-center justify-center"
        style={{
          backgroundImage: `url(${contactImage})`,
        }}
      >
        <div className="container mx-auto text-white text-start px-4"></div>
      </div>
      <div className="container mx-auto px-4 my-10 flex flex-wrap items-center justify-center">
        <div className="text-center md:w-[35rem] py-6 md:py-12">
          <span className="text-2xl md:text-4xl font-bold">
            <span
              className="text-[#F5821F] px-3 md:text-4xl font-bold"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              We’d love to hear{" "}
              <span
                className="text-2xl md:text-4xl text-black font-bold"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                from you
              </span>
            </span>
          </span>
          <p
            className="mt-4 md:mt-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Get in touch to discuss your employee wellbeing needs today. Please
            give us a call, drop us an email, or fill out the contact form, and
            we’ll get back to you.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 my-16">
        <div className="flex flex-wrap items-center justify-center ">
          <div className="w-full text-center md:w-1/3">
            <div
              className="flex justify-center items-center mb-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div
                className="rounded-full p-3 flex items-center justify-center transition-transform duration-300 ease-out hover:scale-90"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <span className="hover:bg-[#15102A] p-7 rounded-full shadow-md bg-[#F5821F]">
                  <AiOutlineEnvironment className="text-4xl text-[#fff]" />
                </span>
              </div>
            </div>
            <div className="text-center md:mb-9 mb-0">
              <h2
                className="ml-4 mb-2 text-lg font-bold"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                Address
              </h2>
              <p data-aos="fade-up" data-aos-duration="1200">
                # 544, 1st Main, 1st Cross R.T. Nagar, <br /> Bangalore -
                560032.
              </p>
              <p>
                <a
                  href="https://goo.gl/maps/epH5zXoJPbNbwVVa8"
                  className="ml-1 text-[14px]"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up "
                  data-aos-duration="1200"
                >
                  Click here to get the map
                </a>
              </p>
            </div>
          </div>
          <div className="w-full text-center md:w-1/3">
            <div
              className="flex justify-center items-center mb-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div
                className="rounded-full p-3 flex items-center justify-center transition-transform duration-300 ease-out hover:scale-90"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <span className="hover:bg-[#15102A] p-7 rounded-full shadow-md bg-[#F5821F]">
                  <AiOutlinePhone className="text-4xl text-[#fff]" />
                </span>
              </div>
            </div>
            <div className="text-center">
              <h2
                className="ml-4 mb-2 text-lg font-bold"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                Get in Touch
              </h2>
              <p data-aos="fade-up" data-aos-duration="1200">
                Office: <a href="tel:+918431059686">+91-8431059686</a>,{" "}
                <a href="tel:+918618331760">+91-8618331760</a>
              </p>
              <p data-aos="fade-up" data-aos-duration="1200">
                Mobile: <a href="tel:+919743361222">+91 9743361222</a>
              </p>
              <p data-aos="fade-up" data-aos-duration="1200">
                WhatsApp:{" "}
                <a href="https://wa.me/918618331760">+91-8618331760</a>
              </p>
              <p data-aos="fade-up" data-aos-duration="1200">
                Email:{" "}
                <a
                  href="https://mail.google.com/mail/?view=cm&amp;to=cauveryprints@yahoo.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cauveryprints@yahoo.co.in
                </a>
                ,{" "}
                <a
                  href="https://mail.google.com/mail/?view=cm&amp;to=cauveryprints10@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cauveryprints10@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="w-full text-center md:w-1/3">
            <div
              className="flex justify-center items-center mb-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div
                className="rounded-full p-3 flex items-center justify-center transition-transform duration-300 ease-out hover:scale-90"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <span className="hover:bg-[#15102A] p-7 rounded-full shadow-md bg-[#F5821F]">
                  <AiOutlineClockCircle className="text-4xl text-[#fff]" />
                </span>
              </div>
            </div>
            <div className="text-center mb-12">
              <h2
                className="ml-4 mb-2 text-lg font-bold"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                Hours of Operation
              </h2>
              <p data-aos="fade-up" data-aos-duration="1200">
                Monday - Friday: 9:00 AM - 6:30 PM
              </p>
              <p data-aos="fade-up" data-aos-duration="1200">
                Saturday: 9:00 AM - 1:30 PM
              </p>
              <p data-aos="fade-up" data-aos-duration="1200">
                Sunday: Closed
              </p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 my-8">
        <div
          className="mt-16 mb-8 rounded overflow-hidden relative"
          data-aos="fade-up"
          data-aos-duration="1600"
        >
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d62208.82442832954!2d77.56999750614071!3d12.968554709531164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bae17ade55be763%3A0x1d56964385ea91dd!2svaikunta%20enterprises%20%23%20544%2C%2018%2C%205th%20cross%20road%2C%20rahmath%20nagar%2C%20rt%20nagar%2C%20bengaluru!3m2!1d13.0171373!2d77.59685859999999!5e0!3m2!1sen!2sin!4v1688884948425!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="container mx-auto px-4 my-10  md:flex md:flex-row flex-col">
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
        <Form />
      </div>
    </>
  );
};

export default Contact;
