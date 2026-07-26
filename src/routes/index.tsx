import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  Code2,
  Globe,
  Smartphone,
  ShieldCheck,
  Palette,
  Sparkles,
  Menu,
  X,
  Phone,
  Mail,
  Instagram,
  MapPin,
  Star,
  CheckCircle2,
  Users,
  Trophy,
  Rocket,
  Zap,
  Lightbulb,
  Target,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

import projScraper from "@/assets/proj-scraper.jpg";
import projChatgpt from "@/assets/proj-chatgpt.jpg";
import projCollege from "@/assets/proj-college.jpg";
import projHealth from "@/assets/proj-health.jpg";
import projCyber from "@/assets/proj-cyber.jpg";
import teamFounder from "@/assets/team-1.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const services = [
  {
    icon: Code2,
    title: "Software Development",
    desc: "Custom, scalable software engineered around your business logic — from MVP to enterprise.",
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "Blazing-fast, conversion-focused websites built with modern stacks and pixel-perfect design.",
  },
  {
    icon: Smartphone,
    title: "Application Development",
    desc: "Native-feel iOS, Android, and cross-platform apps your users will actually love opening.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    desc: "Proactive audits, penetration testing, and hardening to keep your systems and data safe.",
  },
  {
    icon: Palette,
    title: "Graphic Designing",
    desc: "Brand identity, UI/UX, and motion design that make your product unmistakably premium.",
  },
];

const projects = [
  {
    title: "Web Scraper",
    img: projScraper,
    tags: ["Python", "Scrapy", "PostgreSQL"],
    desc: "Distributed scraping engine processing 2M+ pages daily.",
  },
  {
    title: "ChatGPT Clone",
    img: projChatgpt,
    tags: ["Next.js", "OpenAI", "Streaming"],
    desc: "Multi-model chat platform with memory and tools.",
  },
  {
    title: "College Management System",
    img: projCollege,
    tags: ["React", "Node.js", "MongoDB"],
    desc: "End-to-end platform for students, faculty and admins.",
  },
  {
    title: "AI Health Care Bot",
    img: projHealth,
    tags: ["LLM", "RAG", "FastAPI"],
    desc: "24/7 triage assistant with clinical-grade guardrails.",
  },
  {
    title: "Cyber Threat Detection",
    img: projCyber,
    tags: ["ML", "SIEM", "Kafka"],
    desc: "Real-time anomaly detection across enterprise networks.",
  },
];

const stats = [
  { icon: Trophy, num: "120+", label: "Projects Delivered" },
  { icon: Users, num: "80+", label: "Happy Clients" },
  { icon: Rocket, num: "5+", label: "Years of Craft" },
  { icon: Star, num: "4.9/5", label: "Client Rating" },
];

const whyPoints = [
  {
    icon: Target,
    title: "Tailored Solutions",
    desc: "Every line of code maps to a real business outcome — no bloat, no compromises.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Senior engineers, designers and strategists who ship production-grade work.",
  },
  {
    icon: Lightbulb,
    title: "Innovation at Heart",
    desc: "We bring AI, automation and modern architecture to every project we touch.",
  },
];

const team = [
  {
    name: "Ashutosh Palhare",
    role: "Founder & Tech Lead",
    img: teamFounder,
    bio: "Full-stack architect. 8+ years shipping scalable products.",
  },
  {
    name: "Riya Sharma",
    role: "Lead Designer",
    initials: "RS",
    bio: "Brand & product design for high-growth startups.",
  },
  {
    name: "Karan Mehta",
    role: "Mobile Engineering",
    initials: "KM",
    bio: "iOS & Android specialist. Ex-fintech.",
  },
  {
    name: "Neha Verma",
    role: "Security Engineer",
    initials: "NV",
    bio: "OSCP certified. Loves breaking things (ethically).",
  },
];

const testimonials = [
  {
    quote:
      "Dev Culture rebuilt our platform from the ground up. Traffic tripled and our team finally moves at startup speed again.",
    name: "Arjun Kapoor",
    title: "CEO, LaunchLabs",
  },
  {
    quote:
      "The most professional agency we've worked with. They ship faster than our in-house team and the quality is unreal.",
    name: "Sophia Chen",
    title: "CTO, Northwind AI",
  },
  {
    quote:
      "From strategy to pixels to production — Ashutosh and his team just get it. Absolute killers.",
    name: "Marcus Reid",
    title: "Founder, Reid Ventures",
  },
  {
    quote:
      "They took our vague idea and turned it into a product our customers rave about. Cannot recommend enough.",
    name: "Priya Nair",
    title: "Head of Product, Fluently",
  },
];

