-- Volunteer ward on Join the Movement.
-- Applied on Supabase project JUO (xxljlhgjjirewkovuzif) on 2026-10-08 as
-- migration 20261008084919 join_ward. This file is for repo parity.
-- Adds an optional `ward` column next to `lga` on join_submissions.
--
-- Schema only. No backfill and no data writes: existing rows keep ward NULL.
-- Does not change RLS. Policies stay insert-only (anon + authenticated INSERT).
--
-- `ward` holds the INEC registration area (ward) name chosen from lib/wards.ts
-- for the selected LGA, or the volunteer's own text when they pick
-- "My ward isn't listed". NULL for "Diaspora / outside Cross River" and for
-- rows created before this column existed.

alter table public.join_submissions
  add column if not exists ward text;

comment on column public.join_submissions.ward is
  'INEC ward (registration area) name for the selected LGA, or free text when the volunteer''s ward is not listed. NULL for Diaspora and for rows before 2026-10-08.';
