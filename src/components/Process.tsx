import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Planning",
    description:
      "We start with a deep-dive conversation to understand your goals, audience, and technical requirements. I analyze your needs and craft a clear roadmap.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    glow: "shadow-emerald-500/20",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Design & Architecture",
    description:
      "I design the system architecture and UI/UX wireframes, ensuring scalability and great user experience before writing a single line of code.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    glow: "shadow-cyan-500/20",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development & Iteration",
    description:
      "Using agile methodology, I build in rapid iterations with regular check-ins, so you always know progress and can provide feedback along the way.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    glow: "shadow-blue-500/20",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "After thorough testing and QA, I deploy your project and provide post-launch support to make sure everything runs smoothly.",
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/30",
    glow: "shadow-teal-500/20",
  },
];

const Process = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const lineProgress = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section id="process" ref={sectionRef} className="relative py-28 overflow-hidden bg-[#0A0F16]">
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[320px] h-[320px] bg-emerald-500/5 rounded-full blur-[100px] animate-glow-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[280px] h-[280px] bg-cyan-500/5 rounded-full blur-[80px] animate-glow-pulse-delay" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-emerald-400 text-sm font-medium border border-emerald-500/25 bg-emerald-500/5 mb-5"
          >
            How I Work
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="gradient-text">Process</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A proven 4-step process that delivers results — transparent, collaborative, and on schedule.
          </p>
          <div className="section-line mx-auto mt-6" />
        </motion.div>

        {/* Desktop: Horizontal timeline | Mobile: vertical */}
        <div className="hidden md:block relative mb-10">
          {/* Connector line (background) */}
          <div className="absolute top-[52px] left-[12.5%] right-[12.5%] h-[2px] bg-gray-800" />
          {/* Animated progress line */}
          <motion.div
            className="absolute top-[52px] left-[12.5%] h-[2px] bg-gradient-to-r from-emerald-500 via-cyan-400 to-teal-400"
            style={{ width: lineProgress }}
          />

          <div className="grid grid-cols-4 gap-6 relative">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: i * 0.15, type: "spring", stiffness: 100, damping: 15 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`relative z-10 w-[52px] h-[52px] rounded-full ${step.bg} border-2 ${step.border} flex items-center justify-center mb-6 shadow-lg ${step.glow}`}
                  >
                    <Icon size={22} className={step.color} />
                  </motion.div>

                  {/* Number */}
                  <span className={`text-4xl font-black ${step.color} opacity-20 leading-none mb-2`}>
                    {step.number}
                  </span>
                  <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical cards */}
        <div className="md:hidden space-y-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -50, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                className={`glass-card rounded-2xl p-6 border ${step.border} relative overflow-hidden`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${step.bg} flex items-center justify-center`}>
                    <Icon size={20} className={step.color} />
                  </div>
                  <div>
                    <span className={`text-sm font-bold ${step.color} opacity-60`}>{step.number}</span>
                    <h3 className="text-white font-semibold text-lg mt-0.5 mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {/* Step number watermark */}
                <span className={`absolute -bottom-2 -right-2 text-7xl font-black ${step.color} opacity-5`}>
                  {step.number}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg mb-6">
            Ready to build something great together?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 btn-shine hover:scale-105 shadow-lg shadow-emerald-500/25"
          >
            Let's Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
