import Link from "next/link";
import { Gamepad2, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <Link href="#home" className="flex items-center gap-2">
              <Gamepad2 className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold font-headline">Radiant Portfolio</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              Crafting digital experiences for the modern web.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="GitHub">
              <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-border/80 pt-6 text-center text-sm text-muted-foreground">
          © {currentYear} Radiant Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
