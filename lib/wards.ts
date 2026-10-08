/**
 * Cross River State registration areas (wards), grouped by the LGA values the
 * site already uses in `crossRiverLgas` (lib/site.ts).
 *
 * Authoritative sources (INEC only). Snapshot taken 8 Oct 2026.
 *
 * 1. Primary: INEC CVR Polling Unit Locator, the live INEC registration
 *    database behind https://cvr.inecnigeria.org/pu
 *    State 09 CROSS RIVER: https://cvr.inecnigeria.org/PublicApi/lgas/1/Search?data[Search][state_id]=9
 *    Wards per LGA:        https://cvr.inecnigeria.org/PublicApi/wards/1/Search?data[Search][local_government_id]=<169..186>
 * 2. Cross check: INEC "Cross River State RAC" list of RA collation centres
 *    (2023 general election), linked from https://www.inecnigeria.org/resources/rac
 *    PDF: https://www.inecnigeria.org/documents/resources/rac/CROSS-RIVER.pdf
 *
 * Both sources agree on 18 LGAs and 193 registration areas, with identical
 * per LGA counts and RA codes. Names below follow source 1 (title cased for
 * display; the raw INEC string is kept in `inec`). Spelling differences
 * between the two INEC sources:
 *   Abi 03          EBOM                      (RAC PDF: EBOM/EBIJAKARA)
 *   Bakassi 08      EFUT INWANG               (RAC PDF: EFUT INSANG)
 *   Biase 03        AGWAGUNE/OKURIKE          (RAC PDF: AGWAGUNE/PKURIKE)
 *   Boki 07         BUNYIA/OKUBUCHI           (RAC PDF: BUNIYA/OKUBUCHI)
 *   Boki 11         OKU/BORUM/NJUA            (RAC PDF: OKU/BURUM/NJUA)
 *   Calabar Mun 08  EIGTH (typo, shown "Eight", matching RAC PDF WARD EIGHT)
 *   Obudu 05, 06    OBUDU URBAN I / II        (RAC PDF: UBANG I / II)
 *   Odukpani 05     EKORI/ANAKU               (RAC PDF: EKORI ANAKU)
 *   Odukpani 11     ONIMAN-KIONG (hyphen)     (RAC PDF: ONIMANKIONG)
 *   Yakurr 01       AFREKPE/EKPENTI           (RAC PDF: AFREKPE/EPENTI)
 *   Yakurr 06       IJIMAN                    (RAC PDF: IJEMAN)
 *   Yakurr 11       ABANAKPAI                 (RAC PDF: ABANAKPI)
 *   The RAC PDF also writes some Roman numerals as 1 / 11 (for I / II).
 *
 * LGA spelling map (INEC to site): "CALABAR MUNICIPALITY" is the site's
 * "Calabar Municipal". All other INEC LGA names match the site values.
 *
 * Do not add ward names from unofficial lists. If an LGA cannot be verified
 * from INEC, move it to `freeTextOnlyLgas` (empty `wards`) so the form shows
 * a free text input instead of a dropdown.
 */

export type InecWard = {
  /** INEC registration area code within the LGA (two digits). */
  code: string;
  /** Display name, also the value stored in join_submissions.ward. */
  name: string;
  /** Raw INEC CVR string, kept for audit. */
  inec: string;
};

export type LgaWardList = {
  inecLga: string;
  inecLgaCode: string;
  wards: readonly InecWard[];
};

