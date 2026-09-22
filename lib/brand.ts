export const brand = {
  colors: {
    /** Royal Blue — Brand Manual (IVA-31 / IVA-44). */
    blue: "#40449B",
    white: "#FFFFFF",
    red: "#EF2B35",
  },
  marks: {
    candidateMark1: "/brand/candidate-mark-1.png",
    candidateMark2: "/brand/candidate-mark-2.png",
    ndcLogo: "/brand/ndc-logo.jpg",
    officialPoster: "/brand/official-poster-1.png",
  },
  /**
   * CoS lock (IVA-45): `juo-official-1.jpg` / JUO OFFICIAL 1 is THE one
   * sitewide official portrait (Challenges / I COME TO SERVE pane).
   * Brand should confirm 1 vs 2 vs 3 on the preview before cutover.
   * Extra John photos stay in `public/brand/` unused — do not proliferate.
   */
  portraits: {
    official: {
      src: "/brand/juo-official-1.jpg",
      alt: "Official portrait of John Upan Odey Jnr — JUO OFFICIAL 1",
      width: 912,
      height: 1280,
    },
  },
  /** Official files on disk that must not proliferate on live routes. */
  reserved: {
    extraPortraits: [
      "/brand/juo-official-2.jpg",
      "/brand/juo-official-3.jpg",
    ],
    deputy: ["/brand/madam-deputy-1.jpg", "/brand/madam-deputy-2.jpg"],
  },
  slogan: "A FRESH START… ONE PEOPLE, ONE CROSS RIVER",
  hashtags: [
    "#OdeyArchibong2027",
    "#VoteOdeyArchibong2027",
    "#AFreshStart",
    "#OnePeople",
    "#OneCrossRiver",
    "#JUO2027",
  ],
} as const;
