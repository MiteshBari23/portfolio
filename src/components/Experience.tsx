import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export const Experience = () => {
  return (
    <section id="experience" className="bg-black py-24 md:py-32 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "rgba(225,224,204,0.6)" }}>
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal" style={{ color: "#E1E0CC" }}>
            Selected <span className="font-serif italic">chapters.</span>
          </h2>
        </div>

        <div className="space-y-6">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl md:rounded-[2rem] bg-[#101010] p-6 md:p-10"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-white/5">
                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-1" style={{ color: "#E1E0CC" }}>
                    {exp.role}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400">
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-mono tracking-wide">{exp.period}</p>
              </div>

              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-400 leading-relaxed">
                    <span className="text-primary mt-1.5 text-xs">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
