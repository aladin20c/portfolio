
const sections = [
    { id: '#about', label: 'About' },
    { id: '#experience', label: 'Experience' },
    { id: '#education', label: 'Education' },
    { id: '#projects', label: 'Projects' }
];


const socials = [
    { name: 'github', label: 'GitHub', url: 'https://github.com/aladin20c' },
    { name: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/aladin-cheniour/' },
    { name: 'goodreads', label: 'Goodreads', url: 'https://www.goodreads.com/user/show/101887216-aladin' },
    //{ name: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/bchiang7/' },
];

const experiences = [
    {
        date: "2025 — Present",
        role: "Medical HCI Research Intern",
        company: "Dassault Systèmes",
        companyLink: "https://www.3ds.com/science/meditwin",
        description: "Building high-performance 2D/3D manipulation, annotation and segmentation tools for volumetric medical data. Exploring remote rendering and optimisation techniques for volumetric rendering.",
        techs: ["DICOM", "FHIR", "VTK", "WebGL", "Lit"]
    },
    {
        date: "April — Aug 2025",
        role: "Full-Stack Software Engineer",
        company: "Ouidou",
        companyLink: "https://www.ouidou.fr",
        description: "Collaborated with multi-disciplinary teams to maintain and implement major features. Optimized application performance by resolving bottlenecks in backend queries and frontend rendering.",
        techs: ["Node.js","Angular", "Spring Boot", "React", "PostgreSQL"]
    },
    {
        date: "2024 — 2025",
        role: "Academic Tutor",
        company: "Polytech Paris Saclay",
        companyLink: "https://www.polytech.universite-paris-saclay.fr",
        description: "Led tutoring sessions at polytech for first and second-year engineering students in Computer Science, Mathematics, and Physics.",
        techs: ["Algorithms", "Math", "C++", "Physics"]
    },
    {
        date: "June — Aug 2024",
        role: "Software Engineer Intern",
        company: "SMA BTP",
        companyLink: "https://www.smabtp.fr",
        description: "Automated file submission and testing workflows by developing Selenium scripts. Interfaced with developers to ensure coherent UX across internal tools.",
        techs: ["Selenium", "Angular", "Spring Boot"]
    },
    {
        date: "July — Aug 2022",
        role: "Data Analyst Intern",
        company: "SEABEX",
        companyLink: "https://seabex.com",
        description: "Developed and maintained Python programs for processing and analyzing satellite-collected agricultural data to provide decision-support solutions for irrigation and optimize water consumption.",
        techs: ["Python", "PyTorch", "OpenCV"]
    }
];


const education = [
    {
        period: "July 2026",
        degree: "Summer School",
        field: "Automated Machine Learning",
        institution: "TU Dortmund & Lamaar Institut",
        institutionLink: "https://www.automlschool.org",
        grade: "Dortmund, Germany",
        achievements: [
            "Covering introductory, state-of-the-art, and application lectures for AutoML and Foundation Models.",
            "Core topics such as: Hyperparameter optimization and model selection, Applying and scaling foundation models, Neural architecture search, Bayesian Optimization, ..."
        ]
    },
    {
        period: "2025 — 2026",
        degree: "Master of Science",
        field: "Interaction, Computer Graphics & Design",
        institution: "Institut Polytechnique de Paris",
        institutionLink: "https://www.ip-paris.fr",
        grade: "Palaiseau, France",
        // Added your specific research focus here
        thesis: "Innovative Visualization and Manipulation Tools and 3D rendering techniques for Medical Data",
        achievements: [
            "Courses: Computer Vision, Deep Learning, Virtual Humans, Computer animation and simulation, data physicalization & visualisation, Quant UX.",
            "Placed 6th out of 87 in a Kaggle challenge to predict twitter users social roles."
        ]
    },
    {
        period: "2023 — 2026",
        degree: "Engineering Degree",
        field: "Mathematics & Computer Science",
        institution: "Polytech Paris Saclay",
        institutionLink: "https://www.polytech.universite-paris-saclay.fr",
        grade: "Orsay, France",
        achievements: [
            "Courses Included : Advanced Database Management, Computer Networks, Machine Learning, Computer Architecture and Web Development",
            "Won the Polytech Rendering Competition Award 2024"
        ]
    },
    {
        period: "July — Aug 2023",
        degree: "Summer School",
        field: "Game Design & Development",
        institution: "Turku University",
        institutionLink: "https://www.utu.fi/en",
        grade: "Turku, Finland",
        achievements: [
            "Intensive program in Game Design principles",
            "Game development using the Unity engine"
        ]
    },
    {
        period: "2020 — 2023",
        degree: "Bachelor of Science",
        field: "Mathematics & Computer Science",
        institution: "University of Paris City",
        institutionLink: "https://u-paris.fr",
        grade: "Paris, France",
        achievements: [
            "Foundational courses in Mathematics and Computational Theory",
            "2020-2022: Major in computer science (L1-L2). Placed 4th out of 107.",
            "2022-2023: Major in Mathematics with a minor in Computer science (L2). Ranked 3rd out of 50."
        ]
    }
];



// projects.js
const projects = [
    {
        title: "Cursor-Tracking HeatMap",
        description: "Chrome extension capturing user cursor behavior during live sessions to visualize interactions via heatmaps and detailed user paths for UX optimization.",
        techs: ["JavaScript", "Chrome API", "Data Visualization"],
        image: "/img1.png",
        githubLink: "https://github.com/aladin20c/cursor-tracker-quant-ux"
    },
    {
        title: "Computer Vision Pipeline For Chess",
        description: "Computer vision system that identifies piece positions on a physical chessboard from a photo to reconstruct the digital game state.",
        techs: ["Python", "OpenCV", "Computer Vision"],
        image: "/img2.png",
        githubLink: "https://github.com/aladin20c/chess_computer_vision"
    },
    {
        title: "Carbon Footprint Calculator",
        description: "Mobile application for Viveris to calculate environmental impact, featuring a robust backend and cross-platform mobile UI.",
        techs: ["Spring Boot","React" ,"React Native", "Java"],
        image: "/img3.png",
        githubLink: "https://github.com/aladin20c/eco-boost-campus"
    }
];

export {sections,socials,experiences,education,projects};
