// eslint-disable-next-line no-unused-vars
import { motion, scale, stagger } from "framer-motion";

const Services = () => {
  const services = [
    "Our key focus is construction, we know your space means a lot to you and we handle it with care to construct and handle your project. We follow the regulated standard from the approved government agencies. Both family home be it Bungalow, Duplex, Terraces, Apartments, Hotel, shopping Mall construction we have you covered. Our team of Geologist, Engineers and Manson's are ready to handle your project and deliver it at record time.",
    "We renovate your home and office space and bring It back to life; we give you the premium standard of luxury while working on a budget.",
    "Our team of interior decorators are certified and they have an eye for great designs and color combination, every space tells a story, be it kids room or the kitchen where the magic happens, we make your home beautiful and live a lasting impression for you.",
    "We help our client look for land in a prime location land that has a good title and good soil and within their budget. It may take time but we are very meticulous about our client preference. We go extra mile in verifying all documentations both from the family history, government verification and also at the Surveyor general’s office for proper search. Our client trusts us to take off the burden off them and get them the best land that fits whatever project they want to embark on the proposed land.",
  ];
  const headings = [
    "Construction (Residential and Commercial)",
    "Home Renovation",
    "Home Interior",
    "Land purchase and documentation",
  ];
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,

        ease: "easeOut",
      },
    },
  };
  return (
    <motion.section
      id="services"
      className="lg:flex xl:justify-between  xl:p-30 max-xl:p-3 mt-30 "
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="md:max-lg:text-center xl:text-left md:max-lg:mb-10"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className=" text-[#B4A734] mb-2 text-md md:max-lg:text-lg">
          Our Services
        </p>
        <h1 className="w-full max-w-[600px] xl:text-5xl max-xl:text-xl md:text-4xl lg:text-5xl font-semibold  text-[#0F2917] max-xl:mb-6 md:max-lg:mx-auto xl:mx-0">
          Comprehensive Solutions for Discerning Owners & Developers
        </h1>
      </motion.div>

      <div className="xl:grid xl:grid-cols-2 md:max-lg:grid md:max-lg:grid-cols-2 md:max-lg:justify-center md:max-lg:mx-auto md:max-lg:max-w-4xl gap-10 ">
        <motion.div
          className="xl:rounded-xl md:max-lg:rounded-xl xl:shadow-xl md:max-lg:shadow-xl w-full max-w-[430px] xl:px-5 xl:py-5 md:max-lg:px-5 md:max-lg:py-5"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-[#0F2917] xl:text-xl md:max-lg:text-xl font-semibold max-xl:font-bold xl:mb-2 md:max-lg:mb-2">
            {headings[0]}
          </h3>
          <p className="text-md md:max-lg:text-base  text-[#3F5445] leading-6.5 xl:tracking-wider max-xl:leading-6.5 max-xl:w-[380px] md:max-lg:w-full">
            {services[0]}
          </p>
        </motion.div>
        <motion.div
          className=" xl:rounded-xl md:max-lg:rounded-xl xl:shadow-xl md:max-lg:shadow-xl w-full max-w-[450px] xl:p-5 md:max-lg:p-5 max-xl:mt-3 md:max-lg:mt-0  xl:border-[#0F2917]"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-[#0F2917] xl:text-xl md:max-lg:text-xl font-semibold max-xl:font-bold max-xl:mb-2 md:max-lg:mb-2">
            {headings[1]}
          </h3>
          <p className="text-md md:max-lg:text-base text-[#3F5445] leading-6.5 xl:tracking-wider xl:w-[330px] max-xl:w-[380px] md:max-lg:w-full">
            {services[1]}
          </p>
        </motion.div>
        <motion.div
          className=" xl:rounded-xl md:max-lg:rounded-xl md:max-lg:shadow-xl xl:shadow-xl w-full max-w-[400px] xl:px-5 md:max-lg:px-5 xl:py-5 md:max-lg:py-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-[#0F2917] xl:text-xl md:max-lg:text-xl font-semibold max-xl:font-bold max-xl:mb-2 max-xl:mt-3 md:max-lg:mb-2 md:max-lg:mt-0">
            {headings[2]}
          </h3>
          <p className="text-md md:max-lg:text-base text-[#3F5445] xl:tracking-wider leading-6.5 xl:w-[330px] md:max-lg:w-full">
            {services[2]}
          </p>
        </motion.div>
        <motion.div
          className=" xl:rounded-xl md:max-lg:rounded-xl xl:shadow-xl md:max-lg:shadow-xl w-full max-w-[400px] xl:px-5 md:max-lg:px-5 xl:py-5 md:max-lg:py-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.9 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-[#0F2917] xl:text-xl md:max-lg:text-xl font-semibold max-xl:font-bold max-xl:mb-2 max-xl:mt-3 md:max-lg:mb-2 md:max-lg:mt-0">
            {headings[3]}
          </h3>
          <p className="text-md md:max-lg:text-base text-[#3F5445] xl:tracking-wider leading-6.5 xl:w-[330px] md:max-lg:w-full">
            {services[3]}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
