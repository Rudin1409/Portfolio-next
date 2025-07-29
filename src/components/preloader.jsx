"use client";
import { Github, Linkedin, Instagram, Bot } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter'

export function Preloader() {
  return (
    <div className="fixed inset-0 bg-[#121212] flex flex-col items-center justify-center z-[100] text-white">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2">
                 <Bot size={80} className="text-cyan-400 animate-bounce" />
            </div>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1">
                 <span className="text-xs bg-gray-800/50 text-white/80 p-2 rounded-full backdrop-blur-sm">Built with Spline</span>
            </div>
        </div>
        <div className="absolute top-20 right-20">
            <div className="grid grid-cols-5 gap-1 animate-pulse">
                {[...Array(25)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-cyan-400/50 rounded-full" style={{ animationDelay: `${i * 0.05}s` }}></div>
                ))}
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
      
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 flex items-center gap-6">
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
  );
}
