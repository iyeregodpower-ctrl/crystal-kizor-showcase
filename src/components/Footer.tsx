'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      className="py-10 text-neutral-300 border-t-2 border-gold relative z-20"
      style={{ backgroundColor: '#0a0a09' }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <div className="mb-1">
              <Image
                src="/images/Crystal Kizor Logo Collection.png"
                alt="Crystal Kizor Logo"
                width={120}
                height={40}
                style={{ width: '80px', height: 'auto' }}
              />
            </div>
            <p className="font-body text-sm text-neutral-400">
              Architect · Designer · Entrepreneur · Speaker · Researcher · Creator
            </p>
          </div>

          <div className="text-center md:text-right">
            <span className="text-xs font-body text-neutral-400">
              &copy; {year ?? ''} Crystal Kizor. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
