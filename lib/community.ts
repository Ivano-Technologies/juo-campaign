import { pageSeoTitle } from "@/lib/brand-seo";

/**
 * Brand-approved community gallery posts.
 * Copy is locked — do not paraphrase or invent extra posts.
 */

export const communityPath = "/news" as const;

export type CommunityImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type CommunityPost = {
  id: string;
  title: string;
  dateline?: string;
  body: readonly string[];
  images: readonly CommunityImage[];
};

export const communityPosts = [
  {
    id: "john-upan-odey-named-foundation-fellow-of-icap",
    title: "John Upan Odey Named Foundation Fellow of ICAP",
    dateline: "Abuja | September 23, 2026",
    body: [
      "John Upan Odey has been named a Foundation Fellow of the Institute of Competition and Antitrust Practitioners (ICAP) at the institute’s formal unveiling and induction ceremony held in Abuja on Wednesday, September 23, 2026.",
      "The recognition places Odey among ICAP’s pioneer fellows as the institute begins its work of advancing professional standards, knowledge and ethical practice in competition and antitrust matters in Nigeria.",
    ],
    images: [
      {
        src: "/brand/news/icap-foundation-fellow-1.jpg",
        width: 3072,
        height: 2048,
        alt: "John Upan Odey at the ICAP Foundation Fellow unveiling and induction ceremony in Abuja.",
      },
      {
        src: "/brand/news/icap-foundation-fellow-2.jpg",
        width: 3072,
        height: 2048,
        alt: "John Upan Odey named Foundation Fellow of the Institute of Competition and Antitrust Practitioners.",
      },
    ],
  },
  {
    id: "connecting-with-cross-rivers-youth",
    title: "Connecting with Cross River’s Youth",
    body: [
      "A moment of connection with young Cross Riverians, sharing conversations, experiences and perspectives about the future of their state.",
      "For John Upan Odey, engaging with young people means listening to their aspirations, understanding their concerns and recognising the energy, talent and ideas they bring to Cross River’s future.",
      "The future of Cross River belongs to all of us.",
    ],
    images: [
      {
        src: "/brand/community/connecting-with-cross-rivers-youth.png",
        width: 1127,
        height: 1396,
        alt: "Connecting with Cross River’s Youth",
      },
    ],
  },
  {
    id: "engagement-with-ward-leaders",
    title: "Engagement with Ward Leaders",
    body: [
      "NDC Cross River Deputy Governor Candidate,  Dr. Stella Charles Archibong engages with ward leaders in a constructive dialogue focused on strengthening grassroots connections, listening to local perspectives and deepening understanding of the priorities of communities across Cross River.",
      "The engagement reflects the importance of working closely with people at the grassroots in building a more inclusive and responsive approach to governance.",
    ],
    images: [
      {
        src: "/brand/community/engagement-with-ward-leaders.png",
        width: 1127,
        height: 1396,
        alt: "Engagement with Ward Leaders",
      },
    ],
  },
  {
    id: "a-meeting-of-purpose",
    title: "A Meeting of Purpose",
    body: [
      "John Upan Odey joined H.E. Peter Obi, the NDC presidential candidate, and governorship candidates from across Nigeria at the NDC Governorship Candidates Forum in Abuja.",
      "It was an opportunity to connect, exchange ideas and strengthen a shared commitment to a new direction for Nigeria and Cross River State.",
    ],
    images: [
      {
        src: "/brand/community/a-meeting-of-purpose.png",
        width: 1535,
        height: 1025,
        alt: "A Meeting of Purpose",
      },
    ],
  },
  {
    id: "ndc-cross-river-listening-tour",
    title: "NDC Cross River Listening Tour",
    body: [
      "The NDC Cross River Listening tour brings the party closer to the grassroots, creating opportunities to engage directly with ward members across the state.",
      "Through these conversations, ward members share their experiences, concerns, and aspirations, helping to ensure that the voices of communities remain central to the conversation about Cross River’s future.",
      "Odey- Archibong is invested in and committed to listening. Engaging and Building One people- One Cross River Together.",
    ],
    images: [
      {
        src: "/brand/community/ndc-cross-river-listening-tour.png",
        width: 1127,
        height: 1395,
        alt: "NDC Cross River Listening Tour",
      },
    ],
  },
] as const satisfies readonly CommunityPost[];

export function communityPostPath(id: string): `/news/${string}` {
  return `/news/${id}`;
}

export function getCommunityPost(id: string): CommunityPost | undefined {
  return communityPosts.find((post) => post.id === id);
}

export function communityPostSeoTitle(title: string): string {
  return pageSeoTitle(title);
}
