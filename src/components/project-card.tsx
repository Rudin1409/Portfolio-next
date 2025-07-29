import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  projectUrl: string;
};

export function ProjectCard({ title, description, imageUrl, imageHint, projectUrl }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50">
      <div className="overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={600}
          height={400}
          data-ai-hint={imageHint}
          className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <CardTitle className="mb-2 font-headline text-xl">{title}</CardTitle>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
      <CardFooter>
        <Button asChild variant="link" className="p-0 text-primary">
          <Link href={projectUrl}>
            View Demo <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
