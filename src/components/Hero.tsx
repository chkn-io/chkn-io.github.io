
import { useRef } from "react";
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Download, Calendar } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Mouse tracking
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);
  const mouseX = useSpring(rawMouseX, { stiffness: 60, damping: 18 });
  const mouseY = useSpring(rawMouseY, { stiffness: 60, damping: 18 });

  // Only the glow circle behind the photo moves
  const glowX = useTransform(mouseX, [-1, 1], [-50, 50]);
  const glowY = useTransform(mouseY, [-1, 1], [-35, 35]);

  // 3D tilt on image card
  const tiltRotateX = useTransform(mouseY, [-1, 1], [14, -14]);
  const tiltRotateY = useTransform(mouseX, [-1, 1], [-14, 14]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawMouseX.set((e.clientX - rect.left) / rect.width * 2 - 1);
    rawMouseY.set((e.clientY - rect.top) / rect.height * 2 - 1);
  };

  const handleMouseLeave = () => {
    rawMouseX.set(0);
    rawMouseY.set(0);
  };

  // Scroll parallax
  const bg1Y = useTransform(scrollY, [0, 900], [0, 280]);
  const bg2Y = useTransform(scrollY, [0, 900], [0, 160]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const imageY = useTransform(scrollY, [0, 900], [0, 60]);


  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen overflow-hidden bg-[#0D1117]"
    >
      {/* ── Layer 1: Static background orb (scroll parallax only) ── */}
      <motion.div style={{ y: bg1Y }} className="absolute inset-0 scale-110 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </motion.div>

     

      {/* ── Layer 3: Foreground content ── */}
      <motion.div style={{ opacity: heroOpacity }} className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 pt-24 pb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* ── Text Content ── */}
            <div className="lg:w-1/2 order-2 lg:order-1">
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
                  { value: "13+", label: "Years Experience" },
                  { value: "50+", label: "Projects Delivered" },
                  { value: "20+", label: "Happy Clients" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
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
                <div className="absolute inset-[-20px] rounded-full border border-white/8 animate-rotate-slow" />
                <div className="absolute inset-[-40px] rounded-full border border-white/4 animate-rotate-reverse" />

                {/* 3D tilt wrapper */}
                <motion.div
                  style={{
                    rotateX: tiltRotateX,
                    rotateY: tiltRotateY,
                    transformStyle: "preserve-3d",
                    perspective: 1000,
                  }}
                  transition={{ type: "spring", stiffness: 80, damping: 20 }}
                  className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px]"
                >
                  {/* Background glow — moves with mouse */}
                  <motion.div
                    style={{ x: glowX, y: glowY }}
                    className="absolute inset-[-40px] bg-emerald-500/20 rounded-full blur-[80px]"
                  />
                  {/* Profile image */}
                  <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
                    <img
                      src="/uploads/04199b5d-364a-4537-8296-4f0863d62992.png"
                      alt="Percian Borja - Full Stack Developer"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117]/60 via-transparent to-transparent" />
                    {/* Subtle static shine */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
                  </div>
                </motion.div>
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
          <ArrowDown size={16} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
