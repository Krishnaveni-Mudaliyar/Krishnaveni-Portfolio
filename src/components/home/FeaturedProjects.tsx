import React from 'react';
import { Card } from '../ui/Card';
import projects from '../../../assets/data/projects.json';

export function FeaturedProjects() {
  return (
    <section className="mt-8">
      <Card title="Featured Solutions" description="Business Central and modern web solutions presented as product-ready use cases.">
        <div className="grid gap-4 lg:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <div key={project.slug} className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">{project.category}</p>
              <h4 className="mt-2 text-lg font-semibold text-white">{project.name}</h4>
              <p className="mt-2 text-sm leading-7 text-slate-400">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {(project.tags || []).map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
