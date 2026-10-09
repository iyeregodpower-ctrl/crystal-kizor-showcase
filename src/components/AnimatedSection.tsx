'use client';

import { useRef } from 'react';
import { useScrollInview } from '@/hooks/useScrollInview';
import type { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useScrollInview(ref);

  const delayClass =
    delay === 0 ? '' : delay === 1 ? 'stagger-1' : delay === 2 ? 'stagger-2' : delay === 3 ? 'stagger-3' : delay === 4 ? 'stagger-4' : delay === 5 ? 'stagger-5' : 'stagger-6';

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
