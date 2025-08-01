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
      <div className="md:hidden mt-8 mb-8 flex justify-center items-center">
        <Fade direction="up" triggerOnce>
          <div className="relative">
            <Image
              src="/card.png"
              alt="ID Card"
              width={300}
              height={400}
              className="object-contain rounded-lg w-[300px] h-auto"
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
