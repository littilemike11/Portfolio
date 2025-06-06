import "./App.css";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Experiences from "./components/Experiences";
import GameProjects from "./components/GameProjects";
import WebProjects from "./components/WebProjects";
function App() {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const theme = isNight ? "dark" : "corporate";
    document.documentElement.setAttribute("data-theme", theme);
  }, [isNight]);
  return (
    <>
      <Navbar />
      <div className=" transition-colors duration-500 flex flex-col items-center justify-center px-6">
        <label className="swap swap-flip hover:scale-125 transition duration-300">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onChange={() => setIsNight(!isNight)} />

          {/* sun icon */}
          <svg
            className="swap-off h-12 w-12 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-12 w-12 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
      <div className="my-8 text-3xl font-bold tracking-tight sm:text-4xl">
        Michael Edquilan
      </div>

      <h1 className="text-4xl font-bold mb-6 text-center">
        {isNight ? "Game Developer by Night" : "Web Developer by Day"}
      </h1>
      <p className="mt-6 text-xl leading-8 ">
        Hi I'm Michael, a software and game developer in NYC. I like to make
        games, websites and anything I find cool.
      </p>
      <p className="mt-4">
        Contact me at{" "}
        <a className="link" href="mailto:michaeledquilan@gmail.com">
          michaeledquilan@gmail.com
        </a>
      </p>

      <ul
        className="ml-1 mt-8 flex justify-center items-center"
        aria-label="Social media"
      >
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block "
            href="https://github.com/littilemike11"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <span className="sr-only">GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6 hover:link-info hover:scale-125"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block "
            href="https://www.linkedin.com/in/michael-edquilan/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
            title="LinkedIn"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 hover:link-info hover:scale-125"
              aria-hidden="true"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </a>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block "
            href="https://littilemic-gaming.itch.io/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Itch.io (opens in a new tab)"
            title="Itch.io"
          >
            <span className="sr-only">Itch.io</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-6 w-6 hover:link-info hover:scale-125"
              viewBox="0 0 32 32"
            >
              <path d="M4.172 1.787c-1.396 0.828-4.145 3.984-4.172 4.812v1.375c0 1.735 1.625 3.267 3.099 3.267 1.771 0 3.251-1.469 3.251-3.213 0 1.744 1.421 3.213 3.197 3.213 1.771 0 3.151-1.469 3.151-3.213 0 1.744 1.516 3.213 3.287 3.213h0.032c1.776 0 3.291-1.469 3.291-3.213 0 1.744 1.381 3.213 3.152 3.213s3.197-1.469 3.197-3.213c0 1.744 1.475 3.213 3.245 3.213 1.479 0 3.104-1.532 3.104-3.267v-1.375c-0.032-0.828-2.776-3.984-4.177-4.812-4.339-0.156-7.344-0.183-11.823-0.183-4.484 0.005-10.593 0.073-11.828 0.183zM12.677 10.421c-0.183 0.308-0.385 0.568-0.625 0.797v0.005c-0.672 0.651-1.588 1.057-2.599 1.057-1.016 0-1.932-0.407-2.599-1.063-0.245-0.235-0.428-0.489-0.6-0.787-0.167 0.297-0.4 0.552-0.645 0.787-0.672 0.656-1.588 1.063-2.599 1.063 0 0 0 0-0.005 0-0.12 0-0.245-0.036-0.349-0.073-0.14 1.485-0.203 2.901-0.224 3.937v0.005c-0.005 0.527-0.005 0.953-0.011 1.552 0.032 3.115-0.307 10.089 1.376 11.803 2.604 0.604 7.396 0.88 12.197 0.885h0.005c4.807-0.005 9.593-0.281 12.197-0.885 1.683-1.713 1.344-8.688 1.376-11.803-0.005-0.599-0.005-1.025-0.011-1.552v-0.005c-0.021-1.036-0.079-2.452-0.224-3.937-0.099 0.037-0.229 0.073-0.349 0.073 0 0-0.005 0-0.005 0-1.011 0-1.927-0.407-2.599-1.063h0.005c-0.245-0.235-0.479-0.489-0.645-0.787h-0.005c-0.167 0.297-0.355 0.552-0.595 0.787-0.667 0.656-1.583 1.063-2.599 1.063-1.011 0-1.927-0.407-2.599-1.063-0.24-0.229-0.443-0.495-0.615-0.787l-0.011-0.016c-0.172 0.308-0.38 0.573-0.615 0.803-0.672 0.656-1.588 1.063-2.599 1.063 0 0-0.005 0-0.005 0-0.031 0-0.068 0-0.104-0.005-0.036 0.005-0.073 0.005-0.109 0.005 0 0 0 0-0.005 0-1.011 0-1.927-0.407-2.593-1.063-0.24-0.229-0.443-0.495-0.609-0.787l-0.011-0.016zM10.005 13.875c1.057 0.005 1.995 0 3.161 1.271 0.916-0.093 1.875-0.14 2.833-0.14s1.917 0.047 2.833 0.14c1.167-1.271 2.104-1.271 3.161-1.271h0.005c0.5 0 2.5 0 3.891 3.912l1.495 5.369c1.109 3.995-0.355 4.095-2.177 4.095-2.708-0.1-4.208-2.068-4.208-4.037-1.5 0.251-3.251 0.371-5 0.371s-3.5-0.12-4.995-0.371c0 1.969-1.5 3.937-4.208 4.037-1.828-0.005-3.292-0.1-2.183-4.095l1.495-5.369c1.396-3.912 3.396-3.912 3.896-3.912zM16 16.953c-0.005 0-2.849 2.62-3.364 3.547l1.864-0.073v1.625c0 0.079 0.751 0.047 1.5 0.011 0.749 0.036 1.495 0.068 1.495-0.011v-1.625l1.869 0.073c-0.515-0.927-3.364-3.547-3.364-3.547z" />
            </svg>
          </a>
        </li>
      </ul>

      <div className="w-full max-w-3xl">
        <div className="lg:max-w-lg">
          <h1 className="mt-2 arcade-font text-2xl font-semibold tracking-tight sm:text-3xl">
            Background
          </h1>
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
        </div>
        <Experiences />
        {isNight ? <GameProjects /> : <WebProjects />}
      </div>
    </>
  );
}

export default App;
