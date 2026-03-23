// data.js – Edit this file with your information
export const personal = {
  name: "Your Name",
  title: "Mechanical Engineer | AI Enthusiast",
  location: "India",
  email: "your.email@example.com",
  telegram: "@yourtelegram", // optional
  linkedin: "https://linkedin.com/in/yourprofile",
  resumeLink: "/resume.pdf", // place your resume in public folder
};

export const about = {
  description: `Mechanical Engineering graduate (CGPA 7.13/10, 2025 pass-out), seeking a Graduate Engineer Trainee–Mechanical role at BHEL-GE Gas Turbine Services Pvt. Ltd. to work on gas turbine and power plant systems in the energy sector. Hands-on experience in thermal-fluid simulation, product modeling, and mechanical design using ANSYS Fluent, and Microsoft Excel. Demonstrated ability to apply core engineering principles through academic projects in Friction Stir Welding and micro heat sink performance optimization. Strong fundamentals in thermodynamics, fluid mechanics, and heat transfer; certified in ANSYS, soft skills, welding fundamentals, and design practice; keen to contribute to rotating machinery maintenance, testing, and troubleshooting while learning from senior engineers.`,
};

export const skills = {
  technical: [
    { name: "ANSYS Fluent", level: 85 },
    { name: "Mechanical Design", level: 80 },
    { name: "Thermal-Fluid Simulation", level: 85 },
    { name: "Microsoft Excel", level: 90 },
    { name: "Python (Basic)", level: 70 },
    { name: "Web Development (HTML/CSS/JS)", level: 65 },
  ],
  certifications: [
    "ANSYS Certified User",
    "Soft Skills Certification",
    "Welding Fundamentals",
    "Design Practice",
  ],
};

export const projects = [
  {
    title: "BodhLern – German Learning Tool",
    description: "An interactive language learning app with voice support, vocabulary quizzes, and paginated content. Built with JavaScript and HTML/CSS.",
    tech: ["JavaScript", "HTML/CSS", "Web Speech API"],
    link: "https://laafeiakresearch.github.io/BodhLern/",
    image: "/projects/bodhlern.png", // add your own images in public folder
  },
  {
    title: "LinguaPDF – PDF Reader with Translation",
    description: "A PDF reader that allows text selection, pronunciation, and translation. Supports pinch-to-zoom and continuous scroll.",
    tech: ["JavaScript", "PDF.js", "Web Speech API", "Translation API"],
    link: "https://laafeiakresearch.github.io/LinguaPDF/",
    image: "/projects/linguapdf.png",
  },
];

export const education = {
  degree: "Bachelor of Technology in Mechanical Engineering",
  institution: "Your University",
  year: "2025",
  cgpa: "7.13/10",
};

export const experience = [
  {
    title: "Academic Projects",
    company: "Friction Stir Welding & Micro Heat Sink Optimization",
    date: "2023–2024",
    description: "Applied ANSYS Fluent to simulate thermal behavior and optimize performance. Presented findings in departmental seminar.",
  },
  // Add more experiences if any
];

export const contact = {
  message: "Feel free to reach out for opportunities or collaborations!",
};