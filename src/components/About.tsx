import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const skills = [
  { name: "PHP / Laravel", level: 92, color: "from-emerald-500 to-cyan-400" },
  { name: "WordPress", level: 90, color: "from-emerald-500 to-cyan-400" },
  { name: "Shopify / Liquid", level: 88, color: "from-emerald-400 to-teal-400" },
  { name: "JavaScript / React", level: 85, color: "from-cyan-500 to-blue-400" },
  { name: "PowerBI / Analytics", level: 88, color: "from-emerald-500 to-cyan-400" },
  { name: "MySQL / APIs", level: 86, color: "from-teal-500 to-emerald-400" },
];

const techStack = [
  "PHP", "Laravel", "WordPress", "Shopify", "JavaScript", "React",
  "MySQL", "PowerBI", "Excel", "LookerStudio", "GraphQL", "AJAX",
  "jQuery", "HTML5", "CSS3", "REST API", "SCRUM", "Git",
];

const SkillBar = ({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="group"
  >
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-300 text-sm font-medium">{name}</span>
      <span className="text-emerald-400 text-sm font-bold">{level}%</span>
    </div>
    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
      <motion.div
        className={`h-full rounded-full bg-gradient-to-r ${color}`}
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </div>
  </motion.div>
);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="about" ref={sectionRef} className="relative py-28 overflow-hidden bg-[#0D1117]">
      {/* Parallax background layer */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-emerald-500/8 rounded-full blur-[100px] animate-glow-pulse" />
        <div className="absolute bottom-[10%] left-[5%] w-[280px] h-[280px] bg-cyan-500/6 rounded-full blur-[80px] animate-glow-pulse-delay" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-emerald-400 text-sm font-medium border border-emerald-500/25 bg-emerald-500/5 mb-5">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Crafting Digital{" "}
            <span className="gradient-text">Experiences</span>
          </h2>
          <div className="section-line mx-auto" />
        </motion.div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left – image */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Decorative frame */}
              <div className="absolute inset-[-12px] rounded-2xl border border-emerald-500/15 rotate-3" />
              <div className="absolute inset-[-6px] rounded-2xl border border-emerald-500/10 -rotate-2" />
              {/* Glow */}
              <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-[40px]" />
              <div className="relative z-10 rounded-2xl overflow-hidden border border-emerald-500/20 shadow-2xl">
                <img
                  src="/uploads/c6340ee8-1b05-4d88-b834-224eb1b4e773.png"
                  alt="Developer Illustration"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117]/50 via-transparent to-transparent" />
              </div>
              {/* Floating chip */}
              <motion.div
                className="absolute -bottom-5 -right-5 glass-card px-4 py-3 rounded-xl shadow-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-xs text-gray-400">Open to work</p>
                <p className="text-emerald-400 font-semibold text-sm">Freelance / Remote</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right – text + skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 text-lg leading-relaxed mb-5">
                I'm a passionate <span className="text-white font-medium">Full Stack Developer</span> with
                extensive experience in web development and data analysis. My expertise spans
                across modern web technologies, database management, and e-commerce solutions.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                With a strong foundation in both client-side and server-side development, I combine
                <span className="text-emerald-400"> technical excellence</span> with
                <span className="text-emerald-400"> project management skills</span> to deliver
                high-quality results that make a real business impact.
              </p>
              <a
                href="/Resume - P Borja - new.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/60 text-emerald-400 font-medium rounded-xl transition-all duration-300 hover:scale-105 mb-12"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download Resume
              </a>
            </motion.div>

            {/* Skill bars */}
            <div className="space-y-5">
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </div>

        {/* Tech stack tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-6">Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, borderColor: "rgba(16,185,129,0.6)" }}
                className="px-4 py-2 rounded-full text-sm text-gray-300 border border-gray-700/60 bg-gray-900/40 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
