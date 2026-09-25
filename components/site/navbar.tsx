'use client';

import { useState, useEffect } from 'react';
import { Hammer, Menu, X, ArrowRight } from 'lucide-react';
import { navLinks } from '@/lib/data';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-stone-900/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500 text-stone-900 shadow-md">
            <Hammer className="h-5 w-5" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight text-white">
              Perfect Joint
            </span>
            <span className="text-xs font-medium uppercase tracking-widest text-amber-300">
              Drywall &amp; Carpentry
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-200 transition-colors hover:text-amber-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-stone-900 shadow-md transition-all hover:bg-amber-400 hover:shadow-lg"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="bg-stone-900 px-6 pb-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-stone-200 transition-colors hover:text-amber-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-5 py-3 text-sm font-semibold text-stone-900"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
