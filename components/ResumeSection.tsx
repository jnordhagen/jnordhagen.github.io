interface Props {
  title: string;
  children: React.ReactNode;
}

export default function ResumeSection({ title, children }: Props) {
  return (
    <section className="mb-10">
      <h2 className="font-serif text-xl font-semibold mb-4 pb-2 border-b border-neutral-200">
        {title}
      </h2>
      <div className="space-y-5">{children}</div>
    </section>
  );
}
