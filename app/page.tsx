import Link from 'next/link';
import ProjectGrid from '@/components/ProjectGrid';
import { getFeaturedProjects } from '@/lib/projects';

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="mb-20">
        <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">
          Software Engineer
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl font-semibold leading-tight mb-6">
          Jakob Nordhagen
        </h1>
        <p className="text-lg text-neutral-600 max-w-xl leading-relaxed">
          I build thoughtful software — from developer tools to LLM-powered products.
          Currently focused on fast, well-crafted web experiences.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/projects"
            className="inline-block bg-ink text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors"
          >
            View projects
          </Link>
          <Link
            href="/resume"
            className="inline-block border border-neutral-300 text-sm font-medium px-5 py-2.5 rounded-full hover:border-ink transition-colors"
          >
            Resume
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      {featured.length > 0 && (
        <section>
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="font-serif text-2xl font-semibold">Featured projects</h2>
            <Link
              href="/projects"
              className="text-sm text-neutral-400 hover:text-ink"
            >
              All projects →
            </Link>
          </div>
          <ProjectGrid projects={featured} />
        </section>
      )}
    </div>
  );
}
