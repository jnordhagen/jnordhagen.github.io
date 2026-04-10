import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllProjects, getProjectBySlug } from '@/lib/projects';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <p className="text-sm text-neutral-400 mb-3">{project.date}</p>
        <h1 className="font-serif text-4xl font-semibold mb-4">{project.title}</h1>
        <p className="text-neutral-600 text-lg leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-500 hover:text-ink border border-neutral-200 px-4 py-1.5 rounded-full"
            >
              GitHub ↗
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white bg-accent hover:bg-amber-600 px-4 py-1.5 rounded-full font-medium"
            >
              Live site ↗
            </a>
          )}
        </div>
      </div>

      {/* MDX body */}
      {project.content.trim() && (
        <div className="prose-mdx">
          <MDXRemote source={project.content} />
        </div>
      )}
    </div>
  );
}
