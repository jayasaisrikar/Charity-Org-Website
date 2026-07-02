import Image from "next/image";
import { programIcons, type ProgramIconName } from "./icons";

type Program = {
  title: string;
  summary: string;
  icon: string;
  image: string;
};

export function ProgramCard({ program }: { program: Program }) {
  const Icon = programIcons[program.icon as ProgramIconName] ?? programIcons.sprout;
  return (
    <article className="group overflow-hidden rounded-4xl border border-plum/10 bg-white transition-shadow hover:shadow-xl hover:shadow-plum/5">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream text-plum">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl font-semibold text-plum">
          {program.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">
          {program.summary}
        </p>
      </div>
    </article>
  );
}
