"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#141420]">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <Fade direction="up" triggerOnce>
            <div className="text-center mb-12">
              <h2 className="font-bold text-4xl text-white">About Me</h2>
              <p className="text-gray-400">My introduction</p>
            </div>
        </Fade>
        <div className="grid items-center gap-12 md:grid-cols-2">
            <Fade direction="left" triggerOnce>
              <div className="flex justify-center">
                <Image
                  src="https://placehold.co/400x400.png"
                  alt="About Me"
                  width={400}
                  height={400}
                  data-ai-hint="programmer portrait"
                  className="rounded-3xl object-cover shadow-lg"
                />
              </div>
            </Fade>
          <div className="space-y-6">
            <Fade direction="right" triggerOnce>
                <p className="text-gray-400 leading-relaxed text-center md:text-left">
                  I am a passionate full-stack developer with a knack for creating dynamic and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I thrive on turning complex problems into elegant, efficient solutions. My journey in web development has been driven by a constant curiosity and a desire to build things that make a difference. I'm excited to bring my skills and passion to your next project.
                </p>
                <div className="flex justify-center md:justify-start">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6">
                        <a href="/cv.pdf" download>Download CV</a>
                    </Button>
                </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
