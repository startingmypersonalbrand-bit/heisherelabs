import { createFileRoute } from "@tanstack/react-router";
import { BigCTA, PageHero, Section } from "../components/ui-kit";
import {
  ShoppingBag, Code2, Search, Palette, Workflow, Bot, MessagesSquare, Mail,
  LayoutTemplate, Wrench, Compass, type LucideIcon,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Heishere Labs" },
      { name: "description", content: "Shopify, web development, SEO, UI/UX, AI automation, task bots, email marketing and more — delivered as one accountable growth system." },
      { property: "og:title", content: "Services — Heishere Labs" },
      { property: "og:description", content: "One studio. Eleven integrated services. Zero handoffs between strategy, design and engineering." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

type Service = {
  icon: LucideIcon;
  title: string;
  overview: string;
  benefits: string[];
  deliverables: string[];
  timeline: string;
  startingPrice: string;
  ideal: string;
  tech: string[];
  results: string;
};

const SERVICES: Service[] = [
  {
    icon: ShoppingBag,
    title: "Shopify Development",
    overview: "Premium, high-conversion Shopify and Shopify Plus storefronts engineered for scale, speed and repeat revenue.",
    benefits: ["Sub-second LCP performance", "Owned conversion program", "Custom checkout & subscription flows", "Merch-driven, editable content model"],
    deliverables: ["Custom theme or headless build", "Component library", "CRO test backlog", "Analytics & attribution setup"],
    timeline: "6–12 weeks",
    startingPrice: "$18,000",
    ideal: "DTC brands doing $500k–$50M/yr scaling on Shopify or replatforming from Magento/WooCommerce.",
    tech: ["Shopify Plus", "Hydrogen", "Liquid", "Klaviyo", "Rebuy"],
    results: "Typical outcome: +40–200% conversion lift within 90 days of launch.",
  },
  {
    icon: Code2,
    title: "Custom Web Development",
    overview: "Bespoke platforms and web applications built with modern stacks, uncompromising performance and clean architecture.",
    benefits: ["Type-safe, production-grade code", "Server-rendered performance", "Design-system driven UI", "Long-term maintainability"],
    deliverables: ["Architecture spec", "Component library", "CMS integration", "CI/CD pipeline"],
    timeline: "8–16 weeks",
    startingPrice: "$30,000",
    ideal: "SaaS, marketplaces and content-heavy brands that need a real product team.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "Postgres"],
    results: "Cleaner code, faster releases and a foundation you can grow on for years.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    overview: "Interfaces engineered to persuade — clarity, hierarchy and craft applied to every pixel and interaction.",
    benefits: ["Higher activation & retention", "Reduced support load", "Team-wide design system", "Faster future iteration"],
    deliverables: ["Design system in Figma", "High-fidelity UI", "Prototype flows", "Handoff documentation"],
    timeline: "4–10 weeks",
    startingPrice: "$12,000",
    ideal: "Product teams shipping a redesign or scaling an existing surface.",
    tech: ["Figma", "Framer", "shadcn/ui", "Motion"],
    results: "Sharper product, higher retention, a system your team can extend.",
  },
  {
    icon: Search,
    title: "SEO",
    overview: "Long-term search strategies that turn organic traffic into predictable, compounding revenue.",
    benefits: ["Compounding organic pipeline", "Category authority", "Reduced paid dependence", "Technical foundation for AI search"],
    deliverables: ["Technical audit", "Content strategy", "Programmatic SEO builds", "Monthly performance reports"],
    timeline: "Ongoing · 6-month minimum",
    startingPrice: "$4,500/mo",
    ideal: "Brands with a real content or product-led motion who want durable growth.",
    tech: ["Ahrefs", "Screaming Frog", "Search Console", "Semrush"],
    results: "3–10× organic traffic and pipeline within 12 months.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    overview: "Custom AI systems that eliminate manual work and compound leverage across sales, support and operations.",
    benefits: ["24/7 execution", "Human-in-the-loop safety", "Measurable time savings", "Integrated with your stack"],
    deliverables: ["Use-case discovery", "Custom agents/workflows", "Evaluation harness", "Ops runbook"],
    timeline: "4–12 weeks",
    startingPrice: "$15,000",
    ideal: "Growing teams drowning in manual, repeatable work.",
    tech: ["OpenAI", "Anthropic", "LangGraph", "Vercel AI SDK"],
    results: "40–80% reduction in manual hours on targeted workflows.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    overview: "Workflows and integrations that unify your tools, teams and data into one operational engine.",
    benefits: ["No more copy-paste ops", "Single source of truth", "Faster team velocity", "Fewer human errors"],
    deliverables: ["Process map", "Zapier/Make/n8n builds", "Custom scripts", "Documentation"],
    timeline: "2–8 weeks",
    startingPrice: "$6,000",
    ideal: "Ops-heavy teams stitching 10+ SaaS tools together manually.",
    tech: ["n8n", "Make", "Zapier", "Airtable", "Notion"],
    results: "Reclaim 20–40 hours a week across your ops team.",
  },
  {
    icon: MessagesSquare,
    title: "Task Bots",
    overview: "Purpose-built bots that answer, qualify, route and act — 24/7, on-brand and on-message.",
    benefits: ["Instant response times", "Qualified handoffs", "On-brand tone", "Human escalation built-in"],
    deliverables: ["Bot persona spec", "Knowledge base", "Deployment (web/Slack/WhatsApp)", "Analytics dashboard"],
    timeline: "3–6 weeks",
    startingPrice: "$8,000",
    ideal: "Support-heavy or sales-heavy teams needing 24/7 coverage.",
    tech: ["OpenAI", "Vercel AI SDK", "Twilio", "Intercom"],
    results: "70%+ deflection rate on repeat questions.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    overview: "Lifecycle flows and campaigns that turn subscribers into loyal, high-LTV customers.",
    benefits: ["30–40% of revenue from email", "Segmented, personalized flows", "Design-led templates", "Testing & iteration built-in"],
    deliverables: ["Lifecycle audit", "Core flows (welcome, abandoned, winback)", "Campaign calendar", "Reporting"],
    timeline: "4–8 weeks + retainer",
    startingPrice: "$5,500/mo",
    ideal: "DTC & subscription brands ready to scale email as a revenue channel.",
    tech: ["Klaviyo", "Customer.io", "Postmark"],
    results: "Email as 30–40% of total revenue within two quarters.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    overview: "Campaign-ready pages engineered for a single job: convert intent into revenue.",
    benefits: ["Fast, focused, testable", "Optimized for paid traffic", "A/B ready", "Analytics wired-in"],
    deliverables: ["Copy + design + build", "A/B variants", "Analytics & event tracking"],
    timeline: "2–4 weeks",
    startingPrice: "$4,500",
    ideal: "Performance marketing teams running paid at scale.",
    tech: ["Next.js", "Framer", "Webflow"],
    results: "2–5× conversion lift vs generic template pages.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    overview: "Proactive care, monitoring and continuous improvement — so your site never stops earning.",
    benefits: ["24/7 uptime monitoring", "Monthly performance reviews", "Security patching", "Continuous CRO improvements"],
    deliverables: ["Monitoring stack", "Monthly change log", "Quarterly business review"],
    timeline: "Ongoing",
    startingPrice: "$1,800/mo",
    ideal: "Established brands whose website is a core revenue channel.",
    tech: ["Sentry", "Datadog", "Cloudflare"],
    results: "Fewer incidents. Faster site. Compounding improvements every month.",
  },
  {
    icon: Compass,
    title: "Consulting",
    overview: "Senior strategic advisory on positioning, product, growth and organizational leverage.",
    benefits: ["Outside perspective", "Battle-tested playbooks", "Async + live formats", "Team enablement"],
    deliverables: ["Written strategy", "Working sessions", "Follow-on office hours"],
    timeline: "1 sprint or ongoing",
    startingPrice: "$600/hr",
    ideal: "Founders and executives who need clarity — fast.",
    tech: ["Notion", "Loom", "Miro"],
    results: "Faster decisions. Cleaner strategy. Better bets.",
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Everything a modern brand needs — <span className="text-gradient">under one roof.</span></>}
        description="Eleven integrated services. One accountable studio. Zero handoffs between design, engineering, strategy and growth."
      />

      <Section>
        <div className="space-y-6">
          {SERVICES.map((s, i) => (
            <article key={s.title} id={s.title.toLowerCase().replace(/\s+/g, "-")} className="card-premium overflow-hidden">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_1.3fr] p-8 md:p-12">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-soft border border-border-strong">
                      <s.icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <span className="text-xs font-mono tracking-widest text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-[15px] md:text-base leading-relaxed text-muted-foreground">
                    {s.overview}
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <Meta label="Timeline" value={s.timeline} />
                    <Meta label="Starts at" value={s.startingPrice} />
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-4">
                    <Meta label="Ideal for" value={s.ideal} />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5">
                  <Panel title="Benefits">
                    <ul className="grid gap-2.5 sm:grid-cols-2">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-foreground/90">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </Panel>
                  <Panel title="Deliverables">
                    <ul className="grid gap-2.5 sm:grid-cols-2">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-foreground/90">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </Panel>
                  <div className="grid gap-5 md:grid-cols-2">
                    <Panel title="Technology">
                      <div className="flex flex-wrap gap-2">
                        {s.tech.map((t) => (
                          <span key={t} className="inline-flex items-center rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted-foreground">
                            {t}
                          </span>
                        ))}
                      </div>
                    </Panel>
                    <Panel title="Expected Results">
                      <p className="text-sm leading-relaxed text-foreground/90">{s.results}</p>
                    </Panel>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <BigCTA
        title={<>Not sure which service fits your goal?</>}
        description="Book a discovery call. We'll map your business, identify the fastest lever, and tell you exactly which of these — if any — you should invest in first."
        primary={{ to: "/contact", label: "Book a discovery call" }}
        secondary={{ to: "/pricing", label: "View pricing" }}
      />
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-background/40 p-4">
      <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm font-medium text-foreground">{value}</div>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-background/40 p-6">
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
