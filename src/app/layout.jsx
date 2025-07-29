"use client";

import { useState, useEffect } from 'react';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { Preloader } from '@/components/preloader';
import FluidCursor from '@/components/fluid-cursor';

const metadata = {
  title: 'Zain | Portfolio',
  description: 'Zain Ahmad F, a passionate full-stack developer.',
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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;900&family=Roboto+Mono&display=swap" rel="stylesheet" />
        </head>
        <body className="antialiased">
          <Preloader onEnter={handleEnter} />
        </body>
      </html>
    );
  }

  return (
    <html lang="en" className="dark !scroll-smooth">
      <head>
        <meta name="description" content={metadata.description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto+Mono&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <FluidCursor />
        <Header />
        <main className="relative overflow-x-hidden">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
