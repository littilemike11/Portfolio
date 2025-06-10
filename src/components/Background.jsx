import SectionHeader from "./SectionHeader"
export default function Background() {
    return (
        <>
            <section id="background">
                {/* <h3 className="sticky bg-opacity-80 backdrop-blur-md py-1 rounded-b-lg top-0 text-3xl font-semibold tracking-tight sm:text-3xl">
            Background
          </h3> */}
                <SectionHeader title={"Background"} />
                <p className="mt-6  leading-8 ">
                    I am a passionate developer who began my journey in 2018 at the{" "}
                    <span className="italic">
                        Grove School of Engineering, City College of New York (CUNY)
                    </span>
                    , where I obtained a{" "}
                    <span className="font-bold">Bachelor’s in Computer Science.</span>{" "}
                    During the 2020 COVID-19 pandemic, I decided to make my first game,{" "}
                    <a
                        className="hover:link text-info"
                        href="https://littilemic-gaming.itch.io/cuber"
                    >
                        Cuber
                    </a>
                    , using <span className="italic text-primary">Unity</span>, inspired
                    by <span className="italic">Brackeys'</span> YouTube tutorials.
                    After graduating in January 2023, I continued exploring game
                    development, creating{" "}
                    <a
                        className="hover:link text-info"
                        href="https://littilemic-gaming.itch.io/bomb-dodge-10"
                    >
                        Bomb Blitz
                    </a>{" "}
                    and launching LMGGames.com in 2024 to showcase my Unity and web
                    games. This eventually led to my first web game,{" "}
                    <a
                        className="hover:link link-info"
                        href="https://lmggames.com/WheresOne"
                    >
                        Where's One
                    </a>
                    . That same year, I completed a Full Stack Development Bootcamp at{" "}
                    <a
                        className="hover:link text-info"
                        href="https://www.colorcodedlabs.com/"
                    >
                        Color Coded Labs
                    </a>{" "}
                    in Columbus, Ohio, and later joined{" "}
                    <a
                        className="hover:link text-info"
                        href="https://distributeaid.org/"
                    >
                        Distribute Aid
                    </a>{" "}
                    as a volunteer frontend developer, contributing to their open-source
                    humanitarian aid platform. In free time, I continue to make games,
                    website or webgames.
                </p>
            </section>
        </>
    )
}