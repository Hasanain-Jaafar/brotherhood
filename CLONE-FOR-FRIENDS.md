# Clone GetTogether into a "Friends" app on Vercel

Stack: Next.js 16, Supabase (Auth + Postgres + Storage), next-intl (Arabic only), Bunny Stream (video).

## 1. Copy the code as a fresh project

```powershell
cd E:\Code\GitHub
git clone gettogether friends-hub
cd friends-hub
Remove-Item -Recurse -Force .git, .next, node_modules -ErrorAction SilentlyContinue
git init
git add .
git commit -m "Initial commit from gettogether template"
```

Create a new empty GitHub repo (e.g. `friends-hub`) and push to it. Do not reuse the old remote.

## 2. Create a new Supabase project

Use a separate project so users and data are not shared with the old app.

1. Create the project at supabase.com.
2. In the SQL Editor, run `supabase/schema.sql`.
3. Run every file in `supabase/migrations/` in numeric order (`002` to `039`). Files `020`-`023` are missing from the folder; check that none are needed.
4. Create the `avatars` and `post-images` storage buckets. Apply `supabase/STORAGE.md` and `supabase/storage-post-images.sql`.
5. Copy the Project URL and anon key from Project Settings -> API.

## 3. Set environment variables

Edit `.env.local` with the new values:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
BUNNY_STREAM_LIBRARY_ID=
BUNNY_STREAM_API_KEY=
BUNNY_STREAM_CDN_HOSTNAME=
```

Use a new Bunny Stream library to keep videos separate. Then:

```powershell
npm install
npm run dev
```

Check that sign-up and posting work locally.

## 4. Re-theme from lovers to friends

- **Copy:** `src/app/layout.tsx` (line 25) and `src/app/manifest.ts` (line 10) say "love blossoms and relationships grow". Rewrite them.
- **Translations:** `messages/ar.json` is the only locale file (271 lines). Rewrite romantic wording. To add English, create `messages/en.json` and update `locales` in `src/i18n/routing.ts`.
- **Assets:** replace `public/heart.png`, `public/Mobil bg.webp`, `public/icons/*`, and the app name in the manifest.
- **Post categories:** edit `src/lib/post-categories.ts`. Categories are constrained in the DB (migrations `027`, `028`, `037`, `039`), so add a new SQL migration if you change allowed values.
- **Colors:** change the palette in `src/app/globals.css`.
- **Metadata:** update `name`, `description`, `repository`, `homepage` in `package.json`.

## 5. Swap Netlify for Vercel

1. Delete `netlify.toml` and `DEPLOYMENT.md` (or rewrite the latter for Vercel). Update the README Deployment section. No app code depends on Netlify.
2. Push to GitHub, then on vercel.com: Add New -> Project -> import the repo.
3. Framework preset should auto-detect as Next.js. Keep default build settings.
4. Add the five environment variables from step 3 for Production, Preview and Development.
5. Deploy. If the build complains about Node, match the version in `.nvmrc` under Project Settings -> General.

## 6. Point Supabase at the Vercel domain

Supabase -> Authentication -> URL Configuration:

- **Site URL:** `https://your-app.vercel.app`
- **Redirect URLs:**
  - `https://your-app.vercel.app/api/auth/callback`
  - `http://localhost:3000/api/auth/callback`
  - optional, for preview deploys: `https://*-yourteam.vercel.app/api/auth/callback`

Repeat this if you add a custom domain.

## 7. Friends-only access (optional)

- Disable public sign-ups, or add a "Before User Created" hook that allows only your friends' emails.
- Or leave sign-ups open and share the link only with friends.

## 8. Check after deploy

- [ ] Sign up and sign in on the live URL
- [ ] Upload an avatar and a post image
- [ ] Upload a video through Bunny
- [ ] Install and open as a PWA on your phone
- [ ] Vercel build logs show no missing-env errors

## Shortcut with Claude Code

Open Claude Code in the new folder and paste:

> Follow steps 4 and 5 of CLONE-FOR-FRIENDS.md: re-theme the copy for friends, remove the Netlify files, and prepare for Vercel.

Steps 2, 3, 6 and 7 need your own Supabase, Bunny and Vercel dashboards.
