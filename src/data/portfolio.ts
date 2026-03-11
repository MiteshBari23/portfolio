
export const portfolioData = {
  name: "Mitesh Bari",
  tagline: "JAVA | SPRINGBOOT | JAVA DSA | AI & Web Development | MongoDB | SQL | Postgres | B.E. CSE  @Mumbai University",
  location: "Mumbai, India",
  email: "barimitesh23@gmail.com",
  phone: "+91-8830840075",
  
  social: {
    github: "https://github.com/MiteshBari23",
    linkedin: "https://www.linkedin.com/in/miteshbari23/",
    resume: "/resumeMitesh.pdf"
  },

  about: {
    intro: "Passionate developer specializing in AI integration, real-time systems, and interactive web experiences, java development. I love building products that blend cutting-edge technology with elegant user experiences.",
    interests: ["Java","SpringBoot","Java DSA","Databases", "Real-time Systems","3D Web Graphics", "Full-Stack Development","AI", "Machine Learning"],
    status: "Seeking opportunities to contribute to real-world projects through internships, freelance work, or collaborative tech initiatives."
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
      description: "MERN property rental platform with Gemini-based AI chatbot for intelligent property search and recommendations.",
      period: "Jul 2024 – Aug 2024",
      tags: ["MERN", "AI Chatbot", "Full-Stack", "MongoDB"],
      github: "https://github.com/MiteshBari23/EaseRentals",
      link: "https://easerentals.onrender.com",
      image: "/images/easeRentals.png",
    },
    {
      id: 2,
      title: "URDF Viewer",
      description: "MediaPipe-powered URDF/3D robot controller using React Three Fiber and Three.js for real-time gesture-based robot manipulation.",
      period: "Jun 2025 – Aug 2025",
      tags: ["MediaPipe", "Three.js", "Realtime", "WebGL"],
      github:"https://github.com/MiteshBari23/JAVA-2D-Game/tree/main/src",
      link: "https://robotmanipulator.vercel.app/",
      image: "/images/urdf.png"
    },
    {
      id: 3,
      title: "Java 2D Game",
      description: "Interactive 2D game built with Java and JavaFX, exploring core game development concepts including physics, collision detection, and sprite animation.",
      period: "Apr 2025 – May 2025",
      tags: ["Java", "JavaFX", "Game Dev", "OOP"],
      github: "https://github.com/MiteshBari23/JAVA-2D-Game",
      image: "/images/2dGame.png",
    },
    {
      id: 4,
      title: "BookMySeat",
      description: "Full-stack seat reservation system with a Spring Boot (Java) REST API backend and a React + TypeScript frontend. Implemented APIs for seat availability, booking management, and data persistence.",
      period: "Dec 2025 – Jan 2026",
      tags: ["Java", "Springboot", "Postgres", "OOP", "React", "Typescript", "Keycloak"],
      github: "https://github.com/MiteshBari23/BookMySeat",
      image: "/images/bookmyseat.png",
    }
  ],

  skills: {
    languages: ["Java", "JavaScript", "C", "Python"],
    frameworks: ["Spring Boot","React.js", "Node.js", "Express.js"],
    tools: ["SQl", "MongoDB","PostgresSQL", "Git", "CLI", "WebRTC", "Socket.IO"],
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
