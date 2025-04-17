'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {

    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    setIsDarkMode(isDark);
    
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const savedTheme = localStorage.getItem('theme');
      const isDark = savedTheme === 'dark';
      setIsDarkMode(isDark);
      
      if (isDark) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);
  
  return (
    <div className="container">
      <h1 className="text-4xl font-bold mb-4">
        {isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </h1>
      
      <p className="mb-8 text-lg">
        Current theme: {isDarkMode ? 'Dark' : 'Light'}
      </p>
      
      <div className="button-container">
        <Link href="/dark-mode">
          <button className={clsx('btn', { 'btn-primary': isDarkMode, 'btn-secondary': !isDarkMode })}>
            🌙 Dark Mode
          </button>
        </Link>
        
        <Link href="/light-mode">
          <button className={clsx('btn', { 'btn-primary': !isDarkMode, 'btn-secondary': isDarkMode })}>
            ☀️ Light Mode
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home; 