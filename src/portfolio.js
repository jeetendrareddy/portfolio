/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Jeethendra reddy's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Jeethendra reddy's Portfolio",
    type: "website",
    url: "https://jeetendrareddy.github.io/portfolio/#/home",
  },
};

//Home Page
const greeting = {
  title: "Jeetendra reddy",
  logo_name: "jeethendra reddy",
  nickname: "jithu",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/jeetendrareddy",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/m-jeethendra-reddy-6604571a7",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:jeetendrareddy76@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data analyst & ML",
      fileName: "DataScienceImg",
      skills: [
        "⚡  Looking to secure a SQL Data Analyst position with that will enable the use of exceptional technical and analytical skills.",
        "⚡ Well-organized and talented data science professional seeking the position of Data Analyst . Adept at collecting, analyzing, and authenticating, and modeling data set to improve business operational productivity. Highly competent in using statistical analysis to conduct market research and pinpoint patterns and trends.",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Power Bi",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/jeetendrareddy76",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/jeethendra",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/jeetendrareddy",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Amrita vishwa vidyapeetham",
      subtitle: "B.Tech. in Computer science Engineering",
      logo_path: "amrita.png",
      alt_name: "IIITDM Kurnool",
      duration: "2021 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Machine Learning, Data Science, Cloud Computing .",
      ],
      website_link: "https://amrita.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python",
      subtitle: "- Hacker Rank",
      logo_path: "Python-Logo.jpg",
      certificate_link: "https://www.hackerrank.com/certificates/4fd5fb4c9ce2",
      alt_name: "Hacker Rank",
      color_code: "#8C151599",
    },
    {
      title: "Python Basics",
      subtitle: "- Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/JUXCUBYBX7BT",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Python data structures",
      subtitle: "- Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/7AXM3P7T5RGR",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship",
  description:
    "Till now i don't have any internship and I'm looking forward to do a internship   ",
  header_image_path: "experience.svg",
  sections: [],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "I haven't written ant blogs till now",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "8-506, Main Bazar, T.A.-Tadapatri, Dist.-Anantapur, Andhra Pradesh - 515411",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Tadipatri,+Andhra+Pradesh+515411/@14.9113689,77.9556361,13z/data=!3m1!4b1!4m5!3m4!1s0x3bb41cadcd3b8d9f:0xd1bff73d9d4719fc!8m2!3d14.9091024!4d78.0092047",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8465819974",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
