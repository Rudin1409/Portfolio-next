import Image from "next/image";

export function SkillCard({ name, iconUrl }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-[#1f1f2b] rounded-lg transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/30">
        <div className="w-20 h-20 mb-4 flex items-center justify-center">
            <Image
                src={iconUrl}
                alt={`${name} icon`}
                width={80}
                height={80}
                className="object-contain"
            />
        </div>
      <p className="text-white font-semibold text-center">{name}</p>
    </div>
  );
}
