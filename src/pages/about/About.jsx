import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import Footer from "../../components/footer/Footer";

function About() {
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

  const awards = [
    {
      id: 1,
      title: "Award ...",
      year: "2023",
    },
    {
      id: 2,
      title: "Award ...",
      year: "2022",
    },
    {
      id: 2,
      title: "Award ...",
      year: "2021",
    },
  ];
  return (
    <div>
      {/* Navbar */}
      <nav className="sticky top-0 z-20">
        <nav className={`${navbarBackground} z-20 flex justify-between bg-white text-white px-6 md:px-11 lg:px-16 py-3 md:py-5`}>
          <a href="/" className="text-2xl text-black">
            adam.
          </a>

          <button
            type="button"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="flex md:hidden flex-col justify-center gap-2 w-[30px] h-[30px] group"
          >
            <span className={`bg-black w-full h-[1px] origin-left transition-all duration-300  ${showMenu ? "rotate-[38deg] delay-300" : "delay-0"}`}></span>
            <span className={`${showMenu ? "scale-x-0" : ""} w-full bg-black h-[1px] transition-all duration-300`}></span>
            <span className={`bg-black w-full h-[1px] origin-left transition-all duration-300  ${showMenu ? "-rotate-[38deg] delay-300" : "delay-0"}`}></span>
          </button>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-9">
            <a
              href="/"
              className="relative before:contents-[''] before:absolute before:bg-black before:left-0 before:bottom-0 before:w-full before:scale-x-0 before:h-[1px] before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-300 text-black text-sm"
            >
              HOME
            </a>

            <a
              href="/work"
              className="relative before:contents-[''] before:absolute before:bg-black before:left-0 before:bottom-0 before:w-full before:scale-x-0 before:h-[1px] before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-300 text-black text-sm"
            >
              WORK
            </a>

            <a
              href="/services"
              className="relative before:contents-[''] before:absolute before:bg-black before:left-0 before:bottom-0 before:w-full before:scale-x-0 before:h-[1px] before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-300 text-black text-sm"
            >
              SERVICES
            </a>

            <a
              href="/about"
              className="relative before:contents-[''] before:absolute before:bg-black before:left-0 before:bottom-0 before:w-full before:scale-x-0 before:h-[1px] before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-300 text-black text-sm"
            >
              ABOUT
            </a>

            <a
              href="/contact"
              className="relative before:contents-[''] before:absolute before:bg-black before:left-0 before:bottom-0 before:w-full before:scale-x-0 before:h-[1px] before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-300 text-black text-sm"
            >
              CONTACT
            </a>

            <a
              href="/contact"
              className="relative overflow-hidden flex justify-center items-center before:contents-[''] before: before:absolute before:bg-white before:-left-3 before:w-[120%] before:scale-x-100 before:h-full before:-skew-x-[20deg] hover:before:scale-x-0 before:transition-all before:duration-300 bg-primary border border-primary px-4 py-2 rounded-sm text-sm group"
            >
              <h1 className="text-black group-hover:text-white transition-all duration-300 z-10">LET'S TALK</h1>
            </a>
          </div>
          {/* Menu Desktop End */}

          {/* Menu Mobile */}
          <div className={`${showMenu ? "flex top-16" : "flex"} md:hidden -z-10 absolute -top-48 left-5 right-5 flex-col gap-4 bg-secondary p-6 rounded-lg text-white text-sm transition-all duration-700`}>
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
              className="relative before:contents-[''] before:absolute before:bg-white before:left-0 before:bottom-0 before:w-full before:scale-x-0 before:h-[1px] before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-300 w-fit text-white text-sm"
            >
              CONTACT
            </a>
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
        <Fade bottom>
          <section className="flex flex-col items-center gap-3 px-5 md:px-14 py-6 lg:py-12 ">
            <img src="/images/profile.jpg" alt="" className="w-48 rounded-full" />
            <h1 className="lg:w-[70%] xl:w-[60%] xl:mt-5 text-4xl md:text-5xl xl:text-7xl md:leading-tight text-center">I Bring Your Website Vision to Life</h1>
            <p className="lg:w-[70%] xl:w-[48%] text-black text-opacity-70 text-center text-lg">Your website is an extension of your brand, and I’m here to help you make it the best it can be.</p>

            <a href="#section2" className="flex justify-center items-center gap-2 w-fit mt-5 group">
              <div className="overflow-hidden p-2 rounded-full border border-gray-600 bg-primary group-hover:border-white transition-all duration-500">
                <img src="/icons/arrow-down.svg" alt="" className="w-5 group-hover:translate-y-8 transition-all duration-300" />
              </div>
              <h1 className="text-black text-sm font-medium text-opacity-60">LEARN MORE</h1>
            </a>
          </section>
        </Fade>
        {/* Section 1 Endi */}

        {/* Section 2 */}
        <Fade bottom>
          <section id="section2" className="mx-5 md:mx-14 lg:mx-28 xl:mx-80 my-8 lg:mt-20 px-7 md:px-9 lg:px-16 py-8 md:py-10 lg:py-14 border border-gray-300 rounded-md">
            <Fade bottom>
              <div className="flex flex-col gap-3">
                <h1 className="text-sm font-medium text-black text-opacity-70">HOW I WORK</h1>
                <h1 className="text-3xl md:text-4xl xl:text-5xl lg:leading-tight">My Approach to a successfull Partnership</h1>
                <p className="">I believe in a collaborative process that puts your needs first, and delivers outstanding results every time.</p>
              </div>
            </Fade>

            <Fade bottom cascade>
              <article className="flex flex-col gap-8 mt-5 md:mt-9">
                <div className="flex flex-col md:flex-row gap-3 md:gap-8">
                  <h1 className="text-2xl">01</h1>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-2xl">BUILDING TRUST</h1>
                    <p className="text-black text-opacity-70">My approach is built on trust, transparency, and a deep commitment to understanding your unique needs. Together, we'll create something truly amazing.</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3 md:gap-8">
                  <h1 className="text-2xl">02</h1>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-2xl">BUILDING PARTNERSHIPS</h1>
                    <p className="text-black text-opacity-70">Collaboration, communication, and a deep understanding of your brand and audience are the keys to a successful partnership. Let's work together to achieve your goals.</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3 md:gap-8">
                  <h1 className="text-2xl">03</h1>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-2xl">ACHIEVING REAL RESULTS</h1>
                    <p className="text-black text-opacity-70">With a focus on clear communication, attention to detail, and a passion for excellence, I'm here to help you achieve your goals and take your business to the next level.</p>
                  </div>
                </div>
              </article>
            </Fade>
          </section>
        </Fade>
        {/* Section 2 End */}

        {/* Section 3 */}
        <Fade>
          <section className="mx-5 md:mx-14 lg:mx-28 xl:mx-80 my-8 px-7 md:px-9 lg:px-16 py-8 md:py-10 lg:py-14 border border-gray-300 rounded-md">
            <h1 className="text-sm font-medium text-black text-opacity-70">AWARDS</h1>
            <Fade bottom>
              <div className="flex flex-col gap-6 mt-5">
                {awards.map((award) => {
                  return (
                    <div className="grid grid-cols-2 items-center">
                      <h1 className="text-xl xl:text-2xl">{award.title}</h1>
                      <h1 className="justify-self-end">{award.year}</h1>
                    </div>
                  );
                })}
              </div>
            </Fade>
          </section>
        </Fade>
        {/* Section 3 End */}

        {/* Section 4 */}
        <Fade>
          <section className="mx-5 md:mx-14 lg:mx-28 xl:mx-80 mt-8 mb-14 px-7 md:px-10 lg:px-14 py-7 md:py-12 lg:py-16 bg-primary rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center">
              <img src="/images/profile.jpg" alt="" className="rounded-full mb-4 md:mb-0 w-full md:w-3/4" />
              <div className="flex flex-col gap-4">
                <h1 className="text-white text-3xl md:text-4xl xl:text-5xl text-center md:text-left">Nirvan Adam Pramudhyta</h1>
                <div className="flex justify-center md:justify-start gap-3">
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
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-8 md:mt-12 items-center md:items-start text-center md:text-left">
              <h1 className="text-white text-2xl xl:text-3xl">Premium Webdesign, Webflow, and SEO services to help your business grow.</h1>
              <p className="text-white text-opacity-60">
                Greetings! I am a Front-End Developer focused on creating stunning and responsive web experiences. With expertise in HTML5, CSS3, and JavaScript, I transform designs into elegant code, blending visual imagination with
                intuitive functionality.
              </p>
              <p className="text-white text-opacity-60">
                Here, you'll find evidence of my ability to deliver bold and innovative interfaces through HTML, CSS, and JavaScript. I take pleasure in innovating to keep each project modern and compatible across various devices.
              </p>

              <a href="/contact" className="flex justify-center items-center gap-2 w-fit mt-3 md:mt-5 px-4 py-3 rounded-md bg-white">
                <h1 className="text-xs font-medium text-opacity-60">GET IN TOUCH</h1>
                <img src="/icons/arrow-up-right.svg" alt="" className="w-4 invert" />
              </a>
            </div>
          </section>
        </Fade>
        {/* Section 4 End */}

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

export default About;
