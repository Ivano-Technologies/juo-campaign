# Join form analytics (IVA-102 + IVA-103)

Volunteer sign-ups on `/join` now fire a GA4 event on **successful submit** (HTTP 2xx), not on pageview alone. Tagged join links pass a campaign source into that event and into the stored submission.

Measurement ID is `NEXT_PUBLIC_GA_MEASUREMENT_ID` (see `.env.example`). Do not hard-code it. When the env var is unset, gtag does not load and events no-op.

## Events

| Event | When | Mark as key event? |
|---|---|---|
| `volunteer_form_submit` | Join form POST returns 2xx | **Yes** |
| `volunteer_form_start` | First focus on any join field (once per page load) | No |

`volunteer_form_submit` is the conversion for weekly reporting.

### Parameters (no PII)

Never send name, email, or phone to GA4.

| Param | Source | Notes |
|---|---|---|
| `form_id` | always `join` | Distinguishes this form |
| `campaign_source` | `?source=` (preferred) or `utm_source` | Slug such as `calabar`. `(not_set)` on submit when untagged |
| `lga` | form field | On submit only |
| `interest` | form field | On submit only |

GA4 already collects automatic traffic `source` / `medium` from UTMs. The custom param is named `campaign_source` so it does not collide with that.

## Tagged join links (IVA-103)

Use lowercase slugs. Prefer `?source=` for field work.

```
https://www.votejohnupanodey.com/join?source=calabar
```

`utm_source` is also read if `source` is absent:

```
https://www.votejohnupanodey.com/join?utm_source=calabar
```

Rules:

- `source` wins when both are present
- Values are lowercased; spaces become underscores
- Max 64 characters; letters, numbers, `_`, `-`, `.` only
- Emails and other `@` values are dropped
- The slug is kept in `sessionStorage` for the rest of the tab so a later `/join` visit in that tab still attributes

The form-type column `join_submissions.source` stays `join`. Attribution is stored separately in `join_submissions.campaign_source` (see `supabase/migrations/20261005140000_join_campaign_source.sql`). Apply that migration on the live JUO Supabase project if the column is not there yet. Do not change RLS.

Until the column is applied, tagged sign-ups still save; attribution is skipped with a server warning.

## Recommended field tags (Cross River)

Keep tags short and stable. One slug per printed/QR/WhatsApp link.

### Calabar

| Tag | Use |
|---|---|
| `calabar` | Default for Calabar field (Municipal + South combined) |
| `calabar_municipal` | Calabar Municipal only |
| `calabar_south` | Calabar South only |

### Other Cross River LGAs

`abi` · `akamkpa` · `akpabuyo` · `bakassi` · `bekwarra` · `biase` · `boki` · `etung` · `ikom` · `obanliku` · `obubra` · `obudu` · `odukpani` · `ogoja` · `yakurr` · `yala`

### Channels (optional suffix or standalone)

`diaspora` · `whatsapp` · `poster` · `radio` · `rally` · `church` · `market`

Combine when one link needs both place and channel: `calabar_whatsapp`, `obudu_rally`.

Do not put personal names in tags.

## Weekly report (IVA-22)

Funnel to pull each Monday:

1. Site visitors (GA4 active users)
2. Join page views (`/join`)
3. Form starts (`volunteer_form_start` event count)
4. Completed registrations (`volunteer_form_submit` event count)
5. Conversion rate: submit / join page views (and submit / form start)

Cross River split:

- Calabar vs other CRS: break down `volunteer_form_submit` by `campaign_source` (`calabar*` vs other LGA tags) and, where useful, by event param `lga` (Calabar Municipal / Calabar South vs other)
- Untagged submits show `campaign_source = (not_set)`

### Mark the key event in GA4

1. Open GA4 Admin → Events (or Configure → Events).
2. Find `volunteer_form_submit` after a Preview/www smoke submit with the measurement ID set.
3. Mark it as a **key event**.
4. Confirm in Realtime or DebugView (browser GA Debugger) that one event fires per successful submit, with `campaign_source`, `lga`, and `interest`.

### Explorations / reports

- Funnel exploration: session start → page path `/join` → `volunteer_form_start` → `volunteer_form_submit`
- Free form: rows = `campaign_source` (custom dimension once registered), values = event count
- Register `campaign_source`, `lga`, and `interest` as custom dimensions (event-scoped) so they appear in standard reports

CRM / desk export: filter `join_submissions.campaign_source` in Supabase once the column is applied.

## Ward (stored in Supabase, not sent to GA4)

The join form asks for **Ward** after the LGA. The dropdown lists the INEC registration areas (wards) for the selected LGA from `lib/wards.ts` (INEC sources are cited in that file). "My ward isn't listed" reveals a required free text input. Diaspora / outside Cross River has no ward.

- Stored in `join_submissions.ward` next to `lga` (see `supabase/migrations/20261008084919_join_ward.sql`). Optional column: rows before 8 Oct 2026 and Diaspora rows stay `NULL`. No backfill.
- Volunteer list for the desk / Brand Architect: Supabase Table Editor on `join_submissions` (or its CSV export) now has a `ward` column. Useful columns: `created_at`, `name`, `lga`, `ward`, `phone`, `interest`, `campaign_source`.
- `volunteer_form_submit` is **unchanged** (same name and params: `form_id`, `campaign_source`, `lga`, `interest`). Ward is not sent to GA4.

SQL for a desk pull (run in the Supabase SQL editor as a project member, not with the anon key):

```sql
select created_at, name, lga, ward, phone, interest, campaign_source
from public.join_submissions
order by created_at desc;
```

## Preview notes

- Preview only loads gtag when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set on that Vercel environment.
- Smoke: open `/join?source=calabar`, focus a field (`volunteer_form_start`), submit a valid volunteer form, confirm `volunteer_form_submit` in DebugView and a 201 from `POST /api/join`.
- Do not promote this to www/main from this change set.
