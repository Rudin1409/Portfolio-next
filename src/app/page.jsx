import { HomeSection } from '@/components/sections/home-section';
import { ScrollingBanner } from '@/components/scrolling-banner';
import { AboutSection } from '@/components/sections/about-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeSection />
      <ScrollingBanner />
      <AboutSection />
    </div>
  );
}
