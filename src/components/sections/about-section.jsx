import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";
import { Fade } from "react-awesome-reveal";

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto py-24 px-4 md:px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Fade direction="left" triggerOnce>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/350x450.png"
              alt="Mascot"
              width={350}
              height={450}
              data-ai-hint="gamer mascot 3d"
              className="object-contain"
            />
          </div>
        </Fade>
        <Fade direction="right" triggerOnce>
          <div className="space-y-6">
            <h3 className="text-2xl font-headline font-semibold tracking-wider text-foreground">
              HELLO, I'M
            </h3>
            <h2 className="text-7xl font-bold font-headline uppercase text-glow">
              ZAIN AHMAD FAHREZI
            </h2>
            <p className="text-lg text-foreground/80 font-body">
              Saya adalah mahasiswa Teknik Informatika di Universitas Indo Global Mandiri Palembang yang memiliki minat besar dalam pengembangan Front-End dan teknologi web modern. Saya selalu bersemangat untuk belajar hal baru dan menciptakan solusi digital yang inovatif.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 py-2 bg-secondary/20">
              <p className="text-lg italic text-foreground font-body">
                "Whoever strives shall succeed."
              </p>
            </blockquote>
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-headline uppercase tracking-wider cursor-target">
                <Download className="mr-2" />
                Download CV
              </Button>
              <Button size="lg" variant="outline" className="font-headline uppercase tracking-wider cursor-target">
                <Eye className="mr-2" />
                View Projects
              </Button>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
