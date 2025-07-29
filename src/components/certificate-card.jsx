import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

export function CertificateCard({ title, issuer, date, imageUrl, imageHint }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
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
          <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
            <div className="space-y-2">
               <div className="flex justify-between items-start mb-2">
                <div className="bg-white/10 text-white text-xs font-bold uppercase px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                  {issuer}
                </div>
                <div className="bg-primary/80 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm border border-primary">
                  {date}
                </div>
              </div>
              <h3 className="font-bold text-xl text-shadow-lg">{title}</h3>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-secondary border-primary/50">
        <DialogHeader>
          <DialogTitle className="text-2xl text-foreground font-bold mb-2">{title}</DialogTitle>
          <div className="flex gap-2">
            <div className="bg-white/10 text-white text-xs font-bold uppercase px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
              {issuer}
            </div>
            <div className="bg-primary/80 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm border border-primary">
              {date}
            </div>
          </div>
        </DialogHeader>
        <div className="mt-4">
          <Image
            src={imageUrl}
            alt={`Certificate for ${title}`}
            width={1200}
            height={800}
            data-ai-hint={imageHint}
            className="rounded-md object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
