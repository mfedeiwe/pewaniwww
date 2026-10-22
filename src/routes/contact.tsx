import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Globe, MapPin } from "lucide-react";
import { PageHero } from "@/components/site-chrome";
import { SITE } from "@/lib/site";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageMeta(
      "Chat with Us — Pewani Labs",
      "Contact Pewani, LLC at team@pewani.com about our apps, partnerships, internships or scholarships.",
    ),
  component: Contact,
});

const field =
  "w-full rounded-xl border border-input bg-paper px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring";

function Contact() {
  const [f, setF] = useState({ name: "", email: "", topic: "General", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `${f.message}\n\n— ${f.name} (${f.email})`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      `[${f.topic}] Message from ${f.name}`,
    )}&body=${encodeURIComponent(body)}`;
  };
  return (
    <>
      <PageHero
        eyebrow="Chat with Us"
        title="Let's build something good."
        intro="Questions about our apps, partnerships, internships or scholarships — we'd love to hear from you."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-5">
        <form onSubmit={submit} className="sheet space-y-4 rounded-3xl p-8 md:col-span-3">
          <div className="grid gap-4 sm:grid-cols-2">
            <input required maxLength={100} placeholder="Your name" className={field} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
            <input required type="email" maxLength={255} placeholder="Email" className={field} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
          </div>
          <select className={field} value={f.topic} onChange={(e) => setF({ ...f, topic: e.target.value })}>
            {["General", "Apps & support", "Partnerships", "Internships & scholarships", "Press"].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          <textarea required maxLength={2000} rows={6} placeholder="How can we help?" className={field} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
          <button className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">
            Send message
          </button>
        </form>
        <aside className="space-y-4 md:col-span-2">
          {[
            { icon: Mail, k: "Email", v: SITE.email, href: `mailto:${SITE.email}` },
            { icon: Globe, k: "Web", v: SITE.domain },
            { icon: MapPin, k: "Locations", v: "United States · Lilongwe, Malawi" },
          ].map((c) => (
            <div key={c.k} className="glass flex items-start gap-4 rounded-2xl p-6">
              <c.icon size={20} className="mt-0.5 text-primary" />
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{c.k}</p>
                {c.href ? (
                  <a href={c.href} className="font-medium text-foreground">{c.v}</a>
                ) : (
                  <p className="font-medium text-foreground">{c.v}</p>
                )}
              </div>
            </div>
          ))}
          <p className="px-2 text-xs text-muted-foreground">
            {SITE.legalName} · We reply within two business days.
          </p>
        </aside>
      </section>
    </>
  );
}
