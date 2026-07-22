import React from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import profile from '../../../assets/data/profile.json';

export function Hero() {
  return (
    <section className="grid gap-10 rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 shadow-2xl shadow-slate-950/30 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
      <div>
        <Badge>Developer Platform</Badge>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">{profile.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#solutions">Explore Solutions</Button>
          <Button href={profile.resumeFile} variant="secondary">Download Resume</Button>
        </div>
      </div>

      <div className="rounded-3xl border border-sky-400/20 bg-slate-950/70 p-6">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Business Central Architecture</p>
        <div className="mt-6 space-y-3 text-sm text-slate-300">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">AL Extensions</div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">Tables • Pages • Reports</div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">Power BI • APIs • Workflows</div>
        </div>
      </div>
    </section>
  );
}
