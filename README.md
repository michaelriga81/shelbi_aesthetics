# Shelbi Aesthetics website

React 19 + Vite + Tailwind v4 single-page app (React Router), served from a Cloudflare Worker using static assets.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # type-check
npm run build    # outputs dist/
```

## Deploy (Cloudflare Workers)

```bash
CLOUDFLARE_API_TOKEN=<token> npm run deploy
```

Worker `shelbi-aesthetics` lives in the `Michael@mail.bluewolfagency.co` Cloudflare account (id is in `wrangler.jsonc`).
Live at https://shelbi-aesthetics.bluewolf.workers.dev. Never commit the token.
