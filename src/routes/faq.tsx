import { createFileRoute } from "@tanstack/react-router";
import { BigCTA, PageHero, Section } from "../components/ui-kit";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Heishere Labs" },
      { name: "description", content: "Answers to common questions about Heishere Labs — engagements, pricing, timelines, support, SEO, Shopify and automation." },
      { property: "og:title", content: "FAQ — Heishere Labs" },
      { property: "og:description", content: "Straight answers on how we work, what we charge and what we deliver." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQ,
});

const GROUPS: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: "General",
    items: [
      { q: "What kind of clients do you work with?", a: "Ambitious brands: Series A–D startups, DTC ecommerce doing $1M–$100M/yr, and Fortune 500 teams inside a specific business unit." },
      { q: "Are you a full-service agency?", a: "We're a senior digital studio. We cover strategy, brand, design, engineering, SEO, AI and automation — but we do not do PR, media buying or offline advertising." },
      { q: "Where is the team based?", a: "Remote-first, distributed across 8+ countries. We overlap on-call hours across US, EU and APAC." },
    ],
  },
  {
    title: "Pricing",
    items: [
      { q: "How much does a typical engagement cost?", a: "Projects range from $12k for a focused launch to $250k+ for enterprise rebuilds. See the pricing page for tiers." },
      { q: "Do you offer retainers?", a: "Yes. Monthly retainers start at $6k/mo for embedded product, growth or automation work." },
      { q: "Do you offer discounts?", a: "No. We hold pricing so we can hold quality. What we do offer is generous scope on the outcome we're accountable for." },
    ],
  },
  {
    title: "Timeline",
    items: [
      { q: "How quickly can we start?", a: "Discovery sprints usually start within 2 weeks of a signed proposal. Larger builds start within 4 weeks." },
      { q: "How long does a website take?", a: "Landing pages: 2–4 weeks. Standard websites: 6–10 weeks. Enterprise / headless builds: 3–6 months." },
    ],
  },
  {
    title: "Support",
    items: [
      { q: "What happens after launch?", a: "Every project ships with a warranty period (30–60 days). After that, most clients transition to a monthly maintenance retainer." },
      { q: "Do you provide training for our team?", a: "Yes — we ship every engagement with a written handover doc, walkthrough videos and live enablement." },
    ],
  },
  {
    title: "Maintenance",
    items: [
      { q: "What's included in maintenance?", a: "Uptime monitoring, security patches, dependency upgrades, performance reviews, analytics QA and prioritized change requests." },
      { q: "Do you offer 24/7 SLAs?", a: "Yes, on Enterprise plans. Standard maintenance is business-hours across US, EU and APAC coverage." },
    ],
  },
  {
    title: "SEO",
    items: [
      { q: "How long until we see SEO results?", a: "Meaningful improvements land in 3–6 months. Compounding pipeline shows up between months 9–18. SEO is a compounding asset — not a campaign." },
      { q: "Do you guarantee rankings?", a: "No serious partner does. We do guarantee the process, the reporting and the strategic clarity." },
    ],
  },
  {
    title: "Shopify",
    items: [
      { q: "Do you work with Shopify Plus?", a: "Yes — most of our ecommerce engagements are Plus. We also build headless (Hydrogen) storefronts." },
      { q: "Do you handle migrations?", a: "Yes — from Magento, WooCommerce, BigCommerce or legacy Shopify. Migration playbooks are built into every proposal." },
    ],
  },
  {
    title: "Automation",
    items: [
      { q: "What tools do you use for automation?", a: "n8n, Make and Zapier for orchestration. Custom TypeScript for anything complex. AI agents built on OpenAI/Anthropic with a strong evaluation harness." },
      { q: "Is my data safe?", a: "Yes. We follow least-privilege access, environment isolation, audit logging and SOC-aligned practices. NDAs and DPAs signed as needed." },
    ],
  },
];

function FAQ() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={<>Straight answers to the <span className="text-gradient">most common questions.</span></>}
        description="Organized by topic. If you can't find what you're looking for, send us a note — we'll get back within one business day."
      />

      <Section>
        <div className="space-y-14">
          {GROUPS.map((g) => (
            <div key={g.title}>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">{g.title}</h2>
              <div className="mt-5 divide-y divide-border rounded-2xl border border-border bg-surface/60">
                {g.items.map((item) => (
                  <details key={item.q} className="group px-6 py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-[15px] font-medium">
                      {item.q}
                      <span className="ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-border text-muted-foreground transition group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <BigCTA title={<>Still have a question?</>} primary={{ to: "/contact", label: "Talk to the studio" }} />
    </>
  );
}
