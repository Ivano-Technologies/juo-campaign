-- IVA-152: offline volunteer intake (single entry admin form).
-- NOT applied yet. Apply on the live JUO project only at the promote step.
--
-- Changes on public.join_submissions:
-- * email becomes optional (offline volunteers often have none).
-- * new columns: community, role, intake_channel ('web' | 'offline'),
--   phone_e164 (normalised +234 mobile), entered_by (staff email).
-- * phone_e164 is filled by a trigger on every insert or phone update, and
--   backfilled once for existing rows. Backfill writes only phone_e164; no
--   web signup field is changed.
-- * unique index on phone_e164 for offline rows. Existing web rows already
--   contain repeated phones, so the index is partial; the admin route also
--   rejects an offline entry whose phone matches ANY existing row.
-- * anon insert policy is tightened to intake_channel = 'web'. Offline rows
--   are written only by the server route with the service role key.

alter table public.join_submissions
  alter column email drop not null;

alter table public.join_submissions
  add column if not exists community text,
  add column if not exists role text,
  add column if not exists intake_channel text not null default 'web',
  add column if not exists phone_e164 text,
  add column if not exists entered_by text;

do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'join_submissions_intake_channel_check'
  ) then
    alter table public.join_submissions
      add constraint join_submissions_intake_channel_check
      check (intake_channel in ('web', 'offline'));
  end if;
end
$$;

create or replace function public.normalize_ng_phone(raw text)
returns text
language sql
immutable
as $$
  select case
    when d ~ '^234[0-9]{10}$' then '+' || d
    when d ~ '^0[0-9]{10}$' then '+234' || substr(d, 2)
    when d ~ '^[789][01][0-9]{8}$' then '+234' || d
    else null
  end
  from (select regexp_replace(coalesce(raw, ''), '[^0-9]', '', 'g') as d) as x
$$;

create or replace function public.join_submissions_set_phone_e164()
returns trigger
language plpgsql
as $$
begin
  new.phone_e164 := public.normalize_ng_phone(new.phone);
  return new;
end
$$;

drop trigger if exists join_submissions_phone_e164 on public.join_submissions;
create trigger join_submissions_phone_e164
  before insert or update of phone on public.join_submissions
  for each row execute function public.join_submissions_set_phone_e164();

update public.join_submissions
  set phone_e164 = public.normalize_ng_phone(phone)
  where phone_e164 is null and phone is not null;

create index if not exists join_submissions_phone_e164_idx
  on public.join_submissions (phone_e164);

create unique index if not exists join_submissions_offline_phone_e164_uidx
  on public.join_submissions (phone_e164)
  where intake_channel = 'offline';

drop policy if exists anon_insert_join_submissions on public.join_submissions;
create policy anon_insert_join_submissions
  on public.join_submissions
  for insert
  to anon, authenticated
  with check (intake_channel = 'web');
