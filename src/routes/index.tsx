import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { services, stats, testimonials } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";
import { SectionHead } from "@/components/site/SectionHead";
import { GlowIcon } from "@/components/site/GlowIcon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dev Culture — Your Ideas, Our Code" },
      { name: "description", content: "Premium software development agency. We build web, mobile, AI and cybersecurity products end-to-end." },
      { property: "og:title", content: "Dev Culture — Your Ideas, Our Code" },
      { property: "og:description", content: "Premium software agency for web, apps, AI and cybersecurity." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesTeaser />
      <TestimonialsTeaser />
      <CtaBanner />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,45,45,0.4),transparent_60%)] blur-3xl animate-float-glow" />
        <div className="absolute top-40 -right-20 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(255,107,0,0.32),transparent_60%)] blur-3xl animate-float-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute -bottom-24 left-10 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(255,184,0,0.22),transparent_60%)] blur-3xl animate-float-glow" style={{ animationDelay: "4s" }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--background))]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur animate-fade-up">
          <span className="relative grid h-2 w-2 place-items-center">
            <span className="absolute inset-0 rounded-full bg-brand-orange animate-pulse-ring" />
            <span className="h-2 w-2 rounded-full bg-brand-orange" />
          </span>
          Now accepting Q2 projects — limited slots
        </div>

        <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight animate-fade-up" style={{ animationDelay: "120ms" }}>
          <span className="heading-gradient">Your Ideas,</span>
          <br />
          <span className="text-gradient-fire">Our Code.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "240ms" }}>
          Dev Culture is a premium software agency that turns ambitious ideas into powerful,
          production-ready digital products. Web, apps, AI, security — engineered end-to-end.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "360ms" }}>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-fire px-7 py-4 text-base font-semibold text-white shadow-xl hover:scale-[1.04] transition-all glow-red"
          >
            Get Free Quote
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-foreground hover:bg-white/10 hover:border-white/25 transition-all backdrop-blur"
          >
            View Our Work
          </Link>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground animate-fade-up" style={{ animationDelay: "500ms" }}>
          {["Trusted by founders worldwide", "NDA-friendly", "On-time delivery", "Post-launch support"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-brand-gold" /> {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section className="relative border-y border-white/5 bg-white/[0.02] backdrop-blur">
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
        {stats.map(({ icon: Icon, num, label }, i) => (
          <Reveal key={label} delay={i * 80} className="flex items-center gap-4 px-6 py-8 md:py-10 justify-center group">
            <GlowIcon icon={Icon} size="sm" />
            <div className="min-w-0">
              <div className="font-display text-2xl md:text-3xl font-bold heading-gradient">{num}</div>
              <div className="text-xs md:text-sm text-muted-foreground truncate">{label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ServicesTeaser() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHead
            eyebrow="Services"
            title={<>What we <span className="text-gradient-fire">build</span></>}
            sub="Five focused practices, one obsessive standard of quality."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 70} as="article" className="h-full">
              <div className="group relative overflow-hidden rounded-2xl glass-card p-7 h-full">
                <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,107,0,0.4),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <GlowIcon icon={icon} />
                  <h3 className="mt-6 font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10 hover:border-white/25 transition"
          >
            Explore all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialsTeaser() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHead eyebrow="Testimonials" title={<>Founders <span className="text-gradient-fire">love us.</span></>} />
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.slice(0, 2).map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="glass-card rounded-2xl p-8 relative overflow-hidden h-full">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,45,45,0.3),transparent_60%)] blur-2xl" />
                <div className="flex gap-1 text-brand-gold">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-4 text-base md:text-lg leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-fire font-display font-semibold text-white">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <div className="min-w-0">
                    <div className="font-semibold truncate">{t.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{t.title}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-card p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,107,0,0.28),transparent_70%)]" />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-5xl font-bold heading-gradient">
                Ready to build something extraordinary?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Tell us about your idea. We'll come back within 24 hours with a plan and quote.
              </p>
              <Link
                to="/contact"
                className="mt-8 group inline-flex items-center gap-2 rounded-full bg-gradient-fire px-7 py-4 text-base font-semibold text-white shadow-xl hover:scale-[1.04] transition-all glow-red"
              >
                Get Free Quote <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
