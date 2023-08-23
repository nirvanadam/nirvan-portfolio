import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import Footer from "../../components/footer/Footer";

function Services() {
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

  const [showDetail1, setShowDetail1] = useState(false);
  const [showDetail2, setShowDetail2] = useState(false);
  const [showDetail3, setShowDetail3] = useState(false);
  return (
    <div>
      {/* Navbar */}
      <nav className="sticky top-0 z-20">
        <nav className={`${navbarBackground} z-20 flex justify-between bg-primary text-white px-6 md:px-11 lg:px-16 py-3 md:py-5`}>
          <a href="/" className="text-2xl">
            adam.
          </a>

          <button
            type="button"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="flex md:hidden flex-col justify-center gap-2 w-[30px] h-[30px] group"
          >
            <span className={`bg-white w-full h-[1px] origin-left transition-all duration-300  ${showMenu ? "rotate-[38deg] delay-300" : "delay-0"}`}></span>
            <span className={`${showMenu ? "scale-x-0" : ""} w-full bg-white  h-[1px] transition-all duration-300`}></span>
            <span className={`bg-white w-full h-[1px] origin-left transition-all duration-300  ${showMenu ? "-rotate-[38deg] delay-300" : "delay-0"}`}></span>
          </button>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-9">
            <a
              href="/"
              className="relative before:contents-[''] before:absolute before:bg-white before:left-0 before:bottom-0 before:w-full before:scale-x-0 before:h-[1px] before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-300 text-white text-sm"
            >
              HOME
            </a>

            <a
              href="/work"
              className="relative before:contents-[''] before:absolute before:bg-white before:left-0 before:bottom-0 before:w-full before:scale-x-0 before:h-[1px] before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-300 text-white text-sm"
            >
              WORK
            </a>

            <a
              href="/services"
              className="relative before:contents-[''] before:absolute before:bg-white before:left-0 before:bottom-0 before:w-full before:scale-x-0 before:h-[1px] before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-300 text-white text-sm"
            >
              SERVICES
            </a>

            <a
              href="/about"
              className="relative before:contents-[''] before:absolute before:bg-white before:left-0 before:bottom-0 before:w-full before:scale-x-0 before:h-[1px] before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-300 text-white text-sm"
            >
              ABOUT
            </a>

            <a
              href="/contact"
              className="relative overflow-hidden flex justify-center items-center before:contents-[''] before: before:absolute before:bg-primary before:-left-3 before:w-[120%] before:scale-x-100 before:h-full before:-skew-x-[20deg] hover:before:scale-x-0 before:transition-all before:duration-300 bg-white border border-white px-4 py-2 rounded-sm text-sm group"
            >
              <h1 className="text-text group-hover:text-black transition-all duration-300 z-10">LET'S TALK</h1>
            </a>
          </div>
          {/* Menu Desktop End */}

          {/* Menu Mobile */}
          <div className={`${showMenu ? "flex top-16" : "flex -top-56 opacity-0"} md:hidden -z-10 absolute left-5 right-5 flex-col items-center gap-6 bg-secondary p-6 rounded-lg text-white text-sm transition-all duration-700`}>
            <a
              href="/"
              className="relative before:contents-[''] before:absolute before:bg-white before:left-0 before:bottom-0 before:w-full before:scale-x-0 before:h-[1px] before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-300 w-fit text-white text-sm"
            >
              HOME
            </a>

            <a
              href="/work"
              className="relative before:contents-[''] before:absolute before:bg-white before:left-0 before:bottom-0 before:w-full before:scale-x-0 before:h-[1px] before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-300 w-fit text-white text-sm"
            >
              WORK
            </a>

            <a
              href="/services"
              className="relative before:contents-[''] before:absolute before:bg-white before:left-0 before:bottom-0 before:w-full before:scale-x-0 before:h-[1px] before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-300 w-fit text-white text-sm"
            >
              SERVICES
            </a>

            <a
              href="/about"
              className="relative before:contents-[''] before:absolute before:bg-white before:left-0 before:bottom-0 before:w-full before:scale-x-0 before:h-[1px] before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-300 w-fit text-white text-sm"
            >
              ABOUT
            </a>

            <a
              href="/contact"
              className="relative overflow-hidden flex justify-center items-center before:contents-[''] before: before:absolute before:bg-white before:-left-3 before:w-[120%] before:scale-x-100 before:h-full before:-skew-x-[20deg] hover:before:scale-x-0 before:transition-all before:duration-300 w-full bg-white border border-white px-4 py-2 rounded-sm text-sm group"
            >
              <h1 className="text-black group-hover:text-white transition-all duration-300 z-10">LET'S TALK</h1>
            </a>
          </div>
          {/* Menu Mobile End */}
        </nav>
      </nav>
      {/* Navbar End */}

      {/* Content */}
      <div
        className={`${
          showMenu ? "before:contents-[''] overflow-hidden before:z-10 before:absolute before:bg-black  before:top-0 before:left-0 before:right-0 before:bottom-0 before:transition-all before:opacity-60" : "before:opacity-0"
        } relative`}
      >
        {/* Section 1 */}
        <section className="flex flex-col items-center gap-3 px-5 md:px-14 py-10 lg:py-12 bg-primary">
          <Fade bottom>
            <h1 className="text-xs text-white text-opacity-50">SERVICES</h1>
            <h1 className="lg:w-[70%] xl:w-[60%] xl:mt-5 text-white text-4xl md:text-5xl xl:text-7xl md:leading-tight text-center">Unlock Your Website's Potential</h1>
            <p className="md:w-[70%] xl:w-[48%] text-white text-opacity-70 text-center text-lg">Maximize your website's capabilities and reach its full potential with our services.</p>
          </Fade>

          <Fade bottome>
            <a href="#section2" className="flex justify-center items-center gap-2 w-fit mt-5 group">
              <div className="overflow-hidden p-2 rounded-full border border-gray-600 bg-primary group-hover:border-white transition-all duration-500">
                <img src="/icons/arrow-down.svg" alt="" className="w-5 group-hover:translate-y-8 transition-all duration-300" />
              </div>
              <h1 className="text-white text-sm font-medium text-opacity-60">EXPLORE</h1>
            </a>
          </Fade>
        </section>

        {/* Section 1 End */}

        {/* Section 2 */}
        <Fade bottom>
          <section className="grid grid-cols-2 md:grid-cols-4 gap-2 px-3 py-5 md:py-14 bg-white">
            <div className="flex flex-col justify-center items-center gap-1 md:gap-2 xl:gap-3 py-3">
              <h1 className="text-sm font-medium text-black text-opacity-60">CLIENTS</h1>
              <h1 className="text-3xl md:text-4xl xl:text-5xl">50+</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 md:gap-2 xl:gap-3 py-3">
              <h1 className="text-sm font-medium text-black text-opacity-60">PROJECTS</h1>
              <h1 className="text-3xl md:text-4xl xl:text-5xl">150+</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 md:gap-2 xl:gap-3 py-3">
              <h1 className="text-sm font-medium text-black text-opacity-60">HAPPY CLIENTS</h1>
              <h1 className="text-3xl md:text-4xl xl:text-5xl">100%</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 md:gap-2 xl:gap-3 py-3">
              <h1 className="text-sm font-medium text-black text-opacity-60">FOLLOWERS</h1>
              <h1 className="text-3xl md:text-4xl xl:text-5xl">10M</h1>
            </div>
          </section>
        </Fade>
        {/* Section 2 End */}

        {/* Web Design Section */}
        <Fade bottom>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 lg:gap-20 px-6 md:px-12 lg:px-20 py-10 md:py-16 lg:py-20">
            <div className="">
              <h1 className="text-3xl md:text-4xl xl:text-5xl mb-2">Web Design</h1>
              <p className="xl:text-lg">Premium, custom web design services that cater to the unique needs of each client</p>
              <button
                type="button"
                onClick={() => {
                  setShowDetail1(!showDetail1);
                }}
                className="flex md:hidden justify-center items-center gap-2 w-fit mt-5 group"
              >
                <div className=" overflow-hidden p-2 rounded-full border border-gray-600 bg-primary group-hover:border-white transition-all duration-500">
                  <img src="/icons/arrow-down.svg" alt="" className={`${showDetail1 ? "rotate-180" : ""} w-5 transition-all duration-300`} />
                </div>
                <h1 className="text-black text-sm font-medium text-opacity-60">DETAIL</h1>
              </button>
            </div>

            <div className={`${showDetail1 ? "" : "hidden md:flex"} flex flex-col gap-5 transition duration-300`}>
              <p>
                As a web design specialist, I provide premium, custom web design services that cater to the unique needs of each client. I work closely with my clients throughout the design process to ensure their vision is brought to life
                and their website stands out from the competition.
              </p>

              <p>I use the latest design techniques and best practices to create visually stunning and user-friendly websites that drive results.</p>

              <ul className="flex flex-col gap-4 list-disc mx-5">
                <li>Custom website design tailored to your brand</li>
                <li>User experience design and user interface design</li>
                <li>Mobile optimization and responsive design</li>
                <li>E-commerce design and functionality</li>
              </ul>
            </div>
          </section>
        </Fade>
        {/* Web Design Section End */}

        {/* Webflow Development Section */}
        <Fade bottom>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 lg:gap-20 px-6 md:px-12 lg:px-20 py-10 md:py-16 lg:py-20">
            <div className="">
              <h1 className="text-3xl md:text-4xl xl:text-5xl mb-2">Webflow Development</h1>
              <p className="xl:text-lg">Beautiful, functional websites created using the powerful Webflow platform.</p>
              <button
                type="button"
                onClick={() => {
                  setShowDetail1(!showDetail2);
                }}
                className="flex md:hidden justify-center items-center gap-2 w-fit mt-5 group"
              >
                <div className=" overflow-hidden p-2 rounded-full border border-gray-600 bg-primary group-hover:border-white transition-all duration-500">
                  <img src="/icons/arrow-down.svg" alt="" className={`${showDetail2 ? "rotate-180" : ""} w-5 transition-all duration-300`} />
                </div>
                <h1 className="text-black text-sm font-medium text-opacity-60">DETAIL</h1>
              </button>
            </div>

            <div className={`${showDetail2 ? "" : "hidden md:flex"} flex flex-col gap-5 transition duration-300`}>
              <p>
                As a Webflow expert, I have the skills and knowledge to create beautiful and functional websites using this powerful platform. I specialize in designing responsive websites that are optimized for speed and search engine
                performance.
              </p>

              <p>With Webflow, I can provide clients with a highly customizable and easily manageable website that they can edit with ease, even with no prior web development experience.</p>

              <ul className="flex flex-col gap-4 list-disc mx-5">
                <li>Custom Webflow design and development</li>
                <li>Responsive design and cross-browser compatibility</li>
                <li>Webflow CMS and content management</li>
                <li>Webflow hosting and ongoing maintenance</li>
              </ul>
            </div>
          </section>
        </Fade>
        {/* Webflow Development Section End */}

        {/*Content & SEO Section */}
        <Fade bottom>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 lg:gap-20 px-6 md:px-12 lg:px-20 py-10 md:py-16 lg:py-20">
            <div className="">
              <h1 className="text-3xl md:text-4xl xl:text-5xl mb-2">Content & SEO</h1>
              <p className="xl:text-lg">Comprehensive services that help businesses build a strong online presence.</p>
              <button
                type="button"
                onClick={() => {
                  setShowDetail1(!showDetail3);
                }}
                className="flex md:hidden justify-center items-center gap-2 w-fit mt-5 group"
              >
                <div className=" overflow-hidden p-2 rounded-full border border-gray-600 bg-primary group-hover:border-white transition-all duration-500">
                  <img src="/icons/arrow-down.svg" alt="" className={`${showDetail3 ? "rotate-180" : ""} w-5 transition-all duration-300`} />
                </div>
                <h1 className="text-black text-sm font-medium text-opacity-60">DETAIL</h1>
              </button>
            </div>

            <div className={`${showDetail3 ? "" : "hidden md:flex"} flex flex-col gap-5 transition duration-300`}>
              <p>
                As a content creator and SEO specialist, I offer comprehensive services that help businesses build a strong online presence. I create high-quality, engaging content that resonates with the target audience and drives
                conversions.
              </p>

              <p>
                Additionally, I optimize the content for search engines, making it easier for my clients' websites to rank higher in search results. By combining quality content creation and SEO, I help businesses attract and engage their
                ideal customers, ultimately driving growth and success.
              </p>

              <ul className="flex flex-col gap-4 list-disc mx-5">
                <li>Content strategy and planning</li>
                <li>Content creation</li>
                <li>Keyword research and on-page optimization</li>
                <li>Off-page optimization, including backlinking</li>
              </ul>
            </div>
          </section>
        </Fade>
        {/*COntent & SEO Section End */}

        {/* My Process Section */}
        <section className="grid grid-cols-1  md:grid-cols-2 gap-12 lg:gap-14 px-5 md:px-14 lg:px-16 py-10 md:my-20">
          <Fade bottom>
            <div className="flex flex-col gap-2 xl:pr-10">
              <h1 className="text-sm font-medium opacity-70 uppercase">My Process</h1>
              <h1 className="text-3xl xl:text-5xl md:text-4xl md:leading-tight xl:leading-snug">Your Dream Website in just few steps</h1>
              <p className="text-lg opacity-70">From consultation to launch, our streamlined process ensures timely delivery and quality work.</p>
              <a href="/contact" className="flex justify-center items-center gap-2 w-fit mt-4 px-4 py-3 rounded-md bg-primary text-white text-xs font-medium ">
                <h1>GET IN TOUCH</h1>
                <img src="/icons/arrow-up-right.svg" alt="" className="w-4" />
              </a>
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

        {/* Let's talk */}
        <section className="flex flex-col items-center gap-5 px-5 md:px-14 lg:px-28 py-20 md:py-28 lg:py-56 bg-primary">
          <Fade top>
            <h1 className="text-white text-center text-opacity-60 text-xs xl:text-sm font-medium">LET'S TALK</h1>
          </Fade>

          <Fade bottom>
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[110px] text-center text-white leading-tight">Let's make your Website shine.</h1>
          </Fade>

          <Fade bottom>
            <a href="/contact" className="flex justify-center items-center gap-2 w-fit md:mt-5 px-4 py-3 rounded-md bg-white">
              <h1 className="text-xs font-medium text-opacity-60">GET IN TOUCH</h1>
              <img src="/icons/arrow-up-right.svg" alt="" className="w-4 invert" />
            </a>
          </Fade>
        </section>
        {/* Let's Talk End */}

        {/* Footer */}
        <Footer />
        {/* Footer End */}
      </div>
      {/* Content End */}
    </div>
  );
}

export default Services;
