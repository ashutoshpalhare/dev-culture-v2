import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { whyPoints, team, stats } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/SectionHead";
import { GlowIcon } from "@/components/site/GlowIcon";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dev Culture" },
      { name: "description", content: "Meet Dev Culture — a senior team of engineers, designers and strategists shipping premium software end-to-end." },
      { property: "og:title", content: "About — Dev Culture" },
      { property: "og:description", content: "A studio built for serious operators. Meet the team behind Dev Culture." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>A studio built for <span className="text-gradient-fire">serious operators.</span></>}
        sub="We're a small, senior team who cares as much about your business as we do about our code. No handoffs, no bloat, no vanity features — just outcomes that move numbers."
      />

      <section className="relative py-16 md:py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {whyPoints.map((w, i) => (
              <Reveal key={w.title} delay={i * 80}>
                <div className="group glass-card rounded-2xl p-7 h-full">
                  <GlowIcon icon={w.icon} />
                  <h3 className="mt-6 font-display text-xl font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-brand-gold uppercase tracking-widest">
                The Team
              </div>
              <h2 className="mt-5 font-display text-4xl md:text-5xl font-bold heading-gradient">Meet the builders.</h2>
              <p className="mt-4 text-muted-foreground">Senior engineers and designers who ship — from strategy to production.</p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 70}>
                <div className="group relative overflow-hidden rounded-2xl glass-card p-5 h-full">
                  <div className="aspect-square w-full overflow-hidden rounded-xl bg-gradient-fire-soft">
                    {m.img ? (
                      <img
                        src={m.img}
                        alt={m.name}
                        loading="lazy"
                        width={512}
                        height={512}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="grid h-full w-full place-items-center font-display text-4xl font-bold text-gradient-fire">
                        {m.initials}
                      </div>
                    )}
                  </div>
                  <div className="mt-4">
                    <div className="font-semibold">{m.name}</div>
                    <div className="text-xs uppercase tracking-wider text-brand-orange">{m.role}</div>
                    <p className="mt-2 text-xs text-muted-foreground">{m.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ icon, num, label }, i) => (
            <Reveal key={label} delay={i * 60}>
              <div className="group glass-card rounded-2xl p-6 text-center">
                <div className="flex justify-center"><GlowIcon icon={icon} size="sm" /></div>
                <div className="mt-4 font-display text-3xl font-bold heading-gradient">{num}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl glass-card p-10 md:p-14 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,45,45,0.25),transparent_70%)]" />
              <div className="relative">
                <h2 className="font-display text-3xl md:text-4xl font-bold heading-gradient">Let's build together.</h2>
                <Link
                  to="/contact"
                  className="mt-6 group inline-flex items-center gap-2 rounded-full bg-gradient-fire px-7 py-4 text-base font-semibold text-white shadow-xl hover:scale-[1.04] transition-all glow-red"
                >
                  Get Free Quote <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
