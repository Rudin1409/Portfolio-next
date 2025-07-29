import Link from "next/link";
import { Github, Instagram } from "lucide-react";

const TikTokIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2859 3333"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    fill="currentColor"
    {...props}
  >
    <path
      d="M2081 0c55 473 319 755 778 781v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"
    />
  </svg>
);


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
          <Link href="https://www.instagram.com/zainahmadf28/" target="_blank" aria-label="Instagram" className="cursor-target">
            <Instagram className="h-6 w-6 text-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="#" aria-label="TikTok" className="cursor-target">
            <TikTokIcon className="h-6 w-6 text-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
