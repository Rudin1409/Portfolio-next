
"use client";

import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Code, Award, Layers } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { CertificateCard } from "@/components/certificate-card";
import { SkillCard } from "@/components/skill-card";
import { Separator } from "@/components/ui/separator";
import { TechIcon } from "@/components/tech-icons";

const projects = [
  {
    title: "Project Alpha",
    description: "A cutting-edge web application developed using the latest technologies to solve a complex business problem.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "web application screenshot",
    projectUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Beta",
    description: "A mobile-first platform designed for seamless user interaction and engagement, built with a focus on performance.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "mobile platform interface",
    projectUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Gamma",
    description: "An e-commerce site with a custom CMS, providing a robust and scalable solution for online retail.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "e-commerce website",
    projectUrl: "#",
    githubUrl: "#",
  },
];

const certificates = [
  {
    title: "Belajar Membuat Aplikasi Web dengan React",
    issuer: "Dicoding Indonesia",
    date: "Des 2024",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "React certificate",
    certificateUrl: "#",
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    date: "Okt 2024",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "JavaScript certificate",
    certificateUrl: "#",
  },
  {
    title: "Junior Web Developer (BNSP)",
    issuer: "Badan Nasional Sertifikasi Profesi",
    date: "Sep 2024",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "BNSP certificate",
    certificateUrl: "#",
  },
];

const techSkills = [
    {
        category: "Frontend",
        skills: [
            { name: "React", icon: "React" },
            { name: "Next.js", icon: "Nextjs" },
            { name: "JavaScript", icon: "Javascript" },
            { name: "Tailwind CSS", icon: "Tailwind" },
            { name: "HTML5", icon: "Html5" },
            { name: "CSS3", icon: "Css3" },
        ]
    },
    {
        category: "Backend",
        skills: [
            { name: "Node.js", icon: "Nodejs" },
            { name: "Express", icon: "Express" },
        ]
    },
    {
        category: "Database",
        skills: [
            { name: "MongoDB", icon: "Mongodb" },
            { name: "PostgreSQL", icon: "Postgresql" },
        ]
    },
    {
        category: "Tools",
        skills: [
            { name: "Git & GitHub", icon: "Github" },
            { name: "Vercel", icon: "Vercel" },
            { name: "Figma", icon: "Figma" },
            { name: "Tools Lain", icon: "Tools" },
        ]
    },
]

const tabs = [
  { id: "projects", label: "Projects", icon: Code },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "tech-stack", label: "Tech Stack", icon: Layers },
];

export function ProjectSection() {
  const [activeTab, setActiveTab] = useState("projects");

  const renderContent = () => {
    switch (activeTab) {
      case "projects":
        return (
          <Fade key="projects" direction="up" triggerOnce>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </Fade>
        );
      case "certificates":
        return (
          <Fade key="certificates" direction="up" triggerOnce>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((certificate, index) => (
                <CertificateCard key={index} {...certificate} />
              ))}
            </div>
          </Fade>
        );
      case "tech-stack":
        return (
            <Fade key="tech-stack" direction="up" triggerOnce>
                <div className="space-y-12">
                    {techSkills.map(({ category, skills }) => (
                        <div key={category}>
                            <h3 className="text-2xl font-bold text-primary mb-2">{category}</h3>
                            <Separator className="bg-border mb-6" />
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-center">
                                {skills.map((skill, index) => (
                                     <SkillCard key={index} name={skill.name}>
                                        <TechIcon icon={skill.icon} />
                                    </SkillCard>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Fade>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24" style={{
        backgroundImage: 'linear-gradient(rgba(15, 25, 35, 0.9), rgba(15, 25, 35, 0.9)), radial-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px)',
        backgroundSize: 'cover, 2rem 2rem'
    }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center mb-12">
            <div className="w-4 h-8 bg-primary mr-4" />
            <h2 className="text-5xl font-bold font-headline uppercase tracking-wider">
                <span className="text-primary">Portfolio</span> <span className="text-foreground">Showcase</span>
            </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-[#1a242f] rounded-full p-2 flex items-center gap-2 border border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 cursor-target ${
                  activeTab === tab.id
                    ? "bg-[#0f1923] text-primary shadow-lg"
                    : "text-foreground/70 hover:bg-white/5"
                }`}
              >
                <tab.icon className="w-6 h-6" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>{renderContent()}</div>
      </div>
    </section>
  );
}
