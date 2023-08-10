import React, { useState } from "react";

const QuoteModal = ({ product, onClose }) => {
  const [formData, setFormData] = useState({
    productName: product.product_title,
    quantity: "",
    name: "",
    email: "",
    address: "",
    specialNotes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g. send data to server
    console.log("Form data:", formData);
    onClose();
  };

  return (
    <div className="container mx-auto px-4 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10">
      <div className="bg-white p-8 rounded-lg w-full">
        <p className="text-xl font-medium mb-4 text-[#15102A]">
          Send your Request We'll give you the quote
        </p>
        <h2 className="font-extrabold text-[#F5821F] ">
          FILL OUT THE DETAILS:
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="md:flex w-full justify-around">
            <div className="mt-4 w-full  md:mr-4">
              <label htmlFor="productName ">Product Name:</label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                readOnly
                className="bg-gray-50 border   border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              />
            </div>
            <div className="mt-4 w-full md:mr-4 ">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              />
            </div>
          </div>
          <div className="md:flex w-full justify-around">
            <div className="mt-4 w-full  md:mr-4">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              />
            </div>
            <div className="mt-4 w-full  md:mr-4">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              />
            </div>
          </div>
          <div className="mt-4 md:mr-4">
            <label htmlFor="address">Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mt-4 md:mr-4">
            <label htmlFor="specialNotes">Other Notes:</label>
            <textarea
              name="specialNotes"
              value={formData.specialNotes}
              onChange={handleChange}
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-[#F5821F]  text-white px-4 py-2 rounded-lg mr-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Send Request
            </button>
            <button
              type="button"
              className="bg-[#15102A] text-white px-4 py-2 rounded-lg hover:bg-gray-500 focus:outline-none focus:ring focus:border-gray-300"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;
