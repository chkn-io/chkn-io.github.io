import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const skills = [
  { name: "Shopify Plus / Liquid", level: 100, color: "from-emerald-500 to-emerald-400", accent: "text-emerald-400" },
  { name: "PHP / Laravel", level: 100, color: "from-emerald-500 to-emerald-400", accent: "text-emerald-400" },
  { name: "React / JavaScript", level: 100, color: "from-emerald-500 to-emerald-400", accent: "text-emerald-400" },
  { name: "WordPress", level: 100, color: "from-emerald-500 to-emerald-400", accent: "text-emerald-400" },
  { name: "PowerBI / Analytics", level: 100, color: "from-emerald-500 to-emerald-400", accent: "text-emerald-400" },
  { name: "MySQL / REST APIs", level: 100, color: "from-emerald-500 to-emerald-400", accent: "text-emerald-400" },
];

const row1 = [
  { label: "Shopify Plus", color: "border-white/12 text-white/55 bg-white/4" },
  { label: "PHP", color: "border-white/12 text-white/55 bg-white/4" },
  { label: "Laravel", color: "border-white/12 text-white/55 bg-white/4" },
  { label: "React", color: "border-white/12 text-white/55 bg-white/4" },
  { label: "JavaScript", color: "border-white/12 text-white/55 bg-white/4" },
  { label: "TypeScript", color: "border-white/12 text-white/55 bg-white/4" },
  { label: "WordPress", color: "border-white/12 text-white/55 bg-white/4" },
  { label: "Liquid", color: "border-white/12 text-white/55 bg-white/4" },
  { label: "MySQL", color: "border-white/12 text-white/55 bg-white/4" },
  { label: "GraphQL", color: "border-white/12 text-white/55 bg-white/4" },
];

const row2 = [
  { label: "PowerBI", color: "border-white/12 text-white/55 bg-white/4" },
  { label: "LookerStudio", color: "border-white/12 text-white/55 bg-white/4" },
  { label: "REST API", color: "border-white/12 text-white/55 bg-white/4" },
  { label: "AJAX", color: "border-white/12 text-white/55 bg-white/4" },
  { label: "jQuery", color: "border-white/12 text-white/55 bg-white/4" },
  { label: "HTML5", color: "border-white/12 text-white/55 bg-white/4" },
  { label: "CSS3", color: "border-white/12 text-white/55 bg-white/4" },
  { label: "Git", color: "border-white/12 text-white/55 bg-white/4" },
  { label: "Excel", color: "border-white/12 text-white/55 bg-white/4" },
  { label: "SCRUM / Agile", color: "border-white/12 text-white/55 bg-white/4" },
];

const SkillBar = ({ name, level, color, accent, delay }: { name: string; level: number; color: string; accent: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -50, rotateX: 15 }}
    whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
    transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    viewport={{ once: true }}
    className="group"
  >
    <div className="flex justify-between items-center mb-3">
      <span className="text-gray-200 text-sm font-semibold tracking-wide">{name}</span>
      <motion.span
        className={`text-sm font-black ${accent}`}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.6, type: "spring", stiffness: 300 }}
        viewport={{ once: true }}
      >
        {level}%
      </motion.span>
    </div>
    <div className="h-2.5 bg-gray-800/80 rounded-full overflow-hidden relative">
      {/* Track shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent animate-shimmer rounded-full" />
      <motion.div
        className={`h-full rounded-full bg-gradient-to-r ${color} relative overflow-hidden`}
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1.5, delay: delay + 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true }}
      >
        {/* Shimmer on fill */}
        <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </motion.div>
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
        <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[100px] animate-glow-pulse" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-emerald-400 text-sm font-medium border border-emerald-500/25 bg-emerald-500/5 mb-5"
          >
            About Me
          </motion.span>
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
              <div className="absolute inset-[-12px] rounded-2xl border border-white/8 rotate-3" />
              <div className="absolute inset-[-6px] rounded-2xl border border-white/5 -rotate-2" />
              {/* Glow */}
              <div className="absolute inset-0 bg-white/3 rounded-2xl blur-[40px]" />
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
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

        {/* Tech stack marquee */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <p className="text-gray-500 text-xs uppercase tracking-[0.25em] mb-8 text-center font-semibold">Tech Stack</p>

          {/* Row 1 — scrolls left */}
          <div className="relative overflow-hidden marquee-container mb-4">
            {/* Edge fades */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0D1117] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0D1117] to-transparent z-10 pointer-events-none" />
            <div className="flex gap-3 animate-marquee whitespace-nowrap w-max">
              {[...row1, ...row1].map((tech, i) => (
                <span
                  key={i}
                  className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-bold border ${tech.color} shrink-0 hover:scale-110 transition-transform duration-200 cursor-default`}
                >
                  {tech.label}
                </span>
              ))}
            </div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="relative overflow-hidden marquee-container">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0D1117] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0D1117] to-transparent z-10 pointer-events-none" />
            <div className="flex gap-3 animate-marquee-reverse whitespace-nowrap w-max">
              {[...row2, ...row2].map((tech, i) => (
                <span
                  key={i}
                  className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-bold border ${tech.color} shrink-0 hover:scale-110 transition-transform duration-200 cursor-default`}
                >
                  {tech.label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
