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
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-24 max-w-7xl items-center justify-between px-4 md:px-6 relative">
        <nav className="hidden items-center gap-8 md:flex">
          {navLinksLeft.map(({ href, label }) => (
            <Link key={href} href={href} className="text-lg font-medium transition-colors hover:text-primary text-white">
              {label}
            </Link>
          ))}
        </nav>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <Link href="#home" className="flex items-center gap-2">
                <ZLogo />
                <div className="flex flex-col">
                    <span className="text-xl font-bold text-white tracking-wider">ZAIN AHMAD FAHREZI</span>
                    <span className="text-xs text-primary tracking-widest">LET'S SEE THE AWESOME EXPERIENCE</span>
                </div>
            </Link>
            <div className="w-[200px] h-[2px] bg-primary mt-2 clip-path-trapezoid"></div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinksRight.map(({ href, label }) => (
            <Link key={href} href={href} className="text-lg font-medium transition-colors hover:text-primary text-white">
              {label}
            </Link>
          ))}
        </nav>
        
        <div className="md:hidden flex-1">
             <Link href="#home" className="flex items-center gap-2">
                <ZLogo />
            </Link>
        </div>
        <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-8 w-8 text-white"/> : <Menu className="h-8 w-8 text-white" />}
            </button>
        </div>

        {isMobileMenuOpen && (
            <div className="absolute top-24 left-0 w-full bg-background/95 md:hidden">
                 <nav className="flex flex-col items-center gap-6 py-6">
                  {[...navLinksLeft, ...navLinksRight].map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xl font-medium transition-colors hover:text-primary text-white"
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
            </div>
        )}
      </div>
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40%] h-[2px] bg-primary/50" style={{ clipPath: 'polygon(15% 0, 85% 0, 100% 100%, 0% 100%)' }}></div>
    </header>
  );
}