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
    joKeyline: "/images/brand/jo-keyline-transparent.png",
    ndcLogo: "/brand/ndc-logo.jpg",
    officialPoster: "/brand/official-poster-1.png",
    joWatermarkWhite: "/images/brand/jo-mark-watermark-white.png",
  },
  /**
   * IVA-134 homepage challenges pane — campaign poster (vote governor).
   * Prefer this over portraits.official so the ticket and photo pages keep the
   * come-to-serve portrait.
   */
  homepagePoster: {
    src: "/brand/homepage-poster-vote-governor.jpg",
    alt: "John Upan Odey for Governor of Cross River",
    width: 1600,
    height: 2129,
  },
  /**
   * Come-to-serve portrait for the ticket page and photo registry.
   * Homepage challenges pane uses homepagePoster (IVA-134).
   */
  portraits: {
    official: {
      src: "/brand/juo-come-to-serve-portrait-front.jpg",
      alt: "John Upan Odey in traditional attire, facing camera",
      width: 838,
      height: 1131,
    },
    /** Suit portrait — Who is John / Meet John / profile OG only. */
    whoIsJohn: {
      src: "/brand/juo-branded-4.jpg",
      alt: "John Upan Odey",
      width: 1058,
      height: 1486,
    },
  },
  /** Official files on disk that must not proliferate on live routes. */
  reserved: {
    extraPortraits: [
      "/brand/juo-official-1.jpg",
      "/brand/juo-official-2.jpg",
      "/brand/juo-official-3.jpg",
    ],
    deputy:
      process.env.NEXT_PUBLIC_SHOW_STELLA === "true"
        ? ["/brand/madam-deputy-1.jpg", "/brand/madam-deputy-2.jpg"]
        : [],
  },
  serveLine: "I COME TO SERVE",
  sloganLead: "A FRESH START…",
  sloganLockup: "ONE PEOPLE, ONE CROSS RIVER",
  slogan: "A FRESH START… ONE PEOPLE, ONE CROSS RIVER",
  hashtags: [
    ...(process.env.NEXT_PUBLIC_SHOW_STELLA === "true"
      ? (["#OdeyArchibong2027", "#VoteOdeyArchibong2027"] as const)
      : []),
    "#AFreshStart",
    "#OnePeople",
    "#OneCrossRiver",
    "#JUO2027",
  ],
} as const;
