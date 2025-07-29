"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinksLeft = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
];

const navLinksRight = [
    { href: "#projects", label: "Project" },
    { href: "#contact", label: "Contact" },
];

const ZLogo = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 4H18L12 12L18 20H6" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 12H12" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

export function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div 
        className="container mx-auto flex h-20 md:h-24 max-w-7xl items-center justify-between px-4 md:px-6 relative bg-background/80 backdrop-blur-sm"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 5% 100%, 0 85%)'
        }}
      >
        <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/30" style={{ clipPath: 'polygon(5% 0, 95% 0, 100% 100%, 0 100%)' }}></div>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinksLeft.map(({ href, label }) => (
            <Link key={href} href={href} className="text-base md:text-lg font-headline font-semibold uppercase tracking-wider transition-colors hover:text-primary text-foreground cursor-target">
              {label}
            </Link>
          ))}
        </nav>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <Link href="#home" className="flex items-center gap-2 cursor-target">
                <div className="hidden md:block">
                    <ZLogo />
                </div>
                <div className="flex flex-col text-center md:text-left">
                    <span className="text-lg md:text-xl font-bold text-foreground tracking-wider font-headline">M. BAHRUDIN</span>
                    <span className="text-[10px] md:text-xs text-primary tracking-widest font-body">WEB & AI ENTHUSIAST</span>
                </div>
            </Link>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinksRight.map(({ href, label }) => (
            <Link key={href} href={href} className="text-base md:text-lg font-headline font-semibold uppercase tracking-wider transition-colors hover:text-primary text-foreground cursor-target">
              {label}
            </Link>
          ))}
        </nav>
        
        <div className="md:hidden flex-1">
             <Link href="#home" className="flex items-center gap-2 cursor-target">
                <ZLogo />
            </Link>
        </div>
        <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="cursor-target">
                {isMobileMenuOpen ? <X className="h-8 w-8 text-foreground"/> : <Menu className="h-8 w-8 text-foreground" />}
            </button>
        </div>

        {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-background/95 md:hidden">
                 <nav className="flex flex-col items-center gap-6 py-6">
                  {[...navLinksLeft, ...navLinksRight].map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xl font-headline font-semibold uppercase tracking-wider transition-colors hover:text-primary text-foreground cursor-target"
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
            </div>
        )}
      </div>
    </header>
  );
}
