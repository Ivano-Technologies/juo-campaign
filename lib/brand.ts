export const brand = {
  colors: {
    /** Royal Blue — Brand Manual (IVA-31 / IVA-44). */
    blue: "#40449B",
    /**
     * IVA-46 pillar-strip exception only: same Royal hue, one shade deeper
     * than #40449B for 04–06. Not a page background. Not near-black.
     */
    blueDeep: "#2C2F70",
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
   * Challenges / I COME TO SERVE uses only
   * 01_john_upan_odey_portrait_front_gradient. Do not use white-bg 02,
   * BA page-1 crop, 04 profile, or 07 close.
   */
  portraits: {
    official: {
      src: "/brand/juo-come-to-serve-portrait-front.jpg",
      alt: "John Upan Odey Jnr in traditional attire, facing camera",
      width: 838,
      height: 1131,
    },
    /** Suit portrait — Who is John / Meet John / profile OG only. */
    whoIsJohn: {
      src: "/brand/juo-branded-4.jpg",
      alt: "John Upan Odey Jnr",
      width: 1058,
      height: 1486,
    },
    /** Hero watermark only. The body portrait is the centered 4:5 file. */
    stellaOfficial: {
      src: "/images/people/odey-archibong-stella-official.jpg",
      alt: "Apostle Dr. Stella Charles Archibong",
      width: 1079,
      height: 1280,
    },
    stellaOfficial4x5: {
      src: "/images/people/odey-archibong-stella-official-4x5.jpg",
      alt: "Apostle Dr. Stella Charles Archibong",
      width: 1024,
      height: 1280,
    },
  },
  /** Official files on disk that must not proliferate on live routes. */
  reserved: {
    extraPortraits: [
      "/brand/juo-official-1.jpg",
      "/brand/juo-official-2.jpg",
      "/brand/juo-official-3.jpg",
    ],
    deputy: ["/brand/madam-deputy-1.jpg", "/brand/madam-deputy-2.jpg"],
  },
  serveLine: "I COME TO SERVE",
  sloganLead: "A FRESH START…",
  sloganLockup: "ONE PEOPLE, ONE CROSS RIVER",
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
