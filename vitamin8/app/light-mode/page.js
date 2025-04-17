'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import clsx from 'clsx';

export default function LightMode() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }, []);

  return (
    <div className="container">
      <h1 className="text-4xl font-bold mb-4">
        ☀️ Light Mode
      </h1>
      
      <p className="mb-8 text-lg">
        Current theme: Light
      </p>
      
      <div className="button-container">
        <Link href="/dark-mode">
          <button className={clsx('btn', 'btn-secondary')}>
            🌙 Dark Mode
          </button>
        </Link>
        
        <Link href="/light-mode">
          <button className={clsx('btn', 'btn-primary')}>
            ☀️ Light Mode
          </button>
        </Link>
      </div>
    </div>
  );
} 