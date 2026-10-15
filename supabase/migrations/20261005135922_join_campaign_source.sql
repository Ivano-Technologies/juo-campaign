alter table public.join_submissions
  add column if not exists campaign_source text;

comment on column public.join_submissions.campaign_source is
  'Optional field/campaign tag from /join?source= or utm_source. Not PII.';

create index if not exists join_submissions_campaign_source_idx
  on public.join_submissions (campaign_source)
  where campaign_source is not null;
