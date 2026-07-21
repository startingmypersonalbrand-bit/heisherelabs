import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { BigCTA, PageHero, Section } from "../components/ui-kit";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Heishere Labs" },
      { name: "description", content: "Selected case studies from Heishere Labs — Shopify, SaaS, corporate, branding, AI and landing pages." },
      { property: "og:title", content: "Work — Heishere Labs" },
      { property: "og:description", content: "Real projects. Real metrics. Real outcomes." },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: Work,
});

const CATEGORIES = ["All", "Shopify", "Web Apps", "Corporate", "Branding", "AI", "Landing Pages"] as const;
type Category = (typeof CATEGORIES)[number];

type Project = {
  title: string;
  client: string;
  category: Exclude<Category, "All">;
  problem: string;
  solution: string;
  metrics: { value: string; label: string }[];
  tone: string;
};

const PROJECTS: Project[] = [
  { title: "Rebuilt storefront for a category-defining beauty brand", client: "Northwind Beauty", category: "Shopify", problem: "Legacy Shopify theme with 2.1s LCP and a checkout drop-off above industry benchmarks.", solution: "Full Shopify Plus rebuild with a custom component library, CRO program and lifecycle automation.", metrics: [{ value: "+217%", label: "Revenue" }, { value: "+165%", label: "Organic" }, { value: "-42%", label: "Bounce" }], tone: "from-brand-blue/30 to-brand-violet/30" },
  { title: "Positioning and product surface for a Series B SaaS", client: "Vantra Labs", category: "Web Apps", problem: "Strong product, weak positioning. Marketing site failing to communicate category leadership.", solution: "Complete positioning, marketing site rebuild and integrated AI-powered lead qualification.", metrics: [{ value: "+312%", label: "Qualified leads" }, { value: "-58%", label: "CPL" }, { value: "4.2×", label: "Pipeline velocity" }], tone: "from-brand-violet/30 to-brand-purple/30" },
  { title: "Corporate rebrand for a global logistics group", client: "Meridian Freight", category: "Corporate", problem: "Enterprise brand felt dated compared to challenger competitors winning enterprise RFPs.", solution: "Brand strategy, identity system and multilingual corporate site across five regions.", metrics: [{ value: "+94%", label: "Inbound RFPs" }, { value: "2×", label: "Time-on-site" }, { value: "-31%", label: "Bounce" }], tone: "from-brand-blue/30 to-brand-cyan/30" },
  { title: "AI operations agent for a global support team", client: "Halten Software", category: "AI", problem: "Growing support cost with declining CSAT. Repetitive tickets consuming senior time.", solution: "Custom AI agents integrated into Zendesk, resolving Tier-1 and routing Tier-2 with context.", metrics: [{ value: "73%", label: "Auto-resolution" }, { value: "-46%", label: "Ticket cost" }, { value: "+18", label: "CSAT points" }], tone: "from-brand-purple/30 to-brand-blue/30" },
  { title: "Brand system for a premium wellness startup", client: "Aurelius Living", category: "Branding", problem: "Undifferentiated brand in a crowded wellness market with weak repeat purchase.", solution: "New positioning, verbal identity, visual system and packaging — top to bottom.", metrics: [{ value: "+128%", label: "Repeat rate" }, { value: "+62%", label: "AOV" }, { value: "3.1×", label: "Referrals" }], tone: "from-brand-violet/30 to-brand-cyan/30" },
  { title: "Paid campaign landing pages for a fintech launch", client: "Kinetix Capital", category: "Landing Pages", problem: "High CAC on paid with generic landing experiences and no experimentation loop.", solution: "Design-led landing system with a proper A/B framework and event-driven analytics.", metrics: [{ value: "-41%", label: "CAC" }, { value: "+3.4×", label: "Conversion" }, { value: "22", label: "Winning tests" }], tone: "from-brand-cyan/30 to-brand-blue/30" },
  { title: "Headless commerce for a designer eyewear brand", client: "Longitude Optics", category: "Shopify", problem: "Slow, template-driven site limiting brand storytelling and international growth.", solution: "Headless Shopify build with editorial CMS and localized routing across 6 markets.", metrics: [{ value: "+184%", label: "International rev" }, { value: "1.1s", label: "LCP" }, { value: "+38%", label: "AOV" }], tone: "from-brand-purple/30 to-brand-violet/30" },
  { title: "Internal automation for a modern investment firm", client: "Osmos Partners", category: "AI", problem: "Analyst team spending 40% of week on data hygiene and report preparation.", solution: "Custom AI research agents + internal dashboards unifying data across seven sources.", metrics: [{ value: "-63%", label: "Analyst time" }, { value: "5×", label: "Report cadence" }, { value: "100%", label: "Audit trail" }], tone: "from-brand-blue/30 to-brand-purple/30" },
];

function Work() {
  const [active, setActive] = useState<Category>("All");
  const visible = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title={<>Real projects. <span className="text-gradient">Real metrics.</span> Real outcomes.</>}
        description="A short selection of engagements from the last 24 months. Every project is scoped, staffed and measured against a specific business outcome."
      />

      <Section>
        <div className="mb-10 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`inline-flex items-center rounded-full border px-4 py-2 text-sm transition ${
                active === c
                  ? "border-transparent bg-gradient-brand text-white"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-border-strong"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {visible.map((p) => (
            <Link key={p.title} to="/work" className="group card-premium card-premium-hover overflow-hidden">
              <div className={`relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br ${p.tone}`}>
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0b1020_90%)]" />
                <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-background/40 px-3 py-1 text-xs backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
                  {p.category}
                </div>
                <div className="absolute right-6 top-6 h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-background/40 backdrop-blur inline-flex">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                <div className="absolute bottom-6 left-6 text-xs uppercase tracking-widest text-muted-foreground">{p.client}</div>
              </div>
              <div className="p-8">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-snug">{p.title}</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2 text-sm text-muted-foreground leading-relaxed">
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-foreground">Problem</div>
                    <p className="mt-1.5">{p.problem}</p>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-foreground">Solution</div>
                    <p className="mt-1.5">{p.solution}</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {p.metrics.map((m) => (
                    <div key={m.label} className="rounded-xl border border-border bg-background/40 p-4">
                      <div className="text-lg font-semibold text-gradient">{m.value}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <BigCTA
        title={<>Your project belongs on this page.</>}
        description="Tell us where you're headed. If we're the right fit, we'll show you exactly how to get there."
        primary={{ to: "/contact", label: "Start your project" }}
      />
    </>
  );
}
