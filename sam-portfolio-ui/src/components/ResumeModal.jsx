import { motion } from "framer-motion";

export default function ResumeModal({ onClose, isDark }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4 md:p-8"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className={`w-full max-w-4xl h-[85vh] flex flex-col rounded-2xl overflow-hidden shadow-2xl relative border ${isDark ? 'bg-[#111] border-white/5' : 'bg-white border-stone-100'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className={`flex items-center justify-between p-6 border-b ${isDark ? 'border-white/5' : 'border-stone-100'}`}>
                    <h3 className={`text-lg font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#1C1C1C]'}`} style={{ fontFamily: "'Playfair Display', serif" }}>Curriculum Vitae</h3>
                    <button
                        onClick={onClose}
                        className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors text-2xl cursor-pointer ${isDark ? 'hover:bg-white/5 text-neutral-400 hover:text-white' : 'hover:bg-stone-100 text-stone-400 hover:text-[#1C1C1C]'}`}
                    >
                        ×
                    </button>
                </div>

                {/* PDF Area */}
                <div className={`flex-1 p-4 md:p-6 overflow-hidden ${isDark ? 'bg-[#0A0A0A]' : 'bg-stone-50'}`}>
                    <iframe
                        src="/files/cv.pdf#toolbar=0&navpanes=0"
                        className={`w-full h-full rounded-lg border ${isDark ? 'border-white/5' : 'border-stone-200 bg-white'}`}
                        title="Samuel Asalu CV"
                    ></iframe>
                </div>

                {/* Footer */}
                <div className={`p-6 border-t flex justify-center ${isDark ? 'bg-[#111] border-white/5' : 'bg-[#F9F8F4] border-stone-100'}`}>
                    <motion.a
                        href="/files/cv.pdf"
                        download="cv.pdf"
                        whileHover={{ scale: 1.05, backgroundColor: "#065F46" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 bg-emerald-700 text-white text-sm font-semibold uppercase tracking-widest rounded-full shadow-lg shadow-emerald-900/20 transition-all duration-300"
                    >
                        Download PDF
                    </motion.a>
                </div>
            </motion.div>
        </motion.div>
    );
}