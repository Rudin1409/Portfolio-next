import { Github, Instagram } from "lucide-react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const TikTokIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2859 3333"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    {...props}
  >
    <path
      d="M2081 0c55 473 319 755 778 781v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"
      fill="#fff"
    />
  </svg>
);

const socialLinks = [
  {
    name: "GitHub",
    description: "Follow my projects on GitHub",
    href: "#",
    icon: <Github className="h-8 w-8 text-white" />,
    className: "bg-gray-700/80 hover:bg-gray-700",
  },
  {
    name: "Instagram",
    description: "Follow me on Instagram",
    href: "#",
    icon: <Instagram className="h-8 w-8 text-white" />,
    className: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
  },
  {
    name: "TikTok",
    description: "Follow me on TikTok",
    href: "#",
    icon: <TikTokIcon className="h-8 w-8" />,
    className: "bg-gradient-to-r from-red-600 to-black hover:from-red-700 hover:to-gray-900",
  },
];

export function SocialsSection() {
  return (
    <section id="socials" className="py-24">
      <div className="container mx-auto max-w-2xl px-4 md:px-6">
        <Fade direction="up" triggerOnce>
          <div className="bg-secondary/50 p-8 rounded-lg border border-border">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8 font-headline uppercase tracking-wider">
              Connect With Me
            </h2>
            <div className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <Link key={link.name} href={link.href} target="_blank">
                  <div
                    className={`flex items-center p-4 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-target ${link.className}`}
                  >
                    <div className="mr-4">{link.icon}</div>
                    <div>
                      <h3 className="font-bold text-lg text-white">
                        {link.name}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
