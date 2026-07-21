import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Facebook, Linkedin } from "lucide-react";
import { useState } from "react";
import logoAsset from "@/assets/heishere-labs-logo.png.asset.json";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.797l-5.32-6.51L4.8 22H1.54l8.02-9.16L1 2h6.914l4.81 5.98L18.244 2Zm-1.192 18h1.881L7.03 4H5.02l12.032 16Z" />
    </svg>
  );
}



export function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    fd.append("_subject", "New Newsletter Subscription — Heishere Labs");
    fd.append("_captcha", "false");
    setSubscribing(true);
    try {
      await fetch("https://formsubmit.co/ajax/heisherelabs@yahoo.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      setSubscribed(true);
      formEl.reset();
    } catch {
      setSubscribed(true);
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <footer className="relative mt-24 border-t border-border">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg ring-1 ring-white/10">
                <img src={logoAsset.url} alt="Heishere Labs" className="h-full w-full object-cover" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">Heishere Labs</span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              A digital studio building growth systems for ambitious brands. Strategy, design,
              engineering and automation — under one premium roof.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="mt-7 flex max-w-md items-center gap-2 rounded-full glass p-1.5 pl-4"
            >
              <input
                type="email"
                required
                name="email"
                placeholder={subscribed ? "You're subscribed — thank you!" : "Enter your email for insights"}
                disabled={subscribed}
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              />
              <button
                type="submit"
                disabled={subscribing || subscribed}
                className="inline-flex items-center gap-1 rounded-full bg-gradient-brand px-4 py-2 text-xs font-medium text-white disabled:opacity-60"
              >
                {subscribed ? "Subscribed" : subscribing ? "…" : "Subscribe"} <ArrowUpRight className="h-3 w-3" />
              </button>
            </form>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold">Studio</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/process" className="hover:text-foreground">Process</Link></li>
              <li><Link to="/work" className="hover:text-foreground">Work</Link></li>
              <li><Link to="/insights" className="hover:text-foreground">Insights</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold">Services</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground">Shopify</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-foreground">SEO</Link></li>
              <li><Link to="/services" className="hover:text-foreground">AI Automation</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>heisherelabs@yahoo.com</li>
              <li>24/7 — Always active</li>
              <li>Remote-first · 8+ countries</li>
            </ul>
            <div className="mt-5 flex items-center gap-2">
              {[
                { Icon: XIcon, href: "https://x.com/heisherelabs", label: "X" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/habeeb-olanrewaju-447887421", label: "LinkedIn" },
                { Icon: Facebook, href: "https://www.facebook.com/heisherelabs", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:text-foreground hover:border-border-strong"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Heishere Labs Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
