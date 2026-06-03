
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

interface Project {
  title: string;
  description: string;
  image: string;
  skills: string[];
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const featured = projects[0];
  const row1 = projects.slice(1, 4);
  const row2 = projects.slice(4);

  return (
    <>
      <SectionTitle title="Featured Projects" />

      {/* Bento grid */}
      <div className="space-y-4">
        {/* Row 1 — Hero card (full width) */}
        {featured && (
          <ProjectCard project={featured} index={0} featured />
        )}

        {/* Row 2 — Three equal cards */}
        {row1.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {row1.map((project, i) => (
              <ProjectCard key={i + 1} project={project} index={i + 1} />
            ))}
          </div>
        )}

        {/* Row 3 — Remaining cards */}
        {row2.length > 0 && (
          <div className={`grid gap-4 grid-cols-1 ${row2.length === 1 ? "md:grid-cols-1" : row2.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
            {row2.map((project, i) => (
              <ProjectCard key={i + 4} project={project} index={i + 4} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectsSection;
