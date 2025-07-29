
"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CertificateViewer({ isOpen, onClose, certificate, onNext, onPrev, hasNext, hasPrev }) {
  if (!certificate) return null;

  const { title, issuer, date, imageUrl, imageHint } = certificate;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-secondary border-primary/50 flex flex-col sm:flex-row items-center p-2 sm:p-6">
        <div className="relative w-full sm:w-auto flex-1 flex items-center justify-center">
            <Button
                variant="ghost"
                size="icon"
                onClick={onPrev}
                disabled={!hasPrev}
                className="absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/50 hover:bg-black/80 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="w-full">
                 <DialogHeader className="sm:hidden mb-4 px-4">
                    <DialogTitle className="text-xl text-foreground font-bold">{title}</DialogTitle>
                    <div className="flex gap-2 justify-center">
                        <div className="bg-white/10 text-white text-xs font-bold uppercase px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                        {issuer}
                        </div>
                        <div className="bg-primary/80 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm border border-primary">
                        {date}
                        </div>
                    </div>
                </DialogHeader>
                 <Image
                    src={imageUrl}
                    alt={`Certificate for ${title}`}
                    width={1600}
                    height={1067}
                    data-ai-hint={imageHint}
                    className="rounded-md object-contain"
                />
            </div>


            <Button
                variant="ghost"
                size="icon"
                onClick={onNext}
                disabled={!hasNext}
                className="absolute right-0 sm:-right-12 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/50 hover:bg-black/80 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronRight className="h-6 w-6" />
            </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
