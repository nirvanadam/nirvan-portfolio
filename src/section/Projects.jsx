import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

function Projects() {
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

  return (
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
  );
}

export default Projects;
