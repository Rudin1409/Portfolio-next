
import { Code, Award, Globe } from "lucide-react";
import { StatCard } from "@/components/stat-card";
import { Fade } from "react-awesome-reveal";

const stats = [
  {
    icon: Code,
    value: "3",
    title: "Total Projects",
    subtitle: "Innovative web & AI solutions",
  },
  {
    icon: Award,
    value: "6",
    title: "Certificates",
    subtitle: "Validated skills in tech",
  },
  {
    icon: Globe,
    value: "2",
    title: "Years of Experience",
    subtitle: "Continuous learning journey",
  },
];

export function StatsSection() {
  return (
    <section id="stats" className="container mx-auto py-16 md:py-24 px-4 md:px-6">
       <div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--primary) / 0.05) 1px, transparent 1px)',
          backgroundSize: '2rem 2rem',
        }}
      >
        <Fade direction="up" cascade damping={0.2} triggerOnce>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              title={stat.title}
              subtitle={stat.subtitle}
            />
          ))}
        </Fade>
      </div>
    </section>
  );
}
