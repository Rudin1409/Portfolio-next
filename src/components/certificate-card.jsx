import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Download } from "lucide-react";

export function CertificateCard({ title, issuer, date, imageUrl, imageHint, certificateUrl }) {
  return (
    <div className="relative group rounded-lg overflow-hidden cursor-target border border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
      <Image
        src={imageUrl}
        alt={title}
        width={600}
        height={400}
        data-ai-hint={imageHint}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:bg-black/70 transition-all duration-300" />
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
        <div className="flex justify-between items-start">
          <div className="bg-white/10 text-white text-xs font-bold uppercase px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
            {issuer}
          </div>
          <div className="bg-primary/80 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm border border-primary">
            {date}
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-bold text-2xl text-shadow-lg">{title}</h3>
          <Link href={certificateUrl} target="_blank" className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-semibold cursor-target">
            View Certificate
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
