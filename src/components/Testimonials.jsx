import { useRef } from "react";
import image from "../assets/john.jpg";
import { motion } from "framer-motion";

const Testimonials = () => {
  const reviews = [
    "MHP delivered exactly what they promised on time, with great quality. The result was beyond our expectations. we're already planning our next project with them.",
    "MHP delivered exactly what they promised on time, with great quality. The result was beyond our expectations. we're already planning our next project with them.",
    "MHP delivered exactly what they promised on time, with great quality. The result was beyond our expectations. we're already planning our next project with them.",
    "MHP delivered exactly what they promised on time, with great quality. The result was beyond our expectations. we're already planning our next project with them.",
  ];

  const scrollRef = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <motion.section
      className="xl:p-26 mt-20 max-xl:p-3"
      // initial={{ y: 100, opacity: 0 }}
      // whileInView={{ y: 0, opacity: 1 }}
      // transition={{ duration: 0.6 }}
      // viewport={{ once: true, amount: 0.3 }}
    >
      <p className="text-[#B4A734] text-md mb-3">Testimonials</p>
      <h1 className="xl:text-4xl font-semibold text-[#0F2917] mb-5 max-xl:text-2xl">
        Our true differentiation lies beyond completion certificates
      </h1>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide "
          style={{ scrollSnapType: "x mandatory" }}
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-[#0F2917] text-white rounded-xl p-6 flex-shrink-0 w-full max-w-[450px] max-xl:w-[300px] scroll-snap-align-start"
              style={{
                backgroundColor: i % 2 === 0 ? "#0F2917" : "#668670", // alternating bg colors
              }}
            >
              <p>{review}</p>
              <div className="flex gap-2 mt-24">
                <img src={image} alt="" className="rounded-full w-10 h-10" />
                <section>
                  <p>Jane Doe</p>
                  <p>Company</p>
                </section>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#B4A734] text-white p-2 rounded-full z-10"
          aria-label="Scroll Right"
        >
          &#8594;
        </button>
      </div>
    </motion.section>
  );
};

export default Testimonials;
