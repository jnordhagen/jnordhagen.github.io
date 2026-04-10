import Link from 'next/link';
import type { Project } from '@/lib/projects';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className="group border border-neutral-200 rounded-2xl p-6 hover:border-accent transition-colors duration-200 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <Link href={`/projects/${project.slug}`}>
          <h2 className="font-serif text-xl font-semibold group-hover:text-accent transition-colors">
            {project.title}
          </h2>
        </Link>
      </div>

      <p className="text-sm text-neutral-600 leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="flex items-center justify-between">
        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="text-xs bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="flex gap-4 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-400 hover:text-ink"
            >
              GitHub ↗
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent hover:text-amber-600 font-medium"
            >
              Live ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
