import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Phone, Mail, Instagram, MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/SectionHead";
import { GlowIcon } from "@/components/site/GlowIcon";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dev Culture" },
      { name: "description", content: "Get in touch with Dev Culture. Tell us about your project and we'll respond within 24 hours with a plan and quote." },
      { property: "og:title", content: "Contact — Dev Culture" },
      { property: "og:description", content: "Get a free quote from Dev Culture within 24 hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let's Talk"
        title={<>Ready to build something <span className="text-gradient-fire">amazing?</span></>}
        sub="Tell us about your project. We'll get back within 24 hours with a clear plan and quote."
      />

      <section className="relative pb-24 md:pb-32">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-[radial-gradient(circle,rgba(255,107,0,0.22),transparent_60%)] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <ContactForm />
            </Reveal>

            <Reveal delay={120} className="lg:col-span-2">
              <aside className="space-y-4">
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
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <form onSubmit={onSubmit} className="glass-card rounded-2xl p-6 md:p-8 space-y-5">
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
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
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
  icon, label, value, href,
}: { icon: typeof Phone; label: string; value: string; href: string }) {
  return (
    <a href={href} className="group flex items-center gap-4 glass-card rounded-2xl p-5">
      <GlowIcon icon={icon} size="sm" />
      <div className="min-w-0 flex-1">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="font-semibold truncate">{value}</div>
      </div>
      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-brand-orange group-hover:translate-x-1 transition-all" />
    </a>
  );
}
