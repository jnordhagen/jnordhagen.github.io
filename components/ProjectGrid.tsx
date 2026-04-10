import ProjectCard from '@/components/ProjectCard';
import type { Project } from '@/lib/projects';

interface Props {
  projects: Project[];
}

export default function ProjectGrid({ projects }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
