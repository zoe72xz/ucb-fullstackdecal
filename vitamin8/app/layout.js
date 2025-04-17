'use client';

import './globals.css';

export const metadata = {
  title: 'Theme Toggle Demo',
  description: 'A demo of theme toggling in Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 