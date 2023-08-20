import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

// Animation
import "animate.css";
import Fade from "react-reveal/Fade";
import Marquee from "react-fast-marquee";

function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setNavbarBackground("shadow-lg"); // Ganti warna sesuai yang diinginkan saat discroll ke bawah
    } else {
      setNavbarBackground(); // Kembalikan ke warna awal jika scroll ke atas
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const projects = [
    {
      id: 1,
      name: "Erikk",
      pic: "https://source.unsplash.com/1600x900/?art",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit earum ipsam aperiam dicta officia, maiores soluta non quam! Beatae, deserunt!",
    },
    {
      id: 2,
      name: "Alvy",
      pic: "https://source.unsplash.com/1600x901/?art",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit earum ipsam aperiam dicta officia, maiores soluta non quam! Beatae, deserunt!",
    },
    {
      id: 3,
      name: "Fylla",
      pic: "https://source.unsplash.com/1600x902/?art",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit earum ipsam aperiam dicta officia, maiores soluta non quam! Beatae, deserunt!",
    },
  ];

  const customers = [
    {
      id: 1,
      name: "David Kim",
      company: "Design Inc",
      comment: "Aiko's web design brought our brand to life",
      desc: "Aiko's expertise in web design breathed life into our brand. She captured our vision with precision, and delivered a website that stands out among our competitors.",
    },
    {
      id: 2,
      name: "John Smith",
      company: "ABC Company",
      comment: "Exceptional web design that exceeded our expectations",
      desc: "Our website redesign surpassed our expectations. Aiko's attention to detail and creativity resulted in a visually stunning and user-friendly site that immediately boosted our online presence.",
    },
    {
      id: 3,
      name: "Emily Davis",
      company: "Greenway Industries",
      comment: "Highly recommended for web design and SEO",
      desc: "Aiko's expertise in web design and SEO has exceeded our expectations. Her attention to detail and personalized approach make her highly recommended.",
    },
    {
      id: 4,
      name: "Karen Lee",
      company: "Redwood Technologies",
      comment: "Aiko delivered a website that showcases our business",
      desc: "Aiko's web design resulted in a website that showcases our business in a professional and user-friendly manner. We couldn't be happier with the outcome.",
    },
    {
      id: 5,
      name: "Andrew Thompson",
      company: "Silverstone Corporation",
      comment: "Aiko's web design skills are unparalleled",
      desc: "Aiko's web design skills are unparalleled. She's able to take our ideas and turn them into a visually stunning website that reflects our brand and captures our audience",
    },
    {
      id: 6,
      name: "Ryan Chen",
      company: "Golden Gate Solutions",
      comment: "Aiko's content creation and web design are top-notch",
      desc: "Aiko's content creation and web design skills are top-notch. She's able to produce high-quality content that engages our audience, and design a website that complements our brand.",
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="sticky top-0 z-20">
        <nav className={`${navbarBackground} z-20 flex justify-between bg-primary text-white px-6 md:px-11 lg:px-16 py-3 md:py-5`}>
          <Link to={"/"} className="text-2xl">
            adam.
          </Link>

          <button
            type="button"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="flex md:hidden flex-col justify-center gap-2 w-[30px] h-[30px] group"
          >
            <span className={`bg-white w-full h-[1px] origin-left transition-all duration-300  ${showMenu ? "rotate-[38deg] delay-300" : "delay-0"}`}></span>
            <span className={`${showMenu ? "w-0" : "w-full"} bg-white  h-[1px] transition-all duration-300`}></span>
            <span className={`bg-white w-full h-[1px] origin-left transition-all duration-300  ${showMenu ? "-rotate-[38deg] delay-300" : "delay-0"}`}></span>
          </button>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-9">
            <Link className="text-white text-sm ">WORK</Link>
            <Link className="text-white text-sm ">SERVICES</Link>
            <Link className="text-white text-sm ">ABOUT</Link>
            <Link className="text-white text-sm ">CONTACT</Link>
            <Link className="relative overflow-hidden flex justify-center items-center before:contents-[''] before: before:absolute before:bg-white before:-left-2 before:w-0 before:h-full before:-skew-x-[20deg] hover:before:w-[115%] before:transition-all before:duration-300 bg-secondary border border-gray-700 px-4 py-2 rounded-sm text-sm group">
              <h1 className="text-text group-hover:text-black transition-all duration-300 z-10">LET'S TALK</h1>
            </Link>
          </div>
          {/* Menu Desktop End */}

          {/* Menu Mobile */}
          <div className={`${showMenu ? "flex top-16" : "flex"} md:hidden -z-10 absolute -top-48 left-5 right-5 flex-col gap-4 bg-secondary p-6 rounded-lg text-white text-sm transition-all duration-700`}>
            <Link className=" ">WORK</Link>
            <Link className=" ">SERVICES</Link>
            <Link className=" ">ABOUT</Link>
            <Link className=" ">BLOG</Link>
            <Link className=" ">PRICING</Link>
            <Link className=" ">CONTACT</Link>
          </div>
          {/* Menu Mobile End */}
        </nav>
      </nav>
      {/* Navbar End */}

      {/* Content */}
      <div
        className={`${
          showMenu ? "before:contents-[''] before:z-10 before:absolute before:bg-black  before:top-0 before:left-0 before:right-0 before:bottom-0 before:transition-all before:opacity-60" : "before:opacity-0"
        } relative overflow-hidden`}
      >
        {/* Section 1 */}
        <section className="relative grid grid-cols-1 md:grid-cols-[2fr,1fr] lg:grid-cols-[2fr,1.5fr] md:items-center gap-5 md:gap-12 md:h-auto h-screen md:w-auto lg:h-[90vh] bg-primary text-white px-5 md:px-11 lg:px-16 py-10 md:py-16">
          <Fade bottom>
            <div className="flex flex-col gap-4 xl:gap-6">
              <h1 className="text-center md:text-left text-4xl md:text-[54px] lg:text-7xl md:leading-none">Front-end Web Developer</h1>
              <p className="md:max-w-[60%] xl:w-[70%] text-center md:text-xl xl:text-2xl md:text-left opacity-60 ">An enthusiastic front-end web developer with a passion for visual design and the ability to translate it into code.</p>
            </div>
          </Fade>

          <Fade bottom>
            <img src="/images/profile.jpg" alt="" className="rounded-full xl:w-[80%] mx-auto" />
          </Fade>

          <a href="#services" className="absolute bottom-10 left-14 hidden lg:flex justify-center items-center gap-2 w-fit px-4 py-3 rounded-md scale-110 group">
            <div className="overflow-hidden p-2 rounded-full border border-gray-600 group-hover:border-white transition-all duration-500">
              <img src="/icons/arrow-down.svg" alt="" className="w-4 group-hover:translate-y-8 transition-all duration-300" />
            </div>
            <h1 className="text-xs font-medium text-opacity-60">MY SERVICES</h1>
          </a>
        </section>
        {/* Section 1 End */}

        {/* Maquee */}
        <Fade>
          <Marquee autoFill="true" className="bg-yellow-40 py-12">
            <div className="bg-black w-5"></div>
            <img src="/icons/react.svg" alt="" className="w-12" />
            <div className="bg-black w-11"></div>
            <img src="/icons/tailwind-css.svg" alt="" className="w-12" />
            <div className="bg-black w-11"></div>
            <img src="/icons/github.svg" alt="" className="w-12" />
            <div className="bg-black w-11"></div>
            <img src="/icons/vercel.svg" alt="" className="w-12" />
            <div className="bg-black w-5"></div>
          </Marquee>
        </Fade>

        {/* Maquee End */}

        {/* Services Section */}
        <section id="services" className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-14 px-5 md:px-14 lg:px-16 xl:py-32 py-10">
          <Fade bottom>
            <div className="flex flex-col gap-2">
              <h1 className="text-sm font-medium opacity-70 uppercase">Services</h1>
              <h1 className="text-3xl xl:text-5xl md:text-4xl md:leading-tight xl:leading-snug">Design, Development, and Content. All-in-one.</h1>
              <p className="text-lg opacity-70">Take your online presence to the next level with my expert web design and content creation services.</p>
            </div>
          </Fade>

          <Fade right cascade>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 p-6 lg:p-8 rounded-lg border border-gray-300">
                <h1 className="text-2xl">01</h1>
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl">WEB DESIGN</h1>
                  <p className="opacity-60">Premium, custom web design services that cater to the unique needs of each client. Visually stunning and user-friendly websites that drive results.</p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 p-6 lg:p-8 rounded-lg border border-gray-300">
                <h1 className="text-2xl">02</h1>
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl">WEB DEVELOPMENT</h1>
                  <p className="opacity-60">Beautiful, functional websites created using the powerful Webflow platform. Highly customizable and easily manageable, even with no prior web development experience.</p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 p-6 lg:p-8 rounded-lg border border-gray-300">
                <h1 className="text-2xl">03</h1>
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl">CONTENT & SEO</h1>
                  <p className="opacity-60">Comprehensive services that help businesses build a strong online presence. High-quality, engaging content that drives conversions, optimized for search engines.</p>
                </div>
              </div>
            </div>
          </Fade>
        </section>
        {/* Services Section End */}

        {/* Selected Work Section */}
        <section className="px-5 md:px-14 lg:px-16 py-10">
          <h1 className="lg:ml-10 mb-5 text-3xl xl:text-5xl">Selected Work </h1>

          <div className="flex flex-col gap-8">
            {projects.map((project) => {
              return (
                <Fade bottom>
                  <div className="relative overflow-hidden h-[200px] md:w-full md:h-[400px] lg:h-[490px] xl:h-[600px] rounded-lg group/container">
                    <img src={project.pic} alt="" className="w-full h-full saturate-0 group-hover/container:scale-125 group-hover/container:saturate-100 transition-all duration-500" />

                    <dix className="absolute left-3 md:left-10 bottom-6 md:bottom-11 flex lg:flex-col justify-center items-center gap-3 lg:items-start w-24 md:w-28 lg:w-[500px] lg:px-8 py-4 md:py-6 lg:py-8 rounded-lg bg-black bg-opacity-50">
                      <h1 className="text-3xl xl:text-5xl text-white">{project.name}</h1>
                      <p className="hidden lg:block text-white text-left">{project.desc}</p>
                      <Link className="hidden lg:flex jusitfy-center items-center gap-3 group/button">
                        <div className="overflow-hidden bg-secondary p-2 border border-secondary rounded-full group-hover/button:border-white transition-all duration-300">
                          <img src="/icons/arrow-up-right.svg" alt="" className="group-hover:translate-x-5 group-hover/button:translate-x-5 group-hover/button:-translate-y-5 transition-all duration-300" />
                        </div>
                        <h1 className="text-white text-sm">DISCOVER</h1>
                      </Link>
                    </dix>
                  </div>
                </Fade>
              );
            })}
            {/* Project 1 */}

            {/* Project 1 End */}
          </div>
        </section>
        {/* Selected Work Section End */}

        {/* My Process Section */}
        <section className="grid grid-cols-1  md:grid-cols-2 gap-12 lg:gap-14 px-5 md:px-14 lg:px-16 py-10">
          <Fade bottom>
            <div className="flex flex-col gap-2 xl:pr-10">
              <h1 className="text-sm font-medium opacity-70 uppercase">My Process</h1>
              <h1 className="text-3xl xl:text-5xl md:text-4xl md:leading-tight xl:leading-snug">Your Dream Website in just few steps</h1>
              <p className="text-lg opacity-70">From consultation to launch, our streamlined process ensures timely delivery and quality work.</p>
              <Link className="flex justify-center items-center gap-2 w-fit mt-4 px-4 py-3 rounded-md bg-primary text-white text-xs font-medium ">
                <h1>GET IN TOUCH</h1>
                <img src="/icons/arrow-up-right.svg" alt="" className="w-4" />
              </Link>
            </div>
          </Fade>

          <Fade right cascade>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 p-6 lg:p-8 rounded-lg border border-gray-300">
                <h1 className="text-2xl">01</h1>

                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl">CONCEPT</h1>
                  <p className="opacity-60">During the concept phase, I work closely with my clients to understand their needs and goals for their website.</p>

                  <ul className="flex flex-col gap-2 mt-3 px-5 list-disc">
                    <li>Reviewing any existing branding</li>
                    <li>Target audience and competitors research</li>
                    <li>Developing a strategy</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 p-6 lg:p-8 rounded-lg border border-gray-300">
                <h1 className="text-2xl">02</h1>

                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl">DESIGN</h1>
                  <p className="opacity-60">Once the concept is established, I move on to the design phase. Here, I create a visual representation of the website that reflects the client's brand and messaging.</p>

                  <ul className="flex flex-col gap-2 mt-3 px-5 list-disc">
                    <li>Developing wireframes and mockup</li>
                    <li>Choosing typography, color palettes, and imagery</li>
                    <li>Refining the design</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 p-6 lg:p-8 rounded-lg border border-gray-300">
                <h1 className="text-2xl">03</h1>

                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl">WEBFLOW</h1>
                  <p className="opacity-60">After the design is finalized, I move on to building the website using Webflow.</p>

                  <ul className="flex flex-col gap-2 mt-3 px-5 list-disc">
                    <li>Translating the design into code using Webflow</li>
                    <li>Responsive and functions perfectly across all devices</li>
                    <li>Testing the website thoroughly before launch</li>
                  </ul>
                </div>
              </div>
            </div>
          </Fade>
        </section>
        {/* My Process Section End */}

        {/* Testimony Section */}
        <section className="px-5 md:px-14 lg:px-16 py-10">
          <Fade bottom>
            <div className="flex flex-col items-center gap-3 mb-20">
              <h1 className="text-center text-4xl md:text-5xl xl:text-6xl">What my clients say</h1>
              <p className="text-center opacity-70 md:w-1/2">See what our clients have to say about their experience working with me and my team.</p>
            </div>
          </Fade>

          <Fade bottom cascade>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-9">
              {customers.map((customer) => {
                return (
                  <div className="flex flex-col gap-5 p-6 rounded-lg border border-gray-300">
                    <img src="/icons/target.svg" alt="" className="w-8" />

                    <h1 className="text-2xl">{customer.comment}</h1>
                    <p className="opacity-60">{customer.desc}</p>

                    <div className="flex items-center gap-4">
                      <img src="/icons/user.svg" alt="" className="bg-black p-3 rounded-full" />
                      <div className="text-xs">
                        <h1>{customer.name}</h1>
                        <h1 className="opacity-70">{customer.company}</h1>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Fade>
        </section>
        {/* Testimony Section End */}

        {/* About Section */}
        <Fade>
          <section className="grid grid-cols-1 lg:grid-cols-[0.5fr,1fr]  lg:items-center gap-10 lg:gap-8 mx-5 md:mx-14 lg:mx-16 my-16 md:my-20 lg:my-28 px-5 lg:px-12 py-10 rounded-lg bg-primary">
            {/* Col 1 */}
            <div className="flex flex-col items-center gap-5">
              <div className="flex gap-3">
                <a href="" className="p-2 border border-gray-500 rounded-full hover:scale-110 hover:border-white transition-all duration-300">
                  <img src="/icons/twitter.svg" alt="" className="w-4" />
                </a>
                <a href="" className="p-2 border border-gray-500 rounded-full hover:scale-110 hover:border-white transition-all duration-300">
                  <img src="/icons/instagram.svg" alt="" className="w-4" />
                </a>
                <a href="" className="p-2 border border-gray-500 rounded-full hover:scale-110 hover:border-white transition-all duration-300">
                  <img src="/icons/linkedin.svg" alt="" className="w-4" />
                </a>
              </div>

              <div className="overflow-hidden rounded-full mx-5 max-w-sm lg:w-full">
                <img src="/images/profile.jpg" alt="" className=" " />
              </div>

              <div className="flex justify-center items-center border border-gray-600 rounded-md px-2 py-1 bg-primary bg-opacity-50">
                <h1 className="text-white text-xs">NIRVAN ADAM</h1>
              </div>
            </div>
            {/* Col 1 End */}

            {/* Col 2 */}
            <div className="flex flex-col items-center lg:items-start gap-5 md:px-5">
              <h1 className="text-white text-xs xl:text-sm text-center lg:text-left font-medium text-opacity-60 ">ABOUT</h1>
              <h1 className="text-white text-center lg:text-left text-3xl md:text-5xl xl:text-6xl">A website that leaves a lasting impression!</h1>
              <p className="text-white text-center lg:text-left text-opacity-60">
                Your website is your digital storefront, and it should create an unforgettable impression. Let me design and develop a website that reflects your brand's personality and creates a lasting impression on your audience. With my
                expertise in web design and development, I can help you build a website that stands out and leaves a lasting impact.
              </p>

              <Link className="flex justify-center items-center gap-3 mt-3 group">
                <div className="overflow-hidden border border-gray-600 rounded-full p-2 group-hover:border-white transition-all duration-500">
                  <img src="/icons/arrow-up-right.svg" alt="" className="w-4 group-hover:translate-x-5 group-hover:-translate-y-5 transition-all duration-300" />
                </div>
                <h1 className="text-white text-xs font-medium">ABOUT ME</h1>
              </Link>
            </div>
            {/* Col 2 End */}
          </section>
        </Fade>
        {/* About Section End */}

        {/* Let's Talk Section */}
        <section className="flex flex-col items-center gap-5 px-5 md:px-14 lg:px-28 py-20 md:py-28 lg:py-56 bg-primary">
          <Fade top>
            <h1 className="text-white text-center text-opacity-60 text-xs xl:text-sm font-medium">LET'S TALK</h1>
          </Fade>

          <Fade bottom>
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[110px] text-center text-white leading-tight">Let's make your Website shine.</h1>
          </Fade>

          <Fade bottom>
            <Link className="flex justify-center items-center gap-2 w-fit md:mt-5 px-4 py-3 rounded-md bg-white">
              <h1 className="text-xs font-medium text-opacity-60">GET IN TOUCH</h1>
              <img src="/icons/arrow-up-right.svg" alt="" className="w-4 invert" />
            </Link>
          </Fade>
        </section>
        {/* Let's Talk Section End */}

        {/* Content End */}

        {/* Footer */}
        <Footer />
        {/* Footer End */}
      </div>
    </div>
  );
}

export default Home;
