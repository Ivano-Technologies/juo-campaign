# juo-campaign

Official Next.js rebuild for **[votejohnupanodey.com](https://votejohnupanodey.com)** — the John Upan Odey Jnr campaign (NDC, Cross River 2027).

Stack: **Next.js App Router + TypeScript + Tailwind CSS v4 + pnpm**. Join/contact forms write to Supabase (`join_submissions`, `contact_messages`) with insert-only RLS. Manifesto PDF is **IVA-17**. Custom domain cutover is **IVA-25**.

## Routes (brand-approved)

| Path | Page |
|---|---|
| `/` | Home — A Fresh Start |
| `/john-upan-odey` | Who is JUO |
| `/odey-archibong` | Odey Archibong story |
| `/vision` | Official Vision and Mission |
| `/policies` | Policy pillars stub |
| `/manifesto` | Manifesto excerpts (PDF pending IVA-17) |
| `/join` | Join the Movement |
| `/donate` | Donate (naira bank transfer live; online checkout coming soon) |
| `/donate/confirm` | Donation confirmation |
| `/donate/fail` | Donation unsuccessful |
| `/news` | News + Brand community posts |
| `/contact` | Contact |
| `/privacy` | Privacy notice |
| `/posters` | Official poster gallery |

Nav: Home / Who is JUO / Policies / Manifesto / Join / Donate / News / Contact.

Primary CTAs: Join the Movement, Donate, Manifesto, Contact — red / white / ghost on brand blue (`#EF2B35` / `#FFFFFF` / `#40449B`). The sticky header is IA only (desktop from `lg`, accessible mobile menu below). Donate publishes official naira bank-transfer details. Online checkout stays coming soon until a processor is wired; there is no fake checkout.

Lawyer / attorney / TheGem / practice demo content is not on this site.

## Setup

```bash
pnpm install
cp .env.example .env.local
# paste NEXT_PUBLIC_SUPABASE_ANON_KEY from the JUO Supabase project
pnpm dev
```

Checks:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Node 20+. Package manager is pnpm (`packageManager` field in `package.json`).

## Environment

`.env.example` documents:

- `NEXT_PUBLIC_SUPABASE_URL` — `https://xxljlhgjjirewkovuzif.supabase.co` (project **JUO**, `eu-west-1`)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — publishable/anon key (do **not** commit)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — optional GA4 Measurement ID (`G-XXXXXXXX`). Set on Vercel Production. When unset, no gtag scripts load.

Helpers live in `lib/supabase/`. They return `null` when env is missing so local/CI builds stay green without secrets. Form routes insert with the anon key (RLS is insert-only; no select):

- `POST /api/join` → **201** on success, **400** if invalid, **503** if Supabase env is missing or the insert fails
- `POST /api/contact` → same status contract

Schema for those tables is documented in `supabase/migrations/` (already applied on project **JUO**).

## Vercel

1. Create or link a Vercel project named **`juo-campaign`** from `Ivano-Technologies/juo-campaign`.
2. Framework preset: Next.js. Install command: `pnpm install`. Build: `pnpm build`.
3. Production branch: `main`.
4. Set the two `NEXT_PUBLIC_SUPABASE_*` env vars on the project (Production + Preview).
5. **Do not** attach the custom domain `votejohnupanodey.com` yet — that cutover is IVA-25 (Hostinger/DNS handover).
6. Staging should stay on the `*.vercel.app` URL until then.

This scaffold ships with `robots: noindex` so the Vercel preview does not compete with the live WordPress domain before cutover. Remove noindex when the custom domain goes live.

## Brand lock (IVA-24 + IVA-33 + IVA-44)

Display name: **John Upan Odey Jnr**. Education: University of Uyo (bachelor’s) + University of Ilorin (MBA) + Harvard Kennedy School certificate. Age 48, born Obudu. Current roles (FirstTrust / Hyers / Independent Director) are listed as Brand-confirmed.

Strict Royal Blue palette. Black / navy surfaces are white or royal blue. Red is highlight only. Provisional hex pending Brand confirmation:

| Token | Hex | Role |
|---|---|---|
| `--brand-blue` | `#40449B` | Provisional Royal Blue — headers, banners, structure, body ink |
| `--brand-white` | `#FFFFFF` | Canvas and principal accent; replaces former black backgrounds |
| `--brand-red` | `#EF2B35` | Highlight only — CTAs, kickers, selected states |

Former WP navy (`#0b2342`), cyan, mint, maroon, and pink aliases remap to the three tokens above in `app/globals.css`. Do not introduce new hexes.

Typography: **Montserrat Bold** (headlines), **Poppins** (body), **Arial** (fallback) via `next/font`.

Official imagery (IVA-45 + Kezie branded portraits): Challenges / I COME TO SERVE uses only the gradient front portrait (`juo-come-to-serve-portrait-front.jpg`) with the compact JO mark on that pane. Four branded portraits (`juo-branded-1.jpg`–`juo-branded-4.jpg`) appear on the home official posters/imagery row and `/posters`, captioned **Official branded portrait**. Who is John / Meet John / profile OG use the suit portrait (`juo-branded-4.jpg`). Compact JO mark (`candidate-mark-1.png`) in the nav; horizontal lock-up (`candidate-mark-2.png`) in the footer and Vision. **NDC logo only on Manifesto and Join.** Homepage hero is **exactly 3 slides**. Homepage Campaign gallery is community-first: the four Brand community posts (`public/brand/community/`) with locked titles and bodies, then official branded portraits plus remaining BA posters (Cross River Rising, One People One Cross River) and kit poster 1. The BA A Fresh Start red-cap poster is reserved — not on home or `/posters`. Blue / White / 4 / 5 await PDF rasterize. Campaign phone is unpublished until an approved number is unlocked. Campaign email is unpublished — Coming soon until CoS clears.
