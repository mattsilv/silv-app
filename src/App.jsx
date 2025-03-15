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
    },
    {
      id: 2,
      title: "AIRPORT CALC",
      description:
        "A silly app to tell you what time to leave for the airport. Vibe coded with Cursor.",
      link: "https://airportcalc.silv.app/",
    },
    {
      id: 3,
      title: "SILV.BLOG",
      description: "explorations of curiosity",
      link: "https://www.silv.blog/",
    },
    {
      id: 4,
      title: "CODESIGHT",
      description:
        "An open source shell script to help you efficiently paste your entire code base to an LLM for coding insights",
      link: "https://github.com/mattsilv/codesight",
    },
    {
      id: 5,
      title: "MARKDOWN REPORT",
      description:
        "A utility to paste markdown from LLM outputs like deep research reports and generate a beautiful HTML page that can be printed to PDF",
      link: "https://markdown.silv.app/",
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
