
"use client";

import Link from "next/link";
import { Bot, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Project" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
            const scrollPosition = window.scrollY + 150;

            sections.forEach(section => {
                if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
          {navLinks.slice(0, 2).map(({ href, label }) => (
            <Link 
              key={href} 
              href={href} 
              className={cn(
                "text-base md:text-lg font-headline font-semibold uppercase tracking-wider transition-colors hover:text-primary text-foreground cursor-target",
                activeSection === href.substring(1) && "text-primary"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <Link href="#home" className="flex items-center gap-2 cursor-target">
                <div className="hidden md:block text-primary">
                    <Bot className="h-10 w-10" />
                </div>
                <div className="flex flex-col text-center md:text-left">
                    <span className="text-lg md:text-xl font-bold text-foreground tracking-wider font-headline">M. BAHRUDIN</span>
                    <span className="text-[10px] md:text-xs text-primary tracking-widest font-body">WEB & AI ENTHUSIAST</span>
                </div>
            </Link>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.slice(2).map(({ href, label }) => (
            <Link 
              key={href} 
              href={href} 
              className={cn(
                "text-base md:text-lg font-headline font-semibold uppercase tracking-wider transition-colors hover:text-primary text-foreground cursor-target",
                activeSection === href.substring(1) && "text-primary"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        
        <div className="md:hidden flex-1">
             <Link href="#home" className="flex items-center gap-2 cursor-target text-primary">
                <Bot className="h-10 w-10" />
            </Link>
        </div>
        <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="cursor-target z-50">
                {isMobileMenuOpen ? <X className="h-8 w-8 text-foreground"/> : <Menu className="h-8 w-8 text-foreground" />}
            </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden">
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-headline font-semibold uppercase tracking-wider transition-colors hover:text-primary text-foreground cursor-target"
                >
                  {label}
                </Link>
              ))}
            </nav>
        </div>
      )}
    </header>
  );
}
