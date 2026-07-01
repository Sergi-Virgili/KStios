interface StatCardProps {
  value: string | number;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur">
      <dt className="text-2xl font-black">{value}</dt>
      <dd className="text-xs text-slate-300">{label}</dd>
    </div>
  );
}
