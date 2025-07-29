import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "CyberNetix Dashboard",
    description: "An advanced analytics dashboard for a futuristic cybersecurity firm, built with React and D3.js.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "cyberpunk dashboard",
    projectUrl: "#",
  },
  {
    title: "Project Singularity",
    description: "A decentralized social media platform empowering users with data ownership, using Next.js and blockchain.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "abstract network",
    projectUrl: "#",
  },
  {
    title: "QuantumLeap E-commerce",
    description: "A cutting-edge online store for a tech gadget company, featuring 3D product previews and a seamless checkout experience.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "futuristic shopping",
    projectUrl: "#",
  },
  {
    title: "Aetherium Landing Page",
    description: "A visually striking landing page for a SaaS product, focused on high conversion rates and animated with GSAP.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "minimalist landing page",
    projectUrl: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-12 animate-in fade-in-0 slide-in-from-bottom-12 duration-500">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">My Projects</h2>
          <p className="text-muted-foreground">Most Recent Works</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="animate-in fade-in-0 slide-in-from-bottom-12 duration-500" style={{ animationDelay: `${index * 100}ms`}}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
