import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Linkedin, Github, Phone, Mail } from "lucide-react";
import { navLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black/40 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-fire glow-red">
                <span className="font-display text-lg font-bold text-white">D</span>
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                Dev<span className="text-gradient-fire">Culture</span>
              </span>
            </Link>
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
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 hover:bg-gradient-fire hover:border-transparent hover:scale-110 transition-all"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-brand-gold">Quick Links</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {navLinks.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-foreground transition">{n.label}</Link>
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
