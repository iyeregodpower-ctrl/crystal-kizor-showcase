'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Design AI', href: '#ai' },
  { label: 'Analytics', href: '#analytics' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolled = scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-50/90 dark:bg-neutral-950/90 backdrop-blur-md shadow-sm border-b border-neutral-200 dark:border-neutral-800'
          : 'bg-neutral-950/60 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200/20'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="#" className="flex items-center">
            <Image
              src="/images/Crystal Kizor Logo Collection.png"
              alt="Crystal Kizor Logo"
              width={120}
              height={40}
              style={{ width: '100px', height: 'auto' }}
              className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
            />
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-neutral-700 dark:text-neutral-300 hover:text-gold'
                    : 'text-neutral-200 hover:text-gold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-neutral-700 dark:text-neutral-300 hover:text-gold'
                : 'text-neutral-50 hover:text-gold bg-neutral-800/40 hover:bg-neutral-800/60 backdrop-blur-sm'
            }`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t border-neutral-200 dark:border-neutral-800">
            <div className="flex flex-col space-y-2 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-2 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-gold transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
