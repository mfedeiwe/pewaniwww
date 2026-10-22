export const SITE = {
  legalName: "Pewani, LLC",
  brand: "Pewani Labs",
  email: "team@pewani.com",
  domain: "pewani.com",
  url: "https://www.pewani.com",
};

export type App = {
  name: string;
  tagline: string;
  description: string;
  url?: string;
  status: "Live" | "Coming soon" | "In development";
  category: string;
};

export const APPS: App[] = [
  {
    name: "HK Mobile",
    tagline: "Mobile software, built for real-world teams.",
    description:
      "A production mobile app designed, built and maintained by Pewani Labs engineers across Malawi and the United States.",
    url: "https://www.hkmobile.app",
    status: "Live",
    category: "Mobile",
  },
  {
    name: "FlipBible",
    tagline: "Scripture that turns like a real book.",
    description:
      "A calm, beautifully typeset Bible reader with page-turning, Slate and Midnight themes, and red-letter text.",
    url: "https://flipbible.app",
    status: "Coming soon",
    category: "Faith & Reading",
  },
];
