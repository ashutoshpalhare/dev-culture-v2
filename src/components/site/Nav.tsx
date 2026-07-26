import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/site-data";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-fire glow-red">
        <span className="font-display text-lg font-bold text-white">D</span>
        <span className="absolute inset-0 rounded-lg ring-1 ring-white/20" />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight">
        Dev<span className="text-gradient-fire">Culture</span>
      </span>
    </Link>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              activeOptions={{ exact: true }}
              className="relative text-sm hover:text-foreground transition-colors data-[status=active]:text-foreground group"
            >
              {n.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-gradient-fire transition-all duration-300 group-hover:w-full group-data-[status=active]:w-full" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-fire px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:scale-[1.03] transition-all glow-orange"
          >
            Get Free Quote <ArrowRight className="h-4 w-4" />
          </Link>
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
          <div className="px-5 py-4 flex flex-col gap-1">
            {navLinks.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="py-2.5 text-base text-foreground/90"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-fire px-5 py-3 text-sm font-semibold text-white"
            >
              Get Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
