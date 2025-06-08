import { motion } from "framer-motion";

const Services = () => {
  const services = [
    "From ground-up residential estates to commercial landmarks, we actualize visions through cutting-edge architectural design, meticulous engineering execution, premium material selection, and rigorous quality assurance protocols.",
    "Our white-glove management preserves asset value through predictive maintenance systems, tenant relationship optimization, financial performance analytics, and compliance and risk mitigation.",
    "Breathe new life into existing assets with our strategic renovation planning, luxury finish upgrades, functional space reengineering, and value-engineering expertise.",
    "Pioneering responsible construction via LEED-certified building practices, energy performance engineering, circular material sourcing, and carbon footprint reduction strategies.",
  ];
  const headings = [
    "Elite Construction Services",
    "Institutional Property Management",
    "Transformation and Modernization",
    "Sustainable Developments",
  ];
  return (
    <motion.section
      id="services"
      className="flex xl:justify-between max-xl:flex-col xl:p-30 max-xl:p-3 mt-30 "
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div>
        <p className="text-[#B4A734] mb-2 text-md">Our Services</p>
        <h1 className="w-full max-w-[600px] xl:text-5xl max-xl:text-xl font-semibold  text-[#0F2917] max-xl:mb-6">
          Comprehensive Solutions for Discerning Owners & Developers
        </h1>
      </div>
      <div className="xl:grid xl:grid-cols-2 gap-10">
        <div className=" xl:rounded-xl xl:shadow-xl w-full max-w-[380px] xl:px-5 xl:py-5">
          <h3 className="text-[#0F2917] xl:text-xl font-semibold max-xl:font-bold max-xl:mb-2">
            {headings[0]}
          </h3>
          <p className="text-md text-[#3F5445] leading-6.5 xl:tracking-wider max-xl:leading-6.5 max-xl:w-[380px]">
            {services[0]}
          </p>
        </div>
        <div className=" xl:rounded-xl xl:shadow-xl w-full max-w-[450px] xl:p-5 max-xl:mt-3">
          <h3 className="text-[#0F2917] xl:text-xl font-semibold max-xl:font-bold max-xl:mb-2">
            {headings[1]}
          </h3>
          <p className="text-md text-[#3F5445] leading-6.5 xl:tracking-wider xl:w-[330px] max-xl:w-[380px]">
            {services[1]}
          </p>
        </div>
        <div className=" xl:rounded-xl xl:shadow-xl w-full max-w-[400px] xl:px-5 xl:py-5">
          <h3 className="text-[#0F2917] xl:text-xl font-semibold max-xl:font-bold max-xl:mb-2 max-xl:mt-3">
            {headings[2]}
          </h3>
          <p className="text-md text-[#3F5445] xl:tracking-wider leading-6.5 xl:w-[330px]">
            {services[2]}
          </p>
        </div>
        <div className=" xl:rounded-xl xl:shadow-xl w-full max-w-[400px] xl:px-5 xl:py-5">
          <h3 className="text-[#0F2917] xl:text-xl font-semibold max-xl:font-bold max-xl:mb-2 max-xl:mt-3">
            {headings[3]}
          </h3>
          <p className="text-md text-[#3F5445] xl:tracking-wider leading-6.5 xl:w-[330px]">
            {services[3]}
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
