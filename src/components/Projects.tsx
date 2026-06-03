
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectsSection from "./project/ProjectsSection";
import WebsitesSection from "./project/WebsitesSection";
import WebDesignsSection from "./project/WebDesignsSection";
import AnalyticsSection from "./project/AnalyticsSection";
import { projects, websites, webDesigns, analytics } from "./project/ProjectData";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="projects" ref={sectionRef} className="relative py-28 overflow-hidden bg-[#0D1117]">
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] right-[5%] w-[400px] h-[400px] bg-emerald-500/6 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-[15%] left-[8%] w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[90px] animate-glow-pulse-delay" />
        <div className="absolute inset-0 grid-pattern opacity-25" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-emerald-400 text-sm font-medium border border-emerald-500/25 bg-emerald-500/5 mb-5"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Featured{" "}
            <span className="gradient-text">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            A selection of projects spanning web apps, e-commerce stores, UI designs, and data dashboards.
          </motion.p>
          <div className="section-line mx-auto mt-6" />
        </motion.div>

        <ProjectsSection projects={projects} />
        <WebsitesSection websites={websites} />
        <WebDesignsSection webDesigns={webDesigns} />
        <AnalyticsSection analytics={analytics} />
      </div>
    </section>
  );
};

export default Projects;
