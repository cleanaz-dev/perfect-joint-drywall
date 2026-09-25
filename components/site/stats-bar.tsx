import { stats } from '@/lib/data';

export default function StatsBar() {
  return (
    <section className="border-b border-stone-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-stone-900 lg:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wide text-stone-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
