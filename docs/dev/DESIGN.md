# Development design

- Source/history: this GitHub repository and its reviewed main branch.
- Validation: repository-owned build and reader checks, with local rendered tests for UI changes. Existing render-check.cjs covers the existing site routes, including equipment and maintenance entries; the reader output has its own contract check.
- Production: Vercel Hobby; GitHub main is the production source; checked-in vercel.json specifies npm ci, npm run build and dist. Source owner and hosting owner are suiyue77; authorized collaborators may work through GitHub.
- Runtime: static output. Do not add a server or second hosted CI provider without a demonstrated need.
- Recovery: preserve Git history; investigate actual provider status and release the last known-good reviewed source using the authorized deployment path. Do not change identity, billing, visibility or credentials as a workaround.

Build success is not proof of appearance, user acceptance, source freshness or external service availability.

## Content and delivery checks

- For equipment and maintenance cases, keep the reader's observations, third-party quotes, referenced facts and unverified hypotheses separate. Read the actual cited primary or service-provider source before publishing; a comparable service abroad does not establish a local price or the result of an individual repair. Preserve the actual record time (PT/SGT) and its available precision.
- If an integration reports a resource-access 403, inspect the current repository/ref and the authenticated collaborator's actual permissions before concluding write access is unavailable. An already-authorized same-identity GitHub CLI can be used for an integration-specific capability gap only after confirming the same repository, action scope and applicable rules. Do not change identity, scopes, credentials or bypass an explicit safety/action denial or required gate.
- Use an isolated topic branch and the existing PR/preview process. Verify the exact head and base, applicable checks, then read back main and the actual production pages and Reader catalog for the changed content after the deployment succeeds. An old page or 404 during pending deployment is not a passing result. Keep physical repair outcomes and human acceptance separate from browser simulation or successful deployment.
