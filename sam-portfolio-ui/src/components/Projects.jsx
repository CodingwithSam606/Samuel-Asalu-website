import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] } }
};

export default function Projects({ projects }) {
    return (
        <section id="portfolio" className="py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 mb-4">Portfolio</p>
                    <h2 className="text-5xl md:text-6xl font-bold text-[#1C1C1C] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Selected Work
                    </h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {projects.map((project) => (
                        <motion.a
                            key={project.id}
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            variants={cardVariants}
                            whileHover={{ y: -12 }}
                            transition={{ duration: 0.3 }}
                            className="group bg-[#F9F8F4] rounded-2xl overflow-hidden cursor-pointer block border border-stone-100"
                        >
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-8 border-t border-stone-100">
                                <h3 className="text-xl font-bold text-[#1C1C1C] mb-2 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>{project.title}</h3>
                                <p className="text-stone-500 text-sm mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.split(', ').map((tech, index) => (
                                        <span key={index} className="text-xs text-stone-400 font-medium uppercase tracking-wider">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                {/* GitHub CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-24 pt-16 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6"
                >
                    <div>
                        <h3 className="text-3xl font-bold text-[#1C1C1C] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Want to see more?</h3>
                        <p className="text-stone-500 text-base">Check out my GitHub for more practice projects and open-source code.</p>
                    </div>

                    <motion.a
                        href="https://github.com/CodingwithSam606"
                        target="_blank"
                        whileHover={{ scale: 1.05, backgroundColor: "#1C1C1C", color: "#F9F8F4" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 border-2 border-[#1C1C1C] text-[#1C1C1C] text-sm font-semibold uppercase tracking-widest rounded-full transition-all duration-300 flex items-center gap-3 shrink-0"
                    >
                        Visit GitHub
                        <span className="text-lg">→</span>
                    </motion.a>
                </motion.div>

            </div>
        </section>
    );
}