import { navLinks } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-stone-950 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            {/* Logo swapped in here */}
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-primary p-1 shadow-sm ">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-no-text.png"
                alt="Perfect Joint Drywall Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-white">
                Perfect Joint
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                Drywall &amp; Carpentry
              </span>
            </div>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-stone-400 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t border-stone-800 pt-6 text-center">
          <p className="text-sm text-stone-500">
            &copy; {new Date().getFullYear()} Perfect Joint Drywall. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
