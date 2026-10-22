import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site-chrome";
import { SITE } from "@/lib/site";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/our-story")({
  head: () =>
    pageMeta(
      "Our Story — Pewani Labs",
      "How Pewani, LLC brings Malawian and American engineers together to build software and open careers in technology.",
    ),
  component: OurStory,
});

const VALUES = [
  { t: "Built together", d: "Malawian and American engineers share ownership of every product, from first sketch to release." },
  { t: "Opportunity first", d: "Revenue funds scholarships, paid internships and long-term careers in tech." },
  { t: "Craft matters", d: "We ship calm, reliable, well-made software that respects the people who use it." },
  { t: "Give back", d: "A share of what we earn returns to schools and communities in Malawi." },
];

function OurStory() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={<>Two continents. <span className="text-gradient">One team.</span></>}
        intro="Pewani Labs began with a simple belief: talent is everywhere, opportunity is not. We build software that proves what Malawian and American engineers can do side by side."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
        {VALUES.map((v) => (
          <div key={v.t} className="sheet rounded-2xl p-8">
            <h3 className="text-2xl">{v.t}</h3>
            <p className="mt-3 text-muted-foreground">{v.d}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="sheet rounded-3xl p-8 md:p-12">
          <p className="eyebrow">Company information</p>
          <h2 className="mt-3 text-3xl">About {SITE.legalName}</h2>
          <dl className="mt-8 grid gap-6 text-sm sm:grid-cols-2">
            {[
              ["Legal name", SITE.legalName],
              ["Brand", SITE.brand],
              ["Entity type", "Limited Liability Company (USA)"],
              ["Operations", "United States · Lilongwe, Malawi"],
              ["Business", "Software design, development and publishing"],
              ["Contact", SITE.email],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-border pt-4">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="mt-1 font-medium text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
