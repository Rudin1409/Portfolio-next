import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export function ProjectCard({ title, description, imageUrl, imageHint, projectUrl, githubUrl }) {
  return (
    <div className="bg-[#1f1f2b] rounded-lg overflow-hidden transition-transform duration-300 hover:transform hover:-translate-y-2">
      <div className="overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={600}
          height={400}
          data-ai-hint={imageHint}
          className="object-cover w-full h-48"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 h-24 overflow-y-auto">{description}</p>
        <div className="flex justify-between items-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
                <Link href={projectUrl} target="_blank">
                    Demo
                </Link>
            </Button>
            {githubUrl && (
                <Link href={githubUrl} target="_blank" aria-label="GitHub">
                    <Github className="h-7 w-7 text-white transition-colors hover:text-primary" />
                </Link>
            )}
        </div>
      </div>
    </div>
  );
}
