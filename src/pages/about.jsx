import aboutImg from "../assets/aboutImg.JPG";
import img1 from "../assets/CEO.jpg";
import img2 from "../assets/Subomi.jpg";
import img3 from "../assets/CEO2.jpg";

const About = () => {
  const aboutTexts = [
    "Midhousepro Limited has been around for over a decade contributing its quota to the real estate industry both in construction, post construction, interior decoration through helping families achieve their dream home. We are passionate about what our craft, we take pride in our team of Architects, Geologist, Structural and Engineers working round the clock. From the moment you contact us we assign a team to your project both in customer service relation for prompt communication and the building process as a whole. The CEO specifically handles every client to ensure all their concerns and questions are being attended to.",
  ];
  const headings = [
    "Unassailable Integrity",
    "Architectural Excellence",
    "Sustainable Innovation",
    "Execution Certainty",
  ];
  const princples = () => [
    "Absolute transparency in execution, ethical rigor in all dealings.",
    "Where engineering precision meets aesthetic brilliance.",
    "Future-forward building solutions that reduce ecological impact.",
    "Ironclad project delivery timelines without quality concessions",
  ];

  const images = [img1, img2, img3];
  const names = [
    "Mr. Amos Olanrewaju",
    "Mr. Subomi Subomi",
    "Mr, Amos Olanrewaju",
  ];
  const positions = [
    "Chief Executing Officer",
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
      <div className="text-[#0F2917] text-md xl:w-[700px]">
        {aboutTexts.map((text, idx) => (
          <p
            key={idx}
            className="xl:p-3 xl:text-lg max-xl:p-3.5 max-xl:text-sm tracking-wide"
          >
            {text}
          </p>
        ))}
      </div>
      <div className="xl:py-15 xl:px-10 max-xl:py-5 max-xl:px-3">
        <h1 className="text-[#B4A734] text-2xl font-semibold">Mission</h1>
        <p className="text-[#0F2917] tracking-wide w-full max-w-[500px] max-xl:w-[430px] max-xl:p-3.5 xl:text-lg max-xl:text-sm">
          To conceive and execute timeless properties while providing
          institutional-caliber management that optimizes asset performance
        </p>
      </div>
      <div className="xl:p-5">
        <h1 className="text-[#B4A734] text-2xl font-semibold">
          Guiding Principles
        </h1>
        <div className="flex max-xl:flex-col xl:gap-5 max-xl:gap-4 mt-5">
          {headings.map((heading, idx) => (
            <div key={idx} className="">
              <h2 className="font-bold text-xl  text-[#0F2917] max-xl:mb-2">
                {heading}
              </h2>
              <p className="text-[#0F2917] text-lg tracking-wide w-full max-w-[300px] max-xl:text-sm">
                {princples()[idx]}
              </p>
            </div>
          ))}
        </div>
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
