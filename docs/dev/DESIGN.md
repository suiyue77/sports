# Development design

- Source/history: this GitHub repository and its reviewed main branch.
- Validation: repository-owned build and reader checks, with local rendered tests for UI changes. Existing render-check.cjs covers the original site routes; the reader output has its own contract check.
- Production: Vercel Hobby; GitHub main is the production source; checked-in vercel.json specifies npm ci, npm run build and dist. Source owner and hosting owner are suiyue77; authorized collaborators may work through GitHub.
- Runtime: static output. Do not add a server or second hosted CI provider without a demonstrated need.
- Recovery: preserve Git history; investigate actual provider status and release the last known-good reviewed source using the authorized deployment path. Do not change identity, billing, visibility or credentials as a workaround.

Build success is not proof of appearance, user acceptance, source freshness or external service availability.
