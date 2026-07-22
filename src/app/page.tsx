import React from 'react';
import { Hero } from '../components/home/Hero';
import { Stats } from '../components/home/Stats';
import { TechStack } from '../components/home/TechStack';
import { Timeline } from '../components/home/Timeline';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { Container } from '../components/layout/Container';

export default function HomePage() {
  return (
    <main className="py-10">
      <Container>
        <Hero />
        <Stats />
        <TechStack />
        <Timeline />
        <FeaturedProjects />
      </Container>
    </main>
  );
}
