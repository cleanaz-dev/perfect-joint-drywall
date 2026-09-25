import { steps } from '@/lib/data';

export default function Process() {
  return (
    <section id="process" className="bg-stone-900 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
            <span className="h-px w-8 bg-primary" />
            How It Works
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl">
            A straightforward process
          </h2>
          <p className="mt-4 text-lg text-stone-300">
            No surprises, no mystery. Here is exactly what to expect when you
            work with us.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-14 top-7 hidden h-px w-full bg-stone-700 lg:block" />
              )}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                <step.icon className="h-6 w-6" strokeWidth={2} />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-stone-900 text-xs font-bold text-primary ring-2 ring-primary">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
