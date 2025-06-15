import { useEffect, useState } from "react";
import logo from "../assets/Logo.png";
import { useLocation } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    // navbar stays fixed at the top of the page
    <nav className=" flex justify-between items-center px-8 py-4 xl:bg-white xl:fixed w-full top-0 left-0 z-50 transition-colors duration-300">
      <img
        src={logo}
        alt=""
        width={65}
        height={60}
        className="rounded-full max-xl:h-10 w-10"
      />
      {isMobile ? (
        <>
          <button
            onClick={toggleMenu}
            className={`text-3xl z-50 relative top-0 ${
              isHome ? "text-white" : "text-black"
            }`}
          >
            {isMenuOpen ? <IoIosClose /> : <IoIosMenu />}
          </button>
          {/* mobile menu */}
          {isMenuOpen && (
            <div className="absolute top-16 right-4 bg-white rounded-lg shadow-lg mt-3 p-5 z-50">
              <ul className="text-[#0F2917] flex flex-col gap-3">
                {isHome ? (
                  <>
                    <li>
                      <a href="#project" onClick={toggleMenu}>
                        Projects
                      </a>
                    </li>
                    <li>
                      <a href="#services" onClick={toggleMenu}>
                        Services
                      </a>
                    </li>
                    <li>
                      <Link to="/about" onClick={toggleMenu}>
                        About us
                      </Link>
                    </li>
                    <li>
                      <a href="#blogs" onClick={toggleMenu}>
                        Blog
                      </a>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/" onClick={toggleMenu}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" onClick={toggleMenu}>
                        About us
                      </Link>
                    </li>
                  </>
                )}
              </ul>
              <button className="bg-[#13351D] text-white px-8 py-2 rounded-lg mt-4 hover:bg-[#BBC7BD] hover:text-[#0F2917] flex  gap-2">
                <a href="https://wa.me/2349036965601" className="text-2xl">
                  <FiPhone />
                </a>
                Contact Us
              </button>
            </div>
          )}
        </>
      ) : (
        <>
          <ul className="flex gap-5 max-xl:text-[#0F2917] md:max-lg:text-white font-semibold">
            {isHome ? (
              <>
                <li>
                  <a href="#project">Projects</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <a href="#blogs">Blogs</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About us</Link>
                </li>
              </>
            )}
          </ul>
          <button className="flex items-center gap-2 bg-[#13351D] text-white px-3 py-2 rounded-lg hover:bg-[#BBC7BD] hover:text-[#0F2917]">
            <span>
              <FiPhone />
            </span>
            <a href="https://wa.me/2349036965601">Contact Us</a>
          </button>
        </>
      )}
    </nav>
  );
};

export default NavBar;
