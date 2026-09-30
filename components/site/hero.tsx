import { ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-primary">
      {/* Background Image - Right 4/5ths on large screens */}
      <div className="absolute bottom-0 right-0 top-0 w-full lg:w-4/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          // src="/hero-img.webp"
          src="hero-test.jpeg"
          alt="Professional drywall installation"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Main hero content */}
      <div className="relative z-10 flex flex-1 items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl items-center">
          
          {/* Floating Content Card */}
          <div className="w-full max-w-[36rem] rounded-[2rem] bg-white/80 p-8 shadow-2xl sm:p-12">
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-[3.4rem]">
              Professional<br />
              Drywall, Flawless<br />
              Finishes
            </h1>
            
            <p className="mt-5 text-lg leading-relaxed text-gray-600 sm:text-xl">
              From installations to repair, our expert team transforms your spaces with precision and care.
            </p>
            
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:-translate-y-0.5"
              >
                Get A Free Quote
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-gray-800">
              {/* Uses fill and text props to create the solid dark shield with white check effect */}
              <ShieldCheck className="h-5 w-5 fill-primary text-white" />
              <span>Licensed &amp; Insured | Satisfaction Guaranteed</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}