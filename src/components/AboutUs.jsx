import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import about from "../assets/images/About.jpg";
import founder from "../assets/images/prabhu.jpg";
import yrs from "../assets/images/20yrs.png";
const AboutUs = () => {
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
      <div
        className="bg-banner-image bg-cover bg-center h-64 flex items-center justify-center "
        style={{
          backgroundImage: `url(${about})`,
        }}
      ></div>
      <div className="container mx-auto px-4 py-5">
        <h2
          className="text-2xl font-bold mb-6 "
          data-aos="fade-up"
          data-aos-duration="1300"
        >
          Experience the Power of Customized Printing and Corporate Gifting:
        </h2>

        <p className="mb-4 " data-aos="fade-up" data-aos-duration="1300">
          We specialize in delivering personalized printing solutions and
          premium corporate gifts that leave a lasting impression. With our
          expertise and commitment to excellence, we go above and beyond to
          exceed your expectations and elevate your brand's image. Trust us to
          enhance our top-quality services in Bengaluru.
        </p>

        <div className="mt-8 " data-aos="fade-up" data-aos-duration="1300">
          <h3 className="text-xl font-bold mb-4">
            Why Choose Vaikunta Enterprises Print Solutions?
          </h3>
          <p className="mb-4">
            Since 2000, we're delighted that our hardworking team at Vaikunta
            Enterprises has been a premier print solutions company serving
            people throughout Bangalore and its surrounding areas. Over the past
            23 years, we've maintained an excellent reputation and partnered
            with renowned clients such as Mitsubishi, Emmvee, Sobha, ABB,
            Hitachi, and more luxury brands. Feel free to browse through some of
            the innovative services we've had the privilege to work on.
          </p>
        </div>

        <div className="mt-8" data-aos="fade-up" data-aos-duration="1300">
          <h3 className="text-xl font-bold mb-4">
            Printing Services: A One-Stop Solution for All Your Printing Needs
            in Today's Competitive Market
          </h3>
          <p className="mb-4 ">
            We understand the diverse requirements of businesses, from essential
            corporate stationery to impactful marketing materials. Our
            comprehensive range of services includes business cards, stationery,
            brochures, flyers, and promotional items, all crafted with the
            utmost precision and attention to detail. With our cutting-edge
            printing technology, we guarantee vibrant colors, sharp details, and
            long-lasting finishes that will make your brand stand out. Trust us
            to deliver exceptional print quality that captures the essence of
            your business and sets you apart from the competition.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <p className="py-8" data-aos="fade-up" data-aos-duration="1200">
          <h1 className="mb-4 text-2xl font-bold">
            We've Partnered with Companies for Over 23 Years to Build Successful
            Business Relationships.
          </h1>
          <p className="mb-4 text-black text-[20px] font-bold">
            What Are the Advantages of Digital Printing?
          </p>
          <ul className="list-disc list-inside ml-6">
            <li
              className="text-black mb-2"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Speed
            </li>
            <li
              className="text-black mb-2"
              data-aos="fade-up"
              data-aos-duration="1300"
            >
              High Quality
            </li>
            <li
              className="text-black mb-2"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Availability in All Sizes
            </li>
            <li
              className="text-black mb-2"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Reprints on Demand
            </li>
            <li
              className="text-black mb-2"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
              Actual Samples of Files
            </li>
          </ul>
          <p className="mt-6" data-aos="fade-up" data-aos-duration="1700">
            Our digital printing process is streamlined for our clients,
            ensuring a hassle-free experience. Just provide us with your files,
            and we'll send you a PDF proof for final approval before printing.
            This ensures the proof is correct and will print exactly as you had
            hoped. Once your high-quality digital prints are ready, we'll
            prepare your order for pickup or arrange shipping based on your
            individual needs. We'll schedule a project start time and pick-up
            time so you know what to expect. Regardless of the order size, we
            prioritize timeliness and quality.
          </p>
        </p>
      </div>

      <div
        className="container mx-auto px-4 py-10"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="flex  justify-center items-center md:flex-row flex-col-reverse">
          <div className="w-full md:w-1/2">
            <div className="text-center md:text-start">
              <h2 className="text-2xl font-bold mb-4 text-[#F5821F]">
                Founder &amp; CEO
              </h2>
              <h2 className="text-2xl font-bold mb-4 text-black">Mr. Prabhu</h2>
              <p className="text-gray-700">
                The company is led by the the Managing Director &amp; Founder,
                Mr. Prabhu, who has over two decades of experience in the
                printing industry. He's supported by a dedicated team of
                managers, executives, and skilled staff. Our constant endeavor
                has been to create a congenial working atmosphere, resulting in
                the best quality of products and services for our clients. We've
                assembled a team of highly experienced professionals who work in
                close coordination.
              </p>
            </div>
            <img
              src={`${yrs}`}
              alt=""
              className="w-auto md:w-52 h-auto py-3 text-center object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:flex-row flex-col-reverse">
            <img
              src={`${founder}`}
              alt="Team"
              className="rounded-t-lg h-auto w-[350px] border-2 border-[#F5821F] object-cover md:order-first"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
