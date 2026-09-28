import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const Footer = () => {
  return (
    <footer className="bg-black px-4 md:px-6 pb-6">
      <div className="max-w-7xl mx-auto rounded-2xl md:rounded-[2rem] bg-[#0a0a0a] px-6 md:px-12 py-10 md:py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "rgba(225,224,204,0.5)" }}>
              Mitesh Bari
            </p>
            <p className="text-sm md:text-base" style={{ color: "rgba(225,224,204,0.7)" }}>
              Thanks for stopping by — find me on:
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="btn-glass w-11 h-11 rounded-full flex items-center justify-center"
              style={{ color: "#E1E0CC" }}
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="btn-glass w-11 h-11 rounded-full flex items-center justify-center"
              style={{ color: "#E1E0CC" }}
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              aria-label="Email"
              className="btn-glass w-11 h-11 rounded-full flex items-center justify-center"
              style={{ color: "#E1E0CC" }}
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
