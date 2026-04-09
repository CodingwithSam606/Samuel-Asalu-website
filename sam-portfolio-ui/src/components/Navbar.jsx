import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ onOpenResume }) { // <--- Accept prop
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
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? "bg-[#F9F8F4]/80 backdrop-blur-xl border-b border-stone-200/50 shadow-sm" : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                    <a href="#" className="text-2xl font-bold text-[#1C1C1C] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Sam<span className="text-emerald-700">.</span>
                    </a>

                    <div className="hidden md:flex items-center gap-10">
                        <a href="#about" className="text-sm text-stone-500 hover:text-[#1C1C1C] transition-colors duration-300 uppercase tracking-widest font-medium">About</a>
                        <a href="#portfolio" className="text-sm text-stone-500 hover:text-[#1C1C1C] transition-colors duration-300 uppercase tracking-widest font-medium">Work</a>
                        <a href="#contact" className="text-sm text-stone-500 hover:text-[#1C1C1C] transition-colors duration-300 uppercase tracking-widest font-medium">Contact</a>

                        {/* Attached the prop to this button */}
                        <motion.button
                            onClick={onOpenResume}
                            whileHover={{ scale: 1.05, backgroundColor: "#1C1C1C", color: "#F9F8F4" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2.5 bg-[#1C1C1C] text-[#F9F8F4] text-xs font-semibold uppercase tracking-widest rounded-full transition-all duration-300 cursor-pointer"
                        >
                            Resume
                        </motion.button>
                    </div>

                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-[#1C1C1C] focus:outline-none">
                        <div className="w-6 flex flex-col gap-1.5">
                            <motion.span animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="w-full h-0.5 bg-[#1C1C1C] block" />
                            <motion.span animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-full h-0.5 bg-[#1C1C1C] block" />
                            <motion.span animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="w-full h-0.5 bg-[#1C1C1C] block" />
                        </div>
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="fixed top-0 left-0 right-0 z-40 bg-[#F9F8F4]/95 backdrop-blur-xl pt-24 px-6 md:hidden overflow-hidden">
                        <div className="flex flex-col gap-6 pb-10">
                            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-[#1C1C1C] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>About</a>
                            <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-[#1C1C1C] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Work</a>
                            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-[#1C1C1C] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Contact</a>
                            <div className="pt-4 border-t border-stone-200 mt-2">
                                <button onClick={() => { setIsMobileMenuOpen(false); onOpenResume(); }} className="text-sm text-stone-500 uppercase tracking-widest hover:text-[#1C1C1C] transition-colors cursor-pointer">Download Resume</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}