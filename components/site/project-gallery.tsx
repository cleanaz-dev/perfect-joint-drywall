import { projects } from '@/lib/data';

export default function ProjectGallery() {
  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-amber-600">
            <span className="h-px w-8 bg-amber-500" />
            Recent Work
            <span className="h-px w-8 bg-amber-500" />
          </div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-stone-900 lg:text-5xl">
            Projects we are proud of
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                  {project.category}
                </span>
                <h3 className="mt-1 text-xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
