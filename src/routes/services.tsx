import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/SectionHead";
import { GlowIcon } from "@/components/site/GlowIcon";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Dev Culture" },
      { name: "description", content: "Custom software, websites, mobile apps, cybersecurity and design — engineered end-to-end by Dev Culture." },
      { property: "og:title", content: "Services — Dev Culture" },
      { property: "og:description", content: "Software, web, mobile, security and design services from Dev Culture." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Craft that <span className="text-gradient-fire">converts.</span></>}
        sub="Five focused practices, one obsessive standard of quality. Every engagement is senior-led, outcome-driven and premium end-to-end."
      />

      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-8">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <article className="group relative overflow-hidden rounded-3xl glass-card p-8 md:p-10">
                <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,107,0,0.35),transparent_60%)] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
                  <GlowIcon icon={s.icon} size="lg" />
                  <div>
                    <div className="text-xs uppercase tracking-widest text-brand-gold">0{i + 1}</div>
                    <h2 className="mt-1 font-display text-2xl md:text-3xl font-semibold heading-gradient">{s.title}</h2>
                    <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">{s.long}</p>
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2 max-w-2xl">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-foreground/85">
                          <CheckCircle2 className="h-4 w-4 text-brand-orange" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/contact"
                    className="hidden md:inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-fire px-5 py-3 text-sm font-semibold text-white shadow-lg hover:scale-[1.04] transition-all glow-orange"
                  >
                    Start project <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal>
            <div className="mt-16 text-center">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-fire px-7 py-4 text-base font-semibold text-white shadow-xl hover:scale-[1.04] transition-all glow-red"
              >
                Get Free Quote <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
