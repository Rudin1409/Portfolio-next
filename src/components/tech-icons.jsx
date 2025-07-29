
import Image from "next/image";
import { Bot } from 'lucide-react';

const icons = {
  React: () => <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width={64} height={64} data-ai-hint="react logo" />,
  Nextjs: () => <Image src="/logo/nextjs.png" alt="Next.js" width={64} height={64} data-ai-hint="nextjs logo" />,
  Javascript: () => <Image src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript" width={64} height={64} data-ai-hint="javascript logo" />,
  Tailwind: () => <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" width={64} height={64} data-ai-hint="tailwind css logo" />,
  Html5: () => <Image src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5" width={64} height={64} data-ai-hint="html5 logo" />,
  Css3: () => <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS3" width={64} height={64} data-ai-hint="css3 logo" />,
  Nodejs: () => <Image src="/logo/nodejs.png" alt="Node.js" width={64} height={64} data-ai-hint="nodejs logo" />,
  Express: () => <Image src="/logo/expresjs.png" alt="Express" width={64} height={64} data-ai-hint="express js logo" />,
  Python: () => <Image src="/logo/python.png" alt="Python" width={64} height={64} data-ai-hint="python logo" />,
  Mongodb: () => <Image src="/logo/mongodb.png" alt="MongoDB" width={64} height={64} data-ai-hint="mongodb logo" />,
  Github: () => <Image src="/logo/github.png" alt="GitHub" width={64} height={64} data-ai-hint="github logo" />,
  Vercel: () => <Image src="/logo/vercel.png" alt="Vercel" width={64} height={64} data-ai-hint="vercel logo" />,
  Figma: () => <Image src="/logo/figma.png" alt="Figma" width={64} height={64} data-ai-hint="figma logo" />,
  Genkit: () => <Bot className="w-12 h-12" />,
  Laravel: () => <Image src="/logo/laravel.png" alt="Laravel" width={64} height={64} data-ai-hint="laravel logo" />,
  Mysql: () => <Image src="/logo/mysql.png" alt="MySQL" width={64} height={64} data-ai-hint="mysql logo" />,
};

export const TechIcon = ({ icon }) => {
  const IconComponent = icons[icon];
  return IconComponent ? <IconComponent /> : null;
};
