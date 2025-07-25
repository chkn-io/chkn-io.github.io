
import { motion } from "framer-motion";
import ProjectsSection from "./project/ProjectsSection";
import WebsitesSection from "./project/WebsitesSection";
import WebDesignsSection from "./project/WebDesignsSection";
import AnalyticsSection from "./project/AnalyticsSection";
import { projects, websites, webDesigns, analytics } from "./project/ProjectData";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 relative z-10"
      >
        <ProjectsSection projects={projects} />
        <WebsitesSection websites={websites} />
        <WebDesignsSection webDesigns={webDesigns} />
        <AnalyticsSection analytics={analytics} />
      </motion.div>
    </section>
  );
};

export default Projects;
