import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const projects = [
    { id: 1, title: "Premium Portfolio", description: "A modern, high-end portfolio built with vanilla HTML, CSS, and JavaScript.", imageUrl: "/images/Portfolio-template.png", liveUrl: "https://my-portfolio-ten-ruddy-52.vercel.app/", techStack: "HTML, CSS, JavaScript" },
    { id: 2, title: "Fake News Detector", description: "Machine learning application that analyzes text to determine the probability of misleading information.", imageUrl: "/images/Fake-news-detector.png", liveUrl: "https://github.com/CodingwithSam606/fake-news-detection", techStack: "Python, ML, Flask" },
    { id: 3, title: "Netflix UI Clone", description: "A pixel-perfect recreation of the Netflix interface featuring dynamic movie cards.", imageUrl: "/images/Netflix-clone.png", liveUrl: "https://polite-choux-478650.netlify.app/signup", techStack: "HTML, CSS, JavaScript" },
    { id: 4, title: "Bakery Landing Page", description: "An elegant, warm landing page designed for a local bakery.", imageUrl: "/images/bakery.png", liveUrl: "https://bakery-website-lemon.vercel.app/", techStack: "HTML, CSS, JavaScript" },
    { id: 5, title: "E-Commerce Platform", description: "A full-stack shopping experience with cart functionality.", imageUrl: "/images/Samstore.png", liveUrl: "#", techStack: "React, .Net" }
  ];

  return (
    <main className="bg-[#F9F8F4] text-[#1C1C1C]">
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      <Hero />
      <About />
      <Projects projects={projects} />
      <Contact />
      <Footer />

      <AnimatePresence>
        {isResumeOpen && (
          <ResumeModal onClose={() => setIsResumeOpen(false)} />
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;