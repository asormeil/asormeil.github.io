/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
  username: "Asma Sormeily",
  title: "Hello, I'm Asma!",
  subTitle0: emoji(
    "As an accomplished Full-Stack Engineer with over 7 years of industry experience and a passion for lifelong learning, I bring a rich blend of academic and professional expertise."
  ),
  subTitle1: emoji(
    "My educational background is marked by a Master's degree in Computer Science (GPA 4.0/4.0) and a Bachelor's in Software Engineering (GPA 3.52/4.0)."
  ),
  subTitle2: emoji(
    "My commitment to continuous professional development is further exemplified by a multitude of certifications in diverse technologies and methodologies."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/asormeil",
  linkedin: "https://www.linkedin.com/in/asmasormeili/",
  gmail: "asma.sormeily@unb.ca",
  //changed from gitlab to dev community
  devcommunity: "https://dev.to/asormeil",
  facebook:
    "https://www.facebook.com/profile.php?id=100071004911037&mibextid=9R9pXO",
  medium: "https://medium.com/@asormeil",
  stackoverflow: "https://stackoverflow.com/users/17996265/asormeil",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Specialties & Skills",
  subTitle: "Blending Technical Expertise with Innovative Approaches",
  skills: [
    emoji(
      "💻 Proficient and certified in advanced frameworks like React, Node.js, Angular, and Typescript."
    ),
    emoji(
      "🌐 Adept in crafting web services, utilizing contemporary design patterns, and optimizing data retrieval processes for enhanced performance."
    ),
    emoji(
      "🔗 Dedicated to Agile methodologies, fostering collaborative and cross-functional team dynamics for efficient project execution."
    ),
    emoji(
      "🔒 Extensive understanding of security best practices in API development, including OAuth, JWT, and advanced validation techniques."
    ),
    emoji(
      "✨ Committed to adhering to Software Development Life Cycle (SDLC) principles, maintaining clean code standards, and focusing on user experience optimization."
    ),
    emoji(
      "📊 Demonstrated expertise in data modeling using SQL/noSQL databases and proficient in data analysis using Python."
    ),
    emoji(
      "🤖 Well-versed in Generative Pre-trained Transformers (GPT), Large Language Models (LLMs), and prompt engineering, with practical project experience."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "postgresql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "machine learning",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-square"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "material-ui",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "graphql",
      fontAwesomeClassname: "fas fa-project-diagram"
    },

    {
      skillName: "expressjs",
      fontAwesomeClassname: "fas fa-server"
    },

    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "csharp",
      fontAwesomeClassname: "fab fa-cuttlefish"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  subTitle: "MSc in Computer Science, Bachelor's in Software Engineering",
  schools: [
    {
      schoolName: "University of New Brunswick",
      logo: require("./assets/images/unb.logo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2021 - October 2023",
      desc: "Fully funded research-based Master's program specialized in Cybersecurity",
      descBullets: [
        "Submitted two research papers in IEEE journals and conferences on Early Fake News Detection on Social Media.",
        "Top grades in key courses including Natural Language Processing, Database Security, and Information Assurance."
      ]
    },
    {
      schoolName: "Lorestan University",
      logo: require("./assets/images/lorestan.logo.jpeg"),
      subHeader: "Bachelor of Software Engineering",
      duration: "March 2012 - June 2016",
      desc: "Ranking in the top 10% of my program.",
      descBullets: [
        "Achieved perfect scores in key courses including Data Structure, Advanced Programming, and Software Engineering I.",
        "Engaged in hands-on projects as a freelancer, developing practical solutions using C# and SQL."
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "React/Node/Express/MongoDB", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Angular/Node/Express/PostgreSQL",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Analysis/ML/DL/Python",
      progressPercentage: "75%"
    },
    {
      Stack: "C#/ASP.NET/SQL",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Software Engineer/Graduate Research Assistant",
      company: "Canadian Institute for Cybersecurity",
      companylogo: require("./assets/images/cic.logo.jpeg"),
      date: "June 2021 – October 2023",
      desc: "Focused on developing AI-powered solutions for cybersecurity and data analysis and presenting complex research findings through intuitive web interfaces.",
      descBullets: [
        "Engineered an AI-powered, Angular-based interface for real-time Twitter data analysis, enhancing visualization and user interaction.",
        "Crafted a Python/PyTorch-based deep learning model for content verification accuracy on social media platforms."
      ]
    },
    {
      role: "Senior Full Stack Developer",
      company: "Nira Software",
      companylogo: require("./assets/images/nira.logo.jpeg"),
      date: "February 2019 – August 2021",
      desc: "Key contributor in developing a cutting-edge web application focused on optimizing user bookings, which significantly enhanced user experience and operational efficiency.",
      descBullets: [
        "Spearheaded the design and implementation of comprehensive frontend features using GraphQL and secure RESTful APIs, ensuring efficient data retrieval and integration.",
        "Supervised and mentored junior developers, focusing on code reviews and enhancing best practices."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Nira Software",
      companylogo: require("./assets/images/nira.logo.jpeg"),
      date: "November 2017 – January 2019",
      desc: "Integral part of the team that developed an air traveling software utilized by users across more than 18 airlines, incorporating advanced web technologies for optimal functionality.",
      descBullets: [
        "Developed the back-end infrastructure with NodeJS and MongoDB, focusing on optimizing data storage, retrieval, and Restful API integration.",
        "Developed and executed comprehensive unit tests, ensuring high code quality and robustness, significantly reducing bugs and enhancing feature reliability."
      ]
    },
    {
      role: "Software Developer",
      company: "KARA2000",
      companylogo: require("./assets/images/kara2000_logo.jpeg"),
      date: "July 2016 – December 2017",
      desc: "Focused on developing cross-platform mobile and SaaS web applications for time attendance management in over 300 organizations and hospitsls, enhancing operational efficiency.",
      descBullets: [
        "Developed cross-platform applications using React Native and ReactJS, catering to time attendance needs in organizations.",
        "Deployed robust RESTful APIs using C# and optimized database operations, including SQL procedures, triggers, and scripts, resulting in a 30% system efficiency improvement over three months."
      ]
    },
    {
      role: "Junior Software Developer",
      company: "SafaRayaneh",
      companylogo: require("./assets/images/safa.logo.jpeg"),
      date: "January 2016 – July 2016",
      desc: "Collaborated in a dynamic team environment, focusing on software testing and data manipulation to enhance operational efficiency and product quality.",
      descBullets: [
        "Worked closely with senior developers in comprehensive software testing, identifying and documenting defects, leading to a 20% reduction in post-release defects.",
        "Utilized SQL for data extraction and manipulation, creating customized reports and contributing to a 15% increase in operational efficiency."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements and Certifications",

  achievementsCards: [
    {
      title: "Javascript Essential Training",
      subtitle: "December 23, 2023",
      image: require("./assets/images/javascript_certificate.png"),
      imageAlt: "Certificate",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://www.linkedin.com/learning/certificates/5e9e84cb00e0c3d2a5002844e3c0a5723860f64c57c54074bfc03f8f65808c0c?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B9DaCB3NcRV64bqv5NpTNYw%3D%3D"
        },
        {
          name: "Javascript",
          url: ""
        },
        {
          name: "7 code challenges by CoderPad",
          url: "https://www.linkedin.com/company/coderpad/?trk=cc_learning"
        }
      ]
    },
    {
      title: "Learning GraphQL",
      subtitle: "December 12, 2023",
      image: require("./assets/images/graphql_certificate.png"),
      imageAlt: "GraphQL Certificate",
      footerLink: [
        {
          name: "Certificate Link",
          url: "https://www.linkedin.com/learning/certificates/9f4defbca4311f0c5d7bfc7fc51bb7da45b7356df1c4926cbb5b43b4f08977db"
        },
        {
          name: "Apollo Server",
          url: ""
        },
        {
          name: "Certifying Organizations: Linkedin",
          url: ""
        }
      ]
    },

    {
      title: "React.js Essential Training",
      subtitle: "December 7, 2023",
      image: require("./assets/images/react_certificate.png"),
      imageAlt: "Certification of React.js",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://www.linkedin.com/learning/certificates/0d88f24f2b85ad57c6c6a80c9d6be7fc6ef548fc8cd42f572f46bc1e09c02913"
        },
        {
          name: "React.js",
          url: ""
        },
        {
          name: "Hooks",
          url: ""
        },
        {
          name: "State Management",
          url: ""
        }
      ]
    },
    {
      title: "Git Essential Training",
      subtitle: "Completion date, November 10, 2023",
      image: require("./assets/images/git_certificate.png"),
      imageAlt: "Certification of React.js",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://www.linkedin.com/learning/certificates/5a28d5dc38e05a1a35434b5817dd25769d9dd14aa99ac9a1f4cdbef775aeaba6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BU3UcurtCTay70XPHk5I6%2Fw%3D%3D"
        },
        {
          name: "Git",
          url: ""
        },
        {
          name: "Github",
          url: ""
        }
      ]
    },
    {
      title: "Javascript AI App with React and Open AI",
      subtitle: "November 15, 2023",
      image: require("./assets/images/openai_javascript.png"),
      imageAlt: "Certification of React.js",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://www.linkedin.com/learning/certificates/d047602157fb4aca16df0f69251cb9175f03c42f6a88728c854fbe3e54503621"
        },
        {
          name: "React.js",
          url: ""
        },
        {
          name: "Custom Hooks",
          url: ""
        },
        {
          name: "GPT",
          url: ""
        }
      ]
    },
    {
      title: "Amazon Web Services",
      subtitle: "November 22, 2023",
      image: require("./assets/images/aws_certificate.png"),
      imageAlt: "Certification of AWS",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://www.linkedin.com/learning/certificates/b8bfedbffa81176d8d160c409494172f8697070a4d31f10af95ab6c13beaf876?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B788EITrZTgCnXDLOfNQpkw%3D%3D"
        },
        {
          name: "AWS",
          url: ""
        },
        {
          name: "SQS",
          url: ""
        },
        {
          name: "S3",
          url: ""
        }
      ]
    },
    {
      title: "Developing Cloud Apps with Node.js and React",
      subtitle: "July 12, 2023",
      image: require("./assets/images/node_react_certificate.png"),
      imageAlt: "Certification of Nodejs",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://www.coursera.org/account/accomplishments/verify/2CMULGDTJX8S?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
        },
        {
          name: "Cloud",
          url: ""
        },
        {
          name: "React.js",
          url: ""
        },
        {
          name: "Node.js",
          url: ""
        },
        {
          name: "Express",
          url: ""
        }
      ]
    },
    {
      title: "Developing Back-End Apps with Node.js and Express",
      subtitle: "June 20, 2023",
      image: require("./assets/images/backend_nodejs_express.png"),
      imageAlt: "Certification of Nodejs/Express",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://www.coursera.org/account/accomplishments/verify/JV9YN2SA7FQB?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
        },
        {
          name: "Express",
          url: ""
        },
        {
          name: "Server-side Javascript",
          url: ""
        },
        {
          name: "backend development",
          url: ""
        }
      ]
    },
    {
      title: "Node and Express Essentials Badge",
      subtitle: "December 7, 2023",
      image: require("./assets/images/ibm_badge.png"),
      imageAlt: "Certification of Node and Express",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://www.credly.com/badges/d297e8a6-9fdb-4e21-8c42-0b2a9bb59f8a/linked_in_profile"
        },
        {
          name: "RESTful API",
          url: ""
        },
        {
          name: "Middleware",
          url: ""
        },
        {
          name: "Authentication",
          url: ""
        }
      ]
    },
    {
      title: "Django Application Development with SQL and Databases",
      subtitle: "July 5, 2023",
      image: require("./assets/images/django_sql_certificate.png"),
      imageAlt: "Certification of Django and SQL",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://www.coursera.org/account/accomplishments/verify/BJA6RV5UDA57?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"
        },
        {
          name: "Relational Database (RDBMS)",
          url: ""
        },
        {
          name: "Object Relational Mapping (ORM)",
          url: ""
        },
        {
          name: "Django (Web Framework)",
          url: ""
        }
      ]
    },
    {
      title: "Introduction to Cloud Computing",
      subtitle: "June 6, 2023",
      image: require("./assets/images/could_computing_certificate.png"),
      imageAlt: "Certification of Node and Express",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://www.coursera.org/account/accomplishments/verify/HP3HA2EQFMUK"
        },
        {
          name: "Cloud Computing",
          url: ""
        },
        {
          name: "Devops",
          url: ""
        },
        {
          name: "Iaas PaaS Saas",
          url: ""
        }
      ]
    },
    {
      title: "Database Design and Basic SQL in PostgreSQL",
      subtitle: "June 1, 2023",
      image: require("./assets/images/postregsql_certificate.png"),
      imageAlt: "Certification of Node and Express",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://www.coursera.org/account/accomplishments/verify/FRT8WLLKJ6SW?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
        },
        {
          name: "Database (DB) Design",
          url: ""
        },
        {
          name: "Database (DBSM)",
          url: ""
        },
        {
          name: "SQL",
          url: ""
        }
      ]
    },
    {
      title: "C# for .NET Developers",
      subtitle: "September 4, 2023",
      image: require("./assets/images/csharp_certificate.png"),
      imageAlt: "Certification of C#",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://www.credly.com/badges/d297e8a6-9fdb-4e21-8c42-0b2a9bb59f8a/linked_in_profile"
        },
        {
          name: "Exception Handling Techniques",
          url: ""
        },
        {
          name: "Object-Oriented Programming (OOP)",
          url: ""
        },
        {
          name: "C# programming",
          url: ""
        }
      ]
    },
    {
      title: "Improving Deep Neural Networks",
      subtitle: "December 31, 2021",
      image: require("./assets/images/improve_deep_learning_certificate.png"),
      imageAlt: "Certification of Deep Learning",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://www.coursera.org/account/accomplishments/verify/28U3P5AT652E?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
        },
        {
          name: "Mathematical Optimization",
          url: ""
        },
        {
          name: "Deep Learning",
          url: ""
        }
      ]
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "December 27, 2021",
      image: require("./assets/images/neural_network_certificate_2.png"),
      imageAlt: "Certification of Deep Learning",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://www.coursera.org/account/accomplishments/verify/42MPADWBBFKS"
        },
        {
          name: "Python Programming",
          url: ""
        },
        {
          name: "Artificial Neural Network",
          url: ""
        }
      ]
    },
    {
      title: "Structuring Machine Learning Projects",
      subtitle: "December 29, 2021",
      image: require("./assets/images/ml_certificate.png"),
      imageAlt: "Certification of Machine Learning",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://www.coursera.org/account/accomplishments/verify/NFJ5R8ATB6NC"
        },
        {
          name: "Machine Learning",
          url: ""
        },
        {
          name: "Multi-Task Learning",
          url: ""
        }
      ]
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Fueled by an enthusiasm for development, I value the opportunity to share my experiences and learnings with others.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://dev.to/asormeil/javascript-python-similarities-and-differences-2abe",
      title: "JavaScript && Python, Similarities `and` Differences!",
      description:
        "Discover the intricate differences between JavaScript and Python: delving into the unique characteristics and comparative analysis of these two tech giants."
    },
    {
      url: "https://dev.to/asormeil/navigating-the-intricacies-of-this-and-self-in-javascript-and-python-ji4",
      title:
        'Navigating the Intricacies of "This" and "Self" in Javascript and Python',
      description:
        'A delve into the inheritance models of Javascript and Python, focusing on the "this" keyword in Javascript and the "self" reference in Python.'
    }
    // ,
    // {
    //   url: "https://medium.com/@asormeil/interviewer-have-you-ever-used-git-rebase-for-shared-branches-d9bf516307e7",
    //   title: "When do you use git rebase over git merge?",
    //   description:
    //     "The nuances of using the git rebase command in shared branches, showcasing the real-world application of everyday programming tools."
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "",
  number: "+1(506)230 8040",
  email_address: ["asma.sormeily@unb.ca", "asma.sormeily@outlook.com"]
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
