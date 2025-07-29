
import Image from "next/image";
import { Bot, Wrench } from 'lucide-react';

const icons = {
  React: () => <Image src="https://placehold.co/64x64.png" alt="React" width={64} height={64} data-ai-hint="react logo" />,
  Nextjs: () => <Image src="https://placehold.co/64x64.png" alt="Next.js" width={64} height={64} data-ai-hint="nextjs logo" />,
  Javascript: () => <Image src="https://placehold.co/64x64.png" alt="JavaScript" width={64} height={64} data-ai-hint="javascript logo" />,
  Tailwind: () => <Image src="https://placehold.co/64x64.png" alt="Tailwind CSS" width={64} height={64} data-ai-hint="tailwind css logo" />,
  Html5: () => <Image src="https://placehold.co/64x64.png" alt="HTML5" width={64} height={64} data-ai-hint="html5 logo" />,
  Css3: () => <Image src="https://placehold.co/64x64.png" alt="CSS3" width={64} height={64} data-ai-hint="css3 logo" />,
  Nodejs: () => <Image src="https://placehold.co/64x64.png" alt="Node.js" width={64} height={64} data-ai-hint="nodejs logo" />,
  Express: () => <Image src="https://placehold.co/64x64.png" alt="Express" width={64} height={64} data-ai-hint="express js logo" />,
  Python: () => <Image src="https://placehold.co/64x64.png" alt="Python" width={64} height={64} data-ai-hint="python logo" />,
  Mongodb: () => <Image src="https://placehold.co/64x64.png" alt="MongoDB" width={64} height={64} data-ai-hint="mongodb logo" />,
  Postgresql: () => <Image src="https://placehold.co/64x64.png" alt="PostgreSQL" width={64} height={64} data-ai-hint="postgresql logo" />,
  Github: () => <Image src="https://placehold.co/64x64.png" alt="GitHub" width={64} height={64} data-ai-hint="github logo" />,
  Vercel: () => <Image src="https://placehold.co/64x64.png" alt="Vercel" width={64} height={64} data-ai-hint="vercel logo" />,
  Figma: () => <Image src="https://placehold.co/64x64.png" alt="Figma" width={64} height={64} data-ai-hint="figma logo" />,
  Genkit: () => <Bot className="w-12 h-12" />,
};

export const TechIcon = ({ icon }) => {
  const IconComponent = icons[icon];
  return IconComponent ? <IconComponent /> : null;
};
