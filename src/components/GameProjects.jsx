import cuberIcon from "../assets/cuberIcon.png";
import BombBlitzIcon from "../assets/BombBlitzIcon.png";
import SectionHeader from "./SectionHeader";
export default function GameProjects() {
  const games = [
    {
      gameName: "Bomb Blitz",
      link: "https://littilemic-gaming.itch.io/bomb-dodge-10",
      time: "Spring 2023",
      summary: "Bomb Blitz is a fast-paced, top-down 2D pixel art game where players must act quickly to save citizens from incoming explosions. Set in handcrafted environments the player drags panicked civilians to safety while avoiding the chaos around them. The pressure builds as bombs fall faster and closer, challenging players' reflexes and multitasking skills. As players rack up high scores, they earn gold that can be spent in an in-game shop to unlock fun outfit variations for the citizens—adding a layer of personality and visual flair. Bomb Blitz also includes gameplay modifiers that change up the rules and pacing, offering variety and new challenges with each session. ",
      preview: BombBlitzIcon,
      tools: ["Unity", "C#"],
    },
    {
      gameName: "Cuber",
      link: "https://littilemic-gaming.itch.io/cuber",
      time: "Summer 2020",
      summary: "Cuber is a 3D runner that combines the fast-paced action of games like Temple Run and Subway Surfers with the verticality and timing mechanics of Flappy Bird. Designed in Unity using a minimalist low-poly style—where everything is built from simple cubes—Cuber offers both handcrafted levels and an endless mode for replayability.As players progress, the game evolves from grounded running to free-flying segments that introduce a new layer of freedom and challenge. It showcase creatively designed environments like outer space or a dragon-themed level. Each level features a progress tracker, while the endless mode encourages players to beat their own high scores.",
      preview: cuberIcon,
      tools: ["Unity", "C#"],
    },
  ];
  return (
    <>
      <section id="games">
        <div className=" text-base leading-7 ">
          {/* <h1 className="sticky bg-opacity-80 backdrop-blur-md rounded-b-lg top-0 mt-12 text-3xl py-1 font-semibold tracking-tight sm:text-3xl">
            Games
          </h1> */}
          <SectionHeader title={"Games"} />

          <ul role="list" className="mt-6 space-y-8">
            {games.map((game, index) => (
              <li key={index} className="flex flex-col gap-y-3">
                <p className="font-mono text-sm">{game.time}</p>
                <a
                  className="hover:link w-fit link-info"
                  href={game.link}
                  alt={`${game.gameName}'s link`}
                >
                  {" "}
                  <h3 className="text-2xl italic font-medium">{game.gameName}</h3>
                </a>
                <figure className="flex flex-col md:flex-row md:gap-x-4 xl:flex-col">
                  <img
                    src={game.preview}
                    className="w-full md:w-1/2 xl:w-full"
                    alt="image of game logo"
                  />
                  <div className="md:w-1/2 xl:w-full">
                    <figcaption>{game.summary}</figcaption>
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
                  </div>

                </figure>

              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
