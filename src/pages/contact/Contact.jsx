import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

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
            <span className={`${showMenu ? "w-0" : "w-full"} bg-white  h-[1px] transition-all duration-300`}></span>
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
    </div>
  );
}

export default Contact;
