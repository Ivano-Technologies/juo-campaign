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
  avif?: string;
  webp?: string;
};

export type CommunityWatch = {
  url: `https://${string}`;
  embedSrc: `https://${string}`;
  label: string;
};

export type CommunityClose = {
  lead: string;
  lockup: string;
};

export type CommunityPost = {
  id: string;
  title: string;
  dateline?: string;
  body: readonly string[];
  images: readonly CommunityImage[];
  watch?: CommunityWatch;
  close?: CommunityClose;
  hashtags?: readonly string[];
};

export const communityPosts = [
  {
    id: "meeting-with-ndc-chapter-chairmen-southern-senatorial-district",
    title: "Meeting with NDC Chapter Chairmen — Southern Senatorial District",
    dateline: "Southern Senatorial District | September 27, 2026",
    body: [
      "Today, we engaged with the NDC Chapter Chairmen across the Southern Senatorial District of Cross River State in a substantive dialogue on grassroots campaign coordination and field-level mobilisation and hosted the Woman Leader of the Non-Indigenous Community and her Assistant, who came to interface with us and formally identify with the NDC party.",
      "They expressed their eagerness to welcome us into their community, noting their significant numbers, and pledged their full support for the movement.",
      "Discussions centred on door-to-door engagement, ward-to-ward inclusion, community outreach, grassroots communication, and the strategic coordination required for effective campaign operations.",
      "A significant part of the conversation focused on equipping chapter structures with the appropriate campaign materials, communication resources, and operational support necessary to translate strategy into meaningful activity at the grassroots.",
      "The message from the chapter leadership was clear: the structures are prepared to work, and with the necessary institutional support and resources, they are ready to take the campaign into communities across the district.",
    ],
    images: [
      {
        src: "/brand/news/ndc-chapter-chairmen-southern-1.jpg",
        width: 2000,
        height: 1500,
        alt: "Odey Archibong campaign meeting with NDC Chapter Chairmen from the Southern Senatorial District of Cross River State.",
      },
      {
        src: "/brand/news/ndc-chapter-chairmen-southern-2.jpg",
        width: 2000,
        height: 2000,
        alt: "Woman Leader of the Non-Indigenous Community and her Assistant identify with the NDC at the Southern Senatorial District chapter chairmen meeting.",
      },
      {
        src: "/brand/news/ndc-chapter-chairmen-southern-3.jpg",
        width: 2000,
        height: 1500,
        alt: "Campaign dialogue with NDC Chapter Chairmen on grassroots mobilisation in the Southern Senatorial District.",
      },
    ],
    hashtags: [
      "#odeyarchibong2027",
      "#AFRESHSTART",
      "#ONEPEOPLE",
      "#ONECROSSRIVER",
      "#NDC",
    ],
  },
  {
    id: "big-talk-with-john-upan-odey",
    title: "BIG TALK WITH JOHN UPAN ODEY",
    dateline: "A FRESH START… ONE PEOPLE, ONE CROSS RIVER",
    body: [
      "What does a different future look like for Cross River State?",
      "On Big Talk, John Upan Odey, NDC Governorship Candidate for Cross River State, 2027, sits down for a candid conversation about the challenges facing the state, the opportunities that remain untapped, and the kind of leadership he says Cross River needs.",
      "From jobs and enterprise to agriculture, infrastructure, healthcare, security, tourism and accountable governance, the conversation examines how Cross River can move from potential to measurable prosperity.",
      "Odey brings into the conversation a recurring position in his public record: that development should be approached with data, clear targets, enterprise and measurable results, rather than simply announcing projects. His earlier public statements have similarly emphasized strengthening agriculture and value chains, supporting local businesses, developing tourism and improving government monitoring.",
      "As the 2027 governorship race takes shape, the Big Talk interview provides an opportunity to hear directly from Odey about his vision and the issues he says matter most to Cross Riverians.",
    ],
    images: [],
    watch: {
      url: "https://www.youtube.com/live/VymqLxxIbGY?si=icZ_Q-byiQN_cBFn",
      embedSrc: "https://www.youtube.com/embed/VymqLxxIbGY",
      label: "Watch the full interview.",
    },
    close: {
      lead: "JOHN UPAN ODEY 2027",
      lockup: "A FRESH START - ONE PEOPLE, ONE CROSS RIVER",
    },
  },
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

const pvcCollectionNotice = {
  id: "your-vote-your-power",
  title: "Your vote. Your power.",
  dateline: "29 September 2026",
  body: [
    "The Independent National Electoral Commission (INEC) says collection of Permanent Voter Cards (PVCs) will begin Friday, 9 October 2026, across Nigeria.",
    "To all NDC supporters in Cross River and across Nigeria: if you are a registered voter and your PVC is ready for collection, make plans to collect it from the designated INEC collection centre/office in your area.",
    "Your PVC is your access to the ballot.",
    "Your vote is your voice.",
    "Your voice. Your power.",
    "Collection begins: 9 October 2026",
    "INEC offices/designated collection centres nationwide",
    "Check your voter status.",
    "Confirm your collection location.",
    "Collect your PVC.",
    "Let every eligible NDC supporter be ready to participate in the democratic process.",
    "YOUR VOICE. YOUR POWER.",
  ],
  images: [
    {
      src: "/brand/pvc-collection.jpg",
      avif: "/brand/pvc-collection.avif",
      webp: "/brand/pvc-collection.webp",
      width: 1415,
      height: 2000,
      alt: "Campaign poster: Collect your PVC. Your Vote. Our Power. NDC, Nigeria Democratic Congress. Collection begins 9th October 2026 at INEC offices nationwide, with hands holding permanent voter cards.",
    },
  ],
  hashtags: [
    "#NDC",
    "#odeyarchibong2027",
    "#NigeriaDemocraticCongress",
    "#YourVoiceYourPower",
  ],
} as const satisfies CommunityPost;

/** News index and story pages. Homepage community gallery stays on communityPosts. */
export const newsPosts = [pvcCollectionNotice, ...communityPosts] as const satisfies readonly CommunityPost[];

export function communityPostPath(id: string): `/news/${string}` {
  return `/news/${id}`;
}

export function getCommunityPost(id: string): CommunityPost | undefined {
  return newsPosts.find((post) => post.id === id);
}

export function communityPostSeoTitle(title: string): string {
  return pageSeoTitle(title);
}
