import React from "react";
import { BsGithub } from "react-icons/bs";
import { MdOutlineLink } from "react-icons/md";

function Projects(props) {
  const projects = props.projects;

  return (
    <main className="dark:bg-[#181a1b]">
      <section className="pageTop">
        <div className="w-full flex flex-col gap-3 py-5 select-none mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
            Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I've been making various types of projects some of them were basics
            and some of them were complicated. So far I've made{" "}
            {projects.length}+ projects
          </p>
        </div>
        {projects.map((value, index) => {
          return (
            <div className="card ml-auto dark:bg-[#25282A]" key={index}>
              <div className="relative -mt-[35%] sm:-mt-0 md:-ml-[35%] w-full sm:w-1/2 md:w-8/12 shrink-0 rounded-xl overflow-hidden shadow-2xl before:absolute before:inset-0 dark:before:bg-black/20 before:z-10">
                <img
                  src={value.coverImage}
                  alt=""
                  width={1200}
                  height={630}
                  className="transition-all duration-300 lg:group-hover:scale-110 backdrop-blur-xl"
                />
              </div>

              <div className="flex flex-col justify-start gap-3">
                <h1 className="font-bold text-neutral-900 dark:text-white">
                  {value.name}
                </h1>
                <p className="text-sm text-gray-400 dark:text-gray-300 line-clamp-5">
                  {value.description}
                </p>
                <div className="flex flex-wrap items-center gap-1">
                  {value.tools.map((tool, index) => {
                    return (
                      <span
                        key={`${tool}-${index}`}
                        className="px-2 py-1 text-xs text-gray-500 dark:text-gray-200 bg-gray-100 dark:bg-[#181A1B] rounded"
                      >
                        {tool}
                      </span>
                    );
                  })}
                </div>
                <div className="flex items-center gap-4 p-2 mt-auto w-fit">
                  <a
                    href={value.githubURL}
                    title="Source Code on GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    <BsGithub className="w-6 h-6 transition-all hover:scale-110 active:scale-90" />
                  </a>

                  {value.previewURL && (
                    <a
                      href={value.previewURL}
                      title="Live Preview"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
                    >
                      <MdOutlineLink className="w-6 h-6 transition-all hover:scale-110 active:scale-90" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Projects;
