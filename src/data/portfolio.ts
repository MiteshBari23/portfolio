export const portfolioData = {
  name: "Mitesh Bari",
  tagline: "AI & Web Development | B.E. CSE @ Mumbai University",
  location: "India",
  email: "miteshbari23@example.com",
  phone: "+91-XXXXXXXXXX",
  
  social: {
    github: "https://github.com/MiteshBari23",
    linkedin: "https://www.linkedin.com/in/miteshbari23/",
    resume: "/resume.pdf"
  },

  about: {
    intro: "Passionate developer specializing in AI integration, real-time systems, and interactive web experiences. I love building products that blend cutting-edge technology with elegant user experiences.",
    interests: ["AI & Machine Learning", "Real-time Systems", "3D Web Graphics", "Full-Stack Development"],
    status: "Open to internships and project collaborations"
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
      image: "project-easerentals.jpg"
    },
    {
      id: 2,
      title: "Java 2D Game",
      description: "Interactive 2D game built with Java and JavaFX, exploring core game development concepts including physics, collision detection, and sprite animation.",
      period: "Apr 2025 – May 2025",
      tags: ["Java", "JavaFX", "Game Dev", "OOP"],
      github: "https://github.com/MiteshBari23/JAVA-2D-Game",
      image: "project-javagame.jpg"
    },
    {
      id: 3,
      title: "URDF Viewer",
      description: "MediaPipe-powered URDF/3D robot controller using React Three Fiber and Three.js for real-time gesture-based robot manipulation.",
      period: "Jun 2025 – Aug 2025",
      tags: ["MediaPipe", "React Three Fiber", "Three.js", "Realtime", "WebGL"],
      image: "project-urdf.jpg"
    }
  ],

  skills: {
    languages: ["Java", "JavaScript", "TypeScript", "SQL", "C"],
    frameworks: ["React.js", "Node.js", "Express.js", "Spring Boot"],
    tools: ["Git", "CLI", "WebRTC", "Socket.IO"],
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
