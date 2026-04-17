import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ isDark, toggleTheme, onOpenResume }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled
                    ? isDark ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 shadow-sm" : "bg-[#F9F8F4]/80 backdrop-blur-xl border-b border-stone-200/50 shadow-sm"
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                    <a href="#" className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#1C1C1C]'}`} style={{ fontFamily: "'Playfair Display', serif" }}>
                        Sam<span className="text-emerald-500">.</span>
                    </a>

                    <div className="hidden md:flex items-center gap-10">
                        <a href="#about" className={`text-sm font-medium uppercase tracking-widest transition-colors duration-300 ${isDark ? 'text-neutral-400 hover:text-white' : 'text-stone-500 hover:text-[#1C1C1C]'}`}>About</a>
                        <a href="#portfolio" className={`text-sm font-medium uppercase tracking-widest transition-colors duration-300 ${isDark ? 'text-neutral-400 hover:text-white' : 'text-stone-500 hover:text-[#1C1C1C]'}`}>Work</a>
                        <a href="#contact" className={`text-sm font-medium uppercase tracking-widest transition-colors duration-300 ${isDark ? 'text-neutral-400 hover:text-white' : 'text-stone-500 hover:text-[#1C1C1C]'}`}>Contact</a>

                        {/* THE THEME TOGGLE BUTTON */}
                        <motion.button
                            onClick={toggleTheme}
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-300 cursor-pointer ${isDark ? 'border-white/10 text-yellow-300' : 'border-stone-200 text-stone-600'}`}
                        >
                            <AnimatePresence mode="wait">
                                {isDark ? (
                                    <motion.svg
                                        key="sun"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                        />
                                    </motion.svg>
                                ) : (
                                    <motion.svg
                                        key="moon"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                        />
                                    </motion.svg>
                                )}
                            </AnimatePresence>
                        </motion.button>

                        <motion.button
                            onClick={onOpenResume}
                            whileHover={{ scale: 1.05, backgroundColor: isDark ? "#ffffff" : "#1C1C1C", color: isDark ? "#000000" : "#F9F8F4" }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-full transition-all duration-300 cursor-pointer ${isDark ? 'bg-white text-black' : 'bg-[#1C1C1C] text-[#F9F8F4]'}`}
                        >
                            Resume
                        </motion.button>
                    </div>

                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden focus:outline-none">
                        <div className="w-6 flex flex-col gap-1.5">
                            <motion.span animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className={`w-full h-0.5 block transition-colors ${isDark ? 'bg-white' : 'bg-[#1C1C1C]'}`} />
                            <motion.span animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} className={`w-full h-0.5 block transition-colors ${isDark ? 'bg-white' : 'bg-[#1C1C1C]'}`} />
                            <motion.span animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className={`w-full h-0.5 block transition-colors ${isDark ? 'bg-white' : 'bg-[#1C1C1C]'}`} />
                        </div>
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-xl pt-24 px-6 md:hidden overflow-hidden ${isDark ? 'bg-[#050505]/95' : 'bg-[#F9F8F4]/95'}`}>
                        <div className="flex flex-col gap-6 pb-10">
                            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className={`text-3xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#1C1C1C]'}`} style={{ fontFamily: "'Playfair Display', serif" }}>About</a>
                            <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className={`text-3xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#1C1C1C]'}`} style={{ fontFamily: "'Playfair Display', serif" }}>Work</a>
                            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className={`text-3xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#1C1C1C]'}`} style={{ fontFamily: "'Playfair Display', serif" }}>Contact</a>
                            <div className="pt-4 border-t border-stone-200 mt-2">
                                <button onClick={() => { setIsMobileMenuOpen(false); onOpenResume(); }} className={`text-sm uppercase tracking-widest cursor-pointer ${isDark ? 'text-neutral-400 hover:text-white' : 'text-stone-500 hover:text-[#1C1C1C]'}`}>Download Resume</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}