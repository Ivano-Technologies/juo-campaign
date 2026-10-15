alter table public.join_submissions
  add column if not exists ward text;

comment on column public.join_submissions.ward is
  'INEC ward (registration area) name for the selected LGA, or free text when the volunteer''s ward is not listed. NULL for Diaspora and for rows before 2026-10-08.';
