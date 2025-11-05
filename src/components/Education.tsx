import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">Education</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 md:p-10 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{portfolioData.education.degree}</h3>
                  <p className="text-lg text-primary font-semibold mb-1">
                    {portfolioData.education.institution}
                  </p>
                  <p className="text-muted-foreground">{portfolioData.education.university}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-semibold">{portfolioData.education.period}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                  <Award className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">CGPA</p>
                    <p className="font-semibold">{portfolioData.education.cgpa}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