export const crossRiverWards = {
  "Abi": {
    inecLga: "ABI",
    inecLgaCode: "01",
    wards: [
      { code: "01", name: "Adadama", inec: "ADADAMA" },
      { code: "02", name: "Afafanyi/Igonigoni", inec: "AFAFANYI/IGONIGONI" },
      { code: "03", name: "Ebom", inec: "EBOM" },
      { code: "04", name: "Ediba", inec: "EDIBA" },
      { code: "05", name: "Ekureku I", inec: "EKUREKU I" },
      { code: "06", name: "Ekureku II", inec: "EKUREKU II" },
      { code: "07", name: "Imabana I", inec: "IMABANA I" },
      { code: "08", name: "Imabana II", inec: "IMABANA II" },
      { code: "09", name: "Itigidi", inec: "ITIGIDI" },
      { code: "10", name: "Usumutong", inec: "USUMUTONG" },
    ],
  },
  "Akamkpa": {
    inecLga: "AKAMKPA",
    inecLgaCode: "02",
    wards: [
      { code: "01", name: "Akamkpa Urban", inec: "AKAMKPA URBAN" },
      { code: "02", name: "Awi", inec: "AWI" },
      { code: "03", name: "Eku", inec: "EKU" },
      { code: "04", name: "Iko", inec: "IKO" },
      { code: "05", name: "Ikpai", inec: "IKPAI" },
      { code: "06", name: "Mbarakom", inec: "MBARAKOM" },
      { code: "07", name: "Oban", inec: "OBAN" },
      { code: "08", name: "Ojuk North", inec: "OJUK NORTH" },
      { code: "09", name: "Ojuk South", inec: "OJUK SOUTH" },
      { code: "10", name: "Uyanga", inec: "UYANGA" },
    ],
  },
  "Akpabuyo": {
    inecLga: "AKPABUYO",
    inecLgaCode: "03",
    wards: [
      { code: "01", name: "Atimbo East", inec: "ATIMBO EAST" },
      { code: "02", name: "Atimbo West", inec: "ATIMBO WEST" },
      { code: "03", name: "Eneyo", inec: "ENEYO" },
      { code: "04", name: "Idundu/Anyanganse", inec: "IDUNDU/ANYANGANSE" },
      { code: "05", name: "Ikang Central", inec: "IKANG CENTRAL" },
      { code: "06", name: "Ikang North", inec: "IKANG NORTH" },
      { code: "07", name: "Ikang South", inec: "IKANG SOUTH" },
      { code: "08", name: "Ikot Edem Odo", inec: "IKOT EDEM ODO" },
      { code: "09", name: "Ikot Eyo", inec: "IKOT EYO" },
      { code: "10", name: "Ikot Nakanda", inec: "IKOT NAKANDA" },
    ],
  },
  "Bakassi": {
    inecLga: "BAKASSI",
    inecLgaCode: "04",
    wards: [
      { code: "01", name: "Abana", inec: "ABANA" },
      { code: "02", name: "Akpankanya", inec: "AKPANKANYA" },
      { code: "03", name: "Akwa", inec: "AKWA" },
      { code: "04", name: "Ambai Ekpa", inec: "AMBAI EKPA" },
      { code: "05", name: "Amoto", inec: "AMOTO" },
      { code: "06", name: "Archibong", inec: "ARCHIBONG" },
      { code: "07", name: "Atai Ema", inec: "ATAI EMA" },
      { code: "08", name: "Efut Inwang", inec: "EFUT INWANG" },
      { code: "09", name: "Ekpot Abia", inec: "EKPOT ABIA" },
      { code: "10", name: "Odiong", inec: "ODIONG" },
    ],
  },
  "Bekwarra": {
    inecLga: "BEKWARRA",
    inecLgaCode: "05",
    wards: [
      { code: "01", name: "Abuochiche", inec: "ABUOCHICHE" },
      { code: "02", name: "Afrike Ochagbe", inec: "AFRIKE OCHAGBE" },
      { code: "03", name: "Afrike Okpeche", inec: "AFRIKE OKPECHE" },
      { code: "04", name: "Beten", inec: "BETEN" },
      { code: "05", name: "Gakem", inec: "GAKEM" },
      { code: "06", name: "Ibiaragidi", inec: "IBIARAGIDI" },
      { code: "07", name: "Nyanya", inec: "NYANYA" },
      { code: "08", name: "Otukpuru", inec: "OTUKPURU" },
      { code: "09", name: "Ugboro", inec: "UGBORO" },
      { code: "10", name: "Ukpah", inec: "UKPAH" },
    ],
  },
  "Biase": {
    inecLga: "BIASE",
    inecLgaCode: "06",
    wards: [
      { code: "01", name: "Abayong", inec: "ABAYONG" },
      { code: "02", name: "Adim", inec: "ADIM" },
      { code: "03", name: "Agwagune/Okurike", inec: "AGWAGUNE/OKURIKE" },
      { code: "04", name: "Akpet/Abini", inec: "AKPET/ABINI" },
      { code: "05", name: "Biakpan", inec: "BIAKPAN" },
      { code: "06", name: "Ehom", inec: "EHOM" },
      { code: "07", name: "Erei North", inec: "EREI NORTH" },
      { code: "08", name: "Erei South", inec: "EREI SOUTH" },
      { code: "09", name: "Ikun/Etono", inec: "IKUN/ETONO" },
      { code: "10", name: "Umon North", inec: "UMON NORTH" },
      { code: "11", name: "Umon South", inec: "UMON SOUTH" },
    ],
  },
  "Boki": {
    inecLga: "BOKI",
    inecLgaCode: "07",
    wards: [
      { code: "01", name: "Abo", inec: "ABO" },
      { code: "02", name: "Alankwu", inec: "ALANKWU" },
      { code: "03", name: "Beebo/Bumaji", inec: "BEEBO/BUMAJI" },
      { code: "04", name: "Boje", inec: "BOJE" },
      { code: "05", name: "Buda", inec: "BUDA" },
      { code: "06", name: "Buentsebe", inec: "BUENTSEBE" },
      { code: "07", name: "Bunyia/Okubuchi", inec: "BUNYIA/OKUBUCHI" },
      { code: "08", name: "Ekpashi", inec: "EKPASHI" },
      { code: "09", name: "Kakwagom/Bawop", inec: "KAKWAGOM/BAWOP" },
      { code: "10", name: "Ogep/Osokom", inec: "OGEP/OSOKOM" },
      { code: "11", name: "Oku/Borum/Njua", inec: "OKU/BORUM/NJUA" },
    ],
  },
  "Calabar Municipal": {
    inecLga: "CALABAR MUNICIPALITY",
    inecLgaCode: "08",
    wards: [
      { code: "01", name: "One", inec: "ONE" },
      { code: "02", name: "Two", inec: "TWO" },
      { code: "03", name: "Three", inec: "THREE" },
      { code: "04", name: "Four", inec: "FOUR" },
      { code: "05", name: "Five", inec: "FIVE" },
      { code: "06", name: "Six", inec: "SIX" },
      { code: "07", name: "Seven", inec: "SEVEN" },
      { code: "08", name: "Eight", inec: "EIGTH" },
      { code: "09", name: "Nine", inec: "NINE" },
      { code: "10", name: "Ten", inec: "TEN" },
    ],
  },
  "Calabar South": {
    inecLga: "CALABAR SOUTH",
    inecLgaCode: "09",
    wards: [
      { code: "01", name: "One (1)", inec: "ONE (1)" },
      { code: "02", name: "Two (2)", inec: "TWO (2)" },
      { code: "03", name: "Three (3)", inec: "THREE (3)" },
      { code: "04", name: "Four (4)", inec: "FOUR (4)" },
      { code: "05", name: "Five (5)", inec: "FIVE (5)" },
      { code: "06", name: "Six (6)", inec: "SIX (6)" },
      { code: "07", name: "Seven (7)", inec: "SEVEN (7)" },
      { code: "08", name: "Eight (8)", inec: "EIGHT (8)" },
      { code: "09", name: "Nine (9)", inec: "NINE (9)" },
      { code: "10", name: "Ten (10)", inec: "TEN (10)" },
      { code: "11", name: "Eleven (11)", inec: "ELEVEN (11)" },
      { code: "12", name: "Twelve (12)", inec: "TWELVE (12)" },
    ],
  },
  "Etung": {
    inecLga: "ETUNG",
    inecLgaCode: "10",
    wards: [
      { code: "01", name: "Abia", inec: "ABIA" },
      { code: "02", name: "Abijang", inec: "ABIJANG" },
      { code: "03", name: "Agbokim", inec: "AGBOKIM" },
      { code: "04", name: "Ajassor", inec: "AJASSOR" },
      { code: "05", name: "Bendeghe Ekiem", inec: "BENDEGHE EKIEM" },
      { code: "06", name: "Effraya", inec: "EFFRAYA" },
      { code: "07", name: "Etomi", inec: "ETOMI" },
      { code: "08", name: "Itaka", inec: "ITAKA" },
      { code: "09", name: "Mkpot/Ayuk Aba", inec: "MKPOT/AYUK ABA" },
      { code: "10", name: "Nsofang", inec: "NSOFANG" },
    ],
  },
  "Ikom": {
    inecLga: "IKOM",
    inecLgaCode: "11",
    wards: [
      { code: "01", name: "Abanyum", inec: "ABANYUM" },
      { code: "02", name: "Akparabong", inec: "AKPARABONG" },
      { code: "03", name: "Ikom Urban I", inec: "IKOM URBAN I" },
      { code: "04", name: "Ikom Urban II", inec: "IKOM URBAN II" },
      { code: "05", name: "Nde", inec: "NDE" },
      { code: "06", name: "Nnam", inec: "NNAM" },
      { code: "07", name: "Nta/Nselle", inec: "NTA/NSELLE" },
      { code: "08", name: "Ofutop I", inec: "OFUTOP I" },
      { code: "09", name: "Ofutop II", inec: "OFUTOP II" },
      { code: "10", name: "Olulumo", inec: "OLULUMO" },
      { code: "11", name: "Yala/Nkum", inec: "YALA/NKUM" },
    ],
  },
  "Obanliku": {
    inecLga: "OBANLIKU",
    inecLgaCode: "12",
    wards: [
      { code: "01", name: "Basang", inec: "BASANG" },
      { code: "02", name: "Bebi", inec: "BEBI" },
      { code: "03", name: "Becheve", inec: "BECHEVE" },
      { code: "04", name: "Bendi I", inec: "BENDI I" },
      { code: "05", name: "Bendi II", inec: "BENDI II" },
      { code: "06", name: "Bishiri North", inec: "BISHIRI NORTH" },
      { code: "07", name: "Bishiri South", inec: "BISHIRI SOUTH" },
      { code: "08", name: "Bisu", inec: "BISU" },
      { code: "09", name: "Busi", inec: "BUSI" },
      { code: "10", name: "Utanga", inec: "UTANGA" },
    ],
  },
  "Obubra": {
    inecLga: "OBUBRA",
    inecLgaCode: "13",
    wards: [
      { code: "01", name: "Ababene", inec: "ABABENE" },
      { code: "02", name: "Apiapum", inec: "APIAPUM" },
      { code: "03", name: "Iyamoyong", inec: "IYAMOYONG" },
      { code: "04", name: "Obubra Urban", inec: "OBUBRA URBAN" },
      { code: "05", name: "Ochon", inec: "OCHON" },
      { code: "06", name: "Ofat", inec: "OFAT" },
      { code: "07", name: "Ofodua", inec: "OFODUA" },
      { code: "08", name: "Ofumbongha/Yala", inec: "OFUMBONGHA/YALA" },
      { code: "09", name: "Osopong I", inec: "OSOPONG I" },
      { code: "10", name: "Osopong II", inec: "OSOPONG II" },
      { code: "11", name: "Ovonum", inec: "OVONUM" },
    ],
  },
  "Obudu": {
    inecLga: "OBUDU",
    inecLgaCode: "14",
    wards: [
      { code: "01", name: "Alege/Ubang", inec: "ALEGE/UBANG" },
      { code: "02", name: "Angiaba/Begiaka", inec: "ANGIABA / BEGIAKA" },
      { code: "03", name: "Begiading", inec: "BEGIADING" },
      { code: "04", name: "Ipong", inec: "IPONG" },
      { code: "05", name: "Obudu Urban I", inec: "OBUDU URBAN I" },
      { code: "06", name: "Obudu Urban II", inec: "OBUDU URBAN II" },
      { code: "07", name: "Ukpe", inec: "UKPE" },
      { code: "08", name: "Utugwang Central", inec: "UTUGWANG CENTRAL" },
      { code: "09", name: "Utugwang North", inec: "UTUGWANG NORTH" },
      { code: "10", name: "Utugwang South", inec: "UTUGWANG SOUTH" },
    ],
  },
  "Odukpani": {
    inecLga: "ODUKPANI",
    inecLgaCode: "15",
    wards: [
      { code: "01", name: "Adiabo/Efut", inec: "ADIABO/EFUT" },
      { code: "02", name: "Akamkpa", inec: "AKAMKPA" },
      { code: "03", name: "Creek Town I", inec: "CREEK TOWN I" },
      { code: "04", name: "Creek Town II", inec: "CREEK TOWN II" },
      { code: "05", name: "Ekori/Anaku", inec: "EKORI/ANAKU" },
      { code: "06", name: "Eniong", inec: "ENIONG" },
      { code: "07", name: "Eki", inec: "EKI" },
      { code: "08", name: "Obomitiat/Mbiabo/Ediong", inec: "OBOMITIAT/MBIABO/EDIONG" },
      { code: "09", name: "Odot", inec: "ODOT" },
      { code: "10", name: "Odukpani Central", inec: "ODUKPANI CENTRAL" },
      { code: "11", name: "Oniman-Kiong", inec: "ONIMAN-KIONG" },
      { code: "12", name: "Ikoneto", inec: "IKONETO" },
      { code: "13", name: "Ito/Idere/Ukwa", inec: "ITO/IDERE/UKWA" },
    ],
  },
  "Ogoja": {
    inecLga: "OGOJA",
    inecLgaCode: "16",
    wards: [
      { code: "01", name: "Ekajuk I", inec: "EKAJUK I" },
      { code: "02", name: "Ekajuk II", inec: "EKAJUK II" },
      { code: "03", name: "Mbube East I", inec: "MBUBE EAST I" },
      { code: "04", name: "Mbube East II", inec: "MBUBE EAST II" },
      { code: "05", name: "Mbube West I", inec: "MBUBE WEST I" },
      { code: "06", name: "Mbube West II", inec: "MBUBE WEST II" },
      { code: "07", name: "Nkum Iborr", inec: "NKUM IBORR" },
      { code: "08", name: "Nkum Irede", inec: "NKUM IREDE" },
      { code: "09", name: "Ogoja Urban I", inec: "OGOJA URBAN I" },
      { code: "10", name: "Ogoja Urban II", inec: "OGOJA URBAN II" },
    ],
  },
  "Yakurr": {
    inecLga: "YAKURR",
    inecLgaCode: "17",
    wards: [
      { code: "01", name: "Afrekpe/Ekpenti", inec: "AFREKPE/EKPENTI" },
      { code: "02", name: "Ajere", inec: "AJERE" },
      { code: "03", name: "Assiga", inec: "ASSIGA" },
      { code: "04", name: "Biko Biko", inec: "BIKO BIKO" },
      { code: "05", name: "Idomi", inec: "IDOMI" },
      { code: "06", name: "Ijiman", inec: "IJIMAN" },
      { code: "07", name: "Ijom", inec: "IJOM" },
      { code: "08", name: "Ikpakapit", inec: "IKPAKAPIT" },
      { code: "09", name: "Inyima", inec: "INYIMA" },
      { code: "10", name: "Mkpani/Agoi", inec: "MKPANI/AGOI" },
      { code: "11", name: "Abanakpai", inec: "ABANAKPAI" },
      { code: "12", name: "Nkpolo/Ukpawen", inec: "NKPOLO/UKPAWEN" },
      { code: "13", name: "Ntan", inec: "NTAN" },
    ],
  },
  "Yala": {
    inecLga: "YALA",
    inecLgaCode: "18",
    wards: [
      { code: "01", name: "Echumofana", inec: "ECHUMOFANA" },
      { code: "02", name: "Gabu", inec: "GABU" },
      { code: "03", name: "Ijiraga", inec: "IJIRAGA" },
      { code: "04", name: "Ntrigom/Mfuma", inec: "NTRIGOM/MFUMA" },
      { code: "05", name: "Okpoma", inec: "OKPOMA" },
      { code: "06", name: "Okuku", inec: "OKUKU" },
      { code: "07", name: "Wanihem", inec: "WANIHEM" },
      { code: "08", name: "Wanikade", inec: "WANIKADE" },
      { code: "09", name: "Wanakom", inec: "WANAKOM" },
      { code: "10", name: "Yache", inec: "YACHE" },
      { code: "11", name: "Yahe", inec: "YAHE" },
    ],
  },
} as const satisfies Record<string, LgaWardList>;

