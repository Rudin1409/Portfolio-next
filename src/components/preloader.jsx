"use client";
import { Github, Instagram, Bot, ArrowDown } from 'lucide-react';
import LetterGlitch from './LetterGlitch';

export function Preloader({ onEnter }) {
  return (
    <div className="fixed inset-0 bg-[#0f1923] flex flex-col items-center justify-center z-[100] text-foreground p-4">
      <div className="absolute inset-0 z-0">
        <LetterGlitch
          glitchColors={['#ff4655', '#ece8e1', '#45A7F9']}
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
        />
      </div>

      <div className="relative z-10 text-center w-full max-w-4xl">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2">
                    <Bot size={80} className="text-primary animate-bounce" />
                </div>
            </div>
        </div>

        <div className="text-center w-full max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 font-headline uppercase">M. Bahrudin</h1>
            <p className="text-lg md:text-xl text-foreground/70 font-body">www.bahrudin.dev</p>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
            <div className="flex items-center gap-6 mb-4">
                <a href="#" target="_blank" aria-label="GitHub" className="cursor-target">
                    <Github className="h-7 w-7 text-foreground transition-colors hover:text-primary" />
                </a>
                <a href="#" target="_blank" aria-label="AI Projects" className="cursor-target">
                    <Bot className="h-7 w-7 text-foreground transition-colors hover:text-primary" />
                </a>
                <a href="#" aria-label="Instagram" className="cursor-target">
                    <Instagram className="h-7 w-7 text-foreground transition-colors hover:text-primary" />
                </a>
            </div>
            <button
                onClick={onEnter}
                className="rounded-full border-2 border-foreground p-2 animate-bounce hover:bg-primary hover:border-primary cursor-target"
                aria-label="Enter website"
            >
                <ArrowDown className="h-6 w-6 text-foreground" />
            </button>
        </div>
      </div>
    </div>
  );
}
