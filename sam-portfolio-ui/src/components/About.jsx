import { motion } from "framer-motion";

const skills = [
    "HTML5", "CSS3", "JavaScript", "React", ".NET",
    "Python", "Tailwind CSS", "Git", "Machine Learning"
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 }
    }
};

const pillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 150, damping: 15 }
    }
};

export default function About() {
    return (
        <section id="about" className="min-h-screen flex items-center py-32 px-6 bg-black">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* LEFT: The Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-600 mb-4">About Me</p>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                        A bit about my<br />
                        <span className="text-neutral-500">background.</span>
                    </h2>
                    <p className="text-neutral-400 text-lg leading-relaxed mb-10 font-light">
                        I'm Samuel Asalu, a passionate Junior Full-Stack Developer based in Lagos, Nigeria. I love creating modern, responsive, and user-friendly digital experiences that bring ideas to life through clean, creative code.
                    </p>

                    {/* Status Indicators */}
                    <div className="flex flex-col gap-3 text-sm text-neutral-500 font-medium">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span>Available for freelance work</span>
                        </div>
                        <div className="flex items-center gap-3 pl-1">
                            <span className="text-neutral-700">•</span>
                            <span>Based in Lagos, Nigeria</span>
                        </div>
                        <div className="flex items-center gap-3 pl-1">
                            <span className="text-neutral-700">•</span>
                            <span>Open to remote opportunities</span>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT: The Floating Skills */}
                <motion.div
                    className="flex flex-wrap gap-4 justify-center lg:justify-end"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={pillVariants}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: "#ffffff",
                                color: "#000000",
                                transition: { duration: 0.2 }
                            }}
                            className="px-6 py-3 border border-white/10 rounded-full text-neutral-400 text-sm font-medium cursor-default backdrop-blur-sm bg-white/5"
                        >
                            {skill}
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}