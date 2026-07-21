import { createFileRoute } from "@tanstack/react-router";
import { BigCTA, CTAButton, PageHero, Section } from "../components/ui-kit";
import { ArrowUpRight, Search } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Heishere Labs" },
      { name: "description", content: "Field notes on Shopify, SEO, AI, business, marketing, automation and design from the Heishere Labs studio." },
      { property: "og:title", content: "Insights — Heishere Labs" },
      { property: "og:description", content: "Long-form thinking from the operators, strategists and engineers behind Heishere Labs." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: Insights,
});

const CATEGORIES = ["All", "Shopify", "SEO", "AI", "Business", "Marketing", "Automation", "Design"] as const;
type Cat = (typeof CATEGORIES)[number];

type Post = {
  title: string;
  excerpt: string;
  category: Exclude<Cat, "All">;
  readTime: string;
  author: string;
  date: string;
  featured?: boolean;
};

const POSTS: Post[] = [
  { title: "The end of the template era: why premium brands are going custom on Shopify again", excerpt: "Templates got you to $1M. They will not get you to $50M. Here's the case for going bespoke — with the numbers to prove it.", category: "Shopify", readTime: "9 min", author: "Nikhil Verma", date: "Jul 12, 2026", featured: true },
  { title: "Programmatic SEO for premium brands: playbook, pitfalls and 3 real examples", excerpt: "How to build 10,000 pages that actually convert — without becoming AdSense-tier content.", category: "SEO", readTime: "12 min", author: "Priya Nair", date: "Jun 28, 2026" },
  { title: "AI agents in production: what actually works in 2026", excerpt: "A pragmatic teardown of what agent architectures ship reliable, measurable outcomes today.", category: "AI", readTime: "14 min", author: "Marcus Feld", date: "Jun 14, 2026" },
  { title: "The 6-metric CFO dashboard every DTC operator should own", excerpt: "Contribution margin. Cohort LTV. Blended CAC. And three more you're probably not tracking.", category: "Business", readTime: "7 min", author: "Sofia Reyes", date: "Jun 02, 2026" },
  { title: "Lifecycle email that people actually read: a 2026 teardown", excerpt: "Why the classic Klaviyo welcome flow is dead — and what replaces it.", category: "Marketing", readTime: "8 min", author: "Elena Marchetti", date: "May 24, 2026" },
  { title: "n8n vs Zapier vs Make: choosing an automation backbone in 2026", excerpt: "An opinionated framework for choosing the right automation tool for your ops maturity.", category: "Automation", readTime: "10 min", author: "Marcus Feld", date: "May 11, 2026" },
  { title: "Design systems for teams that ship weekly", excerpt: "How we structure Figma, tokens and shadcn/ui for velocity without sacrificing craft.", category: "Design", readTime: "9 min", author: "Priya Nair", date: "Apr 29, 2026" },
  { title: "Rebuilding a Shopify Plus checkout: what we learned at 3× scale", excerpt: "The trade-offs, the wins and the mistakes we won't repeat.", category: "Shopify", readTime: "11 min", author: "Rahul Kapoor", date: "Apr 15, 2026" },
  { title: "AI-search readiness: how to structure your site for LLM answer engines", excerpt: "Schema, structured content and answer-first writing — a practical checklist.", category: "SEO", readTime: "8 min", author: "Priya Nair", date: "Apr 03, 2026" },
];

function Insights() {
  const [cat, setCat] = useState<Cat>("All");
  const [q, setQ] = useState("");

  const featured = POSTS.find((p) => p.featured)!;
  const filtered = useMemo(() => {
    return POSTS.filter((p) => (cat === "All" || p.category === cat) && (q === "" || p.title.toLowerCase().includes(q.toLowerCase())));
  }, [cat, q]);

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={<>Field notes from an <span className="text-gradient">operating studio.</span></>}
        description="Long-form thinking on strategy, growth, AI, design and the systems modern brands run on — written by the people who ship them."
      />

      <Section>
        {/* Featured */}
        <div className="mb-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <article className="card-premium card-premium-hover group relative overflow-hidden">
            <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-brand-blue/30 via-brand-violet/30 to-brand-purple/30">
              <div className="absolute inset-0 bg-grid opacity-40" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0b1020_90%)]" />
              <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-background/40 px-3 py-1 text-xs backdrop-blur">
                Featured · {featured.category}
              </div>
            </div>
            <div className="p-8 md:p-10">
              <div className="text-xs text-muted-foreground">{featured.date} · {featured.readTime} · {featured.author}</div>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight leading-snug">{featured.title}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{featured.excerpt}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-foreground/90">Read the article <ArrowUpRight className="h-3.5 w-3.5" /></div>
            </div>
          </article>

          <div className="flex flex-col gap-6">
            <div className="card-premium p-7">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Popular this month</div>
              <ul className="mt-4 space-y-4">
                {POSTS.slice(1, 4).map((p, i) => (
                  <li key={p.title} className="group flex gap-4">
                    <span className="text-xl font-semibold text-gradient w-6">{i + 1}</span>
                    <div>
                      <div className="text-sm font-medium leading-snug group-hover:text-foreground">{p.title}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{p.category} · {p.readTime}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="gradient-border p-6">
              <div className="text-sm font-semibold">Get insights in your inbox</div>
              <p className="mt-1 text-xs text-muted-foreground">One considered essay per month. No noise.</p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex items-center gap-2 rounded-full glass p-1.5 pl-4">
                <input type="email" required placeholder="you@company.com" className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
                <button className="rounded-full bg-gradient-brand px-4 py-2 text-xs font-medium text-white">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        {/* Filters + search */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`rounded-full border px-3.5 py-1.5 text-xs transition ${cat === c ? "border-transparent bg-gradient-brand text-white" : "border-border text-muted-foreground hover:text-foreground"}`}>{c}</button>
            ))}
          </div>
          <label className="flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm md:w-72">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search insights" className="w-full bg-transparent outline-none placeholder:text-muted-foreground" />
          </label>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article key={p.title} className="card-premium card-premium-hover overflow-hidden">
              <div className="relative aspect-[16/10] bg-gradient-to-br from-brand-blue/20 to-brand-purple/20">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0b1020_90%)]" />
                <span className="absolute left-5 top-5 inline-flex items-center rounded-full border border-white/15 bg-background/40 px-2.5 py-1 text-[11px] backdrop-blur">{p.category}</span>
              </div>
              <div className="p-6">
                <div className="text-xs text-muted-foreground">{p.date} · {p.readTime}</div>
                <h3 className="mt-2 text-lg font-semibold tracking-tight leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                <div className="mt-4 text-xs text-muted-foreground">By {p.author}</div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <BigCTA title={<>Prefer to talk instead of read?</>} primary={{ to: "/contact", label: "Book a discovery call" }} />
    </>
  );
}
