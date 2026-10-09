'use client';

import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const brands = [
  { name: 'Studio COKA', image: '/images/1.png', description: 'Architecture & design studio' },
  { name: 'AKO Alliance', image: '/images/2.jpeg', description: 'Education access & youth opportunities' },
  { name: 'ELEvated', image: '/images/3.jpeg', description: 'Contemporary furniture & product design' },
  { name: 'The Effective Architect', image: '/images/Confident Designer in Studio Workspace.png', description: 'Architecture education & media' },
  { name: 'Speaking Engagements', image: '/images/Cozy Architecture Podcast Workspace.png', description: 'Architecture talks & conversations' },
  { name: 'Alive and Free', image: '/images/Earthy Editorial Portrait by African Architecture.png', description: 'Youth movement in Christ' },
  { name: 'Crystal Kizor', image: '/images/Crystal Kizor Logo Collection.png', description: 'Personal research & authorship' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-950">
      <div className="container mx-auto px-6 lg:px-8">
        <AnimatedSection delay={1}>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              About Crystal
            </h2>
            <p className="font-body text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Crystal Kizor is an architect, designer, entrepreneur, speaker, researcher, and creator
              building across Studio COKA, AKO Alliance, ELEvated, The Effective Architect,
              Speaking Engagements, Alive and Free, and personal research & authorship.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={2}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6 mt-12">
            {brands.map((brand) => (
              <div key={brand.name} className="text-center">
                <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-neutral-200 dark:border-neutral-700">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-full"
                  />
                </div>
                <h3 className="font-display text-sm md:text-base font-bold text-neutral-900 dark:text-neutral-50 mb-1">
                  {brand.name}
                </h3>
                <p className="font-body text-xs text-neutral-600 dark:text-neutral-400">
                  {brand.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
