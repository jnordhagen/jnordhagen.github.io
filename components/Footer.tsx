const links = [
  { href: 'https://github.com/jnordhagen', label: 'GitHub' },
  { href: 'https://linkedin.com/in/jnordhagen', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 mt-24">
      <div className="max-w-4xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-neutral-400">
        <span>© {new Date().getFullYear()} Jakob Nordhagen</span>
        <ul className="flex gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
