import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const Projects = () => {
  return (
    <section id="projects" className="bg-black py-24 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "rgba(225,224,204,0.6)" }}>
            Selected work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal" style={{ color: "#E1E0CC" }}>
            Things I have <span className="font-serif italic">built.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {portfolioData.projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link || project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl md:rounded-[2rem] overflow-hidden bg-[#101010]"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#0a0a0a]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl md:text-2xl font-normal" style={{ color: "#E1E0CC" }}>
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-500 font-mono whitespace-nowrap">{project.period}</span>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[11px] rounded-full border"
                      style={{ borderColor: "rgba(222,219,200,0.15)", color: "rgba(225,224,204,0.65)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.link && (
                    <span className="inline-flex items-center gap-2 text-sm text-primary">
                      Visit
                      <ArrowRight className="w-4 h-4" style={{ transform: "rotate(-45deg)" }} />
                    </span>
                  )}
                  {project.github && (
                    <span className="inline-flex items-center gap-2 text-sm text-gray-400">
                      <Github className="w-4 h-4" />
                      Code
                    </span>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
