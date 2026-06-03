
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  skills: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

const ProjectCard = ({ project, index, featured = false }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.93 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -8, transition: { duration: 0.35, ease: "easeOut" } }}
      className={`group relative rounded-2xl overflow-hidden border border-gray-700/30 hover:border-emerald-500/50 transition-colors duration-500 shadow-xl hover:shadow-emerald-500/10 hover:shadow-2xl ${featured ? "aspect-[16/8]" : "aspect-[4/3]"}`}
    >
      {/* Background image */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />

      {/* Base gradient — always visible, darkens bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/50 to-transparent" />

      {/* Hover overlay — richer dark */}
      <div className="absolute inset-0 bg-[#0D1117]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Skills badges — slide down from top on hover */}
      <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        {project.skills.slice(0, featured ? 6 : 4).map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 backdrop-blur-sm"
          >
            {skill}
          </span>
        ))}
        {project.skills.length > (featured ? 6 : 4) && (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-gray-900/60 border border-gray-600/40 text-gray-400 backdrop-blur-sm">
            +{project.skills.length - (featured ? 6 : 4)}
          </span>
        )}
      </div>

      {/* Content at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 group-hover:p-6 transition-all duration-300">
        <h3 className={`text-white font-black mb-0 group-hover:mb-2 transition-all duration-300 group-hover:text-emerald-300 ${featured ? "text-2xl md:text-3xl" : "text-lg"}`}>
          {project.title}
        </h3>
        {/* Description — slides up on hover */}
        <p className="text-gray-300 text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 opacity-0 group-hover:opacity-100">
          {project.description}
        </p>
      </div>

      {/* Emerald corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default ProjectCard;
