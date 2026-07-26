
export const portfolioData = {
  name: "Mitesh Bari",
  tagline: "Java · Spring Boot · React · AI & Real-Time Systems",
  location: "Mumbai, India",
  email: "barimitesh23@gmail.com",

  social: {
    github: "https://github.com/MiteshBari23",
    linkedin: "https://www.linkedin.com/in/miteshbari23/",
    resume: "/resumeMitesh.pdf"
  },

  about: {
    intro: "A worldwide obsession with software — building real-time systems, thoughtful full-stack products and interactive experiences at the edge of the web.",
    interests: ["Java", "Spring Boot", "DSA", "Databases", "Real-time Systems", "3D Web Graphics", "Full-Stack", "AI"],
    status: "Open to internships, freelance and collaborative engineering roles."
  },

  experience: [
    {
      id: 1,
      company: "Techligence Pvt. Ltd",
      role: "AI & Web Development Intern",
      location: "Remote",
      period: "Jun 2025 – Aug 2025",
      description: [
        "Built cloud-hosted real-time robot control with WebRTC + Socket.IO for multi-device communications",
        "Integrated MediaPipe for gesture and full-body pose tracking to control Three.js 3D robot models",
        "Implemented live video streaming with responsive UIs for mobile & desktop control panels",
        "Optimized for low-latency control and smooth rendering in cloud deployments"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "EaseRentals",
      description: "MERN property rental platform with a Gemini-powered chatbot for intelligent property search and recommendations.",
      period: "Jul 2024 – Aug 2024",
      tags: ["MERN", "AI Chatbot", "Full-Stack", "MongoDB"],
      github: "https://github.com/MiteshBari23/EaseRentals",
      link: "https://easerentals.onrender.com",
      image: "/images/easeRentals.png",
    },
    {
      id: 2,
      title: "URDF Viewer",
      description: "MediaPipe-driven URDF/3D robot controller built with React Three Fiber for real-time gesture manipulation.",
      period: "Jun 2025 – Aug 2025",
      tags: ["MediaPipe", "Three.js", "Realtime", "WebGL"],
      github: "https://github.com/MiteshBari23/JAVA-2D-Game/tree/main/src",
      link: "https://robotmanipulator.vercel.app/",
      image: "/images/urdf.png"
    },
    {
      id: 3,
      title: "Java 2D Game",
      description: "Interactive 2D game built with Java and JavaFX — physics, collision detection and sprite animation from first principles.",
      period: "Apr 2025 – May 2025",
      tags: ["Java", "JavaFX", "Game Dev", "OOP"],
      github: "https://github.com/MiteshBari23/JAVA-2D-Game",
      image: "/images/2dGame.png",
    },
    {
      id: 4,
      title: "BookMySeat",
      description: "Full-stack seat reservation system — Spring Boot REST API with a React + TypeScript frontend, auth via Keycloak.",
      period: "Dec 2025 – Jan 2026",
      tags: ["Java", "Spring Boot", "Postgres", "React", "TypeScript", "Keycloak"],
      github: "https://github.com/MiteshBari23/BookMySeat",
      image: "/images/bookmyseat.png",
    }
  ],

  skills: {
    languages: ["Java", "JavaScript", "TypeScript", "C", "Python"],
    frameworks: ["Spring Boot", "React.js", "Node.js", "Express.js"],
    tools: ["SQL", "MongoDB", "PostgreSQL", "Git", "WebRTC", "Socket.IO"],
    web: ["HTML", "CSS", "Tailwind CSS", "Three.js"],
    soft: ["Leadership", "Team Building", "Communication", "Report Writing"]
  },

  education: {
    degree: "B.E. in Computer Science",
    institution: "Shivajirao S. Jondhle College of Engineering & Technology",
    university: "Mumbai University",
    period: "Oct 2022 – May 2026",
    cgpa: "8.7/10"
  }
};
