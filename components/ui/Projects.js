import React from "react";

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
    description:
      "As a team, we developed this mobile application to enable users to control home appliances remotely, we optimized backend connections for IoT integration.",
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
    description:
      "As a team, we developed this mobile application to enable users to control home appliances remotely, we optimized backend connections for IoT integration.",
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
    description:
      "Find Kıbrıs Taksi & TRNC taksi with their reviews, photos, and contact options.",
    liveLink:
      "https://play.google.com/store/apps/details?id=com.kibtaxi.kibtaxi",
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
    description: "DigitBuzz - Online Marketing",
    liveLink: "https://www.digitbuzz.com/en",
  },
  {
    name: "Yıldız Taş",
    year: 2025,
    techStack: ["JavaScript", "React", "Next.js", "Vite", "Figma"],
    description:
      "Turning Your Dreams Into Reality. We achieve success together.",
    liveLink: "https://www.yildiztasconstructions.com/",
  },
];

const Projects = () => {
  return (
    <section className="lg:grid lg:grid-cols-12 gap-4 rounded border bg-[#2b2b2b] p-10">
      <section className="lg:col-span-5">
        <section className="border rounded-full inline-block text-start px-8 py-1 mb-8">
          <span className="font-[300] text-2xl">PROJECTS</span>
        </section>
        <p className="text-3xl">
          We provide our expertise on projects of any scale, and anywhere in the
          world.
        </p>
      </section>
      <section className="lg:col-span-7 mt-10 lg:mt-0">
        {projects.map((project, index) => (
          <div
            key={index}
            className="mt-10 border-b pb-6 border-gray-500 last:border-b-0 pt-6"
          >
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
            <p className="mt-4 text-gray-300">{project.description}</p>
            <hr className="border border-gray-500 h-[0.5px] w-full my-3" />
            <a
              href={project.liveLink}
              className="text-gray-400 mt-4 inline-block hover:underline"
              target="_blank"
            >
              See it live →
            </a>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Projects;