const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function Home() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav open={open} setOpen={setOpen} scrolled={scrolled} />
      <Hero />
      <StatsBar />
      <Services />
      <Work />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5 group">
      <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-fire glow-red">
        <span className="font-display text-lg font-bold text-white">D</span>
        <span className="absolute inset-0 rounded-lg ring-1 ring-white/20" />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight">
        Dev<span className="text-gradient-fire">Culture</span>
      </span>
    </a>
  );
}

function Nav({ open, setOpen, scrolled }: { open: boolean; setOpen: (v: boolean) => void; scrolled: boolean }) {
  return (
    <header
      id="top"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-fire px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:opacity-95 hover:scale-[1.02] transition-all glow-orange"
          >
            Get Quote <ArrowRight className="h-4 w-4" />
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl">
          <div className="px-5 py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base text-foreground/90"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-fire px-5 py-3 text-sm font-semibold text-white"
            >
              Get Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      {/* Glow bg */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,45,45,0.35),transparent_60%)] blur-3xl animate-float-glow" />
        <div className="absolute top-40 -right-20 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(255,107,0,0.28),transparent_60%)] blur-3xl animate-float-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute -bottom-24 left-10 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(255,184,0,0.18),transparent_60%)] blur-3xl animate-float-glow" style={{ animationDelay: "4s" }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--background))]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8 text-center animate-fade-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
          <span className="relative grid h-2 w-2 place-items-center">
            <span className="absolute inset-0 rounded-full bg-brand-orange animate-pulse-ring" />
            <span className="h-2 w-2 rounded-full bg-brand-orange" />
          </span>
          Now accepting Q2 projects — limited slots
        </div>

        <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight">
          Your Ideas,
          <br />
          <span className="text-gradient-fire">Our Code.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          Dev Culture is a premium software agency that turns ambitious ideas into powerful,
          production-ready digital products. Web, apps, AI, security — engineered end-to-end.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-fire px-7 py-4 text-base font-semibold text-white shadow-xl hover:scale-[1.03] transition-all glow-red"
          >
            Get Free Quote
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-foreground hover:bg-white/10 transition-all backdrop-blur"
          >
            View Our Work
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
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

