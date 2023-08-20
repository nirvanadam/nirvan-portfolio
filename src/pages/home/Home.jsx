import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Animation
import "animate.css";
import Fade from "react-reveal/Fade";

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

  return (
    <div>
      {/* Navbar */}
      <nav className="sticky top-0 z-20">
        <nav className={`${navbarBackground} z-20 flex justify-between bg-primary text-white px-6 md:px-11 lg:px-16 py-3 md:py-5`}>
          <Link className="text-2xl font-l">adam.</Link>

          <button
            type="button"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="flex md:hidden flex-col justify-center gap-2 w-[30px] h-[30px] "
          >
            <span className="bg-white w-full h-[1px]"></span>
            <span className="bg-white w-full h-[1px]"></span>
            <span className="bg-white w-full h-[1px]"></span>
          </button>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-9">
            <Link className="text-white text-sm ">WORK</Link>
            <Link className="text-white text-sm ">SERVICES</Link>
            <Link className="text-white text-sm ">ABOUT</Link>
            <Link className="text-white text-sm ">CONTACT</Link>
            <Link className="flex justify-center items-center bg-secondary border border-gray-700 px-4 py-2 rounded-sm text-sm">
              <h1>LET'S TALK</h1>
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
      <div className={`${showMenu ? "before:opacity-60" : "before:opacity-0"} relative before:contents-[''] before:z-10 before:absolute before:bg-black  before:top-0 before:left-0 before:right-0 before:bottom-0 before:transition-all`}>
        {/* Section 1 */}
        <section className="grid grid-cols-1 md:grid-cols-[2fr,1fr] lg:grid-cols-[2fr,1.5fr] md:items-center gap-5 md:gap-12 xl:h-[90vh] bg-primary text-white px-5 md:px-11 lg:px-16 py-8 md:py-16">
          <Fade bottom>
            <div className="flex flex-col gap-4 xl:gap-6">
              <h1 className="text-center md:text-left text-4xl md:text-[54px] lg:text-7xl md:leading-none">Front-end Web Developer</h1>
              <p className="xl:w-[70%] text-center md:text-xl xl:text-2xl md:text-left opacity-60 ">An enthusiastic front-end web developer with a passion for visual design and the ability to translate it into code.</p>
            </div>
          </Fade>

          <Fade bottom>
            <img src="/images/profile.jpg" alt="" className="rounded-full xl:w-[80%]" />
          </Fade>
        </section>
        {/* Section 1 End */}

        {/* Services Section */}
        <section className="grid grid-cols-1  md:grid-cols-2 gap-12 lg:gap-14 px-5 md:px-14 lg:px-16 py-10">
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

          <Fade bottom>
            <div className="flex flex-col gap-5">
              {/* Project 1 */}
              <button className="relative overflow-hidden h-[200px] md:w-full md:h-[400px] lg:h-[490px] xl:h-[600px] rounded-lg bg-yellow-400">
                <img src="https://source.unsplash.com/1600x900/?art" alt="" className="w-full h-full top-0 bottom-0 left-0 right-0" />

                <dix className="absolute left-3 md:left-10 bottom-6 md:bottom-11 flex lg:flex-col justify-center items-center gap-3 lg:items-start w-24 md:w-28 lg:w-[500px] lg:px-8 py-4 md:py-6 lg:py-8 rounded-lg bg-black">
                  <h1 className="text-3xl xl:text-5xl text-white">Erikk</h1>
                  <p className="hidden lg:block text-white text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit earum ipsam aperiam dicta officia, maiores soluta non quam! Beatae, deserunt!</p>
                  <Link className="hidden lg:flex jusitfy-center items-center gap-3">
                    <div className="bg-secondary p-2 rounded-full">
                      <img src="/icons/arrow-up-right.svg" alt="" />
                    </div>
                    <h1 className="text-white text-sm">DISCOVER</h1>
                  </Link>
                </dix>
              </button>
              {/* Project 1 End */}
            </div>
          </Fade>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-9">
              <div className="flex flex-col gap-5 p-6 rounded-lg border border-gray-300">
                <img src="/icons/target.svg" alt="" className="w-8" />

                <h1 className="text-2xl">Exceptional web design that exceeded our expectations</h1>
                <p className="opacity-60">Our website redesign surpassed our expectations. Aiko's attention to detail and creativity resulted in a visually stunning and user-friendly site that immediately boosted our online presence.</p>

                <div className="flex items-center gap-4">
                  <img src="/icons/user.svg" alt="" className="bg-black p-3 rounded-full" />
                  <div className="text-xs">
                    <h1>JOHN SMITH</h1>
                    <h1 className="opacity-70">ABC Company</h1>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </section>
        {/* Testimony Section End */}

        {/* About Section */}
        <Fade>
          <section className="grid grid-cols-1 lg:grid-cols-[0.5fr,1fr]  lg:items-center gap-10 lg:gap-8 mx-5 md:mx-14 lg:mx-16 my-10 px-5 lg:px-12 py-10 rounded-lg bg-primary">
            {/* Col 1 */}
            <div className="flex flex-col items-center gap-5">
              <div className="flex gap-3">
                <a href="" className="p-2 border border-gray-500 rounded-full">
                  <img src="/icons/twitter.svg" alt="" className="w-4" />
                </a>
                <a href="" className="p-2 border border-gray-500 rounded-full">
                  <img src="/icons/instagram.svg" alt="" className="w-4" />
                </a>
                <a href="" className="p-2 border border-gray-500 rounded-full">
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
            <div className="flex flex-col items-center lg:items-start gap-3 md:px-5">
              <h1 className="text-white text-xs text-center lg:text-left font-medium text-opacity-60 ">ABOUT</h1>
              <h1 className="text-white text-center lg:text-left text-3xl md:text-5xl xl:text-6xl">A website that leaves a lasting impression!</h1>
              <p className="text-white text-center lg:text-left text-opacity-60">
                Your website is your digital storefront, and it should create an unforgettable impression. Let me design and develop a website that reflects your brand's personality and creates a lasting impression on your audience. With my
                expertise in web design and development, I can help you build a website that stands out and leaves a lasting impact.
              </p>

              <Link className="flex justify-center items-center gap-3 mt-3">
                <div className="border border-gray-600 rounded-full p-2">
                  <img src="/icons/arrow-up-right.svg" alt="" className="w-4 " />
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
        <footer className=" bg-primary text-white px-5 md:px-14 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">
            {/* Col 1 */}
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl font-l">adam.</h1>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <a href="" className="p-2 border border-gray-500 rounded-full">
                    <img src="/icons/twitter.svg" alt="" className="w-4" />
                  </a>
                  <h1 className="text-xs font-medium text-white text-opacity-60">TWITTER</h1>
                </div>

                <div className="flex items-center gap-3">
                  <a href="" className="p-2 border border-gray-500 rounded-full">
                    <img src="/icons/instagram.svg" alt="" className="w-4" />
                  </a>
                  <h1 className="text-xs font-medium text-white text-opacity-60">INSTAGRAM</h1>
                </div>

                <div className="flex items-center gap-3">
                  <a href="" className="p-2 border border-gray-500 rounded-full">
                    <img src="/icons/linkedin.svg" alt="" className="w-4" />
                  </a>
                  <h1 className="text-xs font-medium text-white text-opacity-60">LINKEDIN</h1>
                </div>
              </div>
            </div>
            {/* Col 1 End */}

            {/* Col 2 */}
            <div className="flex flex-col gap-5">
              <h1 className="text-xl font-l">PAGES</h1>
              <div className="flex flex-col gap-5">
                <Link className="text-xs font-medium text-white text-opacity-60">HOME</Link>
                <Link className="text-xs font-medium text-white text-opacity-60">SERVICES</Link>
                <Link className="text-xs font-medium text-white text-opacity-60">ABOUT</Link>
                <Link className="text-xs font-medium text-white text-opacity-60">CONTACT</Link>
                <Link className="flex justify-center items-center gap-2 w-fit px-4 py-3 rounded-md bg-white">
                  <h1 className="text-xs font-medium text-black text-opacity-60">MORE TEMPLATES</h1>
                  <img src="/icons/arrow-up-right.svg" alt="" className="w-4 invert" />
                </Link>
              </div>
            </div>
            {/* Col 2 End */}

            {/* Col 3 */}
            <div className="flex flex-col gap-5">
              <h1 className="text-xl font-l">CMS</h1>
              <div className="flex flex-col gap-5">
                <Link className="text-xs font-medium text-white text-opacity-60">WORK</Link>
                <Link className="text-xs font-medium text-white text-opacity-60">WORK SINGLE</Link>
                <Link className="text-xs font-medium text-white text-opacity-60">BLOG</Link>
                <Link className="text-xs font-medium text-white text-opacity-60">BLOG SINGLE</Link>
                <Link className="text-xs font-medium text-white text-opacity-60">PRICING</Link>
                <Link className="text-xs font-medium text-white text-opacity-60">PRICING SINGLE</Link>
              </div>
            </div>
            {/* Col 3 End */}

            {/* Col 4 */}
            <div className="flex flex-col gap-5">
              <h1 className="text-xl font-l">UTILITY PAGES</h1>
              <div className="flex flex-col gap-5">
                <Link className="text-xs font-medium text-white text-opacity-60">404 ERROR PAGE</Link>
                <Link className="text-xs font-medium text-white text-opacity-60">PASSWORD PROTECTTED</Link>
                <Link className="text-xs font-medium text-white text-opacity-60">STYLE GUIDE</Link>
                <Link className="text-xs font-medium text-white text-opacity-60">LICENSING</Link>
                <Link className="text-xs font-medium text-white text-opacity-60">CHANGELOG</Link>
              </div>
            </div>
            {/* Col 4 End */}
          </div>

          <div className="flex flex-col md:flex-row items-center md:justify-between mt-10">
            <h1 className="text-sm text-white font-medium text-opacity-60">
              © Made by <span className="underline">Nirvan Adam</span>{" "}
            </h1>
            <Link className="flex justify-center items-center gap-2 w-fit px-4 py-3 rounded-md">
              <h1 className="text-xs font-medium text-opacity-60">TO TOP</h1>
              <div className="p-2 rounded-full border border-gray-600">
                <img src="/icons/arrow-up.svg" alt="" className="w-4" />
              </div>
            </Link>
          </div>
        </footer>
        {/* Footer End */}
      </div>
    </div>
  );
}

export default Home;
