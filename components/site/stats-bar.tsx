import { stats } from '@/lib/data';

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden border-b border-stone-200 bg-white py-16 lg:py-24">
      {/* Abstract Geometric Pattern (SVG Data URI tied to your primary theme color automatically!) */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='currentColor' stroke-width='1.5' stroke-linecap='square'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3Cpath d='M30 0v60M0 30h60' stroke-opacity='.2'/%3E%3Ccircle cx='30' cy='30' r='4' fill-rule='evenodd'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} 
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="group flex flex-col items-center text-center">
              <div className="text-4xl font-extrabold tracking-tight text-primary transition-transform duration-500 ease-out group-hover:scale-110 lg:text-6xl">
                {stat.value}
              </div>
              
              {/* Subtle decorative line */}
              <div className="my-3 h-0.5 w-6 rounded-full bg-primary/30 transition-all duration-300 group-hover:w-10 group-hover:bg-primary/80 lg:my-4 lg:w-8" />
              
              <div className="text-xs font-semibold uppercase tracking-widest text-stone-500 lg:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
