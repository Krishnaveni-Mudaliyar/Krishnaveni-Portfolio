import React from 'react';
import { Container } from './Container';

const links = ['Home', 'Profile', 'Experience', 'Solutions', 'Projects', 'Blog', 'Contact'];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <a href="#" className="text-lg font-semibold tracking-wide text-slate-100">
          Krishnaveni M.
        </a>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="transition hover:text-sky-300">
              {link}
            </a>
          ))}
        </nav>
        <a href="assets/documents/Krishnaveni_Mudaliyar.pdf" className="rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-300">
          Download Resume
        </a>
      </Container>
    </header>
  );
}
