/**
 * Brand-approved community gallery posts (22 Sep WAT).
 * Copy is locked — do not paraphrase, invent posts, or add extra photos.
 */

export const communityPath = "/news" as const;

export const communityPosts = [
  {
    id: "connecting-with-cross-rivers-youth",
    src: "/brand/community/connecting-with-cross-rivers-youth.png",
    width: 1127,
    height: 1396,
    title: "Connecting with Cross River’s Youth",
    alt: "Connecting with Cross River’s Youth",
    body: [
      "A moment of connection with young Cross Riverians, sharing conversations, experiences and perspectives about the future of their state.",
      "For John Upan Odey, engaging with young people means listening to their aspirations, understanding their concerns and recognising the energy, talent and ideas they bring to Cross River’s future.",
      "The future of Cross River belongs to all of us.",
    ],
  },
  {
    id: "engagement-with-ward-leaders",
    src: "/brand/community/engagement-with-ward-leaders.png",
    width: 1127,
    height: 1396,
    title: "Engagement with Ward Leaders",
    alt: "Engagement with Ward Leaders",
    body: [
      "NDC Cross River Deputy Governor Candidate,  Dr. Stella Charles Archibong engages with ward leaders in a constructive dialogue focused on strengthening grassroots connections, listening to local perspectives and deepening understanding of the priorities of communities across Cross River.",
      "The engagement reflects the importance of working closely with people at the grassroots in building a more inclusive and responsive approach to governance.",
    ],
  },
  {
    id: "a-meeting-of-purpose",
    src: "/brand/community/a-meeting-of-purpose.png",
    width: 1535,
    height: 1025,
    title: "A Meeting of Purpose",
    alt: "A Meeting of Purpose",
    body: [
      "John Upan Odey joined H.E. Peter Obi, the NDC presidential candidate, and governorship candidates from across Nigeria at the NDC Governorship Candidates Forum in Abuja.",
      "It was an opportunity to connect, exchange ideas and strengthen a shared commitment to a new direction for Nigeria and Cross River State.",
    ],
  },
  {
    id: "ndc-cross-river-listening-tour",
    src: "/brand/community/ndc-cross-river-listening-tour.png",
    width: 1127,
    height: 1395,
    title: "NDC Cross River Listening Tour",
    alt: "NDC Cross River Listening Tour",
    body: [
      "The NDC Cross River Listening tour brings the party closer to the grassroots, creating opportunities to engage directly with ward members across the state.",
      "Through these conversations, ward members share their experiences, concerns, and aspirations, helping to ensure that the voices of communities remain central to the conversation about Cross River’s future.",
      "Odey- Archibong is invested in and committed to listening. Engaging and Building One people- One Cross River Together.",
    ],
  },
] as const;

export type CommunityPost = (typeof communityPosts)[number];
