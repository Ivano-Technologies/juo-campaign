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
   * Community-first rule (Chris / IVA-43): one official candidate portrait
   * sitewide. Extra John photos stay in `public/brand/` unused.
   */
  portraits: {
    official: {
      src: "/brand/juo-official-1.jpg",
      alt: "Official portrait of John Upan Odey Jnr",
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
