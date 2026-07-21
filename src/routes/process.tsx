import { createFileRoute } from "@tanstack/react-router";
import { BigCTA, PageHero, Section } from "../components/ui-kit";
import {
  Compass, Search, Target, PenTool, Layers, Code2, Bug, Rocket, LineChart, type LucideIcon,
} from "lucide-react";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — Heishere Labs" },
      { name: "description", content: "A nine-step process that takes ambitious brands from discovery to compounding growth — the Heishere Labs method." },
      { property: "og:title", content: "Process — Heishere Labs" },
      { property: "og:description", content: "Discovery. Research. Strategy. Design. Development. Growth. The Heishere Labs method." },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: Process,
});

const STEPS: { n: string; icon: LucideIcon; title: string; copy: string }[] = [
  { n: "01", icon: Compass, title: "Discovery", copy: "We map your business, audience, product, competitors and constraints. The goal: a shared model of what success looks like before any pixel gets pushed." },
  { n: "02", icon: Search, title: "Research", copy: "Behavioral data, customer interviews, competitive landscape and analytics teardown. We show up to strategy with evidence, not opinion." },
  { n: "03", icon: Target, title: "Strategy", copy: "A written strategy your team can execute against: positioning, KPIs, priorities, risks and the shortest path to the outcome." },
  { n: "04", icon: PenTool, title: "Wireframes", copy: "Low-fidelity structure. We resolve information hierarchy, user flow and conversion architecture before visual polish enters the room." },
  { n: "05", icon: Layers, title: "Design", copy: "A production-ready design system and pixel-perfect UI. Systems built to scale — not one-off screens built to impress." },
  { n: "06", icon: Code2, title: "Development", copy: "Modern stacks, uncompromising performance, production-grade code and rigorous review. Built for speed, security and long-term maintainability." },
  { n: "07", icon: Bug, title: "Testing", copy: "Cross-device QA, accessibility audits, performance budgets, analytics validation and pre-launch load testing." },
  { n: "08", icon: Rocket, title: "Launch", copy: "Zero-downtime deployment, migration playbooks, monitoring stack and a live launch war-room — with your team on the call." },
  { n: "09", icon: LineChart, title: "Optimization", copy: "Post-launch iteration, experimentation and compounding improvements. The build is a starting line, not a finish line." },
];

function Process() {
  return (
    <>
      <PageHero
        eyebrow="Our process"
        title={<>A repeatable path from <span className="text-gradient">discovery</span> to <span className="text-gradient">compounding growth.</span></>}
        description="Nine disciplined steps refined across 150+ engagements. Every step has an owner, an artifact and a decision — no ambiguity, no wasted cycles."
      />

      <Section>
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border-strong to-transparent" />
          <div className="space-y-6">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className={`relative grid gap-6 md:grid-cols-2 items-center`}
              >
                {i % 2 === 0 ? (
                  <>
                    <StepCard step={s} />
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <StepCard step={s} />
                  </>
                )}
                <span className="absolute left-6 md:left-1/2 top-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-gradient-brand ring-4 ring-background" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <BigCTA
        title={<>Ready to walk through this with our team?</>}
        primary={{ to: "/contact", label: "Book a discovery call" }}
        secondary={{ to: "/work", label: "See the outcomes" }}
      />
    </>
  );
}

function StepCard({ step }: { step: (typeof STEPS)[number] }) {
  return (
    <div className="card-premium p-8 md:p-10 md:mx-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-soft border border-border-strong">
            <step.icon className="h-5 w-5" strokeWidth={1.6} />
          </div>
          <span className="text-xs font-mono tracking-widest text-brand-cyan">{step.n}</span>
        </div>
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
      </div>
      <h3 className="mt-6 text-2xl font-semibold tracking-tight">{step.title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{step.copy}</p>
    </div>
  );
}
