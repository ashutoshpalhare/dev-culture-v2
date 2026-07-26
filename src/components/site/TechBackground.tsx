export function TechBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* tech grid */}
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      {/* orbs */}
      <div className="absolute -top-40 left-1/3 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,45,45,0.22),transparent_60%)] blur-3xl animate-float-glow" />
      <div className="absolute top-1/2 -right-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,107,0,0.18),transparent_60%)] blur-3xl animate-float-glow" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,184,0,0.12),transparent_60%)] blur-3xl animate-float-glow" style={{ animationDelay: "6s" }} />
    </div>
  );
}
