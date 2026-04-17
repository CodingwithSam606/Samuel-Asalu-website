import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose, isDark }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4 sm:p-8"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className={`w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl overflow-hidden shadow-2xl relative border ${isDark ? 'bg-[#111] border-white/5' : 'bg-white border-stone-100'}`}
                onClick={(e) => e.stopPropagation()}
            >

                <div className="relative h-64 sm:h-80 flex-shrink-0">
                    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-[#111] via-transparent to-transparent' : 'from-white via-transparent to-transparent'}`}></div>
                    <button
                        onClick={onClose}
                        className={`absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-stone-400 hover:text-[#1C1C1C] transition-colors text-xl shadow-sm cursor-pointer ${isDark ? '!bg-black/50 !text-neutral-400 hover:!text-white' : ''}`}
                    >×</button>
                </div>

                <div className={`flex-1 overflow-y-auto px-8 sm:px-10 pb-8 -mt-10 relative z-10 ${isDark ? 'bg-[#0A0A0A]' : 'bg-stone-50'}`}>

                    <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight mb-3 transition-colors duration-500 ${isDark ? 'text-white' : 'text-[#1C1C1C]'}`} style={{ fontFamily: "'Playfair Display', serif" }}>{project.title}</h2>

                    <div className="flex flex-wrap gap-2 mb-10">
                        {project.techStack.split(', ').map((tech, index) => (
                            <span key={index} className={`px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full border transition-colors duration-500 ${isDark ? 'bg-white/5 text-emerald-400 border-white/10' : 'bg-white text-emerald-800 border-stone-100'}`}>{tech}</span>
                        ))}
                    </div>

                    <div className={`space-y-8 ml-4 pl-8 border-l-2 ${isDark ? 'border-stone-700' : 'border-stone-200'}`}>
                        <div>
                            <h3 className={`text-xs font-bold uppercase tracking-[0.2em] mb-2 transition-colors duration-500 ${isDark ? 'text-stone-500' : 'text-stone-400'}`}>The Problem</h3>
                            <p className={`text-[15px] leading-relaxed transition-colors duration-500 ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>{project.problem}</p>
                        </div>
                        <div>
                            <h3 className={`text-xs font-bold uppercase tracking-[0.2em] mb-2 transition-colors duration-500 ${isDark ? 'text-stone-500' : 'text-stone-400'}`}>My Solution</h3>
                            <p className={`text-[15px] leading-relaxed transition-colors duration-500 ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>{project.solution}</p>
                        </div>
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-500 mb-2 flex items-center gap-2">
                                <span className={`w-5 h-px ${isDark ? 'bg-emerald-500' : 'bg-emerald-300'}`}></span>The Result
                            </h3>
                            <p className={`text-[15px] leading-relaxed font-medium pl-7 transition-colors duration-500 ${isDark ? 'text-neutral-200' : 'text-stone-800'}`}>{project.result}</p>
                        </div>
                    </div>
                </div>

                <div className={`flex-shrink-0 px-8 sm:px-10 py-6 border-t flex flex-col sm:flex-row gap-3 transition-colors duration-500 ${isDark ? 'bg-[#111] border-white/5' : 'bg-white border-stone-100'}`}>
                    <motion.a
                        href={project.liveUrl} target="_blank"
                        whileHover={{ scale: 1.02, backgroundColor: "#065F46" }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 py-4 bg-emerald-700 text-white text-sm font-semibold uppercase tracking-widest rounded-xl shadow-lg shadow-emerald-900/10 transition-all duration-300 text-center"
                    >View Live Project</motion.a>
                    <motion.button
                        onClick={onClose}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex-1 py-4 border-2 text-sm font-semibold uppercase tracking-widest rounded-xl transition-all duration-300 cursor-pointer ${isDark ? 'border-white/10 text-white hover:bg-white/5' : 'border-stone-200 text-[#1C1C1C] hover:bg-stone-50'}`}
                    >Go Back</motion.button>
                </div>

            </motion.div>
        </motion.div>
    );
}