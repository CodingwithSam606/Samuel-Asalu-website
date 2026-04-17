import { useState, useEffect, lazy, Suspense } from "react"; // <-- Added lazy & Suspense
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// LAZY LOADING: Don't download these until the user actually needs them!
const ResumeModal = lazy(() => import("./components/ResumeModal"));
const ProjectModal = lazy(() => import("./components/ProjectModal"));

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setIsDark(true);
  }, []);

  const toggleTheme = () => {
    const newVal = !isDark;
    setIsDark(newVal);
    localStorage.setItem("theme", newVal ? "dark" : "light");
  };

  const projects = [
    { id: 1, title: "Premium Portfolio", description: "A modern, high-end portfolio built with vanilla HTML, CSS, and JavaScript.", imageUrl: "/images/Portfolio-template.png", liveUrl: "https://my-portfolio-ten-ruddy-52.vercel.app/", techStack: "HTML, CSS, JavaScript", problem: "Most junior portfolios look like generic templates. I needed a way to instantly prove my eye for premium UI/UX design.", solution: "I hand-coded a custom CSS system using variables, complex clip-paths, and heavy micro-interactions.", result: "A fully responsive website that looks like a premium agency build. It landed me multiple freelance inquiries." },
    { id: 2, title: "Fake News Detector", description: "Machine learning application that analyzes text to determine the probability of misleading information.", imageUrl: "/images/Fake-news-detector.png", liveUrl: "https://github.com/CodingwithSam606/fake-news-detection", techStack: "Python, ML, Flask", problem: "Readers struggle to distinguish factual reporting from fabricated news. Manual fact-checking is too slow.", solution: "Trained a Natural Language Processing (NLP) model using Python and Scikit-Learn, wrapped in a Flask API.", result: "Achieved an 85% accuracy rate on testing data and successfully flags clickbait patterns." },
    { id: 3, title: "Netflix UI Clone", description: "A pixel-perfect recreation of the Netflix interface featuring dynamic movie cards.", imageUrl: "/images/Netflix-clone.png", liveUrl: "https://polite-choux-478650.netlify.app/signup", techStack: "HTML, CSS, JavaScript", problem: "Standard tutorials don't push CSS Grid and hover state animations far enough.", solution: "Reverse-engineered the Netflix homepage, focusing on absolute positioning and CSS hover transformations.", result: "A pixel-perfect UI clone that responds flawlessly to screen size changes." },
    { id: 4, title: "Bakery Landing Page", description: "An elegant, warm landing page designed for a local bakery.", imageUrl: "/images/bakery.png", liveUrl: "https://bakery-website-lemon.vercel.app/", techStack: "HTML, CSS, JavaScript", problem: "Local businesses rely on generic social media templates that don't reflect their product quality.", solution: "Designed an editorial-style landing page using elegant serif typography and sticky navigation.", result: "A responsive template the business owner could immediately use to elevate their digital presence." },
    { id: 5, title: "E-Commerce Platform", description: "A full-stack shopping experience with cart functionality.", imageUrl: "/images/Samstore.png", liveUrl: "#", techStack: "React, .Net", problem: "Building state management for a shopping cart across multiple pages can easily become tangled.", solution: "Utilized React Context API to manage global cart state and a custom hook for quantities.", result: "A seamless flow where cart data persists across views and prices calculate dynamically." }
  ];

  return (
    <main className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-[#050505] text-white' : 'bg-[#F9F8F4] text-[#1C1C1C]'}`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} onOpenResume={() => setIsResumeOpen(true)} />
      <Hero isDark={isDark} />
      <About isDark={isDark} />
      <Projects projects={projects} setSelectedProject={setSelectedProject} isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />

      {/* THE PERFORMANCE WRAPPER */}
      <Suspense fallback={null}>
        <AnimatePresence>
          {isResumeOpen && <ResumeModal isDark={isDark} onClose={() => setIsResumeOpen(false)} />}
          {selectedProject && <ProjectModal project={selectedProject} isDark={isDark} onClose={() => setSelectedProject(null)} />}
        </AnimatePresence>
      </Suspense>
    </main>
  );
}

export default App;