import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export const Education = () => {
  const { degree, institution, university, period, cgpa } = portfolioData.education;

  return (
    <section id="education" className="bg-black py-24 md:py-32 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "rgba(225,224,204,0.6)" }}>
            Education
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal" style={{ color: "#E1E0CC" }}>
            Formal <span className="font-serif italic">training.</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl md:rounded-[2rem] bg-[#101010] p-8 md:p-12"
        >
          <div className="flex flex-wrap items-start justify-between gap-6 mb-8 pb-8 border-b border-white/5">
            <div>
              <h3 className="text-2xl md:text-3xl font-normal mb-2" style={{ color: "#E1E0CC" }}>
                {degree}
              </h3>
              <p className="text-gray-400 mb-1">{institution}</p>
              <p className="text-gray-500 text-sm">{university}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 font-mono mb-2">{period}</p>
              <p className="text-3xl md:text-4xl font-serif italic text-primary">{cgpa}</p>
            </div>
          </div>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            Building strong fundamentals in data structures, algorithms, systems and software engineering — while
            shipping production projects on the side.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
