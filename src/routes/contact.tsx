import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "../components/ui-kit";
import { Mail, MessageCircle, MapPin, Clock, Timer, ArrowUpRight, CalendarClock } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Heishere Labs" },
      { name: "description", content: "Tell us about your project. Heishere Labs responds to every serious inquiry within one business day." },
      { property: "og:title", content: "Contact — Heishere Labs" },
      { property: "og:description", content: "Let's build something incredible. Book a discovery call with Heishere Labs." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const SERVICES_LIST = [
  "Shopify Development", "Custom Web Development", "UI/UX Design", "SEO", "AI Automation",
  "Business Automation", "Task Bots", "Email Marketing", "Brand Strategy", "Conversion Optimization",
  "Landing Pages", "Consulting", "Not sure yet",
];
const BUDGETS = ["Under $10k", "$10k – $25k", "$25k – $50k", "$50k – $100k", "$100k+"];
const TIMELINES = ["ASAP", "Within 1 month", "1–3 months", "3–6 months", "Just exploring"];

const TIMEZONES = [
  "(GMT-08:00) Los Angeles", "(GMT-05:00) New York", "(GMT+00:00) London", "(GMT+01:00) Lagos / Berlin",
  "(GMT+02:00) Cairo / Johannesburg", "(GMT+03:00) Nairobi / Riyadh", "(GMT+04:00) Dubai",
  "(GMT+05:30) India", "(GMT+08:00) Singapore / Hong Kong", "(GMT+09:00) Tokyo", "(GMT+10:00) Sydney",
  "Other / not sure",
];

function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);
  const [booking, setBooking] = useState(false);
  const [bookError, setBookError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#book") {
      const el = document.getElementById("book");
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
    }
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's build something <span className="text-gradient">incredible.</span></>}
        description="Tell us about your business, your goal and where you are in the process. If we're the right partner, we'll come back with a written response within one business day."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setError(null);
              setSending(true);
              try {
                const formEl = e.currentTarget;
                const fd = new FormData(formEl);
                fd.append("_subject", "New Discovery Call Request — Heishere Labs");
                fd.append("_template", "table");
                fd.append("_captcha", "false");
                const res = await fetch("https://formsubmit.co/ajax/heisherelabs@yahoo.com", {
                  method: "POST",
                  headers: { Accept: "application/json" },
                  body: fd,
                });
                if (!res.ok) throw new Error("Request failed");
                setSent(true);
                formEl.reset();
              } catch {
                setError("Something went wrong. Please email heisherelabs@yahoo.com directly.");
              } finally {
                setSending(false);
              }
            }}
            className="card-premium p-8 md:p-10 space-y-5"
          >
            {sent ? (
              <div className="py-14 text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-gradient-brand" />
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">Message received.</h3>
                <p className="mt-2 text-muted-foreground">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <>
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Full name" required><input required name="name" className={inputCls} /></Field>
                  <Field label="Email" required><input required type="email" name="email" className={inputCls} /></Field>
                  <Field label="Company" required><input required name="company" className={inputCls} /></Field>
                  <Field label="Website"><input name="website" placeholder="https://" className={inputCls} /></Field>
                  <Field label="Industry"><input name="industry" placeholder="e.g. DTC Beauty" className={inputCls} /></Field>
                  <Field label="Service needed">
                    <select name="service" className={inputCls} defaultValue="">
                      <option value="" disabled>Select a service</option>
                      {SERVICES_LIST.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </Field>
                  <Field label="Budget">
                    <select name="budget" className={inputCls} defaultValue="">
                      <option value="" disabled>Select a range</option>
                      {BUDGETS.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </Field>
                  <Field label="Timeline">
                    <select name="timeline" className={inputCls} defaultValue="">
                      <option value="" disabled>When do you want to start?</option>
                      {TIMELINES.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </Field>
                </div>
                <Field label="Message" required>
                  <textarea required name="message" rows={5} placeholder="Tell us about your business, your goal, and what success looks like." className={`${inputCls} resize-y`} />
                </Field>
                <label className="flex items-start gap-3 text-sm text-muted-foreground">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border bg-transparent" />
                  I'd like to also share how I heard about Heishere Labs.
                </label>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-medium text-white shadow-[0_14px_40px_-12px_rgba(139,92,246,0.6)] transition hover:-translate-y-[1px] disabled:opacity-60"
                >
                  {sending ? "Sending…" : "Send message"} <ArrowUpRight className="h-4 w-4" />
                </button>
                {error && <p className="text-xs text-red-400">{error}</p>}
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to our privacy policy. We never share your information.
                </p>
              </>
            )}
          </form>

          <div className="space-y-5">
            <ContactCard icon={Mail} title="Email" value="heisherelabs@yahoo.com" href="mailto:heisherelabs@yahoo.com" />
            <ContactCard icon={MessageCircle} title="WhatsApp" value="+234 7079651306" href="https://wa.me/2347079651306" />
            <ContactCard icon={MapPin} title="Studio" value="Remote-first · 8+ countries" />
            <ContactCard icon={Clock} title="Business hours" value="24/7 — Always active" />
            <ContactCard icon={Timer} title="Response time" value="Within one business day" />

            <div className="card-premium overflow-hidden">
              <div className="relative aspect-[16/10] bg-gradient-to-br from-brand-blue/25 via-brand-violet/25 to-brand-purple/25">
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0b1020_90%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand shadow-[0_10px_30px_-10px_rgba(139,92,246,0.7)]">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-5 text-xs text-muted-foreground">A distributed studio — with clients across US, EU and APAC.</div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div id="book" className="scroll-mt-24">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-[0_10px_30px_-10px_rgba(139,92,246,0.7)]">
              <CalendarClock className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Book a call</div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">Pick a time that works for you</h2>
            </div>
          </div>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setBookError(null);
              setBooking(true);
              try {
                const formEl = e.currentTarget;
                const fd = new FormData(formEl);
                fd.append("_subject", "New Discovery Call Booking — Heishere Labs");
                fd.append("_template", "table");
                fd.append("_captcha", "false");
                const res = await fetch("https://formsubmit.co/ajax/heisherelabs@yahoo.com", {
                  method: "POST",
                  headers: { Accept: "application/json" },
                  body: fd,
                });
                if (!res.ok) throw new Error("Request failed");
                setBooked(true);
                formEl.reset();
              } catch {
                setBookError("Something went wrong. Please email heisherelabs@yahoo.com directly.");
              } finally {
                setBooking(false);
              }
            }}
            className="card-premium p-8 md:p-10 space-y-5"
          >
            {booked ? (
              <div className="py-14 text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-gradient-brand" />
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">Booking received.</h3>
                <p className="mt-2 text-muted-foreground">We'll confirm your call slot by email within one business day.</p>
              </div>
            ) : (
              <>
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Full name" required><input required name="name" className={inputCls} /></Field>
                  <Field label="Email" required><input required type="email" name="email" className={inputCls} /></Field>
                  <Field label="WhatsApp (optional)"><input name="whatsapp" placeholder="+234 ..." className={inputCls} /></Field>
                  <Field label="Company"><input name="company" className={inputCls} /></Field>
                  <Field label="Preferred date" required>
                    <input required type="date" name="preferred_date" className={inputCls} />
                  </Field>
                  <Field label="Preferred time" required>
                    <input required type="time" name="preferred_time" className={inputCls} />
                  </Field>
                  <Field label="Your timezone" required>
                    <select required name="timezone" className={inputCls} defaultValue="">
                      <option value="" disabled>Select your timezone</option>
                      {TIMEZONES.map((tz) => <option key={tz}>{tz}</option>)}
                    </select>
                  </Field>
                  <Field label="Alternate date/time"><input name="alternate" placeholder="e.g. Fri 3pm" className={inputCls} /></Field>
                </div>
                <Field label="What would you like to discuss?">
                  <textarea name="agenda" rows={4} placeholder="A few lines about your business and what you want out of the call." className={`${inputCls} resize-y`} />
                </Field>
                <button
                  type="submit"
                  disabled={booking}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-medium text-white shadow-[0_14px_40px_-12px_rgba(139,92,246,0.6)] transition hover:-translate-y-[1px] disabled:opacity-60"
                >
                  {booking ? "Booking…" : "Book my discovery call"} <ArrowUpRight className="h-4 w-4" />
                </button>
                {bookError && <p className="text-xs text-red-400">{bookError}</p>}
                <p className="text-xs text-muted-foreground">
                  We'll confirm your slot by email. If you shared a WhatsApp number, we may also reach out there.
                </p>
              </>
            )}
          </form>
        </div>
      </Section>
    </>
  );
}

const inputCls =
  "w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-border-strong focus:ring-2 focus:ring-primary/40";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-1.5 text-xs font-medium text-muted-foreground">
        {label}{required && <span className="text-brand-violet"> *</span>}
      </div>
      {children}
    </label>
  );
}

function ContactCard({
  icon: Icon, title, value, href,
}: { icon: React.ComponentType<{ className?: string }>; title: string; value: string; href?: string }) {
  const body = (
    <div className="card-premium card-premium-hover p-5 flex items-center gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-soft border border-border-strong">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
        <div className="mt-1 text-sm font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{body}</a> : body;
}
