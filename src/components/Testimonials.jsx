import { useRef } from "react";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Testimonials = () => {
  const reviews = [
    {
      name: "Stephanie Okoro",
      role: "Architect",
      image:
        "https://images.pexels.com/photos/7552059/pexels-photo-7552059.jpeg?auto=compress&cs=tinysrgb&w=600",
      message:
        "MHP Construction brought our dream project to life. Their team was professional, efficient, and easy to work with. We were impressed with the quality and timely delivery",
    },
    {
      name: "Peter Lawson",
      role: "Software Engineer",
      image:
        "https://images.pexels.com/photos/6584748/pexels-photo-6584748.jpeg?auto=compress&cs=tinysrgb&w=600",
      message:
        "From the first consultation to project completion, everything was seamless. The crew paid close attention to every detail. I'd confidently recommend them to anyone.",
    },
    {
      name: "Chinwe Nwosu",
      role: "Company",
      image:
        "https://images.unsplash.com/photo-1644152993066-9b9ee687930d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGElMjBuaWdlcmlhbiUyMHdvbWFufGVufDB8fDB8fHww",
      message:
        "The professionalism and craftsmanship were outstanding. MHP kept us informed every step of the way. Our home looks amazing now!",
    },
    {
      name: "David Okoro",
      role: "HomeOwner",
      image:
        "https://images.pexels.com/photos/12666764/pexels-photo-12666764.png?auto=compress&cs=tinysrgb&w=600",
      message:
        "We had a great experience working with MHP Construction. They communicated clearly throughout the process and stayed within budget. The final result was even better than we expected.",
    },
  ];

  const scrollRef = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <motion.section
      id="testimonials"
      className="xl:p-26 mt-20 max-xl:p-3"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
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
              <p className="leading-6">{review.message}</p>
              <div className="flex gap-2 mt-24">
                <img
                  src={review.image}
                  alt={review.name}
                  className="rounded-full w-10 h-10"
                />
                <section>
                  <p>{review.name}</p>
                  <p>{review.role}</p>
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
