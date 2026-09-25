import { ArrowRight, ChevronRight, Award, Clock, ShieldCheck, Star } from 'lucide-react';
import { services } from '@/lib/data';

const marqueeItems = [
  ...services.map((s) => s.title),
  'Fully Insured & Licensed',
  'Free Estimates',
  'On-Time Guarantee',
  '15+ Years Experience',
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.pexels.com/photos/4981812/pexels-photo-4981812.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
          alt="Professional drywall installation"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/95 via-stone-900/80 to-stone-900/40" />
      </div>

      {/* Main hero content */}
      <div className="relative z-10 flex flex-1 items-center px-6 pb-24 pt-28 sm:pb-28 sm:pt-32 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 backdrop-blur-sm">
              <Award className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-200">
                15+ Years of Craftsmanship
              </span>
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Seamless Walls.{' '}
              <span className="text-amber-400">Flawless Finish.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-200 sm:mt-6 sm:text-lg">
              Perfect Joint Drywall delivers expert drywall installation,
              taping, and carpentry for homes and businesses. Clean work,
              perfect joints, on-time delivery — every time.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3.5 text-base font-semibold text-stone-900 shadow-xl transition-all hover:bg-amber-400 hover:shadow-2xl sm:px-7 sm:py-4"
              >
                Get a Free Quote
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10 sm:px-7 sm:py-4"
              >
                Explore Services
                <ChevronRight className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 sm:mt-12">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-amber-400" />
                <span className="text-sm font-medium text-stone-200">
                  Fully Insured &amp; Licensed
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-amber-400" />
                <span className="text-sm font-medium text-stone-200">
                  On-Time Guarantee
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-stone-200">
                  5-Star Reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling marquee banner */}
      <div className="relative z-10 overflow-hidden border-t border-amber-600/40 bg-amber-500 py-2.5 sm:py-3">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
              {marqueeItems.map((item, i) => (
                <span
                  key={`${dup}-${i}`}
                  className="mx-4 flex items-center gap-4 text-sm font-bold uppercase tracking-wide text-stone-900 sm:mx-6 sm:text-base"
                >
                  {item}
                  <span className="text-stone-900/40">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 18s;
          }
        }
      `}</style>
    </section>
  );
}