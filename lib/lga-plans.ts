import { pageSeoTitle } from "@/lib/brand-seo";

/**
 * ODEY-ARCHIBONG 2027 LGA plans (IVA-138).
 * Headlines and supporting lines are locked from Chris Adah's OOH LGA PDF.
 * Plan headings, plan lines, points, OUR PROMISE and the FINAL NOTE are
 * Chris Adah's final copy (7 Oct 2026 email), word for word. The only
 * edits are the agreed normalizations: every plan heading reads
 * "THE ODEY-ARCHIBONG PLAN FOR <LGA>", and hyphenated compounds in body
 * copy follow the JUO no-hyphen rule (hyphen replaced by a space or closed
 * up, no words changed). "Odey-Archibong" and "Nigeria-Cameroon" keep
 * their hyphens as in Chris's spelling. Abi's plan intro is from the same
 * email, with the same normalizations.
 *
 * Background paragraphs: restored from the same 7 Oct 2026 email (same
 * hyphen normalizations, e.g. "Bay Side", "Becheeve Ranch", "kaolin rich")
 * per Chris Adah's 8 Oct 2026 instruction: remove references to current
 * Cross River State Government programmes, initiatives or ongoing
 * government projects; keep the factual background (economic activities,
 * natural resources, opportunities) and named mineral sites. Removals are
 * whole sentences or clauses only; no new wording was added. The removed
 * text is listed in the PR that restored this (and in Chris's email).
 * Do not invent, trim or paraphrase. visualCue is a
 * design brief label for future artwork and is not rendered.
 */

export const lgaPlansPath = "/lga-plans" as const;

export const lgaPlansPageTitle = pageSeoTitle("LGA Plans");

export const lgaPlansPageDescription =
  "Eighteen local government plans for Cross River under Odey-Archibong 2027: A Fresh Start. One People. One Cross River. I Come To Serve.";

export const lgaPlansHeroLede =
  "Every local government has its own plan. Pick your LGA to read the plan written for your community.";

export const lgaPlansSelectLabel = "Choose your local government";

/** Consistent OOH footer lock-up on every plan card (exact PDF wording). */
export const lgaPlanFooterLockup = [
  "ODEY-ARCHIBONG 2027",
  "A FRESH START",
  "ONE PEOPLE. ONE CROSS RIVER.",
  "I COME TO SERVE.",
] as const;

/** Label shown above each LGA promise (exact copy). */
export const lgaPlanPromiseLabel = "OUR PROMISE";

export type LgaPlanPoint = {
  title: string;
  body: string;
};

export type LgaPlan = {
  slug: string;
  name: string;
  headline: string;
  supportingLine: string;
  /** Always "THE ODEY-ARCHIBONG PLAN FOR <LGA IN CAPS>". */
  planHeading: string;
  planLine: string;
  /** Optional one line plan intro shown under planLine (Abi only). */
  intro?: string;
  points: readonly LgaPlanPoint[];
  promise: string;
  /**
   * Chris Adah's background paragraphs (7 Oct 2026 email, trimmed per her
   * 8 Oct 2026 instruction: no current state government programmes).
   * Rendered as a muted Background note below the plan card.
   */
  background: readonly string[];
  /** Design brief cue for future LGA artwork. Not rendered. */
  visualCue: string;
};

/** Closing FINAL NOTE shared by all 18 plans (Chris Adah, 7 Oct 2026). */
export const lgaPlansClosingNote = {
  label: "FINAL NOTE:",
  intro: "Every LGA will follow the same economic philosophy:",
  pillars: [
    {
      title: "WE PRODUCE.",
      body: "We will use what each community already produces.",
    },
    {
      title: "WE PROCESS.",
      body: "We will stop sending everything away as raw material.",
    },
    {
      title: "WE PROSPER.",
      body: "We will make sure the resulting value creates jobs, enterprise and better household incomes.",
    },
  ],
} as const;

