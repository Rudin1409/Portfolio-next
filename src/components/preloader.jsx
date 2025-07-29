"use client";
import { Github, Linkedin, Instagram, Bot, ArrowDown } from 'lucide-react';
import TextPressure from './text-pressure';

export function Preloader({ onEnter }) {
  return (
    <div className="fixed inset-0 bg-[#121212] flex flex-col items-center justify-center z-[100] text-white p-4">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2">
                 <Bot size={80} className="text-cyan-400 animate-bounce" />
            </div>
        </div>
      </div>

      <div className="text-center w-full max-w-4xl">
        <div className="h-24 md:h-32">
           <TextPressure 
            text="Zain Ahmad Fahrezi" 
            minFontSize={30}
            italic={false}
           />
        </div>
        <div className='h-12'>
            <TextPressure 
              text="www.zainahmadf.com"
              minFontSize={12}
              weight={false}
              italic={false}
            />
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="flex items-center gap-6 mb-4">
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
        <button
          onClick={onEnter}
          className="rounded-full border-2 border-white p-2 animate-bounce"
          aria-label="Enter website"
        >
          <ArrowDown className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
}
