import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

function Footer() {
  return (
    <footer className=" bg-primary text-white px-5 md:px-14 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">
        {/* Col 1 */}
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-l">adam.</h1>
          <div className="flex flex-col gap-3">
            <a href="https://github.com/nirvanadam" target="_blank" className="flex items-center gap-3 group w-fit">
              <div className="p-2 border border-gray-500 rounded-full group-hover:scale-110 group-hover:border-white transition-all duration-300">
                <img src="/icons/github2.svg" alt="" className="w-4" />
              </div>
              <h1 className="text-xs font-medium text-white text-opacity-60 group-hover:text-opacity-100 transition-all duration-300">GITHUB</h1>
            </a>

            <a href="https://www.instagram.com/nirvanadm/" target="_blank" className="flex items-center gap-3 group w-fit">
              <div className="p-2 border border-gray-500 rounded-full group-hover:scale-110 group-hover:border-white transition-all duration-300">
                <img src="/icons/instagram.svg" alt="" className="w-4" />
              </div>
              <h1 className="text-xs font-medium text-white text-opacity-60 group-hover:text-opacity-100 transition-all duration-300">INSTAGRAM</h1>
            </a>

            <a href="https://www.linkedin.com/in/nirvan-adam-pramudhyta-74643b14a/" target="_blank" className="flex items-center gap-3 group w-fit">
              <div className="p-2 border border-gray-500 rounded-full group-hover:scale-110 group-hover:border-white transition-all duration-300">
                <img src="/icons/linkedin.svg" alt="" className="w-4" />
              </div>
              <h1 className="text-xs font-medium text-white text-opacity-60 group-hover:text-opacity-100 transition-all duration-300">LINKEDIN</h1>
            </a>
          </div>
        </div>
        {/* Col 1 End */}

        {/* Col 2 */}
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-l">PAGES</h1>
          <div className="flex flex-col gap-5">
            <Link className="text-xs font-medium text-white text-opacity-60 hover:text-opacity-100 transition-all duration-300">HOME</Link>
            <Link className="text-xs font-medium text-white text-opacity-60 hover:text-opacity-100 transition-all duration-300">SERVICES</Link>
            <Link className="text-xs font-medium text-white text-opacity-60 hover:text-opacity-100 transition-all duration-300">ABOUT</Link>
            <Link className="text-xs font-medium text-white text-opacity-60 hover:text-opacity-100 transition-all duration-300">CONTACT</Link>
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
            <Link className="text-xs font-medium text-white text-opacity-60 hover:text-white transition-all duration-300">WORK</Link>
            <Link className="text-xs font-medium text-white text-opacity-60 hover:text-white transition-all duration-300">WORK SINGLE</Link>
            <Link className="text-xs font-medium text-white text-opacity-60 hover:text-white transition-all duration-300">BLOG</Link>
            <Link className="text-xs font-medium text-white text-opacity-60 hover:text-white transition-all duration-300">BLOG SINGLE</Link>
            <Link className="text-xs font-medium text-white text-opacity-60 hover:text-white transition-all duration-300">PRICING</Link>
            <Link className="text-xs font-medium text-white text-opacity-60 hover:text-white transition-all duration-300">PRICING SINGLE</Link>
          </div>
        </div>
        {/* Col 3 End */}

        {/* Col 4 */}
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-l">UTILITY PAGES</h1>
          <div className="flex flex-col gap-5">
            <Link className="text-xs font-medium text-white text-opacity-60 hover:text-white transition-all duration-300">404 ERROR PAGE</Link>
            <Link className="text-xs font-medium text-white text-opacity-60 hover:text-white transition-all duration-300">PASSWORD PROTECTTED</Link>
            <Link className="text-xs font-medium text-white text-opacity-60 hover:text-white transition-all duration-300">STYLE GUIDE</Link>
            <Link className="text-xs font-medium text-white text-opacity-60 hover:text-white transition-all duration-300">LICENSING</Link>
            <Link className="text-xs font-medium text-white text-opacity-60 hover:text-white transition-all duration-300">CHANGELOG</Link>
          </div>
        </div>
        {/* Col 4 End */}
      </div>

      <div className="flex flex-col md:flex-row items-center md:justify-between mt-10">
        <h1 className="text-sm text-white font-medium text-opacity-60">
          © Made by <span className="underline">Nirvan Adam</span>{" "}
        </h1>
        <button
          type="button"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="flex justify-center items-center gap-2 w-fit px-4 py-3 rounded-md group"
        >
          <h1 className="text-xs font-medium text-opacity-60">TO TOP</h1>
          <div className="overflow-hidden p-2 rounded-full border border-gray-600 group-hover:border-white transition-all duration-300">
            <img src="/icons/arrow-up.svg" alt="" className="w-4 group-hover:-translate-y-8 transition-all duration-300" />
          </div>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
