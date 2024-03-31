// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/loadingAnimation";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "James Huang",
  title: "Hi all! I'm James",
  subTitle: emoji(
    "A passionate Full Stack Software Developer with experience building Web and Mobile apps with JavaScript, React.js, Node.js, React Native, and other modern libraries and frameworks."
  ),
  resumeLink:
    "https://resume.creddle.io/resume/4vptt5xpvfn", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://www.github.com/jameshuang98",
  linkedin: "https://www.linkedin.com/in/jameshuang98",
  email: "jameshuang337@gmail.com",
  medium: "https://medium.com/@saadpasta",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      icon: require("./assets/images/logos/html5.png")
    },
    {
      skillName: "CSS3",
      icon: require("./assets/images/logos/css.png")
    },
    {
      skillName: "SASS",
      icon: require("./assets/images/logos/sass.png")
    },
    {
      skillName: "JavaScript",
      icon: require("./assets/images/logos/javascript.png")
    },
    {
      skillName: "React",
      icon: require("./assets/images/logos/react.png")
    },
    {
      skillName: "React Native",
      icon: require("./assets/images/logos/react.png")
    },
    {
      skillName: "Node.js",
      icon: require("./assets/images/logos/node.png")
    },
    {
      skillName: "SQL",
      icon: require("./assets/images/logos/sql.png")
    },
    {
      skillName: "Firebase",
      icon: require("./assets/images/logos/firebase.png")
    },
    {
      skillName: "Python",
      icon: require("./assets/images/logos/python.png")
    },
    {
      skillName: "C#",
      icon: require("./assets/images/logos/csharp.png")
    },
    {
      skillName: "Blazor",
      icon: require("./assets/images/logos/blazor.png")
    },
    {
      skillName: "Docker",
      icon: require("./assets/images/logos/docker.png")
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationSection = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      title: "Diploma of Web Development",
      school: "Lighthouse Labs",
      date: "Nov. 2021 - Feb. 2022",
      desc: "",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      title: "Bachelor of Applied Science",
      school: "University of Toronto",
      date: "Sept. 2016 - Apr. 2021",
      desc: "Ranked top 10% in the program. Took courses about Software Development, Data Structures and Algorithms, Project Management ...",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior Software Engineer",
      company: "Intranet Connections",
      companylogo: require("./assets/images/logos/facebookLogo.png"),
      date: "April 2022 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBulletPoints: [
        "Collaborated with a team of developers to create a new version of the company's legacy intranet product, designed to offer customers a modern replacement for their outdated internal communications platform.",
        "Orchestrated the seamless integration of two separate applications through RESTful APIs and a modern React Frontend, enriched with Material UI components, leading to a 20% increase in adoption rates.",
        "Successfully orchestrated the migration of a complex microservice backend infrastructure to an upgraded .NET version, resulting in substantial enhancements to application stability and security."
      ],
      techStack: [
        "C#",
        "Blazor",
        "Microsoft SQL Server",
        "Entity Framework",
        "Azure Pipelines",
        "React.js",
        "TypeScript",
        "Docker",
        "Kubernetes"
      ]
    },
    // {
    //   role: "Software Engineer",
    //   company: "Facebook",
    //   companylogo: require("./assets/images/logos/facebookLogo.png"),
    //   date: "June 2018 – Present",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   descBulletPoints: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    //   ]
    // },
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/logos/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   descBulletPoints: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/logos/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   descBulletPoints: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // }
  ]
};

const projectSection = {
  title: "Projects",
  projects: [
    {
      projectName: "PharmaPal",
      image: require("./assets/images/PharmaPal.png"),
      projectDesc: "A comprehensive iOS app to provide users with personalized tools for prescription management, including daily dose reminders and a detailed medication history tracker.",
      url: "https://github.com/jameshuang98/PharmaPal",
      techStack: ["React Native", "Firebase", "Expo"]
    },
    {
      projectName: "JobConnect",
      image: require("./assets/images/JobConnect.png"),
      projectDesc: "A mobile app that allows users to effortlessly search and filter job listings, helping them simplify the job search process.",
      url: "https://github.com/jameshuang98/JobConnect",
      techStack: ["React Native", "Expo"]
    },
    {
      projectName: "Nile",
      image: require("./assets/images/Nile_home.png"),
      projectDesc: "A mini e-commerce application that allows users to browse for products, product categories, add products to their cart, and checkout using PayPal.",
      url: "https://github.com/jameshuang98/Nile",
      techStack: ["C#", "Blazor", "ASP.NET Web API", "SQL Server 2019"]
    },
    {
      projectName: "CatStrat",
      image: require("./assets/images/CatStrat_phone.png"),
      projectDesc: "An investment tracking app which allows users to record and analyze their daily trading progress.",
      url: "https://github.com/jameshuang98/CatStrat",
      techStack: ["React", "Express", "PostGreSQL"]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications"),
  subtitle: "",
  achievementsCards: [
    {
      title: "Google Code-In Finalist",
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Articles Section

const articleSection = {
  title: "Articles",
  subtitle:
    "Alongside my love for coding cool apps, I enjoy writing and sharing knowledge with others",
  articles: [
    {
      url: "https://medium.com/@jameshuang337/an-introduction-to-linked-lists-9edc2dcffe59",
      title: "What is a Linked List?",
      description:
        "As a developer, one common data structure that is a must-know is the linked list. Fundamentally, a linked list is a data structure that consists of a linear series of connected data elements...."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationSection,
  workExperiences,
  projectSection,
  achievementSection,
  articleSection,
  twitterDetails
};
