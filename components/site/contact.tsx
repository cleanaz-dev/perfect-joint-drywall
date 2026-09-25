'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { services } from '@/lib/data';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-stone-900 py-24">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.pexels.com/photos/36035072/pexels-photo-36035072.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
          alt=""
          className="h-full w-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
              <span className="h-px w-8 bg-primary" />
              Get In Touch
            </div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl">
              Ready to start your project?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-stone-300">
              Tell us about your drywall or carpentry project and we will get
              back to you within 24 hours with a free, no-obligation estimate.
            </p>

            <div className="mt-10 space-y-6">
              <a
                href="tel:+15555550100"
                className="group flex items-center gap-4 transition-opacity hover:opacity-80"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-primary/90">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-stone-400">
                    Call Us
                  </div>
                  <div className="text-lg font-semibold text-white">
                    (555) 555-0100
                  </div>
                </div>
              </a>
              <a
                href="mailto:info@perfectjointdrywall.com"
                className="group flex items-center gap-4 transition-opacity hover:opacity-80"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-primary/90">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-stone-400">
                    Email Us
                  </div>
                  <div className="text-lg font-semibold text-white">
                    info@perfectjointdrywall.com
                  </div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-stone-400">
                    Service Area
                  </div>
                  <div className="text-lg font-semibold text-white">
                    Greater Toronto &amp; Surrounding Areas
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-2xl lg:p-10">
            <h3 className="text-2xl font-bold text-stone-900">
              Request a Free Quote
            </h3>
            <form
              className="mt-6 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
                e.currentTarget.reset();
                setTimeout(() => setSubmitted(false), 5000);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-stone-700">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Smith"
                    className="w-full rounded-lg border border-stone-300 px-4 py-3 text-base text-stone-900 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-stone-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 555-0100"
                    className="w-full rounded-lg border border-stone-300 px-4 py-3 text-base text-stone-900 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-stone-700">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-lg border border-stone-300 px-4 py-3 text-base text-stone-900 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-stone-700">
                  Project Type
                </label>
                <select
                  required
                  className="w-full rounded-lg border border-stone-300 px-4 py-3 text-base text-stone-900 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Other">Other / Not Sure</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-stone-700">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your project..."
                  className="w-full rounded-lg border border-stone-300 px-4 py-3 text-base text-stone-900 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
              >
                Send Request
                <ArrowRight className="h-5 w-5" />
              </button>
              {submitted && (
                <div className="rounded-lg bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-700">
                  Thanks! We will be in touch within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
