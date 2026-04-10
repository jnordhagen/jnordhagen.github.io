import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ProjectFrontmatter {
  title: string;
  description: string;
  tags: string[];
  date: string;
  featured: boolean;
  github?: string;
  live?: string;
}

export interface Project extends ProjectFrontmatter {
  slug: string;
  content: string;
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'projects');

export function getAllProjects(): Project[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf-8');
      const { data, content } = matter(raw);
      return { slug, content, ...(data as ProjectFrontmatter) };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getProjectBySlug(slug: string): Project | undefined {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return { slug, content, ...(data as ProjectFrontmatter) };
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}
