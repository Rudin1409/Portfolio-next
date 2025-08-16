import { HomeSection } from '@/components/sections/home-section';
import { ScrollingBanner } from '@/components/scrolling-banner';
import { AboutSection } from '@/components/sections/about-section';
import { StatsSection } from '@/components/sections/stats-section';
import { ProjectSection } from '@/components/sections/project-section';
import { ContactSection } from '@/components/sections/contact-section';
import { SocialsSection } from '@/components/sections/socials-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeSection />
      <ScrollingBanner />
      <AboutSection />
      <StatsSection />
      <ProjectSection />
      <ContactSection />
      <SocialsSection />
    </div>
  );
}
