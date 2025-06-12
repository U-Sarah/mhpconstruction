# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Our Services
Vision Statement
Mission Statement
About the CEO

                                                Our Services

Midhousepro Limited offers various services relating from Land documentation, Construction, Post construction and Interior decoration.
With over 12 years of experience in the construction industry we are proud to have handle several key projects for clients both and aboard by putting a smile on their faces as we achieve their building projects.
We specialize in

1.  Construction (Residential and Commercial)
    Our key focus is construction, we know your space means a lot to you and we handle it with care to construct and handle your project. We follow the regulated standard from the approved government agencies. Both family home be it Bungalow, Duplex, Terraces, Apartments, Hotel, shopping Mall construction we have you covered. Our team of Geologist, Engineers and Manson’s are ready to handle your project and deliver it at record time.
2.  Home Renovation
    We renovate your home and office space and bring It back to life; we give you the premium standard of luxury while working on a budget.
3.  Home Interior
    Our team of interior decorators are certified and they have an eye for great designs and color combination, every space tells a story, be it kids’ room or the kitchen where the magic happens, we make your home beautiful and live a lasting impression for you.
4.  Land purchase and documentation:
    We help our client look for land in a prime location land that has a good title and good soil and within their budget. It may take time but we are very meticulous about our client preference. We go extra mile in verifying all documentations both from the family history, government verification and also at the Surveyor general’s office for proper search. Our client trusts us to take off the burden off them and get them the best land that fits whatever project they want to embark on the proposed land.

5.  We handle Architectural drawing, Structural drawing, M&E drawing and Consultancy.
    This is just to mention a few of our services. We build on all types of soil Be it Raft foundation, Strip-pad foundation, piling foundation and any types of foundation the soil reports recommend

                                                  About Us

    Midhousepro Limited has been around for over a decade contributing its quota to the real estate industry both in construction, post construction, interior decoration through helping families achieve their dream home. We are passionate about what our craft, we take pride in our team of Architects, Geologist, Structural and Engineers working round the clock. From the moment you contact us we assign a team to your project both in customer service relation for prompt communication and the building process as a whole. The CEO specifically handles every client to ensure all their concerns and questions are being attended to.

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

    PRINCIPLES
    const princples = () => [
    "Absolute transparency in execution, ethical rigor in all dealings.",
    "Where engineering precision meets aesthetic brilliance.",
    "Future-forward building solutions that reduce ecological impact.",
    "Ironclad project delivery timelines without quality concessions",
    ];
    HEADINGS
    const headings = [
    "Unassailable Integrity",
    "Architectural Excellence",
    "Sustainable Innovation",
    "Execution Certainty",
    ];
