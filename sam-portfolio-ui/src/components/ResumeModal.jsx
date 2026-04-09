import { motion } from "framer-motion";

export default function ResumeModal({ onClose }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={onClose} // Clicking outside closes it
        >
            <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white w-full max-w-4xl h-[85vh] flex flex-col rounded-2xl overflow-hidden shadow-2xl relative"
                onClick={(e) => e.stopPropagation()} // Prevents clicks inside from closing it
            >
                {/* Header / Close Button */}
                <div className="flex items-center justify-between p-6 border-b border-stone-100">
                    <h3 className="text-lg font-bold text-[#1C1C1C] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Curriculum Vitae</h3>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-100 text-stone-400 hover:text-[#1C1C1C] transition-colors text-2xl"
                    >
                        ×
                    </button>
                </div>

                {/* PDF Preview Area */}
                <div className="flex-1 bg-stone-50 p-4 md:p-6 overflow-hidden">
                    {/* Make sure your PDF is in public/files/cv.pdf */}
                    <iframe
                        src="/files/cv.pdf#toolbar=0&navpanes=0"
                        className="w-full h-full rounded-lg border border-stone-200 bg-white"
                        title="Samuel Asalu CV"
                    ></iframe>
                </div>

                {/* Footer Download Button */}
                <div className="p-6 bg-[#F9F8F4] border-t border-stone-100 flex justify-center">
                    <motion.a
                        href="/files/cv.pdf"
                        download="Samuel_Asalu_CV.pdf"
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