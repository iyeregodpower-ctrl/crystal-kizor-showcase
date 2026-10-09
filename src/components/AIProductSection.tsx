'use client';

import AnimatedSection from './AnimatedSection';

const productBrief = [
  {
    number: '1.',
    title: 'What it does',
    description:
      'EcoSpace AI generates climate-responsive architectural briefs and recommends locally-available materials based on site coordinates, climate zone, and project type.',
  },
  {
    number: '2.',
    title: 'Who it is for',
    description:
      'Architects, designers, and planners working across Africa and emerging markets who need fast, context-aware design guidance.',
  },
  {
    number: '3.',
    title: 'Problem solved',
    description:
      'Architects spend hours manually researching climate-appropriate materials and drafting project briefs. EcoSpace AI automates this, returning a tailored brief and material palette in under 90 seconds.',
  },
  {
    number: '4.',
    title: 'How to use',
    description:
      'Enter site location, project type (residential, civic, commercial), and key constraints. The AI reads climate data, cross-references a curated African materials database, and outputs a brief with orientation guidance, material specs, and sustainability notes.',
  },
  {
    number: '5.',
    title: 'AI model & API stack',
    description:
      'Frontend: Next.js 16 with Turbopack. Reasoning: Claude 3.5 Sonnet API. Database: Supabase for storing briefs, material library, and user projects. Geo-data: OpenWeatherMap + local climate APIs.',
  },
  {
    number: '6.',
    title: 'First working version',
    description:
      'Build a single form capturing site coordinates and project type. Integrate Claude API with climate-aware system prompts. Return JSON-formatted brief. Store outputs in Supabase. Add a simple download-to-PDF button. Ship in 7 days with a 100-material reference library.',
  },
  {
    number: '7.',
    title: 'Safeguards & risks',
    description:
      'All recommendations are advisory only. Users must engage qualified structural engineers before construction. Risks include AI hallucination of unavailable materials, climate-data gaps, and over-reliance on automation. A disclaimer banner appears on every output.',
  },
];

export default function AIProductSection() {
  return (
    <section
      id="ai"
      className="py-16 md:py-24"
      style={{ backgroundColor: '#FAF7F2', color: '#2C241D' }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <AnimatedSection delay={1}>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              EcoSpace AI
            </h2>
            <p className="font-body text-neutral-600 max-w-2xl mx-auto">
              An AI-powered product for architecture and built-environment professionals.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={2}>
          <div className="prose prose-neutral max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {productBrief.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-6 shadow-md border border-neutral-200"
                >
                  <h3 className="font-display text-lg font-bold text-neutral-900 mb-2">
                    {item.number} {item.title}
                  </h3>
                  <p className="font-body text-sm text-neutral-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
