"use client";
import { Github, Linkedin, Instagram, Bot, ArrowDown } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter'

export function Preloader({ onEnter }) {
  return (
    <div className="fixed inset-0 bg-[#121212] flex flex-col items-center justify-center z-[100] text-white">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2">
                 <Bot size={80} className="text-cyan-400 animate-bounce" />
            </div>
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-wider">
          Zain Ahmad Fahrezi
        </h1>
        <p className="text-lg mt-4 tracking-widest">
             <Typewriter
                words={['www.zainahmadf.com']}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
            />
        </p>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <button
          onClick={onEnter}
          className="rounded-full border-2 border-white p-2 animate-bounce mb-4"
          aria-label="Enter website"
        >
          <ArrowDown className="h-6 w-6 text-white" />
        </button>
        <div className="flex items-center gap-6">
            <a href="https://github.com/ZainAhmadF28" target="_blank" aria-label="GitHub">
              <Github className="h-7 w-7 text-white transition-colors hover:text-primary" />
            </a>
            <a href="https://www.linkedin.com/in/zain-ahmad-f/" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-7 w-7 text-white transition-colors hover:text-primary" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="h-7 w-7 text-white transition-colors hover:text-primary" />
            </a>
        </div>
      </div>
    </div>
  );
}
