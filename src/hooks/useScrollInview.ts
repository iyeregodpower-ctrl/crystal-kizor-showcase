import { useEffect, useState, RefObject } from 'react';

export function useScrollInview(
  ref: RefObject<Element | null>,
  options?: IntersectionObserverInit
): boolean {
  const [inView, setInView] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }

    const node = ref?.current;
    if (!node) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return inView;
}