
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
      <DialogContent className="max-w-2xl bg-secondary border-primary/50 p-6">
        <div className="relative">
          <DialogHeader className="mb-4 pr-10">
              <DialogTitle className="text-2xl text-foreground font-bold">{title}</DialogTitle>
              <div className="flex gap-2 items-center mt-2">
                  <div className="bg-white/10 text-white text-xs font-bold uppercase px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                  {issuer}
                  </div>
                  <div className="bg-primary/80 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm border border-primary">
                  {date}
                  </div>
              </div>
          </DialogHeader>
          
          <div className="relative flex items-center justify-center">
              <Button
                  variant="ghost"
                  size="icon"
                  onClick={onPrev}
                  disabled={!hasPrev}
                  className="absolute left-0 -translate-x-full top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-black/50 hover:bg-black/80 text-white disabled:opacity-50 disabled:cursor-not-allowed hidden sm:flex"
              >
                  <ChevronLeft className="h-6 w-6" />
              </Button>

              <div className="w-full rounded-lg overflow-hidden border border-border">
                  <Image
                      src={imageUrl}
                      alt={`Certificate for ${title}`}
                      width={1600}
                      height={1067}
                      data-ai-hint={imageHint}
                      className="object-contain w-full"
                  />
              </div>

              <Button
                  variant="ghost"
                  size="icon"
                  onClick={onNext}
                  disabled={!hasNext}
                  className="absolute right-0 translate-x-full top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-black/50 hover:bg-black/80 text-white disabled:opacity-50 disabled:cursor-not-allowed hidden sm:flex"
              >
                  <ChevronRight className="h-6 w-6" />
              </Button>
          </div>

          <div className="sm:hidden flex justify-center gap-4 mt-4">
               <Button
                  variant="outline"
                  size="lg"
                  onClick={onPrev}
                  disabled={!hasPrev}
                  className="w-1/2"
              >
                  <ChevronLeft className="h-5 w-5 mr-2" />
                  Prev
              </Button>
               <Button
                  variant="outline"
                  size="lg"
                  onClick={onNext}
                  disabled={!hasNext}
                   className="w-1/2"
              >
                  Next
                  <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}
