import React from 'react';
import profile from '../../../assets/data/profile.json';

export function Stats() {
  return (
    <section className="mt-8 grid gap-4 md:grid-cols-4">
      {profile.stats.map((stat) => (
        <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <p className="text-2xl font-semibold text-white">{stat.num}</p>
          <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
        </div>
      ))}
    </section>
  );
}
