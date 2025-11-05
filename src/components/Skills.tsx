import { motion } from "framer-motion";
import { Code2, Wrench, Globe, Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const skillCategories = [
  { title: "Languages", icon: Code2, skills: portfolioData.skills.languages },
  { title: "Frameworks & Tools", icon: Wrench, skills: [...portfolioData.skills.frameworks, ...portfolioData.skills.tools] },
  { title: "Web Technologies", icon: Globe, skills: portfolioData.skills.web },
  { title: "Soft Skills", icon: Heart, skills: portfolioData.skills.soft },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-background/50 border border-border rounded-lg text-sm font-medium hover:border-primary/50 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
