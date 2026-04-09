import { useState } from "react"; // <-- Added this
import { motion, AnimatePresence } from "framer-motion"; // <-- Added AnimatePresence

export default function Contact() {
    const [status, setStatus] = useState("idle"); // <-- Added this state

    // <-- Added this function to handle the API call
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xeovjynz", {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="min-h-screen flex items-center py-32 px-6 bg-[#050505]">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                {/* LEFT: Text & Info (UNTOUTCHED) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-600 mb-4">Get in Touch</p>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Let's build<br />
                        <span className="text-neutral-500">something great.</span>
                    </h2>
                    <p className="text-neutral-400 text-lg leading-relaxed mb-12 font-light max-w-md">
                        Have a project in mind, a question, or just want to connect? My inbox is always open.
                    </p>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-4 text-neutral-500 mb-12">
                        <a href="mailto:samuelasalu@outlook.com" className="hover:text-white transition-colors duration-300 text-lg">
                            samuelasalu@outlook.com
                        </a>
                        <p className="text-base">Lagos, Nigeria</p>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-6">
                        <motion.a
                            href="https://github.com/CodingwithSam606" target="_blank"
                            whileHover={{ scale: 1.1, color: "#ffffff" }}
                            className="text-neutral-600 text-sm uppercase tracking-widest transition-colors"
                        >
                            GitHub
                        </motion.a>
                        <span className="text-neutral-800">•</span>
                        <motion.a
                            href="#" target="_blank"
                            whileHover={{ scale: 1.1, color: "#ffffff" }}
                            className="text-neutral-600 text-sm uppercase tracking-widest transition-colors"
                        >
                            LinkedIn
                        </motion.a>
                    </div>
                </motion.div>

                {/* RIGHT: The Form (ONLY THE FORM PARTS WERE CHANGED) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="flex flex-col gap-6 p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm min-h-[420px] justify-center">

                        <AnimatePresence mode="wait">
                            {/* 1. THE FORM (Shows when idle or sending) */}
                            {status !== "success" ? (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    onSubmit={handleSubmit} // <-- Changed from e.preventDefault()
                                    className="flex flex-col gap-6"
                                >
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-medium uppercase tracking-widest text-neutral-600">Name</label>
                                        {/* Added name="name" */}
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full bg-transparent border-b border-white/10 py-3 text-white text-lg outline-none focus:border-white/40 transition-colors duration-300 placeholder:text-neutral-800"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-medium uppercase tracking-widest text-neutral-600">Email</label>
                                        {/* Added name="email" */}
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full bg-transparent border-b border-white/10 py-3 text-white text-lg outline-none focus:border-white/40 transition-colors duration-300 placeholder:text-neutral-800"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-medium uppercase tracking-widest text-neutral-600">Message</label>
                                        {/* Added name="message" */}
                                        <textarea
                                            name="message"
                                            required
                                            rows={4}
                                            className="w-full bg-transparent border-b border-white/10 py-3 text-white text-lg outline-none focus:border-white/40 transition-colors duration-300 resize-none placeholder:text-neutral-800"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>

                                    {/* Inline Error Message */}
                                    {status === "error" && (
                                        <p className="text-red-500 text-sm text-center">Oops! Something went wrong. Please try again.</p>
                                    )}

                                    {/* Submit Button - Added disabled state */}
                                    <motion.button
                                        type="submit"
                                        disabled={status === "sending"}
                                        whileHover={{ scale: status === "sending" ? 1 : 1.02, backgroundColor: "#e5e5e5" }}
                                        whileTap={{ scale: 0.98 }}
                                        className="mt-4 w-full py-4 bg-white text-black font-bold text-sm uppercase tracking-wider rounded-xl transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status === "sending" ? "Sending..." : "Send Message"}
                                    </motion.button>
                                </motion.form>
                            ) : (
                                /* 2. THE SUCCESS SCREEN (Styled to match your dark theme) */
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="text-center py-10"
                                >
                                    <div className="w-20 h-20 mx-auto mb-6 border border-white/10 rounded-full flex items-center justify-center">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Message Sent!</h3>
                                    <p className="text-neutral-500 mb-8">Thank you for reaching out. I'll get back to you soon.</p>

                                    <motion.button
                                        onClick={() => setStatus("idle")}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-3 border border-white/20 text-white text-sm font-semibold uppercase tracking-widest rounded-full transition-all duration-300 cursor-pointer hover:bg-white/5"
                                    >
                                        Send Another
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}