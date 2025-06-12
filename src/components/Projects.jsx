import img3 from "../assets/image3.JPG";
import img4 from "../assets/image4.JPG";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/projects");
  };
  return (
    <section
      id="project"
      className="px-30 py-20 flex flex-col  xl:items-center gap-1 max-xl:p-3 mt-10"
    >
      <p className="text-[#B4A734] mb-3 text-md">Our Projects</p>
      <h1 className="text-xl xl:text-4xl mb-10 max-w-full xl:max-w-[1200px] xl:text-center text-left leading-snug  text-[#0F2917] font-semibold">
        We engineer more than structures, we create enduring assets.{" "}
      </h1>
      <div className="flex gap-3 ">
        <motion.img
          src={img3}
          alt=""
          width={700}
          className="rounded-xl overflow-hidden max-xl:w-[184px]"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        />
        <motion.img
          src={img4}
          alt=""
          width={700}
          className="rounded-xl overflow-hidden max-xl:w-[184px]"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        />
      </div>
      <div className="w-full max-w-[430px] mx-auto xl:max-w-[1000px] xl:text-center">
        <p className="text-[#3F5445] xl:text-lg max-xl:w-full leading-7 mt-6 xl:text-md max-xl:text-md ">
          Since 2012, our firm has elevated industry standards by delivering
          bespoke construction and strategic property management solutions to
          discerning clients worldwide. Where others see blueprints, we see
          potential. Our integrated approach—combining architectural innovation,
          precision engineering, and proactive asset management—ensures your
          property appreciates in both form and function for decades to come.{" "}
        </p>
      </div>
      {/* <button className=""> */}

      <p
        className="flex bg-white gap-2 border px-2 py-1 rounded-xl mt-4 w-[150px] text-[#0F2917] cursor-pointer"
        onClick={handleClick}
      >
        View Projects
        <span className="text-xl mt-0.5">
          <IoIosArrowForward />
        </span>
      </p>
    </section>
  );
};

export default Projects;
