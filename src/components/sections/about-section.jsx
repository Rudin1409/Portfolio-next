"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import ProfileCard from "@/components/ProfileCard";
import "./../ProfileCard.css";

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto py-16 md:py-24 px-4 md:px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Fade direction="left" triggerOnce>
          <div className="flex justify-center">
            <ProfileCard
              name="M. Bahrudin"
              title="Web & AI Enthusiast"
              handle="bahrudin.dev"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/M Bahrudin.png"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
          </div>
        </Fade>
        <Fade direction="right" triggerOnce>
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-headline font-semibold tracking-wider text-foreground">
              HELLO, I'M
            </h3>
            <h2 className="text-5xl md:text-7xl font-bold font-headline uppercase text-glow">
              M. BAHRUDIN
            </h2>
            <p className="text-base md:text-lg text-foreground/80 font-body">
              Saya adalah mahasiswa Manajemen Informatika di Politeknik Negeri Sriwijaya yang memiliki minat besar dalam pengembangan web dan AI. Saya selalu bersemangat untuk belajar teknologi terbaru.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 py-2 bg-secondary/20 text-left">
              <p className="text-base md:text-lg italic text-foreground font-body">
                "Code with curiosity, create with passion."
              </p>
            </blockquote>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-headline uppercase tracking-wider cursor-target">
                <Download className="mr-2" />
                Download CV
              </Button>
              <Button asChild size="lg" variant="outline" className="font-headline uppercase tracking-wider cursor-target">
                <Link href="#projects">
                  <Eye className="mr-2" />
                  View Projects
                </Link>
              </Button>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
