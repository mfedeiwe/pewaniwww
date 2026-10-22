import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site-chrome";
import { AppCard } from "@/components/app-card";
import { APPS } from "@/lib/site";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/apps")({
  head: () =>
    pageMeta(
      "Apps & Projects — Pewani Labs",
      "Software products developed and published by Pewani, LLC, including HK Mobile and FlipBible.",
    ),
  component: Apps,
});

function Apps() {
  return (
    <>
      <PageHero
        eyebrow="Apps & Projects"
        title="Software we design, build and publish."
        intro="Every product is developed by Pewani Labs and published by Pewani, LLC."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
        {APPS.map((a) => (
          <AppCard key={a.name} app={a} />
        ))}
        <div className="glass flex flex-col justify-center rounded-2xl border-dashed p-8">
          <p className="eyebrow">More in the works</p>
          <h3 className="mt-4 text-2xl">New products are on the way.</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Have a project you'd like us to build?{" "}
            <Link to="/contact" className="text-primary underline underline-offset-4">
              Chat with us
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
