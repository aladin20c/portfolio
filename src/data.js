
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
        role: "Medical Research Intern",
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




    const projectArchive = [
      {
        year: '2026',
        projectName: 'Medical Viewer',
        projectUrl: 'https://github.com/aladin20c/trame-medical-viewer-server-client',
        description: 'A medical 3d viewer for CT scans with different manipulation tools.',
        builtWith: ['Trame', 'Vtk', 'Python'],
        linkUrl: 'https://github.com/aladin20c/trame-medical-viewer-server-client',
        linkLabel: 'github',
        hasSvg:true,
        linkIcon: 'github',
      },
      {
        year: '2026',
        projectName: 'Neural Radiance Fields',
        projectUrl: 'https://github.com/aladin20c/minimalist-nerf-implementation',
        description: 'A PyTorch implementation of the original Neural Radiance Fields (NeRF) paper.',
        builtWith: ['Python', 'Pytorch', 'colmap'],
        linkUrl: 'https://github.com/aladin20c/minimalist-nerf-implementation',
        linkLabel: 'github',
        hasSvg:true,
        linkIcon: 'github',
      },
      {
        year: '2026',
        projectName: 'Chrome Cursor Tracker',
        projectUrl: 'https://github.com/aladin20c/cursor-tracker-quant-ux',
        description: ' Chrome Extension that monitors user interactions in the browser and a Python backend that stores the collected data.',
        builtWith: ['Flask', 'Python', 'Js'],
        linkUrl: 'https://github.com/aladin20c/cursor-tracker-quant-ux',
        linkLabel: 'github',
        hasSvg:true,
        linkIcon: 'github',
      },
      {
        year: '2026',
        projectName: 'BunnyGL',
        projectUrl: 'https://github.com/aladin20c/BunnyGL',
        description: 'A custom Low polygon Rendering Engine.',
        builtWith: ['C++', 'OpenGl', 'Glsl'],
        linkUrl: 'https://github.com/aladin20c/BunnyGL',
        linkLabel: 'github',
        hasSvg:true,
        linkIcon: 'github',
      },
      {
        year: '2025',
        projectName: 'Connect 4',
        projectUrl: 'https://aladin20c.github.io/connect4-interview/',
        description: 'A simple, one-page Connect 4 game for an internship interview.',
        builtWith: ['Js', 'Html', 'Css'],
        linkUrl: 'https://aladin20c.github.io/connect4-interview/',
        linkLabel: 'github.io/connect4-interview',
        hasSvg:true,
        linkIcon: 'arrow',
      },
      {
        year: '2025',
        projectName: 'Personal Website',
        projectUrl: 'https://github.com/aladin20c/portfolio',
        description: 'This Portfolio.',
        builtWith: ['Lit', 'Js', 'Html','Css'],
        linkUrl: 'https://github.com/aladin20c/portfolio',
        linkLabel: 'aladin20c/portfolio',
        hasSvg:true,
        linkIcon: 'arrow',
      },
      {
        year: '2025',
        projectName: 'Chess Board Recognition',
        projectUrl: 'https://github.com/aladin20c/chess_computer_vision',
        description: 'Digitally reconstruct a chess game from a raw image of a physical chessboard.',
        builtWith: ['Python', 'OpenCv', 'Pytorch'],
        linkUrl: 'https://github.com/aladin20c/chess_computer_visio',
        linkLabel: 'github',
        hasSvg:true,
        linkIcon: 'github',
      },
      {
        year: '2025',
        projectName: 'Mobile App for carbon footprint',
        projectUrl: 'https://github.com/aladin20c/eco-boost-campus',
        description: 'A mobile app that helps users calculate, track, and reduce their carbon footprint through challenges and community engagement.',
        builtWith: ['React Native', 'Angular','Java','SpringBoot','PostgreSQL','Docker'],
        linkUrl: 'https://github.com/aladin20c/eco-boost-campus',
        linkLabel: 'github',
        hasSvg:true,
        linkIcon: 'github',
      },
      {
        year: '2025',
        projectName: 'Snacks Clustering',
        projectUrl: 'https://github.com/aladin20c/SnacksClustering',
        description: 'Unsupervised and self supervised Food Image classification.',
        builtWith: ['Python', 'Pytorch', 'StreamLit'],
        linkUrl: 'https://github.com/aladin20c/SnacksClustering',
        linkLabel: 'github',
        hasSvg:true,
        linkIcon: 'github',
      },
      {
        year: '2025',
        projectName: 'Self Driving Car',
        projectUrl: 'https://aladin20c.github.io/self-driving-car/',
        description: 'A browser‑based simulation where a virtual car learns to drive using reinforcement learning.',
        builtWith: ['Js', 'Matter.js', 'TensorFlow'],
        linkUrl: 'https://aladin20c.github.io/self-driving-car/',
        linkLabel: 'github.io/self-driving-car',
        hasSvg:true,
        linkIcon: 'arrow',
      },
      {
        year: '2025',
        projectName: 'Versus',
        projectUrl: 'https://github.com/aladin20c/versus',
        description: 'A comprehensive design system for HBS digital products.',
        builtWith: ['React', 'SpringBoot', 'Java','Docker'],
        linkUrl: 'https://github.com/aladin20c/versus',
        linkLabel: 'github',
        hasSvg:true,
        linkIcon: 'github',
      },
      {
        year: '2024',
        projectName: 'Dominion',
        projectUrl: 'https://github.com/aladin20c/Dominion',
        description: 'A card game reimplemention with UI, multiplayer, and player agents.',
        builtWith: ['C++', 'wxWidgets'],
        linkUrl: 'https://github.com/aladin20c/Dominion',
        linkLabel: 'github',
        hasSvg:true,
        linkIcon: 'github',
      },
      {
        year: '2024',
        projectName: 'Parametric Raceways',
        projectUrl: 'https://github.com/aladin20c/ParametricRacewaysOpenGL',
        description: 'Interactive 3D driving with mathematically generated race tracks.',
        builtWith: ['OpenGl', 'Glsl', 'Python'],
        linkUrl: 'https://github.com/aladin20c/ParametricRacewaysOpenGL',
        linkLabel: 'github',
        hasSvg:true,
        linkIcon: 'github',
      },
      {
        year: '2023',
        projectName: 'Gamified Portfolio',
        projectUrl: 'https://aladin20c.github.io/portfolio-playable/',
        description: 'Interactive resume in the form of a 2D game.',
        builtWith: ['Js'],
        linkUrl: 'https://aladin20c.github.io/portfolio-playable/',
        linkLabel: 'github.io/portfolio-playable',
        hasSvg:true,
        linkIcon: 'arrow',
      },
      {
        year: '2022',
        projectName: 'Multiplayer Poker Game',
        projectUrl: 'https://github.com/aladin20c/PockerEnReseau',
        description: 'Multiplayer poker game supporting Texas Holdem and Five-Card Draw with client-server architecture.',
        builtWith: ['Java', 'WebSockets'],
        linkUrl: 'https://github.com/aladin20c/PockerEnReseau',
        linkLabel: 'github',
        hasSvg:true,
        linkIcon: 'github',
      },
      {
        year: '2022',
        projectName: 'Arithmetic interpreter in C',
        projectUrl: 'https://github.com/aladin20c/unbounded_int',
        description: 'A lightweight C library implementing arbitrary-precision integer arithmetic using doubly linked lists.',
        builtWith: ['C'],
        linkUrl: 'https://github.com/aladin20c/unbounded_int',
        linkLabel: 'github',
        hasSvg:true,
        linkIcon: 'github',
      },
      {
        year: '2021',
        projectName: 'Side Scrolling Plateformer',
        projectUrl: 'https://github.com/aladin20c/plateformer',
        description: 'Side Scrolling plateforming game in java.',
        builtWith: ['Java', 'Swing'],
        linkUrl: 'https://github.com/aladin20c/plateformer',
        linkLabel: 'github',
        hasSvg:true,
        linkIcon: 'github',
      },
      {
        year: '2021',
        projectName: 'Catan Clone',
        projectUrl: 'https://github.com/aladin20c/catan',
        description: 'A clone of the famous board game Settlers of Catan, implemented in Java.',
        builtWith: ['Java', 'Swing'],
        linkUrl: 'https://github.com/aladin20c/catan',
        linkLabel: 'github',
        hasSvg:true,
        linkIcon: 'github',
      },
      {
        year: '2021',
        projectName: 'Visulog',
        projectUrl: 'https://github.com/aladin20c/Visulog',
        description: 'Tool for analysis and visualization of git logs.',
        builtWith: ['Java', 'Html', 'Js','Css'],
        linkUrl: 'https://github.com/hbs/design-system',
        linkLabel: 'github',
        hasSvg:true,
        linkIcon: 'github',
      }
    ];


export {sections,socials,experiences,education,projects,projectArchive};
