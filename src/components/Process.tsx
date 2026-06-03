import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We align on your goals, target audience, and technical requirements. I ask the right questions, study your competition, and deliver a clear scope before any code is written.",
    detail: "Kick-off call → Requirements doc → Project roadmap",
  },
  {
    number: "02",
    title: "Design & Architecture",
    description:
      "I plan the system architecture and craft wireframes or prototypes. Every decision is deliberate — technology choices, database schemas, UI patterns — so we build on solid ground.",
    detail: "Tech stack selection → Wireframes → Architecture diagram",
  },
  {
    number: "03",
    title: "Build & Iterate",
    description:
      "Development happens in focused sprints with demos every step of the way. You stay in the loop, give feedback, and we adapt fast. No surprises at the finish line.",
    detail: "Weekly demos → Version control → Agile sprints",
  },
  {
    number: "04",
    title: "Launch & Sustain",
    description:
      "After rigorous QA and testing, I handle deployment and go-live. Then I stick around — monitoring performance, fixing issues, and supporting growth long after launch.",
    detail: "QA testing → Deployment → Ongoing support",
  },
];

const Process = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="process" ref={sectionRef} className="relative py-28 overflow-hidden bg-[#0A0F16]">
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[5%] w-[500px] h-[300px] bg-emerald-500/4 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[250px] bg-gray-500/3 rounded-full blur-[100px]" />
        <div className="absolute inset-0 grid-pattern opacity-15" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-emerald-400 text-sm font-medium border border-emerald-500/25 bg-emerald-500/5 mb-6">
              How I Work
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.05] mb-5">
              A process built<br />
              <span className="gradient-text">for results.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-lg">
              Four deliberate steps. No guesswork. No bloated timelines.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true, margin: "-60px" }}
                className="group relative grid grid-cols-[auto_1fr] md:grid-cols-[120px_1fr_auto] gap-x-8 gap-y-3 py-10 border-b border-white/6 last:border-0 items-start cursor-default"
              >
                {/* Step number */}
                <div className="flex items-start pt-1">
                  <span className="text-[11px] font-black tracking-[0.2em] text-gray-600 group-hover:text-emerald-500 transition-colors duration-300 uppercase">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-base max-w-xl">
                    {step.description}
                  </p>
                  <p className="mt-4 text-xs text-gray-600 font-mono tracking-wider group-hover:text-gray-400 transition-colors duration-300">
                    {step.detail}
                  </p>
                </div>

                {/* Large watermark number — right side (desktop only) */}
                <div className="hidden md:flex items-center justify-end self-center">
                  <span className="text-[80px] font-black text-white/3 group-hover:text-white/6 transition-all duration-500 leading-none select-none tabular-nums">
                    {step.number}
                  </span>
                </div>

                {/* Emerald left accent line on hover */}
                <div className="absolute left-0 top-10 bottom-10 w-[2px] bg-emerald-500 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-400 ease-out" />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-bold rounded-xl transition-all duration-300 hover:bg-emerald-400 hover:text-white btn-shine hover:scale-105 text-sm tracking-wide"
            >
              Start a Project
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <p className="text-gray-600 text-sm">
              Typical project kickoff within <span className="text-gray-300 font-semibold">48 hours</span> of first contact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
