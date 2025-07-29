"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Sparkles } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from 'react-simple-typewriter'

const skills = ["React", "Javascript", "Node.js", "Tailwind"];

export function HomeSection() {
  return (
    <section id="home" className="container mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center px-4 md:px-6">
      <div className="grid w-full items-center gap-8 md:grid-cols-2 lg:gap-12">
        <div className="space-y-6">
         <Fade direction="left" triggerOnce>
            <Button variant="outline" className="rounded-full border-primary/50 bg-primary/10 text-primary hover:bg-primary/20">
                <Sparkles className="mr-2 h-4 w-4" />
                Innovation For the Future
            </Button>
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl text-white text-glow">
                WELCOME TO MY PORTFOLIO
            </h1>
            <h2 className="text-4xl font-bold text-cyan-400">
                <Typewriter
                    words={['Front End Developer', 'Web Designer', 'UI/UX Enthusiast']}
                    loop={true}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                />
            </h2>
            <p className="max-w-md text-lg text-gray-400 md:text-xl">
                I craft responsive and visually engaging websites using React, Tailwind CSS, and modern web technologies.
            </p>
            <div className="flex flex-wrap items-center gap-4">
                {skills.map(skill => (
                    <Button key={skill} variant="outline" className="rounded-full bg-gray-800/50 border-gray-700 hover:bg-gray-700/50">
                        {skill}
                    </Button>
                ))}
            </div>
            <div className="flex items-center gap-4">
               <Link href="https://github.com/ZainAhmadF28" target="_blank" aria-label="GitHub">
                  <div className="p-2 rounded-full bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 transition-colors">
                    <Github className="h-6 w-6 text-white" />
                  </div>
               </Link>
               <Link href="#" aria-label="Instagram">
                    <div className="p-2 rounded-full bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 transition-colors">
                        <Instagram className="h-6 w-6 text-white" />
                    </div>
               </Link>
               <Link href="https://www.linkedin.com/in/zain-ahmad-f/" target="_blank" aria-label="LinkedIn">
                  <div className="p-2 rounded-full bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 transition-colors">
                    <Linkedin className="h-6 w-6 text-white" />
                  </div>
               </Link>
            </div>
            </Fade>
        </div>
        <div className="hidden md:flex justify-center items-center">
            <Fade direction="right" triggerOnce>
                 <div className="relative">
                    <Image
                        src="https://placehold.co/400x600.png"
                        alt="ID Card"
                        width={400}
                        height={600}
                        data-ai-hint="id card developer"
                        className="object-contain rounded-3xl"
                    />
                 </div>
            </Fade>
        </div>
      </div>
    </section>
  );
}