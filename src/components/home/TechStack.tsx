import React from 'react';
import { Card } from '../ui/Card';

const stacks = [
  {
    title: 'ERP',
    items: ['Microsoft Dynamics 365 Business Central', 'AL Language', 'Navision']
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'HTML', 'CSS']
  },
  {
    title: 'Backend',
    items: ['Node.js', 'REST API', 'SQL']
  },
  {
    title: 'Analytics',
    items: ['Power BI', 'Reports', 'Dashboards']
  }
];

export function TechStack() {
  return (
    <section className="mt-8 grid gap-4 lg:grid-cols-4">
      {stacks.map((stack) => (
        <Card key={stack.title} title={stack.title} description="Core capability focus">
          <ul className="space-y-2 text-sm text-slate-400">
            {stack.items.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </Card>
      ))}
    </section>
  );
}
