import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ElectricBorder from "./ElectricBorder";

export function ProjectCard({ title, description, imageUrl, imageHint, projectUrl, githubUrl }) {
  return (
    <ElectricBorder
      color="#ff4655"
      speed={1}
      chaos={0.5}
      thickness={1}
      style={{ borderRadius: '0.5rem' }}
      className="transition-transform duration-300 hover:transform hover:-translate-y-2 cursor-target"
    >
      <div className="bg-secondary rounded-lg overflow-hidden h-full flex flex-col">
        <div className="overflow-hidden h-48">
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={400}
            data-ai-hint={imageHint}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="font-bold text-xl text-foreground mb-2">{title}</h3>
          <p className="text-foreground/70 text-sm mb-4 h-20 overflow-y-auto flex-grow">{description}</p>
          <Separator className="my-4 bg-border" />
          <div className="flex justify-between items-center mt-auto">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6 cursor-target">
                  <Link href={projectUrl} target="_blank">
                      View Demo
                  </Link>
              </Button>
              {githubUrl && (
                  <Link href={githubUrl} target="_blank" aria-label="GitHub" className="cursor-target">
                      <Github className="h-7 w-7 text-foreground transition-colors hover:text-primary" />
                  </Link>
              )}
          </div>
        </div>
      </div>
    </ElectricBorder>
  );
}
