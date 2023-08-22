import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import Footer from "../../components/footer/Footer";

function Contact() {
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
              className="relative before:contents-[''] before:absolute before:bg-white before:left-0 before:bottom-0 before:w-full before:scale-x-0 before:h-[1px] before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-300 text-white text-sm"
            >
              CONTACT
            </a>

            <a
              href="/contact"
              className="relative overflow-hidden flex justify-center items-center before:contents-[''] before: before:absolute before:bg-white before:-left-2 before:w-0 before:h-full before:-skew-x-[20deg] hover:before:w-[115%] before:transition-all before:duration-300 bg-secondary border border-gray-700 px-4 py-2 rounded-sm text-sm group"
            >
              <h1 className="text-text group-hover:text-black transition-all duration-300 z-10">LET'S TALK</h1>
            </a>
          </div>
          {/* Menu Desktop End */}

          {/* Menu Mobile */}
          <div className={`${showMenu ? "flex top-16" : "flex"} md:hidden -z-10 absolute -top-48 left-5 right-5 flex-col gap-4 bg-secondary p-6 rounded-lg text-white text-sm transition-all duration-700`}>
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
      <div className="bg-primary">
        <section className="px-5 md:px-20 lg:px-36 xl:px-72 pt-10 pb-28">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h1 className="text-sm text-white text-opacity-60 mb-2">CONTACT</h1>
              <h1 className="text-4xl text-white">Let's get in touch.</h1>
            </div>

            <div className="flex flex-col md:flex-row gap-3 lg:gap-5">
              <a href="" className="p-2 border border-gray-500 rounded-full hover:scale-110 hover:border-white transition-all duration-300">
                <img src="/icons/twitter.svg" alt="" className="w-6" />
              </a>
              <a href="" className="p-2 border border-gray-500 rounded-full hover:scale-110 hover:border-white transition-all duration-300">
                <img src="/icons/instagram.svg" alt="" className="w-6" />
              </a>
              <a href="" className="p-2 border border-gray-500 rounded-full hover:scale-110 hover:border-white transition-all duration-300">
                <img src="/icons/linkedin.svg" alt="" className="w-6" />
              </a>
            </div>
          </div>

          <form className="flex flex-col gap-5 mt-6">
            <input
              type="text"
              name=""
              id=""
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-700 rounded-md bg-secondary outline-none text-white focus:border-white transition-all duration-300 placeholder:font-medium placeholder:text-white placeholder:text-opacity-50 focus:placeholder:-translate-y-10 placeholder:transition-all placeholder:duration-300"
            />

            <input
              type="text"
              name=""
              id=""
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-700 rounded-md bg-secondary outline-none text-white focus:border-white transition-all duration-300 placeholder:font-medium placeholder:text-white placeholder:text-opacity-50 focus:placeholder:-translate-y-10 placeholder:transition-all placeholder:duration-300"
            />

            <textarea
              name=""
              id=""
              cols="30"
              rows="7"
              placeholder="Your Message"
              className="px-4 py-3 border border-gray-700 rounded-md bg-secondary outline-none text-white focus:border-white transition-all duration-300 placeholder:font-medium placeholder:text-white placeholder:text-opacity-50 focus:placeholder:-translate-y-10 placeholder:transition-all placeholder:duration-300"
            />

            <button type="button" className=" bg-white border border-white py-3 rounded-md group">
              <h1 className="text-sm text-black font-medium group-hover:text-yellow-00 transition-all duration-500 z-20">SEND MESSAGE</h1>
            </button>
          </form>
        </section>
      </div>
      {/* Content End */}

      <Footer />
    </div>
  );
}

export default Contact;
