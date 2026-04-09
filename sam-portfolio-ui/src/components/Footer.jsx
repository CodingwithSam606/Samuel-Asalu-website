import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="py-10 px-6 bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-neutral-600 text-sm">
                    © {new Date().getFullYear()} Samuel Asalu. All rights reserved.
                </p>

                {/* Back to top button */}
                <motion.a
                    href="#"
                    whileHover={{ y: -3 }}
                    className="text-neutral-600 text-sm uppercase tracking-widest hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                    Back to top
                    <span>↑</span>
                </motion.a>
            </div>
        </footer>
    );
}