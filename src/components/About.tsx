import { WordsPullUpMultiStyle, ScrollRevealText } from "./animations";

export const About = () => {
  return (
    <section id="about" className="bg-black py-24 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto rounded-2xl md:rounded-[2rem] bg-[#101010] px-6 py-20 md:px-16 md:py-28 text-center">
        <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-8" style={{ color: "#DEDBC8" }}>
          The story
        </p>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[0.95] sm:leading-[0.9]"
          style={{ color: "#E1E0CC" }}
        >
          <WordsPullUpMultiStyle
            segments={[
              { text: "I am Mitesh Bari,", className: "font-normal" },
              { text: "a self-taught engineer.", className: "font-serif italic font-normal" },
              { text: "I build real-time systems, full-stack products and interactive experiences.", className: "font-normal" },
            ]}
          />
        </h2>

        <div className="mt-16 max-w-2xl mx-auto">
          <ScrollRevealText
            className="text-sm sm:text-base md:text-lg leading-relaxed"
            text="Currently pursuing my B.E. in Computer Science at Mumbai University, I have spent the last few years working across Java, Spring Boot, React and 3D web tooling — shipping projects that blend robust backends with expressive, tactile interfaces."
          />
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-2">
          {["Java", "Spring Boot", "React", "TypeScript", "Three.js", "PostgreSQL", "WebRTC", "AI"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full border text-xs sm:text-sm"
              style={{ borderColor: "rgba(222,219,200,0.15)", color: "rgba(225,224,204,0.7)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
