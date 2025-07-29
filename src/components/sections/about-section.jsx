import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, Users, Download } from "lucide-react";

const stats = [
  { icon: Award, value: "2+ Years", label: "Experience" },
  { icon: Briefcase, value: "15+", label: "Projects Completed" },
  { icon: Users, value: "10+", label: "Satisfied Clients" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-12 animate-in fade-in-0 slide-in-from-bottom-12 duration-500">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
          <p className="text-muted-foreground">My Introduction</p>
        </div>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex justify-center animate-in fade-in slide-in-from-left-12 duration-500">
            <Image
              src="https://placehold.co/500x500.png"
              alt="About Me"
              width={500}
              height={500}
              data-ai-hint="abstract technology"
              className="rounded-xl object-cover shadow-lg"
            />
          </div>
          <div className="space-y-8 animate-in fade-in slide-in-from-right-12 duration-500">
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <stat.icon className="mx-auto h-8 w-8 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-lg font-bold">{stat.value}</CardTitle>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              I am a passionate full-stack developer with a knack for creating dynamic and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I thrive on turning complex problems into elegant, efficient solutions. My journey in web development has been driven by a constant curiosity and a desire to build things that make a difference.
            </p>
            <Button size="lg">
              Download CV <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
