# juo-campaign

Official Next.js rebuild for **[votejohnupanodey.com](https://votejohnupanodey.com)** — the John Upan Odey Jnr campaign (NDC, Cross River 2027).

Stack: **Next.js App Router + TypeScript + Tailwind CSS v4 + pnpm**. Join/contact forms write to Supabase (`join_submissions`, `contact_messages`) with insert-only RLS. Manifesto PDF is **IVA-17**. Custom domain cutover is **IVA-25**.

## Routes (brand-approved)

| Path | Page |
|---|---|
| `/` | Home — A Fresh Start |
| `/john-upan-odey` | Who is JUO |
| `/policies` | Policy pillars stub |
| `/manifesto` | Manifesto stub (PDF pending IVA-17) |
| `/join` | Join the Movement |
| `/donate` | Donate (naira bank transfer live; online checkout coming soon) |
| `/donate/confirm` | Donation confirmation |
| `/donate/fail` | Donation unsuccessful |
| `/news` | News stub |
| `/contact` | Contact |
| `/privacy` | Privacy notice |

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

## Brand lock (IVA-24 + IVA-33)

Display name: **John Upan Odey Jnr**. Education: University of Uyo (bachelor’s) + University of Ilorin (MBA) + Harvard Kennedy School certificate. Age 48, born Obudu. Current roles (FirstTrust / Hyers / Independent Director) are listed as Brand-confirmed.

Exact color tokens from Chris Brand Manual (do not approximate):

| Token | Hex | Role |
|---|---|---|
| `--brand-blue` | `#40449B` | 70% — backgrounds, headers, banners, structure (Royal / Persian Blue) |
| `--brand-white` | `#FFFFFF` | 20% — content areas, text on dark |
| `--brand-red` | `#EF2B35` | 10% — CTAs, accents, highlights |

Typography: **Montserrat Bold** (headlines), **Poppins** (body), **Arial** (fallback). Marks live in `public/brand/` (NDC logo + candidate marks). Larger poster PDFs (Blue / White / 4 / 5) stay in the brand kit / Asana for now.
