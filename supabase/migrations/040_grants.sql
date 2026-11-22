-- Table-level privileges for the API roles.
-- Newer Supabase projects don't auto-grant on tables created via the SQL Editor,
-- which causes "permission denied for table ..." errors. Row Level Security
-- (the policies in the other migrations) still decides which rows are visible.

grant usage on schema public to anon, authenticated;

-- Signed-in users: full table access, filtered by RLS.
grant select, insert, update, delete on all tables in schema public to authenticated;
grant usage, select on all sequences in schema public to authenticated;
grant execute on all functions in schema public to authenticated;

-- Anonymous visitors only need the username -> email lookup used at sign-in
-- (already granted in 017_username.sql). No table access.

-- Apply the same grants to anything created later.
alter default privileges in schema public
  grant select, insert, update, delete on tables to authenticated;
alter default privileges in schema public
  grant usage, select on sequences to authenticated;
alter default privileges in schema public
  grant execute on functions to authenticated;
