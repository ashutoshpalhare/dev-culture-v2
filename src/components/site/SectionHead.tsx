import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";

export function SectionHead({
  eyebrow,
  title,
  sub,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-brand-gold uppercase tracking-widest">
        <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
      </div>
      <h2 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight heading-gradient">
        {title}
      </h2>
      {sub && <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">{sub}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
}) {
  return (
    <section className="relative pt-36 md:pt-44 pb-10 md:pb-16">
      <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center animate-fade-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-brand-gold uppercase tracking-widest">
          <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
        </div>
        <h1 className="mt-5 font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight heading-gradient leading-[1.05]">
          {title}
        </h1>
        {sub && <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">{sub}</p>}
      </div>
    </section>
  );
}
