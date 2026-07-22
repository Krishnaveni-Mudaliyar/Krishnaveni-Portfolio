import React from 'react';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90">
      <Container className="flex flex-col gap-3 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-slate-200">Krishnaveni Mudaliyar</p>
          <p>Business Central Technical Consultant • AL Developer</p>
        </div>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/krishnaveni-mudaliyar-ba545b235/" className="hover:text-sky-300">LinkedIn</a>
          <a href="https://github.com/Krishnaveni-Mudaliyar" className="hover:text-sky-300">GitHub</a>
          <a href="mailto:krishnaveni@example.com" className="hover:text-sky-300">Email</a>
        </div>
      </Container>
    </footer>
  );
}
