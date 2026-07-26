import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/SectionHead";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Dev Culture" },
      { name: "description", content: "Selected work from Dev Culture: web apps, AI products, mobile platforms and cybersecurity systems." },
      { property: "og:title", content: "Portfolio — Dev Culture" },
      { property: "og:description", content: "Selected work shipped for founders and teams worldwide." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title={<>Ideas, <span className="text-gradient-fire">shipped.</span></>}
        sub="A glimpse of what we've built for founders and teams around the world."
      />

      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 70} as="article" className="h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-card transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_30px_60px_-20px_rgba(255,45,45,0.35)]">
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(255,107,0,0.35),transparent_70%)]" />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground backdrop-blur">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-3 font-display text-xl md:text-2xl font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                    <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gradient-fire">
                      View Project <ArrowRight className="h-4 w-4 text-brand-orange" />
                    </button>
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-brand-red/0 group-hover:ring-brand-red/30 transition" />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-20 relative overflow-hidden rounded-3xl glass-card p-10 md:p-14 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,107,0,0.25),transparent_70%)]" />
              <div className="relative">
                <h2 className="font-display text-3xl md:text-4xl font-bold heading-gradient">Your project could be next.</h2>
                <p className="mt-3 text-muted-foreground">Let's build something worth showing off.</p>
                <Link
                  to="/contact"
                  className="mt-6 group inline-flex items-center gap-2 rounded-full bg-gradient-fire px-7 py-4 text-base font-semibold text-white shadow-xl hover:scale-[1.04] transition-all glow-red"
                >
                  Start a Project <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
