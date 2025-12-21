import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  problem: string;
  solution: string;
  features: string[];
  impact: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "3d Portfolio Notebook",
    subtitle: "Interactive 3D Portfolio",
    description:
      "A notebook-style 3D portfolio featuring essential career development tools.",
    image: "/3d portfolio notebook.png",
    technologies: ["HTML", "CSS", "Javascript"],
    problem:
      "Static and boring, failing to engage viewers. Hard to stand out in competitive tech and creative fields. Poor at showcasing interactivity and real skills.",
    solution:
      "Providing an interactive 3D experience that captures attention. Presenting projects in a notebook-style visual layout. Making navigation intuitive and engaging. Showcasing skills, tools, and career features in one place.",
    features: [
      "Engage visitors with a visually immersive, real-time 3D experience.",
      "Present projects and skills in an organized, creative notebook format.",
      "Create and showcase professional resumes directly within the portfolio.",
      "Access interview questions and preparation resources in one place.",
    ],
    impact:
      "Combines projects, resume, and career tools in a single platform. Increases chances of being noticed in competitive job markets.",
    liveUrl: "https://sachinpandey7709.github.io/3d-Portfolio-Notebook/",
    githubUrl: "https://github.com/sachinpandey7709",
  },
  {
    title: "3d Portfolio",
    subtitle: "A Visual Showcase of Skills & Projects",
    description:
      "An interactive 3D portfolio designed to showcase skills, projects, and career tools through an engaging visual experience.",
    image: "/3d portfolio.png",
    technologies: ["HTML", "CSS", "Javascript"],
    problem:
      "Static and text-heavy, failing to engage visitors. Difficult to stand out in competitive job markets. Limited in showcasing interactivity and real skills.",
    solution:
      "Offering an interactive 3D experience that captures attention. Presenting projects and skills in a visually immersive format. Clearly demonstrating technical and creative capabilities",
    features: [
      "Display technical and professional skills in an interactive format.",
      "Optimized for different screen sizes and modern devices.",
      "Efficient rendering for smooth interactions and quick load times.",
      "Helps create a strong and memorable digital identity.",
    ],
    impact:
      "Visual and interactive layout makes complex projects easier to grasp. Leaves a memorable impression on recruiters and clients. Differentiates the candidate in competitive job markets.",
    liveUrl:
      "https://sachinpandey7709.github.io/3d-Portfolio/",
    githubUrl: "https://github.com/sachinpandey7709/",
  },
  {
    title: "Portfolio",
    subtitle: "Next-Gen Portfolio",
    description:
      "An interactive 3D portfolio showcasing projects, skills, and career tools in an engaging visual experience.",
    image: "/portfolio.png",
    technologies: ["HTML", "CSS", "Javascript"],
    problem:
      "Lack memorability for recruiters or clients. Provide a poor first impression. Do not effectively showcase skills or projects interactively.",
    solution:
      "Providing smooth and intuitive navigation. Highlighting technical and creative abilities clearly. Creating a memorable personal brand through modern design.",
    features: [
      "Clean, professional design with immersive visuals.",
      "Efficient rendering for smooth interactions and quick load times.",
      "Intuitive movement for easy exploration.",
      "Engaging real-time visuals for an immersive portfolio.",
    ],
    impact:
      "Projects and abilities are presented in an easy-to-understand, interactive format. Unique design helps the portfolio stand out immediately.",
    liveUrl: "https://sachinpandey7709.github.io/Responsive-Portfolio/",
    githubUrl: "https://github.com/sachinpandey7709",
  },
];

// animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <motion.section
      id="projects"
      className="
        scroll-mt-32
        py-16 sm:py-20
        bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100
        dark:from-slate-950 dark:via-slate-950 dark:to-slate-900
        theme-transition
      "
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <div
        className="
          w-full max-w-6xl mx-auto
          px-4 sm:px-6
        "
      >
        {/* Heading */}
        <motion.div
          className="text-center mb-10 sm:mb-14 space-y-3 sm:space-y-4"
          variants={cardVariants}
        >
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600/80 dark:text-cyan-400/80">
            Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A snapshot of the{" "}
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              Cybersecurity &amp; Ethical Hacking
            </span>{" "}
            projects I&apos;ve built recently.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="
            grid grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6 sm:gap-8
          "
          variants={sectionVariants}
        >
          {projects.map((project) => (
            <motion.button
              key={project.title}
              type="button"
              onClick={() => setSelectedProject(project)}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 18px 45px rgba(15, 23, 42, 0.18)",
              }}
              whileTap={{ scale: 0.98 }}
              className="
                relative text-left
                bg-white/90 dark:bg-slate-900/90
                rounded-3xl overflow-hidden
                shadow-md
                border border-slate-200/80 dark:border-slate-800/80
                hover:border-cyan-400/80 dark:hover:border-cyan-400/80
                group
                focus:outline-none
                focus-visible:ring-2 focus-visible:ring-cyan-500/80
                focus-visible:ring-offset-2
                focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-950
                transition-all duration-300
              "
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative overflow-hidden h-40 sm:h-48 md:h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-105
                    transition-transform duration-500
                    ease-[cubic-bezier(0.22,0.61,0.36,1)]
                  "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium bg-white/95 text-slate-900 dark:bg-slate-900/95 dark:text-slate-100 shadow-sm">
                    Click to view details
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 md:p-7 space-y-3">
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs md:text-sm text-cyan-600 dark:text-cyan-400 font-semibold tracking-wide uppercase">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{ y: -2, scale: 1.04 }}
                      className="
                        px-3 py-1 rounded-full
                        text-[10px] sm:text-[11px]
                        font-medium
                        bg-slate-100 dark:bg-slate-800
                        text-slate-700 dark:text-slate-200
                        border border-slate-200/80 dark:border-slate-700/80
                      "
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="
              fixed inset-0 z-[60]
              flex items-center justify-center
              bg-black/60 backdrop-blur-sm
              px-4
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="
                relative
                w-full max-w-5xl
                max-h-[90vh]
                bg-white dark:bg-slate-950
                rounded-3xl shadow-2xl
                overflow-hidden
                flex flex-col
              "
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="
                  absolute top-3 right-3 sm:top-4 sm:right-4 z-10
                  rounded-full
                  bg-white/90 dark:bg-slate-900/95
                  p-1.5 sm:p-2
                  shadow-md
                  hover:bg-slate-100 dark:hover:bg-slate-800
                  transition-colors
                "
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700 dark:text-slate-200" />
              </button>

              <div className="w-full h-40 sm:h-56 md:h-[38vh] min-h-[14rem] max-h-[22rem] overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className="
                  flex-1 overflow-y-auto
                  p-5 sm:p-6 md:p-8
                  space-y-5 sm:space-y-6
                "
              >
                <div className="space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-slate-500 dark:text-slate-400">
                      {selectedProject.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="
                          px-3 py-1
                          bg-slate-100 dark:bg-slate-800
                          text-[11px] sm:text-xs
                          text-slate-700 dark:text-slate-200
                          rounded-full
                          font-medium
                          border border-slate-200/80 dark:border-slate-700/80
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 text-sm md:text-base">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                        Problem
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {selectedProject.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                        Solution
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        Key Features
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 leading-relaxed">
                        {selectedProject.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                        Impact
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {selectedProject.impact}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-1 sm:pt-2">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        px-4 py-2
                        rounded-xl
                        border border-slate-300 dark:border-slate-700
                        bg-white dark:bg-slate-900
                        text-xs sm:text-sm
                        text-slate-900 dark:text-slate-100
                        font-medium
                        hover:border-slate-400 dark:hover:border-slate-500
                        hover:bg-slate-50 dark:hover:bg-slate-800
                        transition-colors
                      "
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        px-4 py-2
                        rounded-xl
                        bg-cyan-600 hover:bg-cyan-700
                        text-white
                        text-xs sm:text-sm
                        font-medium
                        shadow-md shadow-cyan-500/30
                        transition-colors
                      "
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
