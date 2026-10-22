import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site-chrome";
import { SITE } from "@/lib/site";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/merch")({
  head: () =>
    pageMeta(
      "Merch — Pewani Labs",
      "Pewani Labs apparel and goods. Every purchase supports scholarships for young builders in Malawi.",
    ),
  component: Merch,
});

const ITEMS = ["Pewani Labs Tee", "Malawi ⇄ USA Hoodie", "Builder's Cap", "Laptop Sticker Pack"];

function Merch() {
  return (
    <>
      <PageHero
        eyebrow="Merch"
        title="Wear the mission."
        intro="Our store is opening soon. Every purchase helps fund scholarships and internships for young builders in Malawi."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((i) => (
          <div key={i} className="sheet rounded-2xl p-4">
            <div className="grid aspect-square place-items-center rounded-xl bg-deep-gradient font-display text-5xl text-deep-foreground">
              P
            </div>
            <p className="mt-4 font-medium">{i}</p>
            <p className="text-sm text-muted-foreground">Coming soon</p>
          </div>
        ))}
      </section>
      <p className="mx-auto mt-10 max-w-6xl px-6 text-sm text-muted-foreground">
        Want to be notified when the store opens? Email{" "}
        <a href={`mailto:${SITE.email}?subject=Merch`} className="text-primary underline">
          {SITE.email}
        </a>
        .
      </p>
    </>
  );
}
