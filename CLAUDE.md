# Shelbi Aesthetics site: notes for Claude

- Stack: Vite + React 19 + TypeScript + Tailwind v4 + `motion` (animations). SPA routes defined in `src/App.tsx`.
- Monthly specials: edit `src/components/Specials.tsx` (used on Home and `/monthly-promotions`). Memberships: `src/pages/Membership.tsx`.
- Deploy: `npm run deploy` needs `CLOUDFLARE_API_TOKEN` in the environment (account `Michael@mail.bluewolfagency.co`). Never write the token to a file or commit it.
- Domain: zone `shelbiaestheticswellness.com` is in the same Cloudflare account, but the apex/www still have old DNS records (Google Sites). They must be deleted in the Cloudflare DNS dashboard before the custom-domain routes in `wrangler.jsonc` (commented block) can be enabled. Do not touch MX/TXT (Google Workspace email).
- Verify with `npm run lint && npm run build` before deploying.
