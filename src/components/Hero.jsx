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
      <div className="h-[100vh] bg-cover bg-center flex flex-col justify-center px-6 text-white text-shadow-sm">
        <h2 className="text-4xl w-[380px]  font-semibold text-white leading-10">
          Welcome to MHP,{" "}
          <span className="text-[#B4A734]">Building Excellence,</span> And
          Sustaining Value
        </h2>
        <p className="mt-4 w-[380px]">
          Driven by integrity, defined by design. We deliver sustainable,
          precision-built spaces with unwavering commitment and transparency.
        </p>
        <button className="flex items-center gap-2 bg-[#13351D] text-white px-3 py-2 rounded-xl mt-6 hover:bg-[#BBC7BD] hover:text-[#0F2917] w-[150px]">
          <FiPhone />
          <a href="https://wa.me/2349036965601">Contact Us</a>
        </button>
      </div>
    );
  }

  // Desktop view
  return (
    <div className="flex justify-between px-32 py-20 mt-30">
      <div className="mt-30">
        <h1 className="text-7xl w-full max-w-[800px]  font-semibold bg-gradient-to-t from-[#0F2917] via-[#B4A734] to-[#B4A734] text-transparent bg-clip-text xl:mb-5">
          Welcome to MHP, Building Excellence And Sustaining Value
        </h1>
        <p className="text-[#3F5445] w-full max-w-[750px] tracking-wider leading-6 mt-3 text-lg">
          Redefining real estate through visionary construction & intelligent
          management, where architectural ambition meets executional excellence.
        </p>
        <button className="flex items-center gap-2 bg-[#13351D] text-white px-3 py-2 rounded-lg mt-3 hover:bg-[#BBC7BD] hover:text-[#0F2917]">
          <FiPhone />
          <a href="https://wa.me/2349036965601">Secure your space</a>
        </button>
      </div>
      <div className="overflow-hidden">
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
