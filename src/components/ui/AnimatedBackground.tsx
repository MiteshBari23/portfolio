import React from "react";
import Lottie from "lottie-react";
import animationData from "src/assets/globe.json";

import styles from "./AnimatedBackground.module.css"; // optional CSS module

const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "TailwindCSS",
  "Docker",
];

export default function AnimatedBackground() {
  return (
    <div className={styles.container}>
      {/* Lottie Animation */}
      <Lottie
        animationData={animationData}
        loop={true}
        className={styles.lottie}
      />

      {/* Tech Stack Overlay */}
      <ul className={styles.techList}>
        {technologies.map((tech, i) => (
          <li key={i} className={styles.techItem}>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
