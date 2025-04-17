'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import clsx from 'clsx';

export default function DarkMode() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <div className="container">
      <h1 className="text-4xl font-bold mb-4">
        🌙 Dark Mode
      </h1>
      
      <p className="mb-8 text-lg">
        Current theme: Dark
      </p>
      
      <div className="button-container">
        <Link href="/dark-mode">
          <button className={clsx('btn', 'btn-primary')}>
            🌙 Dark Mode
          </button>
        </Link>
        
        <Link href="/light-mode">
          <button className={clsx('btn', 'btn-secondary')}>
            ☀️ Light Mode
          </button>
        </Link>
      </div>
    </div>
  );
} 