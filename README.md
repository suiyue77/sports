# Sports

Independent Chinese-language field guide for volleyball, fitness and baseball.

## Development

```sh
npm ci
npm run dev
npm run build
npx playwright install chromium
npm run test:render
```

Astro 5, TypeScript, Tailwind 4, Markdown content collections. Static output. The public repository is intended for Vercel Hobby Git deployments. Never commit credentials or personal training/health information. Repository owner controls publication and collaborator access.

## Content and design

- Guides: `src/content/guides/` with a validated sport, title, order, tag and reading time.
- Sport metadata and official references: `src/data/sports.ts`.
- Visual system: `src/styles/global.css` and original schematic sports illustrations.
- User-facing goal: a calm, concise sports reference, not a live score service or personal health application.
- Build and rendered checks locally; deployment-only hosting (no separate hosted CI gate).
- Public site context: `/llms.txt`. No private records.

## Project governance

[AGENTS](AGENTS.md) · [Wish](docs/wish/README.md) · [Dev](docs/dev/README.md) · [Design](docs/design/README.md) · [Website Passport](docs/dev/WEBSITE_PASSPORT.md).

Build the source and run \`npm run check:reader\` to check the public reader outputs.
