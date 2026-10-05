-- IVA-103: campaign / field attribution on join submissions.
-- Does not change RLS. Policies stay insert-only (anon + authenticated INSERT).
--
-- `source` remains the form-type label written by the app (`join`).
-- `campaign_source` stores the tagged-link slug from `?source=` or `utm_source`
-- (for example `calabar`). Null means an untagged /join visit.
--
-- This file is for repo parity. Apply on the live JUO Supabase project as a
-- follow-up if the column is not present yet. Do not weaken RLS.

alter table public.join_submissions
  add column if not exists campaign_source text;

comment on column public.join_submissions.campaign_source is
  'Optional field/campaign tag from /join?source= or utm_source. Not PII.';

create index if not exists join_submissions_campaign_source_idx
  on public.join_submissions (campaign_source)
  where campaign_source is not null;
