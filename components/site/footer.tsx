import { Hammer } from 'lucide-react';
import { navLinks } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-stone-950 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500 text-stone-900">
              <Hammer className="h-5 w-5" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-white">
                Perfect Joint
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-amber-400">
                Drywall &amp; Carpentry
              </span>
            </div>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-stone-400 transition-colors hover:text-amber-400"
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
