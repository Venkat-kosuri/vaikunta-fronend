import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import about from "../assets/images/About.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import productData from "./productData";
import QuoteModal from "./QuoteModal";

const Products = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openQuoteModal = (product) => {
    setSelectedProduct(product);
  };

  const closeQuoteModal = () => {
    setSelectedProduct(null);
  };

  // Calculate product counts for each category
  const productCounts = productData.map((category) => category.products.length);

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === "All"
      ? productData.reduce(
          (acc, category) => [...acc, ...category.products],
          []
        )
      : productData.find((category) => category.category === selectedCategory)
          ?.products || [];

  return (
    <>
      <div
        className="bg-banner-image bg-cover bg-center h-64 flex items-center justify-center "
        style={{
          backgroundImage: `url(${about})`,
        }}
      ></div>
      <div className="container mx-auto p-4 md:my-20">
        <div className="flex flex-wrap justify-center space-x-3 sm:space-x-4 mb-4">
          {["All", ...productData.map((category) => category.category)].map(
            (category, index) => (
              <button
                key={index}
                className={`${
                  selectedCategory === category
                    ? "bg-[#F5821F]"
                    : "bg-[#15102A]"
                } rounded px-4 py-2 text-white mb-4 text-[15px] sm:text-[1rem]`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}{" "}
                {selectedCategory === category &&
                  `(${
                    category === "All"
                      ? productCounts.reduce((a, b) => a + b, 0)
                      : productCounts[index - 1]
                  })`}
              </button>
            )
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white pb-7 shadow-md text-center relative group rounded-lg"
            >
              <div className="relative overflow-hidden">
                <LazyLoadImage
                  src={product.product_image}
                  alt={product.product_title}
                  effect="blur"
                  className="rounded-t-lg h-full w-full lg:h-[270px] xxl:h-[340px]  object-cover hover:scale-105 hover:transition-transform hover:duration-300 "
                />
                <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="bg-black inline-flex justify-center items-center bg-opacity-75 text-white rounded-lg  transform scale-0 group-hover:scale-100 w-full h-full  duration-1000 ">
                    <button
                      className="text-lg font-semibold"
                      onClick={() => openQuoteModal(product)}
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold">
                  {product.product_title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProduct && (
        <QuoteModal product={selectedProduct} onClose={closeQuoteModal} />
      )}
    </>
  );
};

export default Products;
