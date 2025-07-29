import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#141420] text-white py-4">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 flex justify-between items-center">
        <p className="text-sm">Copyright © {currentYear} Zain.</p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/ZainAhmadF28" target="_blank" aria-label="GitHub">
            <Github className="h-6 w-6 text-white transition-colors hover:text-primary" />
          </Link>
          <Link href="https://www.linkedin.com/in/zain-ahmad-f/" target="_blank" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-white transition-colors hover:text-primary" />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-6 w-6 text-white transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