/* ---------------- STATS ---------------- */
function StatsBar() {
  return (
    <section className="relative border-y border-white/5 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
        {stats.map(({ icon: Icon, num, label }) => (
          <div key={label} className="flex items-center gap-4 px-6 py-8 md:py-10 justify-center">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-fire-soft border border-white/10">
              <Icon className="h-5 w-5 text-brand-orange" />
            </span>
            <div className="min-w-0">
              <div className="font-display text-2xl md:text-3xl font-bold">{num}</div>
              <div className="text-xs md:text-sm text-muted-foreground truncate">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- SECTION HEADER ---------------- */
function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-brand-gold uppercase tracking-widest">
        <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
      </div>
      <h2 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">{sub}</p>}
    </div>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead
          eyebrow="Services"
          title={<>What we <span className="text-gradient-fire">build</span></>}
          sub="Five focused practices, one obsessive standard of quality."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={title}
              className={`group relative overflow-hidden rounded-2xl glass-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 ${
                i === 4 ? "lg:col-span-1 md:col-span-2 lg:col-start-2" : ""
              }`}
            >
              <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,107,0,0.35),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-fire glow-red">
                  <Icon className="h-6 w-6 text-white" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WORK / PORTFOLIO (bento) ---------------- */
function Work() {
  return (
    <section id="work" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead
          eyebrow="Selected Work"
          title={<>Ideas, <span className="text-gradient-fire">shipped.</span></>}
          sub="A glimpse of what we've built for founders and teams around the world."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-6 md:grid-rows-2">
          {projects.map((p, i) => {
            const spans = [
              "md:col-span-3 md:row-span-2",
              "md:col-span-3",
              "md:col-span-2",
              "md:col-span-2",
              "md:col-span-2",
            ];
            return (
              <ProjectCard key={p.title} project={p} className={spans[i]} tall={i === 0} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  className = "",
  tall = false,
}: {
  project: (typeof projects)[number];
  className?: string;
  tall?: boolean;
}) {
  return (
    <article className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-card ${className}`}>
      <div className={`relative ${tall ? "h-72 md:h-full" : "h-56"} w-full overflow-hidden`}>
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground backdrop-blur"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="mt-3 font-display text-xl md:text-2xl font-semibold">{project.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{project.desc}</p>
        <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gradient-fire">
          View Project <ArrowRight className="h-4 w-4 text-brand-orange" />
        </button>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 ring-1 ring-inset ring-brand-red/30" />
      </div>
    </article>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-brand-gold uppercase tracking-widest">
              <Zap className="h-3.5 w-3.5" /> Why Dev Culture
            </div>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl font-bold tracking-tight">
              A studio built for <span className="text-gradient-fire">serious operators.</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We're a small, senior team who cares as much about your business as we do about our
              code. No handoffs, no bloat, no vanity features — just outcomes that move numbers.
            </p>

            <div className="mt-8 space-y-4">
              {whyPoints.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-fire glow-orange">
                    <Icon className="h-5 w-5 text-white" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-semibold">{title}</div>
                    <div className="text-sm text-muted-foreground">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {team.map((m) => (
              <div key={m.name} className="group relative overflow-hidden rounded-2xl glass-card p-5">
                <div className="aspect-square w-full overflow-hidden rounded-xl bg-gradient-fire-soft">
                  {m.img ? (
                    <img
                      src={m.img}
                      alt={m.name}
                      loading="lazy"
                      width={512}
                      height={512}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead
          eyebrow="Testimonials"
          title={<>Founders <span className="text-gradient-fire">love us.</span></>}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="glass-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,45,45,0.3),transparent_60%)] blur-2xl" />
              <div className="flex gap-1 text-brand-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-base md:text-lg leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
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
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-white/5">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-[radial-gradient(circle,rgba(255,107,0,0.2),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHead
          eyebrow="Let's Talk"
          title={<>Ready to build something <span className="text-gradient-fire">amazing?</span></>}
          sub="Tell us about your project. We'll get back within 24 hours with a clear plan and quote."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 glass-card rounded-2xl p-6 md:p-8 space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" name="name" placeholder="Jane Cooper" required />
              <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
            </div>
            <Field label="Phone" name="phone" type="tel" placeholder="+91 98765 43210" />
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                Project Details
              </label>
              <textarea
                name="details"
                rows={5}
                required
                placeholder="Tell us about your idea, timeline and budget..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-brand-orange/60 focus:border-transparent transition"
              />
            </div>
            <button
              type="submit"
              disabled={status !== "idle"}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-fire px-7 py-4 text-base font-semibold text-white shadow-xl hover:scale-[1.01] transition-all glow-red disabled:opacity-70"
            >
              {status === "idle" && (<>Send Message <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" /></>)}
              {status === "sending" && "Sending..."}
              {status === "sent" && (<>Message received — talk soon <CheckCircle2 className="h-5 w-5" /></>)}
            </button>
          </form>

          <aside className="lg:col-span-2 space-y-4">
            <ContactRow icon={Phone} label="Phone" value="+91 8329450916" href="tel:+918329450916" />
            <ContactRow icon={Mail} label="Email" value="devculture4you@gmail.com" href="mailto:devculture4you@gmail.com" />
            <ContactRow icon={Instagram} label="Instagram" value="@devculture4you" href="https://instagram.com/devculture4you" />
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 text-brand-gold text-xs uppercase tracking-widest">
                <MapPin className="h-4 w-4" /> Response Promise
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Every inquiry gets a personal response within <span className="text-foreground font-semibold">24 hours</span>.
                No sales bots, no funnels — you talk to the team building your product.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-brand-orange/60 focus:border-transparent transition"
      />
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 glass-card rounded-2xl p-5 hover:border-white/20 transition-all"
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-fire glow-orange">
        <Icon className="h-5 w-5 text-white" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="font-semibold truncate">{value}</div>
      </div>
      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-brand-orange group-hover:translate-x-1 transition-all" />
    </a>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black/40 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              A premium software agency turning ambitious ideas into powerful digital products.
              Your Ideas, Our Code.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Twitter, Linkedin, Github].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 hover:bg-gradient-fire hover:border-transparent transition"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-brand-gold">Quick Links</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-foreground transition">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-brand-gold">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-orange" /> +91 8329450916</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand-orange" /> devculture4you@gmail.com</li>
              <li className="flex items-center gap-2"><Instagram className="h-4 w-4 text-brand-orange" /> @devculture4you</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Dev Culture. All rights reserved.</div>
          <div>Crafted with <span className="text-gradient-fire font-semibold">fire</span> in India.</div>
        </div>
      </div>
    </footer>
  );
}
