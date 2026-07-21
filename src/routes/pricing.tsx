import { createFileRoute } from "@tanstack/react-router";
import { BigCTA, PageHero, Section } from "../components/ui-kit";
import { Link } from "@tanstack/react-router";
import { Check, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Heishere Labs" },
      { name: "description", content: "Transparent pricing for premium digital work. Fixed-scope projects, monthly retainers and senior consulting." },
      { property: "og:title", content: "Pricing — Heishere Labs" },
      { property: "og:description", content: "Fixed-scope. No hidden fees. Priced against outcomes, not hours." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

const TIERS = [
  {
    name: "Starter",
    price: "$12k",
    tag: "One-time",
    tagline: "For founders launching a serious first surface.",
    features: [
      "Strategy sprint",
      "Up to 6-page website",
      "Design system foundations",
      "Shopify or Next.js build",
      "On-page SEO & analytics",
      "30 days post-launch support",
    ],
    cta: "Start with Starter",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$28k",
    tag: "One-time · Most popular",
    tagline: "For scaling brands ready to graduate off templates.",
    features: [
      "Everything in Starter",
      "Full brand & positioning refresh",
      "Custom component library",
      "CRO test backlog + first 3 tests",
      "Lifecycle email flows (5)",
      "60 days post-launch iteration",
    ],
    cta: "Start with Growth",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "From $75k",
    tag: "One-time or phased",
    tagline: "For established brands rebuilding their revenue engine.",
    features: [
      "Everything in Growth",
      "Multi-market / multi-language build",
      "Embedded product + strategy pod",
      "AI + automation systems",
      "SOC-aligned engineering",
      "Ongoing quarterly reviews",
    ],
    cta: "Talk to sales",
    highlight: false,
  },
  {
    name: "Custom",
    price: "Let's talk",
    tag: "Bespoke",
    tagline: "For engagements that don't fit a shape above.",
    features: [
      "Fully scoped to your business",
      "Retainer, project or hybrid",
      "Dedicated senior team",
      "Custom SLAs & governance",
      "NDA + IP handling",
      "Global engagement management",
    ],
    cta: "Design an engagement",
    highlight: false,
  },
];

const MODELS = [
  { name: "Project pricing", copy: "Fixed-scope, fixed-fee engagements for websites, brand systems and platform builds. Ideal when you have a clear, bounded outcome to ship." },
  { name: "Monthly retainer", copy: "A fractional senior team for ongoing product, growth and automation work. Priced on capacity, measured on outcomes." },
  { name: "Hourly consulting", copy: "Senior advisory on strategy, product, growth or hiring. Async or live, billed transparently by the hour." },
];

const FAQ = [
  { q: "Do you offer discovery sprints?", a: "Yes. Most large engagements start with a paid discovery sprint (2–3 weeks) so we can produce a written strategy and firm proposal before any build is scoped." },
  { q: "Do you take equity or performance deals?", a: "Occasionally, for aligned partners we believe in. Cash engagements will always be the primary model." },
  { q: "What are your payment terms?", a: "Standard terms are 50% at kickoff, 25% at midpoint, 25% at launch. Retainers are billed monthly in advance." },
  { q: "Do you sign NDAs?", a: "Yes. We're happy to sign your NDA before discovery, and we ship every engagement with a mutual IP + confidentiality agreement." },
];

function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={<>Transparent pricing for <span className="text-gradient">premium work.</span></>}
        description="Every engagement is scoped, priced and delivered against a specific business outcome. No hidden fees. No surprise invoices. Ever."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((t) => (
            <div key={t.name} className={`relative flex flex-col p-8 rounded-2xl ${t.highlight ? "gradient-border" : "card-premium"}`}>
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-white">
                  Most popular
                </span>
              )}
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{t.tag}</div>
              <div className="mt-3 text-lg font-semibold">{t.name}</div>
              <div className="mt-4 text-4xl font-semibold tracking-tight">{t.price}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.tagline}</p>
              <ul className="mt-6 space-y-3 text-sm text-foreground/90">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 text-brand-cyan shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-3 text-sm font-medium transition ${
                  t.highlight
                    ? "bg-gradient-brand text-white shadow-[0_14px_40px_-12px_rgba(139,92,246,0.6)]"
                    : "border border-border text-foreground hover:border-border-strong"
                }`}
              >
                {t.cta} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="How we price" title="Three engagement models">
        <div className="grid gap-6 md:grid-cols-3">
          {MODELS.map((m) => (
            <div key={m.name} className="card-premium p-8">
              <h3 className="text-lg font-semibold">{m.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Pricing FAQ" title="Common questions">
        <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-surface/60">
          {FAQ.map((item) => (
            <details key={item.q} className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-[15px] font-medium">
                {item.q}
                <span className="ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-border text-muted-foreground transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <BigCTA
        title={<>Ready to price your engagement?</>}
        primary={{ to: "/contact", label: "Book a discovery call" }}
        secondary={{ to: "/services", label: "Explore services" }}
      />
    </>
  );
}
