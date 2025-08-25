"use client";

import { useState, useEffect } from 'react';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { Preloader } from '@/components/preloader';
import TargetCursor from '@/components/TargetCursor';
import Lightning from '@/components/Lightning';

const metadata = {
  title: 'Rudin-Portfolio',
  description: 'M. Bahrudin, a passionate web and AI developer.',
};

export default function RootLayout({
  children,
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.title = 'Welcome';
    } else {
      document.title = metadata.title;
    }
  }, [loading]);
  
  const handleEnter = () => {
    setLoading(false);
  };

  if (loading) {
    return (
      <html lang="en" className="dark !scroll-smooth">
        <head>
          <link rel="icon" href="/logo/logonew.jpeg" type="image/jpeg" sizes="any" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;900&family=Roboto+Mono&family=Teko:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </head>
        <body className="antialiased">
          <TargetCursor />
          <Preloader onEnter={handleEnter} />
        </body>
      </html>
    );
  }

  return (
    <html lang="en" className="dark !scroll-smooth">
      <head>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/logo/logonew.jpeg" type="image/jpeg" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto+Mono&family=Teko:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Lightning 
          hue={355} 
          intensity={1.2}
          speed={0.8}
          size={0.8}
        />
        <TargetCursor 
            spinDuration={5}
            hideDefaultCursor={true}
        />
        <Header />
        <main className="relative overflow-x-hidden">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
