
"use client";

import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Code, Award, Layers } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { CertificateCard } from "@/components/certificate-card";
import { CertificateViewer } from "@/components/certificate-viewer";
import { SkillCard } from "@/components/skill-card";
import { Separator } from "@/components/ui/separator";
import { TechIcon } from "@/components/tech-icons";

const projects = [
  {
    title: "Smart POS AI",
    description: "Aplikasi Point-of-Sale (POS) modern yang terintegrasi dengan AI untuk menyederhanakan penjualan, mengelola inventaris, dan memberikan wawasan bisnis yang cerdas. Dibuat dengan teknologi web modern untuk pengalaman pengguna yang lancar.",
    imageUrl: "/project4.png",
    imageHint: "point of sale cashier",
    projectUrl: "https://smart-pos-ai.vercel.app/",
    githubUrl: "https://github.com/Rudin1409/Smart-POS",
  },
  {
    title: "SquadGoals",
    description: "Platform kolaboratif bagi mahasiswa untuk membentuk tim, mengelola proyek, dan menemukan anggota dengan keterampilan yang cocok untuk kompetisi atau tugas kuliah. Meningkatkan kerja tim dan produktivitas.",
    imageUrl: "/project5.png",
    imageHint: "team collaboration",
    projectUrl: "https://squadgoals-mhs.vercel.app/",
    githubUrl: "https://github.com/Rudin1409/squadgoals",
  },
  {
    title: "ClassHub",
    description: "Sistem manajemen pembelajaran online yang dirancang untuk menghubungkan mahasiswa dan instruktur. Fitur termasuk berbagi materi, pengumpulan tugas, dan alat komunikasi untuk memfasilitasi pendidikan virtual.",
    imageUrl: "/project6.png",
    imageHint: "online learning platform",
    projectUrl: "https://classhub-mhs.vercel.app/landing",
    githubUrl: "https://github.com/Rudin1409/ClassHub",
  },
  {
    title: "Finote",
    description: "Aplikasi manajemen keuangan pribadi yang membantu pengguna melacak pendapatan dan pengeluaran mereka. Fitur termasuk pencatatan keuangan dan pelacakan berbasis kategori untuk meningkatkan literasi keuangan.",
    imageUrl: "/project7.png",
    imageHint: "personal finance app",
    projectUrl: "https://finote-mhs.vercel.app/landing",
    githubUrl: "https://github.com/Rudin1409/Finote",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio site built with React.js, Tailwind CSS, and Vite to showcase my skills and projects.",
    imageUrl: "/project1.png",
    imageHint: "portfolio website",
    projectUrl: "https://rudin1409.github.io/Portofolio_React/",
    githubUrl: "https://github.com/Rudin1409/Portofolio_React",
  },
  {
    title: "IT-Festival 2025",
    description: "A website for the IT-Festival 2025 event, built to provide information and registration for participants.",
    imageUrl: "/project2.png",
    imageHint: "event website",
    projectUrl: "https://itfest25.vercel.app/",
    githubUrl: "https://github.com/Rudin1409/IT-Fest-2025",
  },
  {
    title: "Tic-Tac-Toe Game",
    description: "A classic Tic-Tac-Toe game built with React and Tailwind CSS.",
    imageUrl: "/project3.png",
    imageHint: "tic tac toe game",
    projectUrl: "https://rudin1409.github.io/my-vite-Tic_tac_to_game_react/",
    githubUrl: "https://github.com/Rudin1409/my-vite-Tic_tac_to_game_react",
  },
];

const certificates = [
  {
    title: "Front-End Web Pemula",
    issuer: "Dicoding Indonesia",
    date: "Juni 2023",
    imageUrl: "/sertifikat/1.png",
    imageHint: "frontend certificate",
  },
  {
    title: "Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "Agustus 2023",
    imageUrl: "/sertifikat/2.png",
    imageHint: "web programming certificate",
  },
  {
    title: "Networking",
    issuer: "IT Specialist",
    date: "2023",
    imageUrl: "/sertifikat/3.jpg",
    imageHint: "networking certificate",
  },
  {
    title: "Mikrotik MTCNA",
    issuer: "Mikrotik",
    date: "2024",
    imageUrl: "/sertifikat/4.png",
    imageHint: "mikrotik mtcna certificate",
  },
  {
    title: "Fiber Optic",
    issuer: "LS Cabeling",
    date: "2023",
    imageUrl: "/sertifikat/5.png",
    imageHint: "fiber optic certificate",
  },
  {
    title: "Axioo Class Program Hardware Fundamental",
    issuer: "Axioo",
    date: "2023",
    imageUrl: "/sertifikat/6.png",
    imageHint: "hardware fundamental certificate",
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
            { name: "Python", icon: "Python" },
            { name: "Laravel", icon: "Laravel" },
        ]
    },
    {
        category: "Database",
        skills: [
            { name: "MongoDB", icon: "Mongodb" },
            { name: "MySQL", icon: "Mysql" },
        ]
    },
    {
        category: "Tools & AI",
        skills: [
            { name: "Git & GitHub", icon: "Github" },
            { name: "Vercel", icon: "Vercel" },
            { name: "Figma", icon: "Figma" },
            { name: "Genkit", icon: "Genkit" },
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
  const [selectedCertificateIndex, setSelectedCertificateIndex] = useState(null);

  const openCertificateViewer = (index) => {
    setSelectedCertificateIndex(index);
  };

  const closeCertificateViewer = () => {
    setSelectedCertificateIndex(null);
  };

  const showNextCertificate = () => {
    if (selectedCertificateIndex !== null) {
      setSelectedCertificateIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    }
  };

  const showPrevCertificate = () => {
    if (selectedCertificateIndex !== null) {
      setSelectedCertificateIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
    }
  };

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
                <CertificateCard key={index} {...certificate} onOpen={() => openCertificateViewer(index)} />
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
                            <h3 className="text-2xl font-bold text-primary mb-2 text-center">{category}</h3>
                            <Separator className="bg-border mb-6" />
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
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
    <section id="projects" className="py-16 md:py-24" style={{
        backgroundImage: 'linear-gradient(rgba(15, 25, 35, 0.9), rgba(15, 25, 35, 0.9)), radial-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px)',
        backgroundSize: 'cover, 2rem 2rem'
    }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold font-headline uppercase tracking-wider text-center">
                <span className="text-foreground text-glow">Portfolio</span> <span className="text-primary">Showcase</span>
            </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-[#1a242f] rounded-full p-1.5 flex items-center gap-1 border border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex justify-center items-center gap-2 py-2 px-3 sm:py-2.5 sm:px-6 rounded-full text-xs sm:text-base font-semibold transition-all duration-300 cursor-target ${
                  activeTab === tab.id
                    ? "bg-[#0f1923] text-primary shadow-lg"
                    : "text-foreground/70 hover:bg-white/5"
                }`}
              >
                <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>{renderContent()}</div>

        {selectedCertificateIndex !== null && (
          <CertificateViewer
            isOpen={selectedCertificateIndex !== null}
            onClose={closeCertificateViewer}
            certificate={certificates[selectedCertificateIndex]}
            onNext={showNextCertificate}
            onPrev={showPrevCertificate}
            hasNext={selectedCertificateIndex < certificates.length - 1}
            hasPrev={selectedCertificateIndex > 0}
          />
        )}
      </div>
    </section>
  );
}

    