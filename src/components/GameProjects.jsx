import cuberIcon from "../assets/cuberIcon.png";
import BombBlitzIcon from "../assets/BombBlitzIcon.png";
export default function GameProjects() {
  const games = [
    {
      gameName: "Bomb Blitz",
      link: "https://littilemic-gaming.itch.io/bomb-dodge-10",
      //   githubLink: "https://github.com/littilemike11/Gilder-Restaurant-Website",
      time: "Spring 2023",
      summary:
        "I planned, designed, and developed a full-stack web application for a restaurant using a MERN stack, featuring a user-friendly interface with React, TailwindCSS, and DaisyUI. The application included a secure admin dashboard for staff, allowing them to manage menu items with image uploads via Cloudinary, powered by RESTful APIs with Express.js and MongoDB. To enhance accessibility, I implemented multilingual support using Google Translate. The frontend was hosted on Netlify, while the backend was deployed on Heroku. I collaborated closely with restaurant staff, gathering feedback to ensure the website’s design and features met both user needs and business goals.",
      preview: BombBlitzIcon,
      tools: ["Unity", "C#"],
    },
    {
      gameName: "Cuber",
      link: "https://littilemic-gaming.itch.io/cuber",
      //   githubLink: "https://github.com/littilemike11/LMG-website",
      time: "Summer 2020",
      summary:
        "To your shock, you may mind that you are currently on this website.I developed a portfolio website using GitHub Pages to showcase my game games, emphasizing a clean, user-friendly interface that effectively highlights my development skills and completed works. This portfolio will act as a living document for my professional achievements",
      preview: cuberIcon,
      tools: ["Unity", "C#"],
    },
  ];
  return (
    <>
      <div className="max-w-xl text-base leading-7 lg:max-w-lg">
        <h1 className="mt-12 arcade-font text-2xl font-semibold tracking-tight sm:text-3xl">
          Games
        </h1>

        <ul role="list" className="mt-6 space-y-8">
          {games.map((game, index) => (
            <li key={index} className="flex flex-col gap-x-3">
              <p className="font-mono text-sm">{game.time}</p>
              <a
                className="hover:link w-fit self-center hover:link-info"
                href={game.link}
                alt={`${game.gameName}'s link`}
              >
                {" "}
                <h3 className="text-2xl italic font-medium">{game.gameName}</h3>
              </a>
              <figure>
                <img
                  src={game.preview}
                  className="w-full"
                  alt="image of game logo"
                />
                <figcaption>{game.summary}</figcaption>
              </figure>
              <ul className="flex flex-wrap mt-4 justify-center gap-2">
                {game.tools.map((tool, index) => (
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
    </>
  );
}
