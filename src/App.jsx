import React from "react";
import Header from "./components/Header";
import ProjectGrid from "./components/ProjectGrid";
import Footer from "./components/Footer";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  const thingies = [
    {
      id: 1,
      title: "SLEEP",
      description:
        "An app to help you fall asleep using the same technique navy seals use. Vibe coded with Claude code.",
      link: "https://sleep.silv.app/",
      // No public GitHub link for SLEEP app yet
      category: "app",
    },
    {
      id: 2,
      title: "AIRPORT CALC",
      description:
        "A silly app to tell you what time to leave for the airport. Vibe coded with Cursor.",
      link: "https://airportcalc.silv.app/",
      githubUrl: "https://github.com/mattsilv/airport-time-estimator",
      category: "app",
    },
    {
      id: 5,
      title: "MARKDOWN REPORT",
      description:
        "A utility to paste markdown from LLM outputs like deep research reports and generate a beautiful HTML page that can be printed to PDF",
      link: "https://markdown.silv.app/",
      githubUrl: "https://github.com/mattsilv/markdown-report",
      category: "app",
    },
    {
      id: 4,
      title: "CODESIGHT",
      description:
        "An open source shell script to help you efficiently paste your entire code base to an LLM for coding insights",
      link: "https://github.com/mattsilv/codesight",
      category: "utility",
    },
    {
      id: 6,
      title: "DOCKER DEVCONTAINERS",
      description:
        "A collection of AI-ready development containers for various AI/ML frameworks and tools",
      link: "https://github.com/mattsilv/ai-ready-dev-containers",
      category: "utility",
    },
    {
      id: 7,
      title: "SILV.APP",
      description:
        "A directory of all the micro apps I'm building. The code is open source. Feel free to copy it.",
      link: "https://silv.app/",
      githubUrl: "https://github.com/mattsilv/silv-app",
      category: "utility",
    },
    {
      id: 8,
      title: "INFERENCE PRICING",
      description:
        "A table of up-to-date pricing from the top AI inference providers.",
      link: "https://inference.silv.app/",
      githubUrl: "https://github.com/mattsilv/inference",
      category: "utility",
    },
    {
      id: 3,
      title: "SILV.BLOG",
      description: "explorations of curiosity",
      link: "https://www.silv.blog/",
      // No GitHub link for SILV.BLOG
      category: "content",
    },
  ];

  return (
    <>
      <GlobalStyles />
      <Header />
      <ProjectGrid projects={thingies} />
      <Footer />
    </>
  );
};

export default App;
