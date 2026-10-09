import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Inter, Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Crystal Kizor — Architect, Designer, Entrepreneur, Speaker, Researcher, Creator',
    template: '%s | Crystal Kizor',
  },
  description:
    'Crystal Kizor is an architect, designer, entrepreneur, speaker, researcher, and creator building across Studio COKA, AKO Alliance, ELEvated, The Effective Architect, Speaking Engagements, Alive and Free, and personal research & authorship.',
  keywords: [
    'Crystal Kizor',
    'architect',
    'designer',
    'entrepreneur',
    'speaker',
    'researcher',
    'Studio COKA',
    'AKO Alliance',
    'ELEvated',
    'The Effective Architect',
    'Alive and Free',
    'African architecture',
    'climate-responsive design',
    'furniture design',
  ],
  authors: [{ name: 'Crystal Kizor' }],
  creator: 'Crystal Kizor',
  publisher: 'Crystal Kizor',
  robots: 'index, follow',
  metadataBase: 'https://crystalkizor.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://crystalkizor.com',
    title: 'Crystal Kizor — Architect, Designer, Entrepreneur, Speaker, Researcher, Creator',
    description:
      'Building thoughtful, climate-responsive architecture, furniture, education platforms, and youth movements across Africa and beyond.',
    siteName: 'Crystal Kizor',
    images: [
      {
        url: '/images/Architectural Studio Portrait.png',
        width: 1200,
        height: 630,
        alt: 'Crystal Kizor in her architectural studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crystal Kizor',
    description:
      'Architect, designer, entrepreneur, speaker, researcher, and creator building across multiple brands and initiatives.',
    images: ['/images/Architectural Studio Portrait.png'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAF8' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A09' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
   children: ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${dmSans.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="font-sans antialiased text-neutral-900 bg-neutral-50 dark:bg-neutral-950 dark:text-neutral-50 overflow-x-hidden">
        <div className="relative flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}