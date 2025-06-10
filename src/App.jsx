import "./App.css";
import { useEffect, useState } from "react";

import Experiences from "./components/Experiences";
import GameProjects from "./components/GameProjects";
import WebProjects from "./components/WebProjects";
import Footer from "./components/Footer";
import SocialMediaLinks from "./components/SocialMediaLinks";
import SectionHeader from "./components/SectionHeader";
import Background from "./components/Background";
function App() {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = window.innerHeight * 0.10; // start transition 75% down the viewport

      setIsNight(scrollPosition > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const theme = isNight ? "dark" : "corporate";
    document.documentElement.setAttribute("data-theme", theme);
  }, [isNight]);
  return (
    <>
      <div className={`min-h-screen xl:grid xl:grid-cols-2  w-full transition-all duration-1000 py-12 px-[2rem] ${isNight
        ? "bg-gradient-to-b from-purple-900 via-indigo-900 to-black"
        : "bg-sky-100"
        }`}>
        {/* <Navbar /> */}
        <div className="xl:sticky xl:top-0 h-fit xl:h-screen col-span-1">
          <div className="hero min-h-screen">
            <div className="hero-content  text-center">
              <div className="max-w-lg">
                <div className="mb-12 ">
                  <h1 className="text-4xl text-center font-extrabold tracking-tight sm:text-5xl">Michael Edquilan</h1>
                </div>
                <div>
                  {isNight ? <div className="flex flex-col italic items-center"><h2 className="text-2xl font-bold mb-6 text-center sm:text-3xl">
                    Game Developer by Night
                  </h2>
                    {/* moon icon */}
                    <svg
                      className=" h-12 w-12 fill-current "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </div> :

                    <div className="flex flex-col items-center"><h2 className="text-2xl italic font-bold mb-6 text-center sm:text-3xl">
                      Web Developer by Day
                    </h2>
                      {/* sun icon */}
                      <svg
                        className=" h-12 w-12 fill-current animate-[wiggle_1s_ease-in-out_infinite]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                      </svg>
                    </div>}
                </div>
                <p className="mt-6 text-xl leading-8 text-center">
                  Hi I'm Michael, a software and game developer in NYC. I like to make
                  games, websites and anything I find cool.
                </p>
                <p className="mt-4 text-center">
                  Contact me at{" "}
                  <a className="link" href="mailto:michaeledquilan@gmail.com">
                    michaeledquilan@gmail.com
                  </a>
                </p>
                <SocialMediaLinks />
                <nav className=" flex justify-center py-4">
                  <ul className="menu md:menu-horizontal font-medium items-center text-lg ">
                    <li >
                      <a href="#background" className="hover:underline">Background</a>
                    </li>
                    <li>
                      <a href="#experience" className="hover:underline ">Experience</a>
                    </li>
                    <li>
                      <a href="#projects" className="hover:underline ">Projects</a>
                    </li>
                    <li >
                      <a href="#games" className="hover:underline">Games</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 m-auto max-w-3xl xl:px-8 xl:space-y-20 ">
          <Background />
          <Experiences />
          <WebProjects />
          <GameProjects />
        </div>
        <Footer />

      </div >
    </>
  );
}

export default App;
