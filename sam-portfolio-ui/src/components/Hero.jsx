import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    // Notice: No more "spring". It's a slow, heavy slide up now.
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F9F8F4]">

            <motion.div
                className="relative z-10 max-w-6xl mx-auto px-6 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    variants={itemVariants}
                    className="inline-block mb-8 px-5 py-2 border border-emerald-700/30 rounded-full text-xs font-semibold uppercase tracking-[0.25em] text-emerald-800"
                >
                    Available for Work
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-6xl sm:text-7xl lg:text-[9rem] font-bold text-[#1C1C1C] tracking-tighter leading-[0.85] mb-10"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    Samuel<br />
                    <span className="text-stone-400">Asalu</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg sm:text-xl text-stone-500 max-w-2xl mx-auto mb-14 font-light leading-relaxed"
                >
                    A junior full-stack developer crafting clean, performant, and user-centric digital experiences.
                </motion.p>

                {/* Premium Ink Buttons */}
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
                        href="https://github.com/CodingwithSam606"
                        target="_blank"
                        whileHover={{ scale: 1.05, backgroundColor: "#1C1C1C", color: "#F9F8F4" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 border-2 border-[#1C1C1C] text-[#1C1C1C] text-sm font-semibold uppercase tracking-widest rounded-full transition-all duration-300"
                    >
                        GitHub
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
}