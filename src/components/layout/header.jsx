"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-[#141420]" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2">
          <span className="text-3xl font-bold text-white">Zain.</span>
        </Link>
        
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary",
                activeSection === href.substring(1) ? "text-primary" : "text-white"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-8 w-8 text-white"/> : <Menu className="h-8 w-8 text-white" />}
            </button>
        </div>

        {isMobileMenuOpen && (
            <div className="absolute top-20 left-0 w-full bg-[#141420] md:hidden">
                 <nav className="flex flex-col items-center gap-6 py-6">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "text-xl font-medium transition-colors hover:text-primary",
                         activeSection === href.substring(1) ? "text-primary" : "text-white"
                      )}
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
