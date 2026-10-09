'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] md:h-[100vh] w-full flex items-end overflow-hidden">
      <Image
        src="/images/Architectural Studio Portrait.png"
        alt="Crystal Kizor in her architectural studio"
        fill
        style={{ objectFit: 'cover', objectPosition: '15% 20%' }}
        priority
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20">
        <div className="inline-block bg-neutral-50/10 backdrop-blur-sm rounded-2xl border border-neutral-200/20 px-3 py-2">
          <span className="font-body text-xs md:text-sm text-neutral-100">
            Architect · Designer · Entrepreneur · Speaker · Researcher
          </span>
        </div>
      </div>
      <div className="relative z-20 container mx-auto px-6 lg:px-8 text-left text-white pb-12 md:pb-16">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white drop-shadow-xl">
          Crystal Kizor
        </h1>
        <p className="font-body text-lg md:text-xl text-neutral-200 mb-6 max-w-xl drop-shadow-lg">
          Building thoughtful, climate-responsive architecture, furniture, education platforms,
          and youth movements across Africa and beyond.
        </p>
        <Link
          href="#ecosystem"
          className="inline-block bg-gold hover:bg-gold-light text-neutral-900 font-medium py-3 px-8 rounded-full transition-colors shadow-lg"
        >
          Explore the Ecosystem
        </Link>
      </div>
    </section>
  );
}
