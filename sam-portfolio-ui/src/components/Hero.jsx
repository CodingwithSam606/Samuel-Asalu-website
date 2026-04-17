import { motion } from "framer-motion";

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
const itemVariants = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } } };

export default function Hero({ isDark }) {
    return (
        <section className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#050505]' : 'bg-[#F9F8F4]'}`}>

            <motion.div className="relative z-10 max-w-6xl mx-auto px-6 text-center" variants={containerVariants} initial="hidden" animate="visible">
                <motion.div
                    variants={itemVariants}
                    className={`inline-block mb-8 px-5 py-2 border rounded-full text-xs font-semibold uppercase tracking-[0.25em] transition-colors duration-500 ${isDark ? 'border-emerald-500/30 text-emerald-400' : 'border-emerald-700/30 text-emerald-800'}`}
                >
                    Available for Work
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className={`text-6xl sm:text-7xl lg:text-[9rem] font-bold tracking-tighter leading-[0.85] mb-10 transition-colors duration-500 ${isDark ? 'text-white' : 'text-[#1C1C1C]'}`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    Samuel<br />
                    <span className={isDark ? 'text-neutral-600' : 'text-stone-400'}>Asalu</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className={`text-lg sm:text-xl max-w-2xl mx-auto mb-14 font-light leading-relaxed transition-colors duration-500 ${isDark ? 'text-neutral-500' : 'text-stone-500'}`}
                >
                    A junior full-stack developer crafting clean, performant, and user-centric digital experiences.
                </motion.p>

                <motion.div variants={itemVariants} className="flex gap-4 justify-center">
                    <motion.a
                        href="#portfolio"
                        whileHover={{ scale: 1.05, backgroundColor: "#065F46" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 bg-emerald-700 text-white text-sm font-semibold uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg shadow-emerald-900/20"
                    >
                        View Work
                    </motion.a>

                    <motion.a
                        href="https://github.com/CodingwithSam606" target="_blank"
                        whileHover={{ scale: 1.05, backgroundColor: isDark ? "#ffffff" : "#1C1C1C", color: isDark ? "#000000" : "#F9F8F4" }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-10 py-4 border-2 text-sm font-semibold uppercase tracking-widest rounded-full transition-all duration-300 ${isDark ? 'border-white/20 text-white' : 'border-[#1C1C1C] text-[#1C1C1C]'}`}
                    >
                        GitHub
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
}