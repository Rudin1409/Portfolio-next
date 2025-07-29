import { HomeSection } from '@/components/sections/home-section';
import { ScrollingBanner } from '@/components/scrolling-banner';
import { AboutSection } from '@/components/sections/about-section';
import { StatsSection } from '@/components/sections/stats-section';
import { ProjectSection } from '@/components/sections/project-section';
import { SocialsSection } from '@/components/sections/socials-section';
import { ContactSection } from '@/components/sections/contact-section';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeSection />
      <div className="md:hidden -mt-16 mb-8 flex justify-center items-center">
        <Fade direction="up" triggerOnce>
          <div className="relative">
            <Image
              src="https://placehold.co/350x450.png"
              alt="ID Card"
              width={350}
              height={450}
              data-ai-hint="id card developer"
              className="object-contain rounded-lg w-[280px] h-auto"
            />
          </div>
        </Fade>
      </div>
      <ScrollingBanner />
      <AboutSection />
      <StatsSection />
      <ProjectSection />
      <ContactSection />
      <SocialsSection />
    </div>
  );
}
