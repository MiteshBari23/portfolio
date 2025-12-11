import { motion } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="glass rounded-2xl p-8 md:p-12">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {portfolioData.about.intro}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">{portfolioData.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Briefcase className="h-15 w-10 text-primary mb-2" />
                <div>
                  <h3 className="font-semibold mb-1">Status</h3>
                  <p className="text-muted-foreground">{portfolioData.about.status}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Interests</h3>
              <div className="flex flex-wrap gap-3">
                {portfolioData.about.interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
