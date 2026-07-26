import type { LucideIcon } from "lucide-react";

/**
 * Premium "3D-style" glowing icon:
 * - layered radial glows (red -> orange -> gold)
 * - beveled inner ring with subtle highlight
 * - hover intensifies glow
 */
export function GlowIcon({
  icon: Icon,
  size = "md",
  className = "",
}: {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const dim = size === "lg" ? "h-16 w-16" : size === "sm" ? "h-10 w-10" : "h-14 w-14";
  const inner = size === "lg" ? "h-7 w-7" : size === "sm" ? "h-4 w-4" : "h-6 w-6";
  return (
    <span className={`glow-icon relative inline-grid ${dim} shrink-0 place-items-center rounded-2xl ${className}`}>
      {/* outer soft glow */}
      <span className="absolute -inset-3 rounded-[28px] bg-[radial-gradient(circle,rgba(255,107,0,0.55),transparent_65%)] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
      {/* body */}
      <span className="absolute inset-0 rounded-2xl bg-gradient-fire shadow-[0_10px_30px_-10px_rgba(255,45,45,0.7),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-8px_20px_rgba(0,0,0,0.35)]" />
      {/* highlight */}
      <span className="absolute inset-x-2 top-1 h-1/3 rounded-t-xl bg-gradient-to-b from-white/40 to-transparent" />
      {/* ring */}
      <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/25" />
      {/* gold speckle */}
      <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-brand-gold shadow-[0_0_12px_rgba(255,184,0,0.9)]" />
      <Icon className={`${inner} relative text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`} strokeWidth={2.2} />
    </span>
  );
}
