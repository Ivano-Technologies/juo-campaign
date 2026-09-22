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
    ndcLogo: "/brand/ndc-logo.jpg",
    officialPoster: "/brand/official-poster-1.png",
  },
  /**
   * Kezie/CoS lock: Challenges / I COME TO SERVE uses only
   * 02_john_upan_odey_portrait_front_white_bg. Do not use 01 gradient,
   * earlier 01 front jpg, BA page-1 crop, 04 profile, or 07 close.
   */
  portraits: {
    official: {
      src: "/brand/juo-come-to-serve-portrait-front.png",
      alt: "John Upan Odey Jnr in traditional attire, facing camera",
      width: 1632,
      height: 2176,
    },
  },
  /** Official files on disk that must not proliferate on live routes. */
  reserved: {
    extraPortraits: [
      "/brand/juo-official-1.jpg",
      "/brand/juo-official-2.jpg",
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
