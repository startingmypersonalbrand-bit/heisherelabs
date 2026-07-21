import { Link } from "@tanstack/react-router";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  description,
  align = "left",
  children,
  className = "",
  id,
}: {
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  children?: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative isolate py-20 md:py-28 ${className}`}>
      <div className="container-page">
        {(eyebrow || title || description) && (
          <div
            className={`mb-14 md:mb-20 max-w-3xl ${
              align === "center" ? "mx-auto text-center" : ""
            }`}
          >
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {title && (
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
      {children}
    </span>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 md:pt-44 pb-16 md:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute inset-0 bg-grid grid-radial-mask opacity-70" />
      <div className="container-page relative">
        <div className="max-w-4xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}

export function CTAButton({
  to,
  children,
  variant = "primary",
  className = "",
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 md:px-6 py-3 md:py-3.5 text-sm md:text-[15px] font-medium transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-gradient-brand text-white shadow-[0_14px_40px_-12px_rgba(139,92,246,0.6)] hover:-translate-y-[2px] hover:shadow-[0_18px_50px_-12px_rgba(139,92,246,0.75)]"
      : variant === "secondary"
      ? "glass-strong text-foreground hover:border-border-strong hover:-translate-y-[1px]"
      : "text-foreground hover:bg-surface";
  return (
    <Link to={to} className={`${base} ${styles} ${className}`}>
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </Link>
  );
}

export function StatBlock({
  value,
  label,
  sub,
}: {
  value: string;
  label: string;
  sub?: string;
}) {
  return (
    <div className="card-premium p-6 md:p-8">
      <div className="text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
        {value}
      </div>
      <div className="mt-3 text-sm font-medium text-foreground">{label}</div>
      {sub && <div className="mt-1 text-sm text-muted-foreground">{sub}</div>}
    </div>
  );
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}) {
  const inner = (
    <div className="card-premium card-premium-hover group h-full p-7 md:p-8">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-soft border border-border-strong">
        <Icon className="h-5 w-5 text-foreground" strokeWidth={1.6} />
      </div>
      <h3 className="mt-6 text-lg md:text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-muted-foreground">
        {description}
      </p>
      {href && (
        <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/90 transition group-hover:text-foreground">
          Learn more
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      )}
    </div>
  );
  return href ? (
    <Link to={href} className="block h-full">
      {inner}
    </Link>
  ) : (
    inner
  );
}

export function BigCTA({
  title,
  description,
  primary,
  secondary,
}: {
  title: ReactNode;
  description?: ReactNode;
  primary: { to: string; label: string };
  secondary?: { to: string; label: string };
}) {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-border-strong bg-surface p-10 md:p-16">
          <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-80" />
          <div className="pointer-events-none absolute -right-32 -top-32 hidden h-96 w-96 rounded-full bg-gradient-brand opacity-25 blur-3xl animate-float-slow md:block" />
          <div className="pointer-events-none absolute -bottom-40 -left-16 hidden h-96 w-96 rounded-full bg-brand-cyan opacity-15 blur-3xl animate-float-slow md:block" />
          <div className="relative max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              {title}
            </h2>
            {description && (
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to={primary.to}>{primary.label}</CTAButton>
              {secondary && (
                <CTAButton to={secondary.to} variant="secondary">
                  {secondary.label}
                </CTAButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
