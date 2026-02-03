import React from "react";
import Header from "./components/Header";
import ProjectGrid from "./components/ProjectGrid";
import Footer from "./components/Footer";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  const thingies = [
    // Apps (newest to oldest)
    {
      id: 15,
      title: "QUOTES",
      description:
        "An app for saving and sharing memorable quotes.",
      link: "https://quotes.silv.app/",
      category: "app",
      launchDate: "2026-02-01",
    },
    {
      id: 14,
      title: "COINDEX",
      description:
        "A site for precious metals and numismatic enthusiasts.",
      link: "https://coindex.app/",
      category: "app",
      launchDate: "2025-12-01",
    },
    {
      id: 13,
      title: "SIGN PDF",
      description:
        "An open-source public good for creating eSign compliant PDFs. Privacy first - no data sent to any server. You shouldn't have to pay to sign a PDF.",
      link: "https://sign.silv.app/",
      githubUrl: "https://github.com/mattsilv/sign-pdf",
      category: "app",
      launchDate: "2025-09-05",
    },
    {
      id: 11,
      title: "FEELINGS",
      description:
        "An interactive vocabulary builder focused on emotional expression. Expand your range of feeling words to communicate with greater precision and self-awareness.",
      link: "https://feelings.silv.app/",
      category: "app",
      launchDate: "2025-06-04",
    },
    // Archive (moved from apps)
    {
      id: 10,
      title: "Win95 notes",
      description:
        "A simple app to pass someone a note in the old Windows 95 Notepad style interface, the text of the note is passed in the URL with a very simplistic cipher.",
      link: "https://win95.silv.app/?t=filename.txt&c=khoor%2520zruog",
      category: "archive",
      launchDate: "2025-05-19",
    },
    {
      id: 9,
      title: "Learning Style Quiz",
      description:
        "a quiz to determine your learning style by generating an AI prompt to teach you any topic exactly how you need to learn it.",
      link: "https://learn.silv.app/",
      githubUrl: "https://github.com/mattsilv/silv-learn",
      category: "archive",
      launchDate: "2025-04-11",
    },
    {
      id: 1,
      title: "RELAX",
      description:
        "An app to help you fall asleep using the same technique navy seals use. Vibe coded with Claude code.",
      link: "https://sleep.silv.app/",
      githubUrl: "https://github.com/mattsilv/sleep",
      category: "app",
      launchDate: "2025-03-14",
    },
    {
      id: 2,
      title: "AIRPORT CALC",
      description:
        "A silly app to tell you what time to leave for the airport. Vibe coded with Cursor.",
      link: "https://airportcalc.silv.app/",
      githubUrl: "https://github.com/mattsilv/airport-time-estimator",
      category: "app",
      launchDate: "2025-03-14",
    },
    // Utilities (newest to oldest)
    {
      id: 12,
      title: "COMMODITIES API",
      description:
        "Free real-time API for commodity prices including metals, energy, and agricultural products.",
      link: "https://datadocs.silv.app/commodities",
      category: "utility",
      launchDate: "2025-07-26",
    },
    {
      id: 5,
      title: "MARKDOWN REPORT",
      description:
        "A utility to paste markdown from LLM outputs like deep research reports and generate a beautiful HTML page that can be printed to PDF",
      link: "https://markdown.silv.app/",
      githubUrl: "https://github.com/mattsilv/markdown-report",
      category: "utility",
      launchDate: "2025-03-15",
    },
    {
      id: 7,
      title: "SILV.APP",
      description:
        "A directory of all the micro apps I'm building. The code is open source. Feel free to copy it.",
      link: "https://github.com/mattsilv/silv-app",
      githubUrl: "https://github.com/mattsilv/silv-app",
      category: "utility",
      launchDate: "2025-03-13",
    },
    // Content
    {
      id: 3,
      title: "SILV.BLOG",
      description: "explorations of curiosity",
      link: "https://www.silv.blog/",
      // No GitHub link for SILV.BLOG
      category: "content",
      launchDate: "2025-03-14",
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
