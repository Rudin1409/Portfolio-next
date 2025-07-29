import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Send } from "lucide-react";

export function HomeSection() {
  return (
    <section id="home" className="container mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 md:px-6">
      <div className="grid w-full items-center gap-8 md:grid-cols-2 lg:gap-12">
        <div className="space-y-6 animate-in fade-in slide-in-from-left-12 duration-500">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            I'm a Developer
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            A Futuristic Web Architect, crafting high-performance, visually stunning web applications with a passion for clean code and intuitive design.
          </p>
          <div className="flex items-center gap-4">
            <Button asChild size="lg">
              <Link href="#contact">
                Let's Connect <Send className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <div className="flex items-center gap-4">
               <Link href="#" aria-label="GitHub">
                  <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
               </Link>
               <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
               </Link>
               <Link href="#" aria-label="Twitter">
                  <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
               </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center animate-in fade-in slide-in-from-right-12 duration-500">
          <Image
            src="https://placehold.co/550x550.png"
            alt="Hero Image"
            width={550}
            height={550}
            data-ai-hint="futuristic character"
            className="rounded-full object-cover aspect-square shadow-2xl shadow-primary/20"
          />
        </div>
      </div>
    </section>
  );
}
