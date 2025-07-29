import { ArrowUpRight } from "lucide-react";

export function StatCard({ icon: Icon, value, title, subtitle }) {
  return (
    <div className="bg-primary/10 backdrop-blur-sm border border-primary rounded-none p-6 flex flex-col justify-between h-full transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
      <div className="flex justify-between items-start">
        <div className="flex-1 space-y-2">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 border border-primary/30">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80 font-headline">
            {title}
          </h3>
          <p className="text-xs text-foreground/60 font-body">{subtitle}</p>
        </div>
        <div className="flex items-baseline">
          <p className="text-6xl font-bold text-foreground font-headline">
            {value}
          </p>
          <ArrowUpRight className="w-6 h-6 text-primary" />
        </div>
      </div>
    </div>
  );
}
