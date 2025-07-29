"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Sparkles, Bot } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from 'react-simple-typewriter'

const skills = ["Web Dev", "AI/ML", "Next.js", "Python"];

export function HomeSection() {
  return (
    <section id="home" className="container mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center px-4 md:px-6">
      <div className="grid w-full items-center gap-8 md:grid-cols-2 lg:gap-12">
        <div className="space-y-6">
         <Fade direction="left" triggerOnce>
            <Button variant="outline" className="rounded-none border-primary bg-primary/10 text-primary hover:bg-primary/20 font-headline uppercase tracking-widest cursor-target">
                <Sparkles className="mr-2 h-4 w-4" />
                Innovation For the Future
            </Button>
            <h1 className="text-8xl font-bold tracking-tighter sm:text-6xl md:text-8xl text-foreground font-headline uppercase text-glow">
                WELCOME TO MY PORTFOLIO
            </h1>
            <h2 className="text-5xl font-bold text-primary font-headline uppercase">
                <Typewriter
                    words={['Web Developer', 'AI Enthusiast', 'Tech Explorer']}
                    loop={true}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                />
            </h2>
            <p className="max-w-md text-lg text-foreground/80 md:text-xl font-body">
                I build innovative web solutions and explore the world of Artificial Intelligence with modern technologies.
            </p>
            <div className="flex flex-wrap items-center gap-4">
                {skills.map(skill => (
                    <Button key={skill} variant="outline" className="rounded-full bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 cursor-target">
                        {skill}
                    </Button>
                ))}
            </div>
            <div className="flex items-center gap-4">
               <Link href="#" target="_blank" aria-label="GitHub" className="cursor-target">
                  <div className="p-2 rounded-full bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 transition-colors">
                    <Github className="h-6 w-6 text-foreground" />
                  </div>
               </Link>
               <Link href="#" aria-label="Instagram" className="cursor-target">
                    <div className="p-2 rounded-full bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 transition-colors">
                        <Instagram className="h-6 w-6 text-foreground" />
                    </div>
               </Link>
               <Link href="#" target="_blank" aria-label="AI Projects" className="cursor-target">
                  <div className="p-2 rounded-full bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 transition-colors">
                    <Bot className="h-6 w-6 text-foreground" />
                  </div>
               </Link>
            </div>
            </Fade>
        </div>
        <div className="hidden md:flex justify-center items-center">
            <Fade direction="right" triggerOnce>
                 <div className="relative">
                    <Image
                        src="https://placehold.co/350x450.png"
                        alt="ID Card"
                        width={350}
                        height={450}
                        data-ai-hint="id card developer"
                        className="object-contain rounded-lg"
                    />
                 </div>
            </Fade>
        </div>
      </div>
    </section>
  );
}
