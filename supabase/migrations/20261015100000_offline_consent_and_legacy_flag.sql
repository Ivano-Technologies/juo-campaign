-- IVA-152 follow up: consent vetting for offline rows, legacy shared phone flag.
-- NOT applied to production. Apply at the promote step, after
-- 20261015090000_offline_volunteer_intake.sql.
--
-- * consent_status: 'pending' (offline rows waiting for Chris to approve
--   consent) or 'vetted'. Existing rows and web rows are 'vetted' by default,
--   so current data is untouched.
-- * vetted_by / vetted_at: who approved consent and when.
-- * A pending row can never have privacy_accepted = true (check constraint),
--   so pending rows never count as consented.
-- * shared_phone_legacy: true for existing web rows whose normalised phone is
--   shared with another row. Set once by this backfill; display only.

alter table public.join_submissions
  add column if not exists consent_status text not null default 'vetted',
  add column if not exists vetted_by text,
  add column if not exists vetted_at timestamptz,
  add column if not exists shared_phone_legacy boolean not null default false;

do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'join_submissions_consent_status_check'
  ) then
    alter table public.join_submissions
      add constraint join_submissions_consent_status_check
      check (consent_status in ('pending', 'vetted'));
  end if;
  if not exists (
    select 1 from pg_constraint
    where conname = 'join_submissions_pending_not_consented'
  ) then
    alter table public.join_submissions
      add constraint join_submissions_pending_not_consented
      check (consent_status <> 'pending' or privacy_accepted = false);
  end if;
end
$$;

update public.join_submissions as j
  set shared_phone_legacy = true
  where j.intake_channel = 'web'
    and j.phone_e164 is not null
    and j.phone_e164 in (
      select phone_e164
      from public.join_submissions
      where phone_e164 is not null
      group by phone_e164
      having count(*) > 1
    );

create index if not exists join_submissions_pending_consent_idx
  on public.join_submissions (created_at)
  where consent_status = 'pending';

drop policy if exists anon_insert_join_submissions on public.join_submissions;
create policy anon_insert_join_submissions
  on public.join_submissions
  for insert
  to anon, authenticated
  with check (intake_channel = 'web' and consent_status = 'vetted');
