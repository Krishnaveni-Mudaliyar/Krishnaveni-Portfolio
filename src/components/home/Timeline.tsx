import React from 'react';
import { Card } from '../ui/Card';

const timeline = [
  { year: '2025', title: 'Associate Technical Consultant', body: 'Delivered Business Central-focused solutions and AL development support.' },
  { year: '2026', title: 'Technical Consultant Growth', body: 'Expanding into architecture, reports, APIs, and solution-level consulting.' }
];

export function Timeline() {
  return (
    <section className="mt-8">
      <Card title="Career Timeline" description="Professional growth and delivery focus across Business Central and engineering work.">
        <div className="space-y-4 border-l border-sky-500/30 pl-4">
          {timeline.map((item) => (
            <div key={item.year}>
              <p className="text-sm font-semibold text-sky-300">{item.year}</p>
              <p className="mt-1 text-base font-medium text-slate-100">{item.title}</p>
              <p className="mt-1 text-sm leading-7 text-slate-400">{item.body}</p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
