import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const showToastMessage = () => {
    toast(
      "Thanks for contacting us, Our team will get back to you shortly :)",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const [formData, setFromData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    setFromData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await axios.post("http://localhost:3000/sendmail", formData);
      showToastMessage();
      setFromData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    } finally {
    }
  };

  return (
    <>
      <form className="w-full md:w-1/2" onSubmit={handleSubmit}>
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
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              name="email"
              value={formData.email}
              onChange={handleChange}
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
            name="phone"
            value={formData.phone}
            onChange={handleChange}
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
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="border-2 hover:bg-[#15102A] border-white text-white text-lg px-4 py-2 flex items-center transition-colors bg-[#F5821F] hover:text-[#fff] rounded-full"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="animate-spin h-5 w-5  mr-2">
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="animate-spin rounded-full border-t-2 border-white border-solid h-5 w-5"></div>
              </span>
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
      <ToastContainer />;
    </>
  );
};

export default Form;
