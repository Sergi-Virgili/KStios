import { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  description: string;
  meta: string;
  children: ReactNode;
}

export default function SectionCard({
  title,
  description,
  meta,
  children,
}: SectionCardProps) {
  return (
    <section className="rounded-surface bg-white p-5 shadow-surface md:p-6">
      <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-950">{title}</h2>
          <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p>
        </div>
        <span className="w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-950">
          {meta}
        </span>
      </div>
      {children}
    </section>
  );
}
