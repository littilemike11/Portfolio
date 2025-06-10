import titleScreenBg from "../assets/titleScreenBg.png";
import gilderWebsite from "../assets/gilderWebsite.jpg";
import mindCareWebsite from "../assets/mindCareWebsite.jpg";
export default function WebProjects() {
  const projects = [
    {
      projectName: "The Restaurant at Gilder Website",
      websiteLink: "https://the-restaurant-at-gilder.netlify.app/",
      githubLink: "https://github.com/littilemike11/Gilder-Restaurant-Website",
      time: "April - May 2025",
      summary:
        "I planned, designed, and developed a full-stack web application for a restaurant using a MERN stack, featuring a user-friendly interface with React, TailwindCSS, and DaisyUI. The application included a secure admin dashboard for staff, allowing them to manage menu items with image uploads via Cloudinary, powered by RESTful APIs with Express.js and MongoDB. To enhance accessibility, I implemented multilingual support using Google Translate. The frontend was hosted on Netlify, while the backend was deployed on Heroku. I collaborated closely with restaurant staff, gathering feedback to ensure the website’s design and features met both user needs and business goals.",
      preview: gilderWebsite,
      tools: [
        "react",
        "Tailwind.css",
        "daisy UI",
        "JavaScript",
        " cloudinary",
        "express.js",
        "mongoDB",
        "Netlify",
        "heroku",
        "restful API's",
      ],
    },
    {
      projectName: "LMG Games Website",
      websiteLink: "https://lmggames.com/",
      githubLink: "https://github.com/littilemike11/LMG-website",
      time: "February 2024 - Present",
      summary:
        "To your shock, you may mind that you are currently on this website.I developed a portfolio website using GitHub Pages to showcase my game projects, emphasizing a clean, user-friendly interface that effectively highlights my development skills and completed works. This portfolio will act as a living document for my professional achievements",
      preview: titleScreenBg,
      tools: ["react", "Tailwind.css", "daisy UI", "Netlify", "JavaScript"],
    },
    {
      projectName: "MindCare",
      websiteLink: "",
      githubLink: "https://github.com/BiggyBrey/Emotional-Wellness",
      time: "August - September 2024",
      summary:
        "MindCare is a mental wellness tool powered by OpenAI's chat API, offering both independent and AI-guided journaling with mood tracking. I collaborated with a team to build this tool using React, DaisyUI, and TailwindCSS for the frontend, Express for the backend, and MongoDB for data storage, contributing primarily to backend development and feature implementation.",
      preview: mindCareWebsite,
      tools: [
        "OpenAi",
        "chart.js",
        "react",
        "Tailwind.css",
        "daisy UI",
        "JavaScript",
        "express.js",
        "mongoDB",
      ],
    },
  ];
  return (
    <>
      <section id="projects">


        <div className="text-base leading-7 ">
          <h3 className="sticky top-0 bg-opacity-80 backdrop-blur-md rounded-b-lg py-1 mt-12 text-3xl font-semibold tracking-tight sm:text-3xl">
            Projects
          </h3>
          {/* <SectionHeader title={"Projects"} /> */}

          <ul role="list" className="mt-6 space-y-8">
            {projects.map((project, index) => (
              <li key={index} className="flex flex-col gap-x-3">
                <p className="font-mono text-sm">{project.time}</p>
                <h3 className="text-2xl italic font-medium">
                  {project.projectName}
                </h3>
                <figure>
                  <figcaption className="font-semibold my-2">
                    {project.websiteLink && (
                      <span>
                        <a
                          className="hover:link link-info"
                          href={project.websiteLink}
                          alt={`${project.projectName}'s website link`}
                        >
                          Website
                        </a>{" "}
                        |{" "}
                      </span>
                    )}
                    <a
                      className="hover:link link-info"
                      href={project.githubLink}
                      alt={`${project.projectName}'s github link`}
                    >
                      Github
                    </a>
                  </figcaption>
                  <img
                    src={project.preview}
                    className="w-full"
                    alt="image of project"
                  />
                  <figcaption>{project.summary}</figcaption>
                </figure>
                <ul className="flex flex-wrap mt-4 justify-center gap-2">
                  {project.tools.map((tool, index) => (
                    <li
                      className="badge badge-primary p-3 text-xs sm:text-sm capitalize m-0.5"
                      key={index}
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
