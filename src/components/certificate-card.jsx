import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

export function CertificateCard({ title, issuer, date, imageUrl, imageHint, onOpen }) {
  return (
    <div 
      className="relative group rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
      onClick={onOpen}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={600}
        height={400}
        data-ai-hint={imageHint}
        className="object-cover w-full h-[250px] transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <div className="bg-white/10 text-white text-xs font-bold uppercase px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
              {issuer}
            </div>
            <div className="bg-primary/80 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm border border-primary">
              {date}
            </div>
          </div>
          <h3 className="font-bold text-xl text-shadow-lg">{title}</h3>
          <Button className="w-full cursor-target" onClick={onOpen}>
            <Eye className="mr-2 h-4 w-4" />
            View Certificate
          </Button>
        </div>
      </div>
    </div>
  );
}
