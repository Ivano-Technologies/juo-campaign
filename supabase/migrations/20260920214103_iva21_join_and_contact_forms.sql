-- IVA-21: public join + contact intake (anon insert only)
create extension if not exists pgcrypto;

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

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  message text not null,
  privacy_accepted boolean not null default false,
  source text not null default 'web'
);

create index if not exists join_submissions_created_at_idx on public.join_submissions (created_at desc);
create index if not exists contact_messages_created_at_idx on public.contact_messages (created_at desc);

alter table public.join_submissions enable row level security;
alter table public.contact_messages enable row level security;

-- Public can submit; nobody (anon/authenticated) can read via client.
drop policy if exists "anon_insert_join_submissions" on public.join_submissions;
create policy "anon_insert_join_submissions"
  on public.join_submissions
  for insert
  to anon, authenticated
  with check (true);

drop policy if exists "anon_insert_contact_messages" on public.contact_messages;
create policy "anon_insert_contact_messages"
  on public.contact_messages
  for insert
  to anon, authenticated
  with check (true);

grant insert on public.join_submissions to anon, authenticated;
grant insert on public.contact_messages to anon, authenticated;
