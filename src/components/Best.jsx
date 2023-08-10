import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Best = () => {
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
  return (
    <>
      <div
        className="container-fluid mx-auto px-4 my-14 bg-[#15102A]"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="flex flex-wrap flex-col md:flex-row justify-center text-white py-5 md:py-4 px-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap ">
              <div className="w-full">
                <h3 className="text-center section-header">
                  <span className="text-white">We are best at</span>
                </h3>
              </div>

              <div
                className="w-full md:w-1/4 text-center mb-4"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="rounded-full p-4 text-center mx-auto flex justify-center items-center transition-transform duration-300 ease-out hover:scale-90">
                  <a href="https://www.printstop.co.in/printsmart.html">
                    <div className="rounded-full border-4 border-[#e6e6e6] bg-[#FFFFFF] transition duration-300 ease-in-out inline-block w-32 h-32">
                      <div className="flex items-center h-full">
                        <img
                          alt="printsmart"
                          className="mx-auto"
                          src="https://deq64r0ss2hgl.cloudfront.net/images/contentimages/images/icon_printsmart.png"
                        />
                      </div>
                    </div>
                  </a>
                </div>
                <h4 className="mb-0 mt-3 font-bold">PrintSmart</h4>
                <p className="mb-0 short-disc text-secondary">
                  Hassle Free Printing
                </p>
              </div>
              <div
                className="w-full md:w-1/4 text-center mb-4"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="rounded-full p-4 text-center mx-auto flex justify-center items-center transition-transform duration-300 ease-out hover:scale-90">
                  <a href="https://www.printstop.co.in/printsmart.html">
                    <div className="rounded-full border-4 border-[#e6e6e6] bg-[#FFFFFF] transition duration-300 ease-in-out inline-block w-32 h-32">
                      <div className="flex items-center h-full">
                        <img
                          alt="printsmart"
                          className="mx-auto"
                          src="https://deq64r0ss2hgl.cloudfront.net/images/contentimages/images/icon_turnaround.png"
                        />
                      </div>
                    </div>
                  </a>
                </div>
                <h4 className="mb-0 mt-3 font-bold">Fast Turnaround</h4>
                <p className="mb-0 short-disc text-secondary">
                  24 hr Delivery Option
                </p>
              </div>
              <div
                className="w-full md:w-1/4 text-center mb-4"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="rounded-full p-4 text-center mx-auto flex justify-center items-center transition-transform duration-300 ease-out hover:scale-90">
                  <a href="https://www.printstop.co.in/printsmart.html">
                    <div className="rounded-full border-4 border-[#e6e6e6] bg-[#FFFFFF] transition duration-300 ease-in-out inline-block w-32 h-32">
                      <div className="flex items-center h-full">
                        <img
                          alt="printsmart"
                          className="mx-auto"
                          src="https://deq64r0ss2hgl.cloudfront.net/images/contentimages/images/icon_price.png"
                        />
                      </div>
                    </div>
                  </a>
                </div>
                <h4 className="mb-0 mt-3 font-bold">Best Prices</h4>
                <p className="mb-0 short-disc text-secondary">
                  Offering Great Deals
                </p>
              </div>
              <div
                className="w-full md:w-1/4 text-center mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="rounded-full p-4 text-center mx-auto flex justify-center items-center transition-transform duration-300 ease-out hover:scale-90">
                  <a href="https://www.printstop.co.in/printsmart.html">
                    <div className="rounded-full border-4 border-[#e6e6e6] bg-[#FFFFFF] transition duration-300 ease-in-out inline-block w-32 h-32">
                      <div className="flex items-center h-full">
                        <img
                          alt="printsmart"
                          className="mx-auto"
                          src="https://deq64r0ss2hgl.cloudfront.net/images/contentimages/images/icon_wide-range.png"
                        />
                      </div>
                    </div>
                  </a>
                </div>
                <h4 className="mb-0 mt-3 font-bold">Wide Range</h4>
                <p className="mb-0 short-disc text-secondary">
                  Products for All Needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Best;
