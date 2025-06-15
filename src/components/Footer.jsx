import { FiPhone } from "react-icons/fi";
import logo from "../assets/Logo.png";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentYear = new Date().getFullYear();
  return (
    <div className="max-xl:mt-14">
      <section className="bg-[#0F2917] flex flex-col text-white xl:py-16 max-xl:py-6 max-xl:px-2 ">
        <div className="text-center items-center flex flex-col justify-center">
          <h1 className="text-3xl font-semibold mb-4 max-xl:text-4xl">
            Partner with us
          </h1>
          <p className="text-[#BBC7BD] w-full max-w-[600px] max-xl:w-[380px] max-xl:leading-6 text-sm tracking-wider">
            MHP Construction collaborates with forward-thinking investors,
            developers, and property owners who demand more than conventional
            solutions. Connect with our executive team to explore how we can
            elevate your next project beyond conventional expectations.{" "}
          </p>
          <button className="flex text-center items-center gap-2  text-[#0F2917] px-3 py-2 rounded-xl mt-6 bg-[#BBC7BD] xl:w-[150px]">
            <FiPhone />
            <a href="#contact">Contact Us</a>
          </button>
        </div>

        <div>
          {/* //mobile view */}
          {isMobile ? (
            <div className="mt-10">
              <hr className="border-[#3F5445]" />
              <div className="flex gap-2 mt-4 justify-center">
                <p className="flex gap-1 text-sm text-center justify-center items-center">
                  <a
                    href="https://www.facebook.com/share/1AcNCdy5Xo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <IoLogoFacebook className="text-md " />
                  </a>
                  MHPConstruction
                </p>
                <p className="flex gap-1 text-sm text-center justify-center items-center">
                  <a
                    href="https://www.instagram.com/mhpconstruction?igsh=MWx2MGc5dzZxNml2bg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm"
                  >
                    <IoLogoInstagram className="text-sm" />
                  </a>
                  @mhpconstruction
                </p>
                <p className="flex gap-1 text-sm text-center justify-center items-center">
                  <a href="https://wa.me/2349036965601" className="text-sm">
                    <FiPhone className="text-sm" />
                  </a>
                  +2349036965601
                </p>
              </div>
              <div className="flex flex-col items-center justify-center mt-8">
                <img
                  src={logo}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <p className="text-sm mt-3">
                  All Rights Reserved {currentYear}
                </p>
              </div>
            </div>
          ) : (
            // desktop view
            <div className="mt-10  p-4">
              <hr className="border-[#3F5445]" />
              <div className="xl:flex md:max-lg:flex xl:justify-between md:max-lg:justify-between xl:mt-4 md:max-lg:mt-4 xl:px-3 ">
                <img
                  src={logo}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <div className="flex gap-9">
                  <p className="flex gap-2 text-sm">
                    <a
                      href="https://www.facebook.com/share/1AcNCdy5Xo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg"
                    >
                      <IoLogoFacebook className="text-xl" />
                    </a>
                    MHP Construction
                  </p>
                  <p className="flex gap-2 text-sm">
                    <a
                      href="https://www.instagram.com/mhpconstruction?igsh=MWx2MGc5dzZxNml2bg=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg"
                    >
                      <IoLogoInstagram className="text-xl" />
                    </a>
                    @mhpconstruction
                  </p>
                  <p className="flex gap-2 text-sm">
                    <a href="https://wa.me/2349036965601">
                      <FiPhone className="text-xl" />
                    </a>
                    +234 903 696 5601
                  </p>
                </div>
                <p>All Rights Reserved {currentYear}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Footer;
