"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Typewriter } from 'react-simple-typewriter'
import { Fade } from "react-awesome-reveal";

export function HomeSection() {
  return (
    <section id="home" className="container mx-auto flex min-h-screen max-w-7xl items-center px-4 md:px-6">
      <div className="grid w-full items-center gap-8 md:grid-cols-2 lg:gap-12">
        <div className="space-y-6">
         <Fade direction="left" triggerOnce>
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-white">
                Hi, I'm Zain
            </h1>
            <h2 className="text-3xl font-bold text-white">
                a {' '}
                <span className="text-primary font-bold">
                    <Typewriter
                        words={['Full-Stack Developer', 'Web Designer', 'UI/UX Enthusiast']}
                        loop={true}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h2>
            <p className="text-lg text-gray-400 md:text-xl">
                A passionate Full-Stack Developer with a love for creating beautiful and functional web applications.
            </p>
            <div className="flex items-center gap-6">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6">
                    <Link href="#contact">
                        Contact Me
                    </Link>
                </Button>
                <div className="flex items-center gap-4">
                   <Link href="https://github.com/ZainAhmadF28" target="_blank" aria-label="GitHub">
                      <Github className="h-7 w-7 text-white transition-colors hover:text-primary" />
                   </Link>
                   <Link href="https://www.linkedin.com/in/zain-ahmad-f/" target="_blank" aria-label="LinkedIn">
                      <Linkedin className="h-7 w-7 text-white transition-colors hover:text-primary" />
                   </Link>
                   <Link href="#" aria-label="Twitter">
                      <Twitter className="h-7 w-7 text-white transition-colors hover:text-primary" />
                   </Link>
                </div>
            </div>
            </Fade>
        </div>
        <div className="flex justify-center">
        <Fade direction="right" triggerOnce>
            <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-primary rounded-full flex items-center justify-center overflow-hidden">
                <Image
                    src="https://placehold.co/400x450.png"
                    alt="Hero Image"
                    width={400}
                    height={450}
                    data-ai-hint="man developer"
                    className="object-cover"
                />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
