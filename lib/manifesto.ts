import { pageSeoTitle } from "@/lib/brand-seo";

/** Null until the approved manifesto PDF is delivered. */
export const manifestoPdfHref: string | null = null;

export const manifestoPageTitle = pageSeoTitle("Manifesto");

export const manifestoPageDescription =
  "Approved Brand excerpts for the John Upan Odey Jnr manifesto. A Fresh Start for Cross River. PDF when published.";

export const manifestoHeroLede =
  "Approved Brand excerpts until the manifesto PDF is published.";

export const manifestoDownloadLabel = "Manifesto PDF: coming when published";

export const manifestoComingTitle = "THE MANIFESTO- coming soon !!";

export const manifestoExcerptsTitle = "Approved excerpts";

export const manifestoExcerpts = [
  {
    title: "ONE PEOPLE- ONE CROSS RIVER:",
    paragraphs: [
      "Cross River is more than North, Central or South. It is one people, with one shared future.",
      "From Calabar to Ogoja, from Ikom to Bakassi, the challenges may look different, but the aspirations are deeply connected: better roads, meaningful opportunities, stronger communities and an economy that allows people to build dignified lives.",
      "A Fresh Start is not just a slogan but presents a vision of Cross River where geography does not determine opportunity and where no community or citizen is left behind. It is built around the principle that development should reach every local government, every ward and every community.",
    ],
  },
  {
    title: "FROM WHAT WE HAVE TO WHAT WE CAN BECOME:",
    paragraphs: [
      "Cross River already has what it needs to create a stronger economy: fertile land, extraordinary tourism assets, deep cultural heritage and hardworking people.The challenge is turning these resources into sustained economic opportunity.",
      "A Fresh Start places emphasis on unlocking the productive capacity of the state, connecting farmers to markets, developing tourism, creating pathways for enterprise and equipping young people with opportunities in technology, agriculture, business and the wider economy.",
      "The vision is simple: To build a Cross River where the wealth of the land and the talent of its people translate into opportunity, dignity and prosperity.",
      "We will produce. We will process. We will prosper.",
    ],
  },
  {
    title: "THE CROSS RIVER WE LEAVE FOR TOMORROW:",
    paragraphs: [
      "Every generation deserves more than promises about tomorrow. It deserves the opportunity to shape tomorrow.",
      "For young Cross Riverians, the aspiration is not simply to participate in political conversations, but to participate in building the economy and institutions that will shape their future.",
      "A Fresh Start describes a model in which young people can contribute their creativity, ideas and expertise through policy development, community engagement, enterprise, technology and agriculture.",
      "It is a vision of a state where hard work is rewarded, vulnerable people are protected, young people can pursue meaningful opportunities, and every community has a place in Cross River's future.",
      "The future of Cross River should be something its people build, not something they wait for. - ODEY-ARCHIBONG 2027",
    ],
  },
] as const;

export const manifestoDownloadTitle = "Download status";
export const manifestoDownloadStatus =
  "PDF download: Gated, awaiting approved manifesto file.";

/** Spoken/readout text uses Brand excerpts only, not a fake PDF. */
export const manifestoPlaceholderScript = [
  manifestoExcerpts[0].title,
  ...manifestoExcerpts[0].paragraphs,
  manifestoExcerpts[1].title,
  ...manifestoExcerpts[1].paragraphs,
  manifestoExcerpts[2].title,
  ...manifestoExcerpts[2].paragraphs,
  "The approved manifesto PDF is not published yet.",
].join(" ");
