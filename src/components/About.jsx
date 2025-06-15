import aboutImg from "../assets/aboutImg.JPG";
import partner from "../assets/partner.jpg";
import img1 from "../assets/CEO.jpg";
import img2 from "../assets/Subomi.jpg";
// import img3 from "../assets/CEO2.jpg";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";

const About = () => {
  const aboutTexts = [
    "Midhousepro Limited has been around for over a decade contributing its quota to the real estate industry both in construction, post construction, interior decoration through helping families achieve their dream home. We are passionate about what our craft, we take pride in our team of Architects, Geologist, Structural and Engineers working round the clock. From the moment you contact us we assign a team to your project both in customer service relation for prompt communication and the building process as a whole. The CEO specifically handles every client to ensure all their concerns and questions are being attended to.",
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
    <section className="flex flex-col items-center justify-center text-center xl:mt-10 xl:py-26 w-full overflow-x-hidden">
      <img
        src={aboutImg}
        alt="About MHP Construction"
        width={800}
        height={500}
        className="xl:rounded-lg "
      />
      <h1 className="text-[#B4A734] text-2xl font-semibold xl:mt-5 xl:mb-5 max-xl:mt-7">
        About Us
      </h1>
      <div className="text-[#0F2917] text-md  xl:w-[700px]">
        {aboutTexts.map((text, idx) => (
          <p
            key={idx}
            className="xl:p-3 xl:text-lg max-xl:p-3.5 max-xl:text-sm tracking-wider"
          >
            {text}
          </p>
        ))}
      </div>

      {/* About the ceo */}
      <section className="flex justify-between max-xl:flex-col-reverse items-center  py-10 gap-8">
        <div className="w-full  flex flex-col items-start text-center xl:text-left justify-center tracking-wider xl:text-lg max-xl:text-sm max-xl:p-1">
          <h1 className="xl:text-3xl max-xl:text-2xl  font-semibold text-[#B4A734] mb-4">
            About Our CEO
          </h1>
          <p className="max-w-xl text-[#0F2917]">
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
      <div className="xl:py-15 xl:px-10 max-xl:py-5 max-xl:px-3">
        <h1 className="text-[#B4A734] text-2xl font-semibold">Mission</h1>
        <p className="text-[#0F2917] tracking-wide w-full max-w-[500px] max-xl:w-[430px] max-xl:p-3.5 xl:text-lg max-xl:text-sm">
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
