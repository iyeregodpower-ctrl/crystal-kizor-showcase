'use client';

import AnimatedSection from './AnimatedSection';

const trackingTools = [
  {
    name: 'Google Analytics 4',
    purpose: 'Traffic acquisition, bounce rates, drop-off analysis, UTM attribution',
    features: [
      'Acquisition channels',
      'Engagement metrics',
      'Conversion funnel drop-off',
      'Audience segmentation',
    ],
  },
  {
    name: 'Microsoft Clarity / Hotjar',
    purpose: 'Session recordings, heatmaps, UX friction detection',
    features: [
      'Heatmap visualizations',
      'Session replays',
      'Scroll depth analysis',
      'Click tracking',
    ],
  },
  {
    name: 'Google Search Console',
    purpose: 'Keyword intent analysis, SEO performance, organic traffic quality',
    features: [
      'Top queries report',
      'Page performance',
      'Index coverage',
      'Core Web Vitals',
    ],
  },
];

export default function AnalyticsSection() {
  return (
    <section
      id="analytics"
      className="py-16 md:py-24"
      style={{ backgroundColor: '#2C241D' }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <AnimatedSection delay={1}>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-50 mb-4">
              Analytics & Improvement
            </h2>
            <p className="font-body text-neutral-300 max-w-2xl mx-auto">
              Data-driven insights to continuously refine the design, content, and conversion pathways
              of every brand experience.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {trackingTools.map((tool) => (
              <div
                key={tool.name}
                className="rounded-xl p-6"
                style={{ backgroundColor: '#3A3027' }}
              >
                <h3 className="font-display text-lg font-bold text-neutral-50 mb-2">
                  {tool.name}
                </h3>
                <p className="font-body text-sm text-neutral-300 mb-4">
                  {tool.purpose}
                </p>
                <ul className="space-y-1">
                  {tool.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-neutral-400 text-sm"
                    >
                      <span className="text-gold mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={3}>
          <div
            className="rounded-xl p-8 md:p-12"
            style={{ backgroundColor: '#3A3027' }}
          >
            <h3 className="font-display text-xl md:text-2xl font-bold text-neutral-50 mb-6">
              Conversion Scenario: 5,000 Visitors — 5 Enquiries (0.1% Rate)
            </h3>
            <div className="prose prose-neutral prose-invert max-w-none">
              <p className="font-body text-neutral-300 leading-relaxed mb-4">
                With 5,000 visitors and only 5 enquiries, the funnel is broken. First, audit traffic
                quality via GA4 — are we attracting architects and designers, or casual browsers from
                irrelevant channels? Check bounce rate by source; if the majority of traffic has a
                90%+ bounce rate, the audience is mismatched. Use Hotjar heatmaps to identify UI/UX
                friction points: dead-end pages, confusing navigation, or forms perceived as too long.
                Review the value proposition — does the headline and hero copy immediately communicate
                what we offer and why it matters to an architect's practice?
              </p>
              <p className="font-body text-neutral-300 leading-relaxed mb-4">
                Action plan: (1) Simplify the enquiry form from 8 fields to 2 — name and email —
                reducing cognitive load and form abandonment. (2) Add trust signals above the fold:
                client logos, testimonials, and security/privacy badges. (3) Run A/B tests on CTA
                copy and button placement — test "Let's talk" vs "Book a consultation" and measure
                click-through rate. (4) Segment GA4 audiences to isolate high-intent traffic
                (returning visitors, blog-to-contact journeys) and re-target them with tailored content.
                Target a 1% conversion rate within 6 weeks.
              </p>
              <p className="font-body text-neutral-300 leading-relaxed">
                Track progress weekly in GA4 conversion events, validate learnings through Hotjar
                session replays, and adjust tactics based on Search Console keyword intent data.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
