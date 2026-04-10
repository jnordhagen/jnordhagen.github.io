import Link from 'next/link';

const links = [
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
];

export default function Nav() {
  return (
    <header className="border-b border-neutral-100">
      <nav className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-lg font-semibold text-ink hover:text-accent"
        >
          JN
        </Link>
        <ul className="flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-neutral-500 hover:text-ink font-medium"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
