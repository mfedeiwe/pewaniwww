import { ArrowUpRight } from "lucide-react";
import type { App } from "@/lib/site";

export function AppCard({ app }: { app: App }) {
  const live = app.status === "Live";
  return (
    <article className="sheet group flex flex-col rounded-2xl p-8 transition-transform hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <span className="eyebrow">{app.category}</span>
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            live ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
          }`}
        >
          {app.status}
        </span>
      </div>
      <h3 className="mt-6 text-3xl">{app.name}</h3>
      <p className="mt-2 font-serif text-lg italic text-foreground/80">{app.tagline}</p>
      <p className="mt-4 flex-1 text-sm text-muted-foreground">{app.description}</p>
      {app.url && (
        <a
          href={app.url}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
        >
          {app.url.replace(/^https?:\/\//, "")}
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </a>
      )}
    </article>
  );
}
