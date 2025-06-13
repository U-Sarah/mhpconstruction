
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import BlogList from "./components/BlogList";

const App = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* Mobile layout with background image */}
      <div className="xl:hidden relative bg-[url('/src/assets/image1.JPG')] bg-cover bg-center">
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
