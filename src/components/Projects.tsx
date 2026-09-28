import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const ProjectLinks = ({ project }: { project: (typeof portfolioData.projects)[number] }) => (
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
);

export const Projects = () => {
  const [featured, ...rest] = portfolioData.projects;

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

        {featured && (
          <motion.a
            href={featured.link || featured.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative grid md:grid-cols-2 rounded-[2rem] overflow-hidden bg-[#101010] mb-3 md:mb-4"
          >
            <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden bg-[#0a0a0a]">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#101010]/20" />
              <span
                className="absolute top-5 left-5 text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full border"
                style={{ borderColor: "rgba(222,219,200,0.25)", color: "rgba(225,224,204,0.8)", background: "rgba(0,0,0,0.35)" }}
              >
                Featured
              </span>
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-2xl md:text-3xl font-normal" style={{ color: "#E1E0CC" }}>
                  {featured.title}
                </h3>
                <span className="text-xs text-gray-500 font-mono whitespace-nowrap">{featured.period}</span>
              </div>

              <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6">{featured.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-8">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-[11px] rounded-full border"
                    style={{ borderColor: "rgba(222,219,200,0.15)", color: "rgba(225,224,204,0.65)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <ProjectLinks project={featured} />
            </div>
          </motion.a>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {rest.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link || project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl overflow-hidden bg-[#101010]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0a0a0a]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-95 group-hover:scale-[1.06] transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <span
                  className="absolute top-4 left-4 font-serif italic text-3xl select-none"
                  style={{ color: "rgba(225,224,204,0.18)" }}
                >
                  {String(index + 2).padStart(2, "0")}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <h3 className="text-lg font-normal" style={{ color: "#E1E0CC" }}>
                      {project.title}
                    </h3>
                    <span className="text-[10px] text-gray-500 font-mono whitespace-nowrap pt-1">{project.period}</span>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed mb-3 line-clamp-2 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-16 transition-all duration-500">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] rounded-full border"
                        style={{ borderColor: "rgba(222,219,200,0.15)", color: "rgba(225,224,204,0.65)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ProjectLinks project={project} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
