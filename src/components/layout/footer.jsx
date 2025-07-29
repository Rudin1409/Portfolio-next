import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/80 text-white py-4 border-t border-border">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 flex justify-between items-center">
        <p className="text-sm text-foreground/70">Copyright © {currentYear} Zain Ahmad Fahrezi.</p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/ZainAhmadF28" target="_blank" aria-label="GitHub" className="cursor-target">
            <Github className="h-6 w-6 text-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="https://www.linkedin.com/in/zain-ahmad-f/" target="_blank" aria-label="LinkedIn" className="cursor-target">
            <Linkedin className="h-6 w-6 text-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="#" aria-label="Twitter" className="cursor-target">
            <Twitter className="h-6 w-6 text-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
