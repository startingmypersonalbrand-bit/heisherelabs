import { createFileRoute } from "@tanstack/react-router";
import { BigCTA, Eyebrow, PageHero, Section } from "../components/ui-kit";
import { Compass, Diamond, Handshake, Rocket, Sparkles, Target } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Heishere Labs" },
      { name: "description", content: "The story, mission and philosophy behind Heishere Labs — a premium digital studio for ambitious brands." },
      { property: "og:title", content: "About — Heishere Labs" },
      { property: "og:description", content: "Partners, not vendors. Meet the studio building growth systems for modern businesses." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const VALUES = [
  { icon: Target, title: "Strategy over aesthetics", copy: "Beautiful work that doesn't move the business is a failed engagement. Strategy leads. Design serves." },
  { icon: Handshake, title: "Partners, not vendors", copy: "We plug into your team, share your KPIs and stay accountable to outcomes — not deliverables." },
  { icon: Diamond, title: "Craft is non-negotiable", copy: "We ship work we're proud to sign our name to. Every detail. Every release." },
  { icon: Sparkles, title: "Signal over noise", copy: "Fewer meetings, better decisions. Async-first workflows and clear written thinking." },
  { icon: Rocket, title: "Bias for launch", copy: "Momentum compounds. We ship small, ship often, and iterate on real user signal." },
  { icon: Compass, title: "Honesty by default", copy: "Transparent pricing, transparent progress, transparent trade-offs — always." },
];

const TIMELINE = [
  { year: "2019", title: "The studio begins", copy: "Founded as a two-person team building bespoke Shopify storefronts for DTC founders." },
  { year: "2021", title: "Strategy-led services", copy: "Expanded into brand strategy, positioning and lifecycle systems for premium ecommerce." },
  { year: "2023", title: "Enterprise engagements", copy: "First Fortune 500 engagements. Introduced retainers, embedded product pods and CRO programs." },
  { year: "2025", title: "AI-native operations", copy: "Launched AI automation, task bots and internal tooling as first-class services." },
  { year: "Today", title: "Growth systems", copy: "A senior, remote-first studio building the digital systems modern brands run on." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About the studio"
        title={<>A studio built for the <span className="text-gradient">brands of the next decade.</span></>}
        description="Heishere Labs is a small, senior team of strategists, designers and engineers. We build the growth systems ambitious brands run on — from positioning to production."
      />

      <Section
        eyebrow="Our story"
        title={<>From a two-person studio to a <span className="text-gradient">multi-country partner</span> for premium brands.</>}
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Heishere Labs was founded on a simple premise: most agencies sell deliverables. Very few
            deliver outcomes. We built the studio around a different promise — every engagement is
            measured against the business metric that matters most.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Today we work with founders, growth teams and executives across three continents. We
            operate as a senior, remote-first studio — no layers, no juniors on strategy calls, no
            deliverables handed off to interns.
          </p>
        </div>
      </Section>

      <Section eyebrow="Mission & Vision" title="What we're building toward">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card-premium p-10">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Mission</div>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight leading-snug">
              To engineer the digital systems that turn ambitious brands into industry leaders.
            </h3>
          </div>
          <div className="card-premium p-10">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Vision</div>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight leading-snug">
              A world where every serious brand has an accountable partner — not a portfolio of vendors.
            </h3>
          </div>
        </div>
      </Section>

      <Section eyebrow="Core values" title="Six principles we operate by">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="card-premium p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-soft border border-border-strong">
                <v.icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight">{v.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{v.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Founder" title="A note from the founder">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] items-start">
          <div className="gradient-border p-1.5">
            <img src="/images/WhatsAppImage2026-08-18at10.13.33.jpeg" alt="Nikhil Verma, Founder of Heishere Labs" className="aspect-[4/5] w-full rounded-[calc(var(--radius-xl)-6px)] object-cover" />
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              "I started Heishere Labs after spending a decade watching great brands get average work
              from average agencies. The pattern was always the same — bloated teams, misaligned
              incentives, deliverables that looked good in a case study but never moved the P&L.
            </p>
            <p>
              We built Heishere Labs as the opposite. Small, senior, accountable. Every engagement is
              staffed with people who have shipped for global brands. Every proposal is priced
              against the outcome. Every project is measured in revenue, retention or reach.
            </p>
            <p>
              If you're serious about the next chapter of your business, we're the partner to build
              it with."
            </p>
            <div className="pt-2">
              <div className="text-sm font-semibold text-foreground">Nikhil Verma</div>
              <div className="text-sm text-muted-foreground">Founder & Principal, Heishere Labs</div>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Timeline" title="How the studio evolved">
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border-strong to-transparent" />
          <div className="space-y-8">
            {TIMELINE.map((t, i) => (
              <div key={t.year} className={`relative grid gap-6 md:grid-cols-2 items-center ${i % 2 ? "md:[direction:rtl]" : ""}`}>
                <div className={`card-premium p-7 md:mx-8 [direction:ltr]`}>
                  <div className="text-xs font-mono tracking-widest text-brand-cyan">{t.year}</div>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">{t.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{t.copy}</p>
                </div>
                <div className="hidden md:block" />
                <span className="absolute left-4 md:left-1/2 top-8 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-brand ring-4 ring-background" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Our philosophy" title="Partner. Not vendor.">
        <div className="glass-strong rounded-3xl p-10 md:p-14">
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/90">
            A vendor delivers a deliverable and moves on. A partner sits inside your business,
            owns the outcome, and builds the systems that compound long after the engagement ends.
            <br /><br />
            <span className="text-gradient font-semibold">We only work as partners.</span>
          </p>
        </div>
      </Section>

      <BigCTA
        title={<>Let's build the next chapter of your business.</>}
        primary={{ to: "/contact", label: "Book a discovery call" }}
        secondary={{ to: "/services", label: "Explore services" }}
      />
    </>
  );
}
