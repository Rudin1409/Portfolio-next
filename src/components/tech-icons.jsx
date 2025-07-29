
import Image from "next/image";
import { Bot } from 'lucide-react';

const icons = {
  React: () => <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width={64} height={64} data-ai-hint="react logo" />,
  Nextjs: () => <Image src="https://brandlogos.net/wp-content/uploads/2022/07/next.js-logo_brandlogos.net_zeccw-512x512.png" alt="Next.js" width={64} height={64} data-ai-hint="nextjs logo" />,
  Javascript: () => <Image src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript" width={64} height={64} data-ai-hint="javascript logo" />,
  Tailwind: () => <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" width={64} height={64} data-ai-hint="tailwind css logo" />,
  Html5: () => <Image src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5" width={64} height={64} data-ai-hint="html5 logo" />,
  Css3: () => <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS3" width={64} height={64} data-ai-hint="css3 logo" />,
  Nodejs: () => <Image src="https://e7.pngegg.com/pngimages/353/697/png-clipart-node-js-javascript-front-and-back-ends-computer-software-others-miscellaneous-angle-thumbnail.png" alt="Node.js" width={64} height={64} data-ai-hint="nodejs logo" />,
  Express: () => <Image src="https://w7.pngwing.com/pngs/846/87/png-transparent-mean-solution-stack-express-js-node-js-javascript-github-text-trademark-logo.png" alt="Express" width={64} height={64} data-ai-hint="express js logo" />,
  Python: () => <Image src="https://icon2.cleanpng.com/20180715/fbk/aavgrdv62.webp" alt="Python" width={64} height={64} data-ai-hint="python logo" />,
  Mongodb: () => <Image src="https://brandlogos.net/wp-content/uploads/2020/09/mongodb-logo-512x512.png" alt="MongoDB" width={64} height={64} data-ai-hint="mongodb logo" />,
  Github: () => <Image src="https://brandlogos.net/wp-content/uploads/2020/09/github-logo.png" alt="GitHub" width={64} height={64} data-ai-hint="github logo" />,
  Vercel: () => <Image src="https://brandlogos.net/wp-content/uploads/2021/11/vercel-logo-512x512.png" alt="Vercel" width={64} height={64} data-ai-hint="vercel logo" />,
  Figma: () => <Image src="https://brandlogos.net/wp-content/uploads/2020/09/figma-logo-512x512.png" alt="Figma" width={64} height={64} data-ai-hint="figma logo" />,
  Genkit: () => <Bot className="w-12 h-12" />,
  Laravel: () => <Image src="https://e7.pngegg.com/pngimages/407/190/png-clipart-laravel-new-logo-tech-companies-thumbnail.png" alt="Laravel" width={64} height={64} data-ai-hint="laravel logo" />,
  Mysql: () => <Image src="https://brandlogos.net/wp-content/uploads/2020/09/mysql-logo-512x512.png" alt="MySQL" width={64} height={64} data-ai-hint="mysql logo" />,
};

export const TechIcon = ({ icon }) => {
  const IconComponent = icons[icon];
  return IconComponent ? <IconComponent /> : null;
};
