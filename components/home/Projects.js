import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { LinkPreview } from "../ui/link-preview";
import Link from "next/link";

const projects = [
  {
    name: "ELLIE",
    year: 2023,
    techStack: [
      "JavaScript",
      "React Native",
      "Node.js",
      "Figma",
      "React.js",
      "Next.js",
    ],
    description: "ellie_project_desc",
    liveLink: "https://elliesmarthome.com/",
  },
  {
    name: "Kıbrıs Evim",
    year: 2023,
    techStack: [
      "JavaScript",
      "React Native",
      "Node.js",
      "Figma",
      "React.js",
      "Next.js",
    ],
    description: "kibrisevim_project_desc",
    liveLink: "http://kibrisevim.com/",
  },
  {
    name: "KibTaxi",
    year: 2024,
    techStack: [
      "JavaScript",
      "Flutter",
      "Node.js",
      "Figma",
      "Express",
      "MongoDB",
      "Google Cloud",
      "AWS Web Services",
    ],
    description: "kibtaxi_project_desc",
    liveLink:
      "https://play.google.com/store/apps/details?id=com.kibtaxi.kibtaxi",
  },
  {
    name: "UpGolf",
    year: 2024,
    techStack: ["JavaScript", "React", "Next.js"],
    description: "upgolf_project_desc",
    liveLink: "https://upgolfclub.com/",
  },
  {
    name: "DigitBuzz",
    year: 2025,
    techStack: [
      "JavaScript",
      "React",
      "Next.js",
      "Express",
      "MongoDB",
      "Figma",
    ],
    description: "digitbuzz_project_desc",
    liveLink: "https://digitbuzz.com/",
  },
  {
    name: "Yıldız Taş",
    year: 2025,
    techStack: ["JavaScript", "React", "Next.js", "Vite", "Figma"],
    description: "yildiztas_project_desc",
    liveLink: "https://www.yildiztasconstructions.com/",
  },
  {
    name: "EmesGemi",
    year: 2025,
    techStack: ["JavaScript", "React", "Next.js", "Vite", "Figma"],
    description: "emesgemi_project_desc",
    liveLink: "http://emesgemi.com/",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const { t } = useTranslation();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const width = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["85%", "100%", "85%"]
  );

  return (
    <motion.section
      ref={ref}
      style={{ width }}
      className="relative w-full lg:w-[85%] mx-auto lg:flex gap-3 lg:gap-0 rounded border glass p-10"
    >
      <section className="lg:w-1/2 mb-12 lg:mb-0 space-y-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <section className="hidden lg:inline-block border rounded-full text-start px-8 py-1 mb-8">
            <span className="font-[300] text-2xl lg:text-4xl">
              {t("nav_projects")}
            </span>
          </section>
          <section className="lg:hidden flex items-center justify-center">
            <span className="border px-8 py-1 mb-8 rounded-full font-[300] text-2xl lg:text-4xl">
              PROJECTS
            </span>
          </section>
          <p className="hidden lg:block text-3xl w-[340px] text-justify lg:mb-0">
            {t("project_desc")}
          </p>
          <section className="lg:hidden">
            <p className="text-2xl w-[92%] mx-auto text-center">
              {t("project_desc")}
            </p>
          </section>
        </div>
        {projects.map((project, index) => {
          const hrRef = useRef(null);

          const { scrollYProgress: scrollYProgressHR } = useScroll({
            target: hrRef,
            offset: ["start end", "end start"],
          });

          const hrWidth = useTransform(
            scrollYProgressHR,
            [0, 0.7],
            ["0%", "100%"]
          );

          return (
            <div
              key={index}
              className="pb-6 border-gray-500 last:border-b-0 pt-6 hidden lg:block"
            >
              <div className="opacity-0 flex justify-between items-center">
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <a href={project.liveLink} target="_blank" className="text-2xl">
                  ↗
                </a>
              </div>
              <motion.hr
                ref={hrRef}
                style={{ translateX: hrWidth }}
                className="border border-gray-500 h-[0.5px] w-full my-3"
              />
              <p className="text-gray-400 mt-2 opacity-0">{project.year}</p>
              <motion.hr
                ref={hrRef}
                style={{ translateX: hrWidth }}
                className="border border-gray-500 h-[0.5px] w-full my-3"
              />
              <div className="flex flex-wrap mt-2 gap-2 opacity-0">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="border border-gray-500 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.hr
                ref={hrRef}
                style={{ translateX: hrWidth }}
                className="border border-gray-500 h-[0.5px] w-full my-3"
              />
              <p className="mt-4 text-gray-300 opacity-0">
                {t(project.description)}
              </p>
              <motion.hr
                ref={hrRef}
                style={{ translateX: hrWidth }}
                className="border border-gray-500 h-[0.5px] w-full my-3"
              />
              <a
                href={project.liveLink}
                className="opacity-0 text-gray-400 hover:text-white mt-4 inline-block hover:underline transition-all"
                target="_blank"
              >
                See it live →
              </a>
            </div>
          );
        })}
      </section>

      <section className="lg:w-1/2 space-y-20">
        <div className="opacity-0 hidden lg:block">
          <section className="hidden lg:inline-block border rounded-full text-start px-8 py-1 mb-8">
            <span className="font-[300] text-2xl lg:text-4xl">
              {t("nav_project")}
            </span>
          </section>
          <section className="lg:hidden flex items-center justify-center">
            <span className="border px-8 py-1 mb-8 rounded-full font-[300] text-2xl lg:text-4xl">
              {t("nav_project")}
            </span>
          </section>
          <p className="hidden lg:block text-3xl w-[340px] text-justify lg:mb-0">
            {t("project_desc")}
          </p>
          <section className="lg:hidden">
            <p className="text-2xl w-[92%] mx-auto text-center">
              {t("project_desc")}
            </p>
          </section>
        </div>
        {projects.map((project, index) => (
          <div key={index} className="pb-6 border-gray-500 pt-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <a href={project.liveLink} target="_blank" className="text-2xl">
                ↗
              </a>
            </div>
            <hr className="border border-gray-500 h-[0.5px] w-full my-3" />
            <p className="text-gray-400 mt-2">{project.year}</p>
            <hr className="border border-gray-500 h-[0.5px] w-full my-3" />
            <div className="flex flex-wrap mt-2 gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="border border-gray-500 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <hr className="border border-gray-500 h-[0.5px] w-full my-3" />
            <p className="mt-4 text-gray-300">{t(project.description)}</p>
            <hr className="border border-gray-500 h-[0.5px] w-full my-3" />
            {/* <a
              href={project.liveLink}
              className="text-gray-400 hover:text-white mt-4 inline-block hover:underline transition-all"
              target="_blank"
            >
              {t("see_it_live")} →
            </a> */}

            <LinkPreview
              url={project.liveLink}
              className="text-gray-400 hover:text-white mt-4 inline-block hover:underline transition-all"
            >
              {t("see_it_live")} →
            </LinkPreview>
          </div>
        ))}
      </section>
    </motion.section>
  );
};

export default Projects;
