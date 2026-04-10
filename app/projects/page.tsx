import type { Metadata } from 'next';
import ProjectGrid from '@/components/ProjectGrid';
import { getAllProjects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'All projects by Jakob Nordhagen.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="font-serif text-4xl font-semibold mb-3">Projects</h1>
      <p className="text-neutral-500 mb-12">Things I&apos;ve built.</p>
      <ProjectGrid projects={projects} />
    </div>
  );
}
