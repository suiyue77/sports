# Current development direction

CI mode: `DEPLOY_ONLY`.

Static Astro site with Tailwind CSS and TypeScript. Vercel Hobby; GitHub main is the production source; checked-in vercel.json specifies npm ci, npm run build and dist. Source owner and hosting owner are suiyue77; authorized collaborators may work through GitHub.

Local validation: `npm ci`, `npm run build`, `npm run check:reader`, and `npm run test:render` for desktop/mobile changes. The first three commands validate installed dependencies, static output and the reader contract. Hosted deployment and real browser evidence are separate. Keep all paid features and new service dependencies opt-in.

Feature goals and current/better design: [Feature Design](../design/features/README.md). This is part of Design, not a separate governance owner.
