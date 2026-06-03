
import { useRef } from "react";
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Calendar } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Multi-layer parallax transforms
  const bg1Y = useTransform(scrollY, [0, 900], [0, 280]);   // background orbs – slowest
  const bg2Y = useTransform(scrollY, [0, 900], [0, 160]);   // mid floating shapes
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const imageY = useTransform(scrollY, [0, 900], [0, 60]);  // image moves slightly

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#0D1117]"
    >
      {/* ── Layer 1: Background gradient mesh ── */}
      <motion.div style={{ y: bg1Y }} className="absolute inset-0 scale-110 pointer-events-none">
        {/* Primary emerald orb */}
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[120px] animate-glow-pulse" />
        {/* Cyan secondary orb */}
        <div className="absolute bottom-[15%] right-[15%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] animate-glow-pulse-delay" />
        {/* Deep blue accent */}
        <div className="absolute top-[40%] right-[35%] w-[250px] h-[250px] bg-blue-600/8 rounded-full blur-[80px]" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-60" />
      </motion.div>

      {/* ── Layer 2: Mid-ground floating shapes ── */}
      <motion.div style={{ y: bg2Y }} className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Rotating ring top-right */}
        <div className="absolute top-20 right-16 w-40 h-40 border border-emerald-500/20 rounded-full animate-rotate-slow" />
        <div className="absolute top-20 right-16 w-32 h-32 border border-emerald-500/10 rounded-full animate-rotate-reverse translate-x-4 translate-y-4" />
        {/* Floating hexagon left */}
        <div className="absolute top-[30%] left-8 w-16 h-16 border-2 border-emerald-500/25 rotate-45 animate-float" />
        {/* Dots grid bottom-left */}
        <div className="absolute bottom-[20%] left-16 grid grid-cols-4 gap-3">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-500/30" />
          ))}
        </div>
        {/* Small floating orb mid */}
        <div className="absolute top-[50%] right-[10%] w-8 h-8 rounded-full bg-emerald-400/20 blur-[4px] animate-float-delay-1" />
        <div className="absolute top-[25%] left-[45%] w-4 h-4 rounded-full bg-cyan-400/30 blur-[2px] animate-float-delay-2" />
        {/* Diagonal line accent */}
        <div className="absolute top-0 right-[30%] w-[1px] h-[200px] bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent" />
      </motion.div>

      {/* ── Layer 3: Foreground content ── */}
      <motion.div style={{ opacity: heroOpacity }} className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 pt-24 pb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* ── Text Content ── */}
            <div className="lg:w-1/2 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for freelance work
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
              >
                <span className="text-white">Hi, I'm</span>
                <br />
                <span className="gradient-text">Percian</span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light">
                  <TypeAnimation
                    sequence={[
                      'Full Stack Developer',
                      2200,
                      'Data Analyst',
                      2200,
                      'E-commerce Expert',
                      2200,
                      'Problem Solver',
                      2200,
                    ]}
                    wrapper="span"
                    speed={55}
                    repeat={Infinity}
                  />
                </span>
              </motion.h1>

              <motion.p
                className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                Based in the Philippines — I craft exceptional digital experiences through
                web development and turn complex data into meaningful insights.
                Specializing in <span className="text-emerald-400">PHP, WordPress, Shopify</span> and{" "}
                <span className="text-emerald-400">PowerBI analytics</span>.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65 }}
              >
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={600}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl cursor-pointer transition-all duration-300 btn-shine glow-emerald shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 active:scale-100"
                >
                  <Calendar size={18} />
                  Schedule a Meeting
                </Link>
                <a
                  href="/Resume - P Borja - new.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-emerald-500/40 hover:border-emerald-500/80 text-white hover:text-emerald-400 font-semibold rounded-xl transition-all duration-300 hover:bg-emerald-500/5 hover:scale-105 active:scale-100"
                >
                  <Download size={18} />
                  Download CV
                </a>
              </motion.div>

              {/* Stats row */}
              <motion.div
                className="flex gap-8 mt-12 pt-8 border-t border-gray-800/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.85 }}
              >
                {[
                  { value: "5+", label: "Years Experience" },
                  { value: "50+", label: "Projects Delivered" },
                  { value: "20+", label: "Happy Clients" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-emerald-400">{stat.value}</p>
                    <p className="text-gray-500 text-sm">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── Image / Visual ── */}
            <div className="lg:w-1/2 order-1 lg:order-2 relative flex justify-center">
              <motion.div
                style={{ y: imageY }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Outer glow ring */}
                <div className="absolute inset-[-20px] rounded-full border border-emerald-500/15 animate-rotate-slow" />
                <div className="absolute inset-[-40px] rounded-full border border-emerald-500/8 animate-rotate-reverse" />

                {/* Image container */}
                <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px]">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-[60px] animate-glow-pulse" />
                  {/* Profile image */}
                  <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-emerald-500/20 shadow-2xl shadow-emerald-500/10">
                    <img
                      src="/uploads/04199b5d-364a-4537-8296-4f0863d62992.png"
                      alt="Percian Borja - Full Stack Developer"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117]/60 via-transparent to-transparent" />
                  </div>

                  {/* Floating badge - top left */}
                  <motion.div
                    className="absolute -top-4 -left-6 glass-card px-3 py-2 rounded-xl shadow-xl animate-float"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 }}
                  >
                    <p className="text-emerald-400 font-bold text-lg">5+</p>
                    <p className="text-gray-400 text-xs">Years Exp.</p>
                  </motion.div>

                  {/* Floating badge - bottom right */}
                  <motion.div
                    className="absolute -bottom-4 -right-6 glass-card px-3 py-2 rounded-xl shadow-xl animate-float-delay-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.25 }}
                  >
                    <p className="text-emerald-400 font-bold text-lg">50+</p>
                    <p className="text-gray-400 text-xs">Projects</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-emerald-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
