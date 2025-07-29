"use client";

import { ProjectCard } from "@/components/project-card";
import { Fade } from "react-awesome-reveal";

const projects = [
  {
    title: "E-commerce",
    description: "An e-commerce platform with features like product listing, shopping cart, and checkout. Built with React and Firebase.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online shopping",
    projectUrl: "https://zain-ecommerce.vercel.app/",
    githubUrl: "https://github.com/ZainAhmadF28/zain-ecommerce",
  },
  {
    title: "Food App",
    description: "A food delivery application that allows users to browse restaurants, view menus, and place orders. Developed using the MERN stack.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "food delivery",
    projectUrl: "#",
    githubUrl: "https://github.com/ZainAhmadF28/food-app",
  },
  {
    title: "Chat App",
    description: "A real-time chat application enabling users to send messages, create groups, and share media. Built with Socket.io and Node.js.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "chat application",
    projectUrl: "#",
    githubUrl: "https://github.com/ZainAhmadF28/zain-chat-app",
  },
   {
    title: "Blog App",
    description: "A full-featured blog platform where users can create, edit, and delete posts, as well as comment on others' articles. MERN stack.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "blog interface",
    projectUrl: "https://zain-blog-app.onrender.com/",
    githubUrl: "https://github.com/ZainAhmadF28/zain-blog-app",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-[#141420]">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <Fade direction="up" triggerOnce>
            <div className="text-center mb-12">
              <h2 className="font-bold text-4xl text-white">My Projects</h2>
              <p className="text-gray-400">Most recent works</p>
            </div>
        </Fade>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Fade key={index} direction="up" delay={index * 100} triggerOnce>
              <ProjectCard {...project} />
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
