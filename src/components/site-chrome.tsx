import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/our-story", label: "Our Story" },
  { to: "/apps", label: "Apps & Projects" },
  { to: "/merch", label: "Merch" },
  { to: "/contact", label: "Chat with Us" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-deep-gradient font-display text-lg text-deep-foreground shadow-[var(--shadow-book)]">
        P
      </span>
      <span className="leading-tight">
        <span className="block font-display text-lg text-foreground">Pewani Labs</span>
        <span className="block text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
          Malawi · USA
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 shadow-[var(--shadow-book)]">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-primary data-[status=active]:text-primary-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Menu"
          className="rounded-full p-2 text-foreground md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav className="glass mx-auto mt-2 flex max-w-6xl flex-col rounded-2xl p-2 md:hidden">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-foreground data-[status=active]:bg-primary data-[status=active]:text-primary-foreground"
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-deep-gradient text-deep-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl">Pewani Labs</p>
          <p className="mt-3 max-w-sm text-sm opacity-75">
            Software built by Malawians and Americans, together — changing lives one software
            project at a time.
          </p>
          <p className="mt-6 text-xs opacity-60">
            Pewani Labs is a brand of {SITE.legalName}, a limited liability company registered in
            the United States.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] opacity-60">Company</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="opacity-80 hover:opacity-100">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] opacity-60">Contact</p>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:opacity-100">
                {SITE.email}
              </a>
            </li>
            <li>{SITE.domain}</li>
            <li>Lilongwe, Malawi · United States</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-deep-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-6 py-6 text-xs opacity-60 md:flex-row">
          <span>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </span>
          <span>Built in Malawi & America.</span>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-10 pt-20 fade-up">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">{title}</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{intro}</p>
    </section>
  );
}
