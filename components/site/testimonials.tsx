import { Quote, Star } from 'lucide-react';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-stone-100 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-amber-600">
            <span className="h-px w-8 bg-amber-500" />
            Client Reviews
            <span className="h-px w-8 bg-amber-500" />
          </div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-stone-900 lg:text-5xl">
            Homeowners trust us with their walls
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white p-8 shadow-sm"
            >
              <Quote className="h-10 w-10 text-amber-300" />
              <div className="mt-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="mt-4 flex-1 text-base leading-relaxed text-stone-700">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="mt-6 border-t border-stone-200 pt-4">
                <div className="font-bold text-stone-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-stone-500">
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
