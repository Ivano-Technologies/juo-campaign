-- IVA-21: Join + Contact form storage
-- Already applied on Supabase project JUO (xxljlhgjjirewkovuzif).
-- This file exists for repo parity — do not weaken RLS.
-- Policies: anon + authenticated INSERT only. No SELECT/UPDATE/DELETE policies.

create table if not exists public.join_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  lga text,
  interest text,
  privacy_accepted boolean not null default false,
  source text not null default 'web'
);

create index if not exists join_submissions_created_at_idx
  on public.join_submissions (created_at desc);

alter table public.join_submissions enable row level security;

do $$
begin
  if not exists (
    select 1
    from pg_policies
    where schemaname = 'public'
      and tablename = 'join_submissions'
      and policyname = 'anon_insert_join_submissions'
  ) then
    create policy anon_insert_join_submissions
      on public.join_submissions
      for insert
      to anon, authenticated
      with check (true);
  end if;
end
$$;

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  message text not null,
  privacy_accepted boolean not null default false,
  source text not null default 'web'
);

create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);

alter table public.contact_messages enable row level security;

do $$
begin
  if not exists (
    select 1
    from pg_policies
    where schemaname = 'public'
      and tablename = 'contact_messages'
      and policyname = 'anon_insert_contact_messages'
  ) then
    create policy anon_insert_contact_messages
      on public.contact_messages
      for insert
      to anon, authenticated
      with check (true);
  end if;
end
$$;
