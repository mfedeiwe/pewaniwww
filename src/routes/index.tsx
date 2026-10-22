import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Briefcase, Code2, HeartHandshake } from "lucide-react";
import hero from "@/assets/hero-team.jpg";
import { APPS, SITE } from "@/lib/site";
import { AppCard } from "@/components/app-card";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta(
      "Pewani Labs — Software built in Malawi & America",
      "Pewani, LLC builds software with engineers in Malawi and the United States, funding scholarships, internships and careers in tech.",
    ),
  component: Index,
});

const PATH = [
  { icon: GraduationCap, title: "Scholarships", text: "Funding young adults in Malawi to study computer science and engineering." },
  { icon: Code2, title: "Internships", text: "Real projects, real code reviews, shipped to real users." },
  { icon: Briefcase, title: "Careers", text: "Full-time roles on our product teams after internship." },
  { icon: HeartHandshake, title: "Giving back", text: "Supporting schools and communities that raised our builders." },
];

function Index() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-16 md:grid-cols-2 md:pt-24">
        <div className="fade-up">
          <p className="eyebrow">Pewani Labs · A {SITE.legalName} company</p>
          <h1 className="mt-5 text-5xl leading-[1.05] md:text-7xl">
            Software built <span className="text-gradient">together</span>.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Engineers from Malawi and America, building apps that make the technology — and human —
            world better. One software project at a time.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/apps"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5"
            >
              See our apps <ArrowRight size={16} />
            </Link>
            <Link
              to="/our-story"
              className="glass inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-foreground"
            >
              Our story
            </Link>
          </div>
        </div>
        <div className="relative fade-up [animation-delay:150ms]">
          <img
            src={hero}
            alt="Pewani Labs engineers collaborating"
            width={1600}
            height={1008}
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
          />
          <div className="glass absolute -bottom-6 left-6 rounded-2xl px-5 py-4 shadow-[var(--shadow-book)]">
            <p className="font-display text-2xl text-foreground">Malawi ⇄ USA</p>
            <p className="text-xs text-muted-foreground">One team, two continents</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Apps & Projects</p>
            <h2 className="mt-3 text-4xl">What we've built</h2>
          </div>
          <Link to="/apps" className="text-sm font-medium text-primary">
            View all →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {APPS.map((a) => (
            <AppCard key={a.name} app={a} />
          ))}
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-deep-gradient px-8 py-16 text-deep-foreground md:px-14">
          <p className="text-xs uppercase tracking-[0.16em] opacity-70">The Pewani pathway</p>
          <h2 className="mt-3 max-w-2xl text-4xl">Every project funds the next generation of builders.</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PATH.map((p, i) => (
              <div key={p.title}>
                <div className="flex items-center gap-3">
                  <p.icon size={22} className="text-warm" />
                  <span className="text-xs opacity-50">0{i + 1}</span>
                </div>
                <h3 className="mt-4 text-xl">{p.title}</h3>
                <p className="mt-2 text-sm opacity-75">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="font-serif text-2xl italic leading-relaxed md:text-3xl">
          "Pewani" — a name rooted in Malawi, carried by a team that believes great software can
          change lives.
        </p>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
        >
          Chat with us <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