export type WardLga = keyof typeof crossRiverWards;

/**
 * Cross River LGAs whose ward list could not be verified from INEC. They show
 * a free text ward input only. Currently none: all 18 LGAs are verified.
 */
export const freeTextOnlyLgas: readonly WardLga[] = [];

/** Select value for the "My ward isn't listed" option. */
export const WARD_NOT_LISTED = "__ward_not_listed__";

export const WARD_FREE_TEXT_MAX_LENGTH = 80;

export const wardCopy = {
  label: "Ward",
  placeholder: "Select your ward",
  pickLgaFirst: "Select your local government first to see its wards.",
  notListed: "My ward isn't listed",
  otherLabel: "Your ward",
  otherPlaceholder: "Type the name of your ward",
  otherHelp: "Type your ward as you know it. A coordinator will confirm it.",
  errors: {
    select: "Please select your ward.",
    type: "Please type the name of your ward.",
    tooLong: `Please keep your ward name under ${WARD_FREE_TEXT_MAX_LENGTH} characters.`,
    notInLga: "Please select a ward from the list for your local government.",
  },
} as const;

export function isWardLga(lga: string): lga is WardLga {
  return Object.prototype.hasOwnProperty.call(crossRiverWards, lga);
}

/** True for the 18 Cross River LGAs. False for Diaspora or unknown values. */
export function lgaNeedsWard(lga: string): boolean {
  return isWardLga(lga);
}

