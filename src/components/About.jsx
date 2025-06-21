import aboutImg from "../assets/aboutImg.JPG";
import partner from "../assets/partner.jpg";
import img1 from "../assets/CEO.jpg";
import img2 from "../assets/Subomi.jpg";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { LuLandPlot } from "react-icons/lu";
import { ImCompass2 } from "react-icons/im";
import { ClipboardPenLine } from "lucide-react";
import { TbSettingsPlus } from "react-icons/tb";
import { TbHomeCog } from "react-icons/tb";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Expertise = () => {
  const expertiseItems = [
    {
      icon: <LuLandPlot className="text-4xl " />,
      title: "Land Purchase",
    },
    {
      icon: <ImCompass2 className="text-4xl" />,
      title: "Geometrical Surveying",
    },
    {
      icon: <ClipboardPenLine className="text-4xl mt-5" />,
      title: "Architectural & Structural Drawing",
    },
    {
      icon: <TbSettingsPlus className="text-4xl" />,
      title: "Soil Testing & Building Optimization",
    },
    {
      icon: <TbHomeCog className="text-4xl" />,
      title: "Land Documentation & Interior Decoration",
    },
  ];
  return (
    <div className="p-3 xl:p-10 max-xl:px-10 max-w-5xl w-full">
      <h2 className="text-3xl text-[#B4A734] font-semibold mb-4 mt-5">
        OUR EXPERTISE
      </h2>
      <motion.div
        className="bg-white shadow-xl px-5 py-8 "
        initial={{ y: 100, opacity: 5 }}
        whileInView={{ y: 3, opacity: 3 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <ul className=" flex items-center max-xl:flex-col gap-8 xl:px-5 xl:py-3">
          {expertiseItems.map((item, index) => (
            <li key={index} className="flex flex-col items-center gap-2">
              <span className="text-[#B4A734]">{item.icon}</span>
              <span className="text-[#0F2917] font-semibold text-xl">
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const About = () => {
  const aboutTexts = [
    "MHP Construction Limited, a subsidiary of Midhousepro Limited, is a customer-focused construction company dedicated to making your dream home a reality — on time, on budget, and with excellence.",
    "With over a decade of experience, we specialize in delivering quality construction tailored to your land's specific needs. Whether your project requires a piling foundation, raft foundation, strip foundation, or strip pad foundation, our expert team is fully equipped to execute with precision. We strictly adhere to government standards and work based on the results of professional soil tests, ensuring every structure is solid, safe, and built to last.",
    "We ensure our clients receive comprehensive support throughout every stage of the project.",
    "What truly sets us apart is our passion, professionalism, and people. We are proud of our dynamic team, which includes skilled Architects, Geologists, Engineers, and other industry experts working round the clock to deliver exceptional results.",
    "From the moment you contact us, a dedicated team is assigned to your project — including a customer service lead for clear and timely communication.",
    "And because your satisfaction is our top priority, our CEO personally oversees every project, ensuring your needs are understood, your concerns are addressed, and your dream is brought to life just the way you envisioned.",
    "MHP Construction — where experience meets excellence, and your dream home becomes a reality.",
  ];

  const images = [partner, img2];
  const names = [
    "Mr. Segun Johnson",
    "Mr. Subomi Subomi",
    "Mr, Amos Olanrewaju",
  ];
  const positions = [
    "Project Manager",
    "Lead Engineer",
    "Chief Executing Officer",
  ];

  return (
    <section className="flex flex-col items-center justify-center text-center xl:mt-10 xl:py-26  overflow-x-hidden">
      <div className="relative w-full group cursor-pointer overflow-hidden ">
        <img
          src={aboutImg}
          alt="About MHP Construction"
          className="xl:rounded-lg h-full max-h-[500px] w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-75"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500"></div>
        <div className="absolute inset-0 flex items-start justify-center p-10">
          <h1 className="text-white xl:text-5xl max-xl:text-3xl font-semibold xl:mt-5 xl:mb-5 max-xl:mt-7">
            ABOUT US
          </h1>
        </div>
      </div>
      <div className="text-[#0F2917] text-md flex flex-col items-center justify-center text-center xl:px-20 xl:mt-5 max-xl:px-10 max-xl:py-5 w-full max-w-5xl">
        {aboutTexts.map((text, idx) => (
          <p
            key={idx}
            className="xl:p-3 xl:text-lg max-xl:p-3.5  max-xl:text-md tracking-wider"
          >
            {text}
          </p>
        ))}
        <Expertise />
      </div>

      {/* About the ceo */}
      <section className="flex justify-between max-xl:flex-col-reverse xl:mt-20 max-xl:mt-15  py-10 gap-8">
        <div className="w-full  flex flex-col items-start text-center xl:text-left justify-center tracking-wider xl:text-lg max-xl:text-sm max-xl:p-1">
          <h1 className="xl:text-3xl max-xl:text-2xl  font-semibold text-[#B4A734] mb-4">
            About Our CEO
          </h1>
          <p className="max-w-xl text-[#0F2917] max-xl:text-md">
            Mr. Abioye Olanrewaju is a seasoned construction expert with over 15
            years of hands-on experience and a portfolio of more than 40
            successful projects. A graduate of Auchi Polytechnic and the
            prestigious University of Lagos, he stands out for his commitment to
            excellence and quality.
          </p>
          <p className="max-w-xl text-[#0F2917]">
            Beyond his professional accomplishments, he's a proud father of two
            and a devoted husband. His guiding principle is:
            <span className="italic font-bold text-[#0F2917]">
              {" "}
              "Spend on quality so you don't regret."
            </span>
          </p>
          <div className="mt-5 flex flex-col items-center xl:items-start gap-2 text-[#0F2917]">
            <p className="mt-3 font-semibold">
              Contact the CEO:
              <a
                href="mailto:abioyeolanrewaju@icloud.com"
                className="flex gap-2 transition"
              >
                <MdOutlineMail className="text-2xl  mt-0.5" />
                <span className="max-xl:mt-1">Email</span>
              </a>
              <a
                href="https://wa.me/2349036965601"
                target="_blank"
                rel="noopener referrer"
                className="flex gap-2 transition"
              >
                <FaWhatsapp className="text-2xl mt-0.5" />
                <span className="max-xl:mt-1">Whatsapp</span>
              </a>
            </p>
          </div>
        </div>
        <div className="w-full xl:w-[400px] flex justify-center">
          <img
            src={img1}
            alt="Our CEO"
            width={400}
            height={400}
            className="rounded-lg shadow-lg object-cover max-w-[300px] max-xl:w-[350px] h-auto "
          />
        </div>
      </section>

      {/* Mission */}
      <div className="xl:py-20 xl:mt-10 xl:px-10 max-xl:py-5 max-xl:px-3">
        <h1 className="text-[#B4A734] text-2xl font-semibold">Mission</h1>
        <p className="text-[#0F2917] tracking-wide w-full max-w-[500px] max-xl:w-[430px] max-xl:p-3.5 xl:text-lg max-xl:text-md">
          To conceive and execute timeless properties while providing
          institutional-caliber management that optimizes asset performance
        </p>
      </div>

      {/* our team */}
      <div className="xl:p-20">
        <h1 className="text-[#B4A734] font-semibold text-2xl mb-5">Our Team</h1>
        <div className="flex gap-10 justify-center max-xl:flex-col">
          {images.map((images, idx) => (
            <div key={idx}>
              <img
                src={images}
                alt={positions[idx]}
                width={200}
                className="rounded-full max-w-[350px] max-h-[200px]"
              />
              <h2 className="font-bold mt-3">{names[idx]}</h2>
              <p className="tracking-wide mt-1">{positions[idx]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
