import { useState, useEffect } from "react";
import img1 from "../assets/image1.JPG";
import img2 from "../assets/image2.JPG";
import img3 from "../assets/image3.JPG";
import img4 from "../assets/image4.JPG";
import img5 from "../assets/image5.JPG";
import { FiPhone } from "react-icons/fi";

const images = [img1, img2, img3, img4, img5];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile]);

  // Mobile view
  if (isMobile) {
    return (
      <div
        className="h-[100vh]  flex flex-col justify-center px-4 text-white text-shadow-sm transition-all duration-1000"
        
      >
        <div className="flex flex-col  gap-4">
          <h2 className="text-4xl w-[380px]  font-semibold text-white leading-10">
            Welcome to MHP Construction Limited.{" "}
            <span className="text-[#B4A734]">Building Excellence,</span> And
            Sustaining Value
          </h2>
          <h3 className="text-white mt-3 font-semibold ">
            A proud subsidiary of Midhousepro Limited
          </h3>
          <p className="mt-4 w-full max-w-[350px]">
            At MHP Construction, we bring your dream home to life — beautifully
            and affordably. With over a decade of industry experience, we
            specialize in crafting exceptional spaces that reflect your vision
            while staying within your budget. Our friendly, customer-focused
            team makes us your go-to partner for all your home construction and
            interior design needs.
          </p>
          <button className="flex items-center gap-2 bg-[#13351D] text-white px-3 py-2 rounded-xl mt-6 hover:bg-[#BBC7BD] hover:text-[#0F2917] w-[150px]">
            <FiPhone />
            <a href="https://wa.me/2349036965601">Contact Us</a>
          </button>
        </div>
      </div>
    );
  }

  // Desktop view
  return (
    <div className="flex justify-between xl:px-32 md:max-lg:px-20 xl:py-20 md:max-lg:py-15 xl:mt-30 md:max-lg:mt-20">
      <div className="mt-30 md:max-lg:mt-15">
        <h1 className="text-6xl w-full max-w-[800px]  font-semibold  bg-gradient-to-t from-[#0F2917] via-[#B4A734] to-[#B4A734] text-transparent bg-clip-text xl:mb-5 ">
          Welcome to MHP Construction Limited, Building Excellence And
          Sustaining Value
        </h1>
        <h2 className="text-[#3F5445] text-2xl font-semibold md:max-lg:text-white">
          A proud subsidiary of Midhousepro Limited
        </h2>
        <p className="text-white lg:text-[#3F5445] w-full max-w-[750px] tracking-wider leading-6 mt-3 text-lg">
          At MHP Construction, we bring your dream home to life — beautifully
          and affordably. With over a decade of industry experience, we
          specialize in crafting exceptional spaces that reflect your vision
          while staying within your budget. Our friendly, customer-focused team
          makes us your go-to partner for all your home construction and
          interior design needs.
        </p>
        <button className="flex items-center gap-2 bg-[#13351D] text-white px-3 py-2 rounded-lg mt-3 hover:bg-[#BBC7BD] hover:text-[#0F2917]">
          <FiPhone />
          <a href="https://wa.me/2349036965601">Secure your space</a>
        </button>
      </div>
      <div className="overflow-hidden hidden lg:flex">
        <img
          src={images[currentImage]}
          alt="Hero"
          width={480}
          className="transition-opacity duration-1000 ease-in-out object-cover h-[580px] w-[500px] rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
