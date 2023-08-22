import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Projects from "../../section/Projects";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";

function Works() {
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
        <section className="px-6 md:px-16 lg:px-24 py-5 md:py-12">
          <div className="relative">
            <Fade bottom>
              <h1 className="text-4xl md:text-6xl xl:text-7xl">Work</h1>
            </Fade>

            <Fade bottom>
              <div className="xl:mt-3 flex flex-col lg:flex-row lg:justify-between gap-5">
                <p className="md:w-3/4 lg:w-[60%] xl:w-[55%] text-lg lg:text-xl text-black text-opacity-70">Take a look at my latest projects and see how I can help bring your vision to life.</p>
                <a href="#works" className="flex justify-center items-center gap-2 w-fit rounded-md group">
                  <div className="overflow-hidden p-2 rounded-full border border-gray-600 bg-primary group-hover:border-white transition-all duration-500">
                    <img src="/icons/arrow-down.svg" alt="" className="w-5 group-hover:translate-y-8 transition-all duration-300" />
                  </div>
                  <h1 className="text-black text-sm font-medium text-opacity-60">EXPLORE</h1>
                </a>
              </div>
            </Fade>
          </div>
        </section>

        <section id="works" className="px-5 md:px-14 lg:px-16 py-5 mb-10 md:mb-16">
          <Projects />
        </section>

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

        <Footer />
      </div>
      {/* Content */}
    </div>
  );
}

export default Works;
