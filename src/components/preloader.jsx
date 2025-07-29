"use client";
import { useEffect } from 'react';
import { Github, Instagram, Linkedin, Bot, ArrowDown } from 'lucide-react';
import LetterGlitch from './LetterGlitch';
import { Typewriter } from 'react-simple-typewriter';

export function Preloader({ onEnter }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onEnter();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onEnter]);

  return (
    <div className="fixed inset-0 bg-[#0f1923] flex flex-col items-center justify-center z-[100] text-foreground p-8">
      <div className="absolute inset-0 z-0">
        <LetterGlitch
          glitchColors={['#ff4655', '#ece8e1', '#45A7F9']}
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-between h-full w-full max-w-4xl text-center">
        {/* Top Spacer/Element */}
        <div className="flex-1 flex items-center justify-center">
           <Bot size={80} className="text-primary animate-bounce" />
        </div>

        {/* Middle Content */}
        <div className="flex-1 flex flex-col items-center justify-center">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-foreground font-headline uppercase text-glow">
              <Typewriter
                words={['M. BAHRUDIN']}
                loop={1}
                cursor
                cursorStyle='_'
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
        </div>
        
        {/* Bottom Content */}
        <div className="flex-1 flex flex-col items-center justify-end gap-4">
            <div className="flex items-center gap-6 mb-4">
                <a href="#" target="_blank" aria-label="GitHub" className="cursor-target">
                    <Github className="h-7 w-7 text-foreground transition-colors hover:text-primary" />
                </a>
                <a href="#" target="_blank" aria-label="LinkedIn" className="cursor-target">
                    <Linkedin className="h-7 w-7 text-foreground transition-colors hover:text-primary" />
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