/** Wards for a site LGA value. Empty for Diaspora, unknown, or free text only LGAs. */
export function wardsForLga(lga: string): readonly InecWard[] {
  if (!isWardLga(lga) || freeTextOnlyLgas.includes(lga)) {
    return [];
  }
  return crossRiverWards[lga].wards;
}

/** True when the LGA needs a ward but only free text is available. */
export function lgaIsFreeTextOnly(lga: string): boolean {
  return lgaNeedsWard(lga) && wardsForLga(lga).length === 0;
}

export function normalizeWardText(raw: unknown): string {
  if (typeof raw !== "string") {
    return "";
  }
  return raw
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export type WardValidationResult =
  | { ok: true; ward: string | null }
  | { ok: false; message: string };

/**
 * Shared client and server ward rule.
 * - Diaspora / unknown LGA: no ward (null).
 * - Listed ward: must belong to the selected LGA.
 * - Not listed (or free text only LGA): free text required.
 */
export function validateWard(input: {
  lga: string;
  ward: unknown;
  wardUnlisted: boolean;
}): WardValidationResult {
  if (!lgaNeedsWard(input.lga)) {
    return { ok: true, ward: null };
  }

  const ward = normalizeWardText(input.ward);
  const freeText = input.wardUnlisted || lgaIsFreeTextOnly(input.lga);

  if (freeText) {
    if (ward.length < 2 || ward === WARD_NOT_LISTED) {
      return { ok: false, message: wardCopy.errors.type };
    }
    if (ward.length > WARD_FREE_TEXT_MAX_LENGTH) {
      return { ok: false, message: wardCopy.errors.tooLong };
    }
    return { ok: true, ward };
  }

  if (!ward) {
    return { ok: false, message: wardCopy.errors.select };
  }
  const match = wardsForLga(input.lga).find((item) => item.name === ward);
  if (!match) {
    return { ok: false, message: wardCopy.errors.notInLga };
  }
  return { ok: true, ward: match.name };
}
