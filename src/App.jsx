import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import BlogList from "./components/BlogList";
import img1 from "./assets/image1.JPG";
import img2 from "./assets/image2.JPG";
import img3 from "./assets/image3.JPG";
import img4 from "./assets/image4.JPG";
import img5 from "./assets/image5.JPG";

const images = [img1, img2, img3, img4, img5];
const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-white overflow-x-hidden">
      {/* Mobile layout with background image */}
      <div
        className="xl:hidden relative  bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10">
          <NavBar isHome={true} />
          <Hero />
        </div>
      </div>

      {/* Desktop layout with white background */}
      <div className="hidden xl:block">
        <NavBar isHome={true} />
        <Hero />
      </div>

      <Projects />
      <Services />
      <Testimonials />
      <BlogList />
    </div>
  );
};

export default App;
