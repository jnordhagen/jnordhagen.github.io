import type { Metadata } from 'next';
import ResumeSection from '@/components/ResumeSection';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Resume of Jakob Nordhagen, Software Engineer.',
};

export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Top bar */}
      <div className="flex items-start justify-between mb-12">
        <div>
          <h1 className="font-serif text-4xl font-semibold mb-1">Jakob Nordhagen</h1>
          <p className="text-neutral-500">Software Engineer</p>
          <p className="text-sm text-neutral-400 mt-1">
            jnordhagen1@gmail.com · linkedin.com/in/jakobnordhagen · github.com/jnordhagen
          </p>
        </div>
        <a
          href="/resume.pdf"
          download
          className="shrink-0 text-sm font-medium border border-neutral-300 px-4 py-2 rounded-full hover:border-ink transition-colors"
        >
          Download PDF
        </a>
      </div>

      <ResumeSection title="Experience">
        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-medium">Software Engineer — Celerity Solutions</h3>
            <span className="text-sm text-neutral-400">Aug. 2024 – Present · Palo Alto, CA</span>
          </div>
          <ul className="text-sm text-neutral-600 leading-relaxed list-disc list-inside space-y-1 mt-1">
            <li>Reduced AI feature latency 55% by refining chained prompt architecture and resolving critical issues affecting 1700+ production users</li>
            <li>Accelerated month-segmented sales data ingestion 10x by rewriting core SQL logic in the materialization process</li>
            <li>Delivered customer movement and pricing insights to cross-functional teams, launching custom-built app modules</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-medium">Software Engineer Intern — Celerity Solutions</h3>
            <span className="text-sm text-neutral-400">May 2024 – Aug. 2024 · Palo Alto, CA</span>
          </div>
          <ul className="text-sm text-neutral-600 leading-relaxed list-disc list-inside space-y-1 mt-1">
            <li>Deployed new AI feature for building data reports with 92% on-task accuracy, reducing manual work for users</li>
            <li>Cut hallucination rate 40% and increased AI feature scope by designing new chained-prompt architecture with parallel task processing</li>
            <li>Unlocked granular LLM knowledge of 250,000+ products, categories, stores, and brands by implementing and integrating OpenSearch-based RAG pipeline and vector database</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-medium">Graduate Research Assistant — Stanford Trustworthy AI Research Lab</h3>
            <span className="text-sm text-neutral-400">Jan. 2024 – Apr. 2024 · Stanford, CA</span>
          </div>
          <ul className="text-sm text-neutral-600 leading-relaxed list-disc list-inside space-y-1 mt-1">
            <li>Implemented custom LLM training loop with on-the-fly backtranslation for math autoformalization, enabling cost-efficient fine-tuning of 175M–2B parameter models</li>
            <li>Co-authored research paper submitted to ICLR 2025 on fine-tuning techniques for LLM autoformalization</li>
          </ul>
        </div>
      </ResumeSection>

      <ResumeSection title="Education">
        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-medium">M.S. Computer Science (AI/ML) — Stanford University</h3>
            <span className="text-sm text-neutral-400">Sept. 2022 – June 2024</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-medium">B.S. Computer Science (Systems) — Stanford University</h3>
            <span className="text-sm text-neutral-400">Sept. 2019 – June 2024</span>
          </div>
        </div>
      </ResumeSection>

      <ResumeSection title="Skills">
        <div className="space-y-3 text-sm text-neutral-600">
          <div><span className="font-medium text-ink">Languages:</span> Python, C++, C, TypeScript, SQL, CUDA, Go, Julia</div>
          <div><span className="font-medium text-ink">ML/AI Tools:</span> PyTorch, TensorFlow, Hugging Face, LangChain, Pandas, NumPy</div>
          <div><span className="font-medium text-ink">Cloud/DevOps:</span> AWS (Bedrock, Lambda, Redshift), Docker, GCP, CloudWatch</div>
          <div><span className="font-medium text-ink">Frameworks/Databases:</span> React, Node.js, Next.js, MongoDB, OpenSearch, Pinecone</div>
        </div>
      </ResumeSection>

      <ResumeSection title="Projects">
        <p className="text-sm text-neutral-500">
          See{' '}
          <a href="/projects" className="text-accent underline underline-offset-2">
            /projects
          </a>{' '}
          for the full list.
        </p>
      </ResumeSection>
    </div>
  );
}
