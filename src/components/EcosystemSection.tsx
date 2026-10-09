'use client';

import { useState } from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const pillars = [
  {
    id: 'studio',
    name: 'Studio COKA',
    description: 'Architecture & design studio crafting climate-responsive spaces across Africa.',
    image: '/images/Architectural Designer in Her Studio.png',
    features: [
      'Architectural Design',
      'Interior Architecture',
      'Urban Planning',
      'Sustainable Materials',
    ],
  },
  {
    id: 'ako',
    name: 'AKO Alliance',
    description: 'An initiative focused on expanding access to education and creating opportunities for children and young people.',
    image: '/images/Crystal Kizor Logo Collection.png',
    features: [
      'Education Access',
      'Opportunity Creation',
      'Child Development',
      'Youth Empowerment',
    ],
  },
  {
    id: 'elevated',
    name: 'ELEvated',
    description: 'A contemporary furniture and product design brand creating functional, well-designed products rooted in African context, materials and ideas.',
    image: '/images/Earthy Editorial Portrait by African Architecture.png',
    features: [
      'Furniture Design',
      'Product Design',
      'African Materials',
      'Functional Aesthetics',
    ],
  },
  {
    id: 'tea',
    name: 'The Effective Architect',
    description: 'Architecture education and media platform helping professionals learn, grow, and build better careers.',
    image: '/images/Poised in a Warm Design Studio.png',
    features: [
      'Online Courses',
      'Media Content',
      'Career Development',
      'Professional Resources',
    ],
  },
  {
    id: 'speaking',
    name: 'Speaking Engagements',
    description: 'Talks and conversations on architecture, climate-responsive design, African cities, design, and entrepreneurship.',
    image: '/images/Cozy Architecture Podcast Workspace.png',
    features: [
      'Keynote Speaking',
      'Panel Discussions',
      'Workshop Facilitation',
      'Podcast Appearances',
    ],
  },
  {
    id: 'alive',
    name: 'Alive and Free',
    description: 'A Christian youth movement helping young people walk in truth, healing, freedom, identity, purpose, and life in Christ.',
    image: '/images/Confident Designer in Studio Workspace.png',
    features: [
      'Youth Ministry',
      'Healing Programs',
      'Identity Workshops',
      'Community Gatherings',
    ],
  },
  {
    id: 'personal',
    name: 'Crystal Kizor',
    description: 'Architecture, research, writing, media, ideas, and other work under the personal brand.',
    image: '/images/Confident Designer in Studio Workspace (1).png',
    features: [
      'Research & Writing',
      'Media Production',
      'Idea Development',
      'Personal Projects',
    ],
  },
];

export default function EcosystemSection() {
  const [active, setActive] = useState('studio');

  const activePillar = pillars.find((p) => p.id === active) || pillars[0];

  return (
    <section id="ecosystem" className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-950">
      <div className="container mx-auto px-6 lg:px-8">
        <AnimatedSection delay={1}>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              The Crystal Kizor Ecosystem
            </h2>
            <p className="font-body text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              A multifaceted practice spanning architecture, alliances, education, speaking,
              youth movements, and personal authorship — all united by design thinking and impact.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={2}>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 flex flex-col gap-2 overflow-y-auto max-h-[500px] pr-2">
              {pillars.map((pillar) => (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActive(pillar.id)}
                  className={`text-left p-4 rounded-lg transition-all ${
                    active === pillar.id
                      ? 'bg-gold/10 border border-gold text-neutral-900 dark:text-neutral-50'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                  }`}
                >
                  <span className="font-display font-bold text-lg">{pillar.name}</span>
                  <p className="font-body text-sm mt-1 opacity-80 line-clamp-2">{pillar.description}</p>
                </button>
              ))}
            </div>

            <div className="md:w-2/3">
              <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 md:p-8 shadow-lg">
                <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
                  {activePillar.name}
                </h3>
                <p className="font-body text-neutral-600 dark:text-neutral-400 mb-6">
                  {activePillar.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {activePillar.features.map((feature) => (
                    <li key={feature} className="flex items-center text-neutral-700 dark:text-neutral-300">
                      <span className="text-gold mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={activePillar.image}
                    alt={activePillar.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
