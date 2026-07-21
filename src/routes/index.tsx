import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShoppingBag, Code2, Palette, Search, Bot, Workflow, MessagesSquare, Mail,
  Sparkles, Gauge, Wrench, LayoutTemplate, ArrowUpRight, Star, Rocket,
  ShieldCheck, Zap, Handshake, LineChart,
} from "lucide-react";
import { BigCTA, CTAButton, Eyebrow, FeatureCard, PageHero, Section, StatBlock } from "../components/ui-kit";
import wendellAsset from "@/assets/wendell-ortiz.jpeg.asset.json";
import deborahAsset from "@/assets/deborah-harris.jpeg.asset.json";
import kenjiAsset from "@/assets/kenji-takahashi.jpeg.asset.json";
import marcusAsset from "@/assets/brands/marcusadler.jpg.asset.json";
import eliesaabAsset from "@/assets/brands/eliesaab.jpg.asset.json";
import marissaAsset from "@/assets/brands/marissa.jpg.asset.json";
import sandsAsset from "@/assets/brands/sands.jpg.asset.json";
import savonchesAsset from "@/assets/brands/savonches.jpg.asset.json";
import brownsAsset from "@/assets/brands/browns.jpg.asset.json";
import sellierAsset from "@/assets/brands/sellier.jpg.asset.json";
import twistAsset from "@/assets/brands/twist.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heishere Labs — Digital Systems Engineered for Growth" },
      {
        name: "description",
        content:
          "Heishere Labs is a premium digital studio designing, engineering and automating growth systems for Fortune 500s, startups and premium ecommerce brands.",
      },
      { property: "og:title", content: "Heishere Labs — Digital Systems Engineered for Growth" },
      { property: "og:description", content: "Heishere Labs is a premium digital studio designing, engineering and automating growth systems for Fortune 500s, startups and premium ecommerce brands." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const SERVICES = [
  { icon: ShoppingBag, title: "Shopify Development", description: "High-conversion Shopify storefronts engineered for scale, speed and repeat revenue." },
  { icon: Code2, title: "Custom Web Development", description: "Bespoke platforms and web apps built with modern stacks, uncompromising performance and clean architecture." },
  { icon: Palette, title: "UI/UX Design", description: "Interfaces engineered to persuade — clarity, hierarchy and craft applied to every pixel." },
  { icon: Search, title: "SEO", description: "Long-term search strategies that turn organic traffic into predictable revenue." },
  { icon: Bot, title: "AI Automation", description: "Custom AI systems that eliminate manual work and compound leverage across teams." },
  { icon: Workflow, title: "Business Automation", description: "Workflows and integrations that unify tools, teams and data into one operational engine." },
  { icon: MessagesSquare, title: "Task Bots", description: "Purpose-built bots that answer, qualify, route and act — 24/7, on-brand and on-message." },
  { icon: Mail, title: "Email Marketing", description: "Lifecycle flows and campaigns that turn subscribers into loyal, high-LTV customers." },
  { icon: Sparkles, title: "Brand Strategy", description: "Positioning, narrative and identity systems that make your brand impossible to ignore." },
  { icon: Gauge, title: "Conversion Optimization", description: "Data-led experimentation that unlocks compounding revenue from your existing traffic." },
  { icon: Wrench, title: "Website Maintenance", description: "Proactive care, monitoring and continuous improvement — so your site never stops earning." },
  { icon: LayoutTemplate, title: "Landing Pages", description: "Campaign-ready pages engineered for a single job: convert intent into revenue." },
];

const WHY = [
  { icon: Sparkles, title: "Strategy First", description: "Every engagement starts with clarity — audience, positioning, and the KPI we're moving." },
  { icon: LineChart, title: "Results Driven", description: "We measure success in revenue, retention and ROI — not deliverables or design awards." },
  { icon: Zap, title: "Fast Communication", description: "Async-first workflows, shared dashboards and same-day responses on active engagements." },
  { icon: ShieldCheck, title: "Transparent Pricing", description: "Fixed-scope proposals, clear timelines and no hidden fees — ever." },
  { icon: Handshake, title: "Long-Term Partnership", description: "We plug into your team as a strategic partner — not a vendor to be managed." },
  { icon: Rocket, title: "Scalable Solutions", description: "Systems engineered to grow with you — from launch to nine-figure operations." },
];

const CLIENTS = [
  { name: "Marcus Adler", category: "Bespoke Menswear · NYC", url: "https://www.marcusadlerny.com/", image: marcusAsset.url },
  { name: "Elie Saab", category: "Haute Couture", url: "https://eliesaab.com/", image: eliesaabAsset.url },
  { name: "Marissa Collections", category: "Luxury Fashion Boutique", url: "https://marissacollections.com/", image: marissaAsset.url },
  { name: "Sands", category: "Luxury Retail · UAE", url: "https://sands-uae.com/", image: sandsAsset.url },
  { name: "Savonches", category: "Curated Luxury Handbags", url: "https://savonches.com/", image: savonchesAsset.url },
  { name: "Browns Fashion", category: "Luxury Multi-Brand", url: "https://brownsfashion.com/?country=NG", image: brownsAsset.url },
  { name: "Sellier Knightsbridge", category: "Pre-Loved Luxury", url: "https://www.sellierknightsbridge.com/", image: sellierAsset.url },
  { name: "Twist", category: "Contemporary Luxury Fashion", url: "https://www.twistonline.com/", image: twistAsset.url },
];

const PROCESS = [
  { n: "01", title: "Discovery", copy: "We map your business, audience and constraints — before touching a pixel." },
  { n: "02", title: "Research", copy: "Market, competitors and behavioral data that inform every decision." },
  { n: "03", title: "Strategy", copy: "A written strategy your team can execute against — with KPIs, risks and priorities." },
  { n: "04", title: "Design", copy: "Systems and interfaces engineered to persuade, not just to please." },
  { n: "05", title: "Development", copy: "Modern stacks. Uncompromising performance. Production-grade code." },
  { n: "06", title: "Growth", copy: "Post-launch iteration, experimentation and compounding improvements." },
];

const TESTIMONIALS = [
  {
    quote:
      "Heishere Labs didn't feel like an agency — they operated like our in-house strategy and product team. Revenue is up 3× and we've never shipped faster.",
    name: "Wendell A. Ortiz",
    role: "CEO, Northwind Beauty",
    image: wendellAsset.url,
  },
  {
    quote:
      "The clearest thinking, the most disciplined execution and the most beautiful work we've seen from any studio, at any price point.",
    name: "Deborah C. Harris",
    role: "Co-founder, Vantra Labs",
    image: deborahAsset.url,
  },
  {
    quote:
      "They rebuilt our entire acquisition engine in 90 days. It's the single best investment we've made this year.",
    name: "Kenji Takahashi",
    role: "VP Growth, Halten Software",
    image: kenjiAsset.url,
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 md:pt-48 pb-20 md:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
        <div className="pointer-events-none absolute inset-0 bg-grid grid-radial-mask opacity-70" />
        <div className="pointer-events-none absolute left-1/2 top-40 hidden h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-brand opacity-25 blur-[120px] animate-glow-pulse md:block" />

        <div className="container-page relative">
          <div className="mx-auto max-w-4xl text-center">
            <Eyebrow>Premium Digital Studio · Est. Global</Eyebrow>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight">
              We build digital experiences{" "}
              <br className="hidden md:block" />
              that drive <span className="text-gradient">real business growth.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Heishere Labs helps ambitious businesses grow through strategy, design, engineering,
              ecommerce and AI automation — delivered as a single, premium system.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <CTAButton to="/contact">Start Your Project</CTAButton>
              <CTAButton to="/work" variant="secondary">View Our Work</CTAButton>
            </div>
          </div>

        </div>
      </section>


      {/* Stats */}
      <Section
        eyebrow="Trusted globally"
        title={<>Numbers that reflect <span className="text-gradient">real outcomes.</span></>}
        description="A snapshot of what a strategy-led studio delivers across engagements."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <StatBlock value="150+" label="Projects Delivered" sub="Shopify · Web · AI · Brand" />
          <StatBlock value="98%" label="Client Satisfaction" sub="Verified post-project" />
          <StatBlock value="8+" label="Countries Served" sub="Remote-first studio" />
          <StatBlock value="300%" label="Average ROI" sub="Measured over 12 months" />
        </div>

        {/* Marquee services */}
        <div className="mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee gap-14 pr-14">
            {[...Array(2)].flatMap((_, r) =>
              [
                "Shopify", "AI Automation", "Brand Strategy", "UI/UX Design", "Web Development",
                "Conversion Optimization", "Email Marketing", "SEO", "Landing Pages", "E-commerce",
                "Analytics", "Performance", "Automation", "API Integrations", "Custom Apps",
                "Responsive Design", "CRO", "Content Strategy",
              ].map((n) => (
                <span key={`${r}-${n}`} className="text-xl md:text-2xl font-semibold tracking-tight text-muted-foreground/60 whitespace-nowrap">
                  {n}
                </span>
              )),
            )}
          </div>
        </div>
      </Section>

      {/* About preview */}
      <Section
        eyebrow="More than a service provider"
        title={<>We embed as your <span className="text-gradient">strategic growth partner.</span></>}
        description="Heishere Labs is a small, senior team of strategists, designers and engineers. We don't hand off deliverables — we build the systems your business runs on."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { title: "Senior-only team", copy: "Every engagement is staffed with strategists, designers and engineers who have shipped for global brands." },
            { title: "Retainer or project", copy: "We work as a fractional product team or as a fixed-scope studio — whichever moves you faster." },
            { title: "Owned by outcomes", copy: "We're measured against your KPIs, not against a Gantt chart or a slide deck." },
          ].map((c) => (
            <div key={c.title} className="card-premium p-8">
              <h3 className="text-xl font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{c.copy}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <CTAButton to="/about" variant="secondary">Meet the studio</CTAButton>
        </div>
      </Section>

      {/* Services */}
      <Section
        eyebrow="Services"
        title={<>A full-stack studio for <span className="text-gradient">modern growth.</span></>}
        description="Twelve integrated services. One accountable team. Zero handoffs between design, engineering and strategy."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <FeatureCard key={s.title} icon={s.icon} title={s.title} description={s.description} href="/services" />
          ))}
        </div>
      </Section>

      {/* Why Heishere Labs */}
      <Section
        eyebrow="Why Heishere Labs"
        title={<>Serious teams choose serious partners.</>}
        description="Six commitments that make us the last agency you'll ever hire."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w) => (
            <FeatureCard key={w.title} icon={w.icon} title={w.title} description={w.description} />
          ))}
        </div>
      </Section>

      {/* Selected clients */}
      <Section
        eyebrow="Selected clients"
        title={<>Trusted by <span className="text-gradient">world-class brands.</span></>}
        description="A selection of luxury retailers, ateliers and fashion houses we're proud to work with."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CLIENTS.map((c) => (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-premium overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                <img
                  src={c.image}
                  alt={`${c.name} website preview`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between gap-3 p-5">
                <div>
                  <h3 className="text-base font-semibold tracking-tight">{c.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{c.category}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </a>
          ))}
        </div>
      </Section>




      {/* Process */}
      <Section
        eyebrow="Our process"
        title={<>A repeatable path from <span className="text-gradient">idea to compounding growth.</span></>}
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((p) => (
            <div key={p.n} className="card-premium p-8">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono tracking-widest text-muted-foreground">{p.n}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{p.copy}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <CTAButton to="/process" variant="secondary">See the full process</CTAButton>
        </div>
      </Section>

      {/* Testimonials */}
      <Section eyebrow="Testimonials" title={<>Words from operators we've partnered with.</>}>
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-7 md:p-8">
              <div className="flex gap-1 text-brand-cyan">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-foreground/90">"{t.quote}"</p>
              <div className="mt-7 flex items-center gap-3 border-t border-border pt-5">
                <img src={t.image} alt={t.name} className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ preview */}
      <Section eyebrow="Questions" title="Frequently asked">
        <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-surface/60">
          {[
            { q: "How do engagements typically start?", a: "With a paid discovery sprint. We audit your business, define the KPI we'll move, and produce a written strategy — before scoping any build." },
            { q: "Do you work with startups or only enterprise?", a: "Both. Our clients range from Series A startups to nine-figure ecommerce brands and Fortune 500 teams." },
            { q: "How is pricing structured?", a: "Fixed-scope projects, monthly retainers or hourly consulting. Every proposal is transparent, itemized and outcome-oriented." },
            { q: "What technologies do you use?", a: "Modern, boring, battle-tested. Shopify, Next.js, React, TypeScript, Tailwind, headless CMSs, and best-in-class AI infrastructure." },
          ].map((item) => (
            <details key={item.q} className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-[15px] font-medium">
                {item.q}
                <span className="ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-border text-muted-foreground transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 text-center">
          <CTAButton to="/faq" variant="ghost">Read all FAQs</CTAButton>
        </div>
      </Section>

      {/* Final CTA */}
      <BigCTA
        title={<>Ready to build something <span className="text-gradient">extraordinary?</span></>}
        description="Tell us where you're headed. We'll show you the fastest, most defensible way to get there."
        primary={{ to: "/contact", label: "Let's talk" }}
        secondary={{ to: "/work", label: "See our work" }}
      />
    </>
  );
}
