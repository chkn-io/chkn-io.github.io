import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, value);
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const stats: StatProps[] = [
  { value: 5, suffix: "+", label: "Years of Experience", description: "Building web apps and data solutions since 2019" },
  { value: 50, suffix: "+", label: "Projects Delivered", description: "From small MVPs to enterprise-grade systems" },
  { value: 20, suffix: "+", label: "Happy Clients", description: "Across the US, Philippines, and beyond" },
  { value: 100, suffix: "%", label: "Client Satisfaction", description: "Committed to quality and clear communication" },
];

const testimonials = [
  {
    quote: "Percian delivered our Shopify store ahead of schedule. The attention to detail and technical depth was impressive — highly recommend!",
    name: "Client — US E-commerce Brand",
    role: "Shopify Development",
  },
  {
    quote: "The PowerBI dashboards transformed how we view our data. Everything is exactly what we needed, built fast and clean.",
    name: "Client — Healthcare Analytics",
    role: "Data Analytics",
  },
  {
    quote: "From discovery to launch, Percian was professional and communicative. Our government system works flawlessly.",
    name: "Client — Provincial Government",
    role: "Enterprise Web Application",
  },
];

const Stats = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section id="stats" ref={sectionRef} className="relative py-28 overflow-hidden bg-[#0D1117]">
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 60, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: i * 0.12, type: "spring", stiffness: 120, damping: 15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.04, transition: { duration: 0.3 } }}
              className="group glass-card rounded-2xl p-6 text-center hover:border-emerald-500/40 transition-colors duration-300 cursor-default hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <p className="text-4xl md:text-5xl font-black text-emerald-400 mb-2 animate-text-glow">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white font-semibold mb-1.5">{stat.label}</p>
              <p className="text-gray-500 text-xs leading-snug">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-emerald-400 text-sm font-medium border border-emerald-500/25 bg-emerald-500/5 mb-5"
          >
            Testimonials
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Clients{" "}
            <span className="gradient-text">Say</span>
          </h2>
          <div className="section-line mx-auto" />
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, rotateX: 10, scale: 0.93 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
              className="glass-card rounded-2xl p-7 relative group cursor-default"
            >
              {/* Quote mark */}
              <span className="absolute top-5 right-6 text-6xl text-emerald-500/15 font-serif leading-none select-none">"</span>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-400">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-800/60">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{testimonial.name}</p>
                  <p className="text-emerald-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech logos / trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 text-sm uppercase tracking-widest mb-8">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {["PHP", "Laravel", "WordPress", "Shopify", "React", "PowerBI", "MySQL", "JavaScript"].map((tech) => (
              <span key={tech} className="text-gray-600 hover:text-gray-400 transition-colors text-sm font-medium cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
