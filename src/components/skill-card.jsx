
export function SkillCard({ name, children }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-secondary rounded-lg transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/30 cursor-target border border-border hover:border-primary">
        <div className="w-16 h-16 mb-4 flex items-center justify-center text-foreground">
            {children}
        </div>
      <p className="text-foreground font-semibold text-center text-sm">{name}</p>
    </div>
  );
}
