import { services } from '@/lib/data';

export default function Services() {
  return (
    <section id="services" className="bg-stone-100 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-amber-600">
            <span className="h-px w-8 bg-amber-500" />
            What We Do
            <span className="h-px w-8 bg-amber-500" />
          </div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-stone-900 lg:text-5xl">
            Services built around your space
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            From bare studs to final coat, we handle every step of the drywall
            and carpentry process with the same attention to detail.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-stone-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition-colors group-hover:bg-amber-500 group-hover:text-white">
                <service.icon className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-stone-900">
                {service.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-stone-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
