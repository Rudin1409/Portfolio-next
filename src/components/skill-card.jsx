import Image from "next/image";

export function SkillCard({ name, iconUrl }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-secondary rounded-lg transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/30 cursor-target border border-border hover:border-primary">
        <div className="w-20 h-20 mb-4 flex items-center justify-center">
            <Image
                src={iconUrl}
                alt={`${name} icon`}
                width={80}
                height={80}
                className="object-contain"
                data-ai-hint={name}
            />
        </div>
      <p className="text-foreground font-semibold text-center">{name}</p>
    </div>
  );
}
