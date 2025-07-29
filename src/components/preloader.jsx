"use client";
import { Github, Instagram, Bot, ArrowDown } from 'lucide-react';
import Dither from './Dither';

export function Preloader({ onEnter }) {
  return (
    <div className="fixed inset-0 bg-[#0f1923] flex flex-col items-center justify-center z-[100] text-foreground p-4">
      <div className="absolute inset-0 z-0">
        <Dither
          waveColor={[0.94, 0.27, 0.33]} // Valorant Red: #ff4655 -> HSL(355, 100%, 64%) -> RGB(1, 0.27, 0.33)
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
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
