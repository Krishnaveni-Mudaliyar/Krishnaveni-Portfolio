import React from 'react';

type CardProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function Card({ title, description, children, className = '' }: CardProps) {
  return (
    <section className={`rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/20 ${className}`.trim()}>
      {title ? <h3 className="mb-2 text-lg font-semibold text-slate-100">{title}</h3> : null}
      {description ? <p className="mb-4 text-sm leading-7 text-slate-400">{description}</p> : null}
      {children}
    </section>
  );
}