export const lgaPlans = [
  {
    slug: "abi",
    name: "Abi",
    headline: "ABI, YOUR FARM MUST FEED YOUR FAMILY, NOT JUST THE MARKET.",
    supportingLine: "Better roads. Better markets. Better livelihoods.",
    planHeading: "THE ODEY-ARCHIBONG PLAN FOR ABI",
    planLine: "FARMS THAT PAY. ROADS THAT CONNECT. RESOURCES THAT CREATE VALUE.",
    intro: "The plan is to make agriculture more productive and commercially rewarding by improving the connection between the farmer, the farm, the road and the market.",
    points: [
      {
        title: "Better Farm to Market Roads",
        body: "Communities should not produce food only to watch poor roads reduce its value before it reaches the market.",
      },
      {
        title: "Agricultural Value Addition",
        body: "Abi's agricultural products should not leave the community only as raw produce. Processing, storage and aggregation should create additional income and employment.",
      },
      {
        title: "Quartz and Local Resources",
        body: "Abi's documented quartz deposits should be viewed as part of the LGA's wider economic resource base, subject to proper geological assessment and lawful development.",
      },
      {
        title: "Farmer Prosperity",
        body: "The objective is simple: the person who grows the food should be able to build a better life from growing it.",
      },
    ],
    promise: "Abi should not merely feed Cross River. Abi's farmers should be able to feed, educate and build better futures for their own families from the wealth their land produces.",
    background: [
      "Abi is a farming community, and its agricultural strength should be reflected in the prosperity of the families who cultivate its land.",
      "Abi also has documented quartz deposits at Adadama, Itigidi and Ekureku, giving the LGA an additional natural resource asset that can support construction and industrial value chains.",
    ],
    visualCue: "Farming communities",
  },
  {
    slug: "akamkpa",
    name: "Akamkpa",
    headline: "AKAMKPA DESERVES ROADS THAT CONNECT OPPORTUNITY.",
    supportingLine: "Let our farms, communities and businesses move forward.",
    planHeading: "THE ODEY-ARCHIBONG PLAN FOR AKAMKPA",
    planLine: "FROM FORESTS AND FARMS TO FACTORIES AND MARKETS.",
    points: [
      {
        title: "Roads That Open Economic Corridors",
        body: "Farmers, traders, businesses and tourism operators need reliable connectivity.",
      },
      {
        title: "Responsible Mineral Development",
        body: "Akamkpa's limestone, iron ore, manganese and other mineral deposits represent potential economic assets. The priority should be responsible exploration, environmental protection, processing and local economic participation.",
      },
      {
        title: "Tourism That Benefits Communities",
        body: "Kwa Falls and other natural attractions should generate opportunities for guides, transport operators, hospitality businesses, artisans and young entrepreneurs.",
      },
      {
        title: "Agricultural Value Chains",
        body: "Akamkpa's oil palm economy should move beyond production into processing and downstream enterprise.",
      },
    ],
    promise: "Akamkpa should no longer be defined by what it possesses underground or hidden in its forests, but by what those resources do for the people who call Akamkpa home.",
    background: [
      "Akamkpa has an unusual combination of agriculture, forests, tourism and substantial mineral resources. Its documented deposits include limestone, iron ore, manganese, tourmaline, cassiterite, tantalite and feldspar.",
      "The state also identifies tourism assets around Akamkpa, including Kwa Falls.",
    ],
    visualCue: "Roads and opportunity",
  },
  {
    slug: "akpabuyo",
    name: "Akpabuyo",
    headline: "AKPABUYO MUST PROSPER WHERE ITS PEOPLE LIVE.",
    supportingLine: "Better infrastructure. Stronger livelihoods. A Fresh Start.",
    planHeading: "THE ODEY-ARCHIBONG PLAN FOR AKPABUYO",
    planLine: "WHERE LAND, WATER AND PEOPLE CREATE PROSPERITY.",
    points: [
      {
        title: "Fisheries and Aquaculture",
        body: "Develop the fishing economy beyond subsistence by supporting production, storage, processing and market access.",
      },
      {
        title: "Agricultural Enterprise",
        body: "Strengthen tree crops, livestock and food production while connecting farmers to markets.",
      },
      {
        title: "Coastal and Rural Infrastructure",
        body: "Roads, drainage, water and basic infrastructure should support communities rather than constrain them.",
      },
      {
        title: "Local Enterprise",
        body: "Small businesses should have access to skills, markets and productive infrastructure.",
      },
      {
        title: "Responsible Resource Development",
        body: "Quartz and other identified resources should be considered within a transparent, environmentally responsible economic development framework.",
      },
    ],
    promise: "Prosperity should not require an Akpabuyo child to leave home before opportunity becomes possible.",
    background: [
      "Akpabuyo's identity is closely connected to farming, fishing, coastal communities and its proximity to Calabar. Its official mineral record identifies quartz deposits around Idundu, Esuk Ekpo Eyoh and Ifondo.",
    ],
    visualCue: "Local prosperity",
  },
  {
    slug: "bakassi",
    name: "Bakassi",
    headline: "BAKASSI IS NOT FORGOTTEN.",
    supportingLine: "Secure communities. Stronger livelihoods. Shared prosperity.",
    planHeading: "THE ODEY-ARCHIBONG PLAN FOR BAKASSI",
    planLine: "FROM A COASTAL COMMUNITY TO A COASTAL ECONOMIC FRONTIER.",
    points: [
      {
        title: "Protect Fishing Livelihoods",
        body: "Support fishermen with better landing facilities, storage, processing and market access.",
      },
      {
        title: "Maritime Opportunity",
        body: "Bakassi's geography should be treated as an economic asset, not an administrative afterthought.",
      },
      {
        title: "Coastal Infrastructure",
        body: "Improve access, communications, water, sanitation and community infrastructure suited to riverine conditions.",
      },
      {
        title: "Security and Community Protection",
        body: "Secure communities are essential for fishing, commerce, investment and family life.",
      },
      {
        title: "Resource Governance",
        body: "Any future petroleum or other extractive development must provide transparent environmental and community safeguards.",
      },
    ],
    promise: "Bakassi should never have to ask whether Cross River remembers it. Its people should see development, opportunity and dignity reach their communities.",
    background: [
      "Bakassi is fundamentally a riverine/coastal community, with fishing and maritime livelihoods deeply connected to the identity of its people.",
      "The current Cross River mineral table does not list a solid mineral deposit for Bakassi. Older state resource materials have identified petroleum potential in the Bakassi area, but this should not be presented as an established commercial reserve without further verification.",
    ],
    visualCue: "Coastal communities",
  },
  {
    slug: "bekwarra",
    name: "Bekwarra",
    headline: "BEKWARRA DESERVES THE BASICS THAT WORK.",
    supportingLine: "Roads. Water. Healthcare. Opportunity.",
    planHeading: "THE ODEY-ARCHIBONG PLAN FOR BEKWARRA",
    planLine: "ROADS. WATER. HEALTHCARE. FOOD. OPPORTUNITY.",
    points: [
      {
        title: "Agricultural Productivity",
        body: "Support farmers with inputs, extension services, storage and market connections.",
      },
      {
        title: "Mineral Based Enterprise",
        body: "Kaolin, clay, granite, basalt and salt can support construction, ceramics and other industries if developed responsibly.",
      },
      {
        title: "Rural Roads",
        body: "The farmer should not lose income because produce cannot reach market.",
      },
      {
        title: "Essential Services",
        body: "Water and primary healthcare must function close to communities.",
      },
      {
        title: "Youth Enterprise",
        body: "Agriculture and resource based industries should become platforms for local employment.",
      },
    ],
    promise: "The basics are not luxuries. A mother should find water. A farmer should find a road. A sick person should find care. A young person should find opportunity.",
    background: [
      "Bekwarra's agricultural identity makes roads, markets, water and healthcare especially important. Its documented resources include olivine basalt, kaolin, salt, clay and granite.",
    ],
    visualCue: "Basics that work",
  },
  {
    slug: "biase",
    name: "Biase",
    headline: "BIASE FEEDS CROSS RIVER. LET'S PROTECT ITS FARMERS.",
    supportingLine: "Resilient communities. Better agriculture. Better incomes.",
    planHeading: "THE ODEY-ARCHIBONG PLAN FOR BIASE",
    planLine: "THE HAND THAT FEEDS CROSS RIVER MUST NOT BE LEFT BEHIND.",
    points: [
      {
        title: "Protect the Farmer",
        body: "Improve access to inputs, extension support and productive finance.",
      },
      {
        title: "Build Agricultural Value Chains",
        body: "Move from simply producing crops to processing, packaging and marketing them.",
      },
      {
        title: "Develop Oil Palm and Tree Crops",
        body: "Strengthen perennial crops as long term income generating assets.",
      },
      {
        title: "Responsible Mineral Development",
        body: "Barite, tourmaline, quartz and other resources can support enterprise when properly assessed and developed.",
      },
      {
        title: "Climate Resilient Agriculture",
        body: "Flooding has already been identified as a threat to Biase's farms and food systems, making resilience essential.",
      },
    ],
    promise: "When the farmer prospers, the family prospers. When the family prospers, Biase prospers.",
    background: [
      "Biase is strongly agricultural, while the state's mineral records identify tourmaline, barite, quartz, clay and lepidolite.",
    ],
    visualCue: "Farming communities",
  },
  {
    slug: "boki",
    name: "Boki",
    headline: "BOKI'S COCOA SHOULD CREATE BOKI'S WEALTH.",
    supportingLine: "Better roads. Agro-processing. More jobs at home.",
    planHeading: "THE ODEY-ARCHIBONG PLAN FOR BOKI",
    planLine: "FROM COCOA BEANS TO BOKI BRANDS. FROM PALM TO PROCESSING.",
    points: [
      {
        title: "Cocoa Value Addition",
        body: "Boki should capture more value from cocoa through aggregation, processing, packaging and market access.",
      },
      {
        title: "Oil Palm Industrialisation",
        body: "Develop processing opportunities around Boki's oil palm economy.",
      },
      {
        title: "Forest and Biodiversity Economy",
        body: "Tourism and conservation should generate legitimate livelihoods without destroying the ecological assets that make Boki unique.",
      },
      {
        title: "Responsible Mineral Development",
        body: "Granite and iron ore should be assessed for responsible economic development.",
      },
      {
        title: "Youth Jobs at Home",
        body: "Agriculture, processing, tourism and conservation can become platforms for local employment.",
      },
    ],
    promise: "Boki should not merely grow the raw materials that make somebody else wealthy. The value created from Boki's land should create opportunities for Boki's people.",
    background: [
      "This is one of the clearest LGA identities in Cross River.",
      "Boki is known for its agricultural potential, particularly cocoa and oil palm, while its extraordinary rainforest, wildlife and conservation assets give it a major tourism dimension. The state has also identified granite and iron ore deposits in Boki.",
    ],
    visualCue: "Cocoa",
  },
  {
    slug: "calabar-municipal",
    name: "Calabar Municipal",
    headline: "CALABAR MUST WORK FOR EVERYONE.",
    supportingLine: "Cleaner streets. Better infrastructure. More opportunities.",
    planHeading: "THE ODEY-ARCHIBONG PLAN FOR CALABAR MUNICIPAL",
    planLine: "A CITY THAT WORKS SHOULD WORK FOR THE PEOPLE WHO LIVE IN IT.",
    points: [
      {
        title: "Cleaner Calabar",
        body: "Improve waste management, drainage and public space maintenance.",
      },
      {
        title: "Better Urban Infrastructure",
        body: "Roads, drainage, lighting, public spaces and mobility should support everyday life.",
      },
      {
        title: "Tourism and Creative Economy",
        body: "Culture, hospitality, events and creative enterprise should create opportunities beyond seasonal activity.",
      },
      {
        title: "Enterprise Friendly City",
        body: "Small businesses should be able to operate, grow and employ people.",
      },
      {
        title: "Responsible Resource Use",
        body: "Kaolin and quartz resources should be considered within appropriate environmental and industrial planning.",
      },
    ],
    promise: "Calabar's reputation as a beautiful city must be matched by the everyday experience of the people who live there.",
    background: [
      "Calabar Municipal is the state's principal urban and administrative centre, with strong connections to tourism, hospitality, commerce, culture and services.",
      "Its documented mineral resources include kaolin and quartz.",
    ],
    visualCue: "Urban infrastructure",
  },
  {
    slug: "calabar-south",
    name: "Calabar South",
    headline: "CALABAR SOUTH DESERVES TO LIVE ABOVE THE FLOODS.",
    supportingLine: "Better drainage. Better communities. A Fresh Start.",
    planHeading: "THE ODEY-ARCHIBONG PLAN FOR CALABAR SOUTH",
    planLine: "SAFE HOMES. DRY ROADS. CLEANER COMMUNITIES. BETTER LIVES.",
    points: [
      {
        title: "Drainage and Flood Management",
        body: "Prioritise functioning drainage systems and maintenance of existing infrastructure.",
      },
      {
        title: "Urban Renewal",
        body: "Upgrade roads, public spaces and community infrastructure.",
      },
      {
        title: "Waterfront Economy",
        body: "Explore legitimate opportunities around fishing, maritime activity, commerce and tourism.",
      },
      {
        title: "Waste and Sanitation",
        body: "Cleaner communities require reliable systems rather than occasional cleanups.",
      },
      {
        title: "Quartz and Construction Value Chains",
        body: "Where commercially viable and environmentally appropriate, local resources can support construction related economic activity.",
      },
    ],
    promise: "A family should not have to watch its home, belongings or livelihood disappear under floodwater every rainy season.",
    background: [
      "Calabar South's urban and waterfront character makes drainage, sanitation and flood resilience particularly important. Its official mineral record identifies quartz at Bay Side and Esuk Otu.",
    ],
    visualCue: "Urban infrastructure",
  },
  {
    slug: "etung",
    name: "Etung",
    headline: "ETUNG HAS MORE TO OFFER, AND OUR PEOPLE MUST BENEFIT.",
    supportingLine: "Agriculture. Trade. Jobs. Opportunity.",
    planHeading: "THE ODEY-ARCHIBONG PLAN FOR ETUNG",
    planLine: "COCOA. TRADE. TOURISM. RESOURCES. JOBS.",
    points: [
      {
        title: "Cocoa Processing",
        body: "Move more of Etung's cocoa economy towards processing and value addition.",
      },
      {
        title: "Border Trade",
        body: "Improve infrastructure and commercial systems around the Nigeria-Cameroon trade corridor.",
      },
      {
        title: "Farmer Prosperity",
        body: "Strengthen farmers' access to markets, finance, inputs and reliable infrastructure.",
      },
      {
        title: "Tourism",
        body: "Connect natural attractions such as Agbokim Waterfalls with hospitality and local enterprise.",
      },
      {
        title: "Mineral Potential",
        body: "Basalt and marble should be considered as part of Etung's broader resource economy.",
      },
    ],
    promise: "Etung should not export its cocoa, its young people and its opportunities while importing the prosperity that should have been created at home.",
    background: [
      "Etung is one of Cross River's strongest cocoa and border trade identities. Current reporting identifies cocoa development and the Ajassor border corridor as important economic opportunities.",
      "Its documented minerals include basalt and marble, while the state also identifies Agbokim Waterfalls and other natural assets within the wider tourism economy.",
    ],
    visualCue: "Agriculture and trade",
  },
  {
    slug: "ikom",
    name: "Ikom",
    headline: "IKOM SHOULD BE A COMMERCIAL POWERHOUSE.",
    supportingLine: "Better connectivity. Stronger businesses. More jobs.",
    planHeading: "THE ODEY-ARCHIBONG PLAN FOR IKOM",
    planLine: "WHERE TRADE MEETS AGRICULTURE, INDUSTRY AND OPPORTUNITY.",
    points: [
      {
        title: "Commercial Infrastructure",
        body: "Improve roads, markets and urban infrastructure that facilitate trade.",
      },
      {
        title: "Cocoa Economy",
        body: "Develop stronger cocoa aggregation, processing and export linkages.",
      },
      {
        title: "Mineral Value Chains",
        body: "Explore responsible processing opportunities around barite, tantalite, rutile and iron ore.",
      },
      {
        title: "SME Growth",
        body: "Small and medium sized enterprises should be able to grow around Ikom's commercial ecosystem.",
      },
      {
        title: "Regional Connectivity",
        body: "Position Ikom to serve as a stronger commercial bridge across Central Cross River.",
      },
    ],
    promise: "Ikom has always traded. The next chapter should be about creating, processing and keeping more of the wealth generated by that trade.",
    background: [
      "Ikom has a strong commercial identity and is an important agricultural trading centre. The LGA's mineral deposits include barite, tantalite, rutile and iron ore.",
    ],
    visualCue: "Commerce and connectivity",
  },
  {
    slug: "obanliku",
    name: "Obanliku",
    headline: "OBANLIKU'S BEAUTY SHOULD CREATE PROSPERITY.",
    supportingLine: "Tourism. Agriculture. Jobs for our people.",
    planHeading: "THE ODEY-ARCHIBONG PLAN FOR OBANLIKU",
    planLine: "WHERE NATURE BECOMES OPPORTUNITY WITHOUT LOSING ITS SOUL.",
    points: [
      {
        title: "Ecotourism",
        body: "Build tourism around mountains, wildlife and natural landscapes.",
      },
      {
        title: "Local Tourism Enterprise",
        body: "Ensure residents benefit as guides, artisans, farmers, transport operators, hospitality workers and entrepreneurs.",
      },
      {
        title: "Agriculture",
        body: "Connect local agriculture to the growing tourism economy.",
      },
      {
        title: "Responsible Mineral Development",
        body: "Gold and diamond potential must be approached through lawful, transparent and environmentally responsible exploration.",
      },
      {
        title: "Youth Employment",
        body: "Tourism and agriculture should become practical pathways into local employment.",
      },
    ],
    promise: "Obanliku should not merely be somewhere people travel to admire. It should be somewhere its own people can build prosperous lives.",
    background: [
      "Obanliku combines extraordinary tourism potential with agriculture. Its mineral record identifies diamond at Becheeve Ranch and gold at Utanga.",
      "The area is also closely connected to the Obudu tourism corridor.",
    ],
    visualCue: "Tourism and beauty",
  },
  {
    slug: "obubra",
    name: "Obubra",
    headline: "OBUBRA DESERVES DEVELOPMENT THAT REACHES THE FARMER.",
    supportingLine: "Better infrastructure. Better healthcare. Better opportunity.",
    planHeading: "THE ODEY-ARCHIBONG PLAN FOR OBUBRA",
    planLine: "FROM THE FARM TO THE FACTORY. FROM THE MINERAL TO THE MARKET.",
    points: [
      {
        title: "Cassava and Agriculture",
        body: "Develop cassava production around processing, storage and market access.",
      },
      {
        title: "Rural Infrastructure",
        body: "Farm roads should connect farmers to markets and processing centres.",
      },
      {
        title: "Mineral Development",
        body: "Barite, amethyst, galena and salt represent potential economic assets requiring proper assessment and responsible development.",
      },
      {
        title: "Healthcare Access",
        body: "Rural communities should have dependable access to essential healthcare.",
      },
      {
        title: "Enterprise Development",
        body: "Processing and resource based businesses should create jobs locally.",
      },
    ],
    promise: "Development should not stop at the town centre. It must reach the farmer whose hands keep Obubra's economy alive.",
    background: [
      "Obubra has a strong agricultural identity. Its documented mineral resources include barite, amethyst, galena and salt deposits.",
    ],
    visualCue: "Farming communities",
  },
  {
    slug: "obudu",
    name: "Obudu",
    headline: "OBUDU'S POTENTIAL MUST BECOME OUR PEOPLE'S PROSPERITY.",
    supportingLine: "Tourism. Agriculture. Jobs. A Fresh Start.",
    planHeading: "THE ODEY-ARCHIBONG PLAN FOR OBUDU",
    planLine: "MOUNTAINS. FARMS. MINERALS. TALENT. OPPORTUNITY.",
    points: [
      {
        title: "Tourism Economy",
        body: "Tourism should generate sustained opportunities for residents, not simply visitors.",
      },
      {
        title: "Agriculture",
        body: "Develop agricultural production and market access around local strengths.",
      },
      {
        title: "Responsible Mineral Development",
        body: "Kaolin, granite and other identified resources should be assessed for responsible commercial development.",
      },
      {
        title: "Hospitality and Skills",
        body: "Young people should be trained for tourism, hospitality, agriculture and enterprise.",
      },
      {
        title: "Better Connectivity",
        body: "Tourism and agricultural potential cannot reach their full value without reliable infrastructure.",
      },
    ],
    promise: "Obudu's greatest resource is not only the mountain. It is the people who have lived beneath it, worked its land and carried its name for generations.",
    background: [
      "Obudu is one of Cross River's strongest tourism identities, built around the Obudu mountain landscape and tourism economy, while agriculture remains important.",
      "Its official LGA information identifies kaolin rich clay, granite, tin, basalt, quartzite, feldspar, lead, zinc and manganese among its mineral resources.",
    ],
    visualCue: "Mountains and tourism",
  },
  {
    slug: "odukpani",
    name: "Odukpani",
    headline: "ODUKPANI MUST BE MORE THAN A COMMUNITY WE PASS THROUGH.",
    supportingLine: "Better roads. Stronger communities. Greater opportunity.",
    planHeading: "THE ODEY-ARCHIBONG PLAN FOR ODUKPANI",
    planLine: "FROM TRANSIT CORRIDOR TO ECONOMIC CORRIDOR.",
    points: [
      {
        title: "Better Roads",
        body: "Connectivity should serve Odukpani's communities as well as through traffic.",
      },
      {
        title: "Cassava Value Chain",
        body: "Strengthen cassava production, processing and market access.",
      },
      {
        title: "Mineral Based Enterprise",
        body: "Explore responsible opportunities around kaolin and quartz.",
      },
      {
        title: "Community Infrastructure",
        body: "Development should reach settlements rather than stopping along major highways.",
      },
      {
        title: "Local Commerce",
        body: "Support businesses that can take advantage of Odukpani's strategic position.",
      },
    ],
    promise: "People should not merely watch economic activity pass their doorsteps. Odukpani's position should create opportunities for the people who live there.",
    background: [
      "Odukpani sits within an important transport and economic corridor. Its mineral record identifies kaolin and quartz.",
    ],
    visualCue: "Roads and communities",
  },
  {
    slug: "ogoja",
    name: "Ogoja",
    headline: "OGOJA MUST NO LONGER FEEL FAR FROM GOVERNMENT.",
    supportingLine: "Better roads. Better services. More opportunity.",
    planHeading: "THE ODEY-ARCHIBONG PLAN FOR OGOJA",
    planLine: "BETTER ROADS. BETTER SERVICES. MORE OPPORTUNITY.",
    points: [
      {
        title: "Agricultural Transformation",
        body: "Strengthen rice and other agricultural value chains.",
      },
      {
        title: "Farm to Market Connectivity",
        body: "Better roads should reduce the distance between farmers and buyers.",
      },
      {
        title: "Limestone Development",
        body: "Assess the economic potential of the limestone resource around Ishibori, with proper environmental and geological safeguards.",
      },
      {
        title: "Tourism and Culture",
        body: "Build on Ogoja's cultural identity and emerging tourism assets.",
      },
      {
        title: "Public Services",
        body: "Government services should become more accessible to communities across the LGA.",
      },
    ],
    promise: "Ogoja should never feel like government is somewhere far away. Development must travel the roads, reach the communities and touch ordinary lives.",
    background: [
      "Ogoja has a strong agricultural identity, particularly around rice and food production. Its documented mineral deposits include limestone at Ishibori and sandstone at Nkporo.",
    ],
    visualCue: "Services and connection",
  },
  {
    slug: "yakurr",
    name: "Yakurr",
    headline: "YAKURR'S LAND. YAKURR'S CULTURE. YAKURR'S PROSPERITY.",
    supportingLine: "Agriculture. Enterprise. Tourism. Jobs.",
    planHeading: "THE ODEY-ARCHIBONG PLAN FOR YAKURR",
    planLine: "PROTECT THE LAND. HONOUR THE CULTURE. CREATE THE FUTURE.",
    points: [
      {
        title: "Agriculture",
        body: "Strengthen food production, processing and market access.",
      },
      {
        title: "Culture as an Economy",
        body: "Leboku and Yakurr's cultural heritage can support tourism, creative enterprise and hospitality.",
      },
      {
        title: "Mineral Governance",
        body: "Limestone and uranium deposits require particularly careful scientific, environmental and regulatory assessment. No exploitation should proceed without appropriate safeguards.",
      },
      {
        title: "Youth Enterprise",
        body: "Connect agriculture, culture, tourism and digital enterprise to young people's economic participation.",
      },
      {
        title: "Infrastructure",
        body: "Improve roads and services connecting farming and cultural communities.",
      },
    ],
    promise: "Yakurr should never have to choose between preserving its identity and pursuing prosperity. Its land and culture can become foundations for a future that still feels unmistakably Yakurr.",
    background: [
      "Yakurr has a powerful agricultural and cultural identity, especially through its Leboku/New Yam cultural tradition, while its documented mineral resources include limestone at Mkpani and Idomi and uranium deposits at Idomi and Agoi Bami.",
    ],
    visualCue: "Farming and culture",
  },
  {
    slug: "yala",
    name: "Yala",
    headline: "YALA, YOUR FUTURE MUST BE BUILT HERE.",
    supportingLine: "Better roads. Stronger agriculture. More opportunities for our youth.",
    planHeading: "THE ODEY-ARCHIBONG PLAN FOR YALA",
    planLine: "FROM AGRICULTURAL STRENGTH TO A DIVERSIFIED LOCAL ECONOMY.",
    points: [
      {
        title: "Agricultural Development",
        body: "Strengthen farming, aggregation, storage, processing and market access.",
      },
      {
        title: "Mineral Value Chains",
        body: "Yala's salt, barite, limestone, granite, clay and other resources present opportunities for responsible industrial development.",
      },
      {
        title: "Youth Opportunity",
        body: "Agriculture, mineral related enterprise, logistics and small business can provide alternative pathways for young people.",
      },
      {
        title: "Better Roads",
        body: "Connectivity is essential if Yala's agricultural and mineral potential is to reach markets.",
      },
      {
        title: "Local Processing",
        body: "The objective should be to retain more economic value within Yala rather than exporting raw resources without significant local value addition.",
      },
    ],
    promise: "Yala's young people should not have to leave home simply because opportunity has not yet arrived there. The future should be something they can build on their own soil.",
    background: [
      "Yala has a strong agricultural identity, including food production, while its mineral resources are unusually diverse: salt, barite, galena, limestone, granite, calcite, pyrite and clay are documented across locations in the LGA.",
    ],
    visualCue: "Youth and agriculture",
  },
] as const satisfies readonly LgaPlan[];

export type LgaPlanSlug = (typeof lgaPlans)[number]["slug"];

export const lgaPlanSlugs: readonly LgaPlanSlug[] = lgaPlans.map(
  (plan) => plan.slug,
);

const lgaPlanBySlug = new Map<string, (typeof lgaPlans)[number]>(
  lgaPlans.map((plan) => [plan.slug, plan]),
);

export function getLgaPlan(
  slug: string,
): (typeof lgaPlans)[number] | undefined {
  return lgaPlanBySlug.get(slug);
}

export function lgaPlanPath(slug: string): `/lga-plans/${string}` {
  return `/lga-plans/${slug}`;
}

export function lgaPlanSeoTitle(name: string): string {
  return pageSeoTitle(`${name} LGA Plan`);
}

export function lgaPlanSeoDescription(plan: LgaPlan): string {
  return `${plan.headline} ${plan.supportingLine}`;
}

/** Compile-time guard: Cross River has eighteen LGAs in this OOH set. */
const lgaPlanCount: 18 = lgaPlans.length;
void lgaPlanCount;
