import StatCard from "./StatCard";

interface HeroStat {
  value: string | number;
  label: string;
}

interface HeroProps {
  eyebrow: string;
  title: string;
  description: string;
  stats: HeroStat[];
}

export default function Hero({ eyebrow, title, description, stats }: HeroProps) {
  return (
    <section className="mb-8 rounded-hero bg-gradient-to-br from-brand-950 via-slate-900 to-accent-950 px-6 py-10 text-white shadow-2xl md:px-10">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-brand-100">
        {eyebrow}
      </p>
      <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-end">
        <div>
          <h1 className="mb-4 text-4xl font-black tracking-tight md:text-6xl">
            {title}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-200">
            {description}
          </p>
        </div>
        <dl className="grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </dl>
      </div>
    </section>
  );
}
