# Rules.md
## One-Flow Rent Agreement Registration (Maharashtra)
**Build What Moves India — Hackathon Submission**

This file sets the guardrails for building this project — what to do, what to avoid, and the boundaries for AI (Codex) usage. Keep this open while building; if a decision isn't covered here, default to "simpler and honestly-labeled" over "impressive but fragile."

---

## 1. What To Do

- **Keep the flow linear and working end-to-end before polishing anything.** A finished ugly flow beats a beautiful half-finished one — every demoed feature must work per hackathon rules.
- **Auto-calculate stamp duty using the real Maharashtra formula** (0.25% of rent + deposit, with notional interest on deposit) — this is the one piece of logic that should be genuinely correct, not mocked, since it's the core value-add.
- **Label every mocked element clearly in the UI itself** — e.g. "Demo Aadhaar: XXXX-XXXX-1234", "Mock payment — no real transaction." Judges and reviewers should never wonder what's real.
- **Persist state across steps** (in-memory store or local JSON/SQLite) so a user isn't forced to re-enter data if they go back a step.
- **Write mobile-first, high-contrast, plain-language UI** — no legal jargon, large tap targets, per the builder brief's accessibility expectations.
- **Commit early and often** with clear messages — you'll want a clean history to point to when explaining what Codex generated vs what you edited.
- **Keep a running note of every Codex prompt/output you accept**, even briefly — you need this for the "how Codex contributed" section of the submission write-up.
- **Test the full flow yourself at least 3 times** before recording the demo — landing → confirmation, no dead ends.

---

## 2. What To Avoid

- **Don't touch any real government system, API, or scraped data.** No real IGR/GRAS endpoints, no reverse-engineered private APIs — explicitly against hackathon rules.
- **Don't use real personal data anywhere** — no real Aadhaar numbers, PAN, OTPs, payment details, names tied to real people. Synthetic data only, and obviously fake-looking (e.g. names like "Demo Landlord").
- **Don't use official government logos or styling that implies endorsement.** Label the build as an "independent hackathon prototype" visibly.
- **Don't build features not in the PRD scope.** No multi-language support, no dispute resolution, no renewal flow, no physical SRO fallback UI — mention these as future work in the write-up instead of building them under time pressure.
- **Don't add authentication/user accounts.** This is a single-session demo flow — a login system adds complexity with zero payoff for a hackathon judge.
- **Don't reach for a database server (Postgres/Mongo) for this prototype.** It adds deployment risk for a demo that only needs to survive one recorded session. Use in-memory or a local file store.
- **Don't over-engineer the payment/OTP mocks.** They should look real enough to demo, not simulate actual gateway edge cases (retries, failures, timeouts) — that's scope creep for a UX prototype.
- **Don't wait until day 7 to test hosting/deployment.** Deploy to Vercel from day 1 with a placeholder page, so you're never discovering a deployment bug the night before submission.

---

## 3. Libraries — Use / Avoid

**Use:**
- `next` (App Router) — framework
- `react`, `react-dom` — UI
- `typescript` — type safety across the data model
- `tailwindcss` — styling, fast iteration
- `zod` — form/data validation (pairs well with TypeScript types)
- `react-hook-form` — form state management across multi-step flow
- `@react-pdf/renderer` or `html2pdf.js` — generating the downloadable agreement document
- `lucide-react` — icons (lightweight, no bloat)
- `date-fns` — date handling for agreement duration/start date

**Avoid:**
- **Redux / Zustand / any heavy state library** — the flow is linear; React Context or even URL/query state is enough. Don't add a state management library for a 6-screen wizard.
- **Any real payment SDK (Razorpay, Stripe, etc.)** — even in "test mode," this risks accidentally wiring up something real or confusing judges about what's mocked. Build a fake payment component from scratch instead.
- **Any real Aadhaar/DigiLocker/UIDAI SDK or API wrapper** — same reasoning. Mock it with a plain form + hardcoded OTP check.
- **NextAuth or any auth library** — no accounts needed for this prototype.
- **A full ORM (Prisma, TypeORM, Mongoose) for a throwaway demo store** — unnecessary weight; a simple in-memory object or local JSON file is enough for a hackathon prototype.
- **jQuery or any pre-React-era library** — no reason to introduce it in a Next.js/React codebase.
- **Untested/obscure npm packages with low weekly downloads** — for an 8-day build, stick to well-known, well-documented libraries so Codex's training data and your own troubleshooting are reliable.

---

## 4. Error Handling

- **Every form step validates before allowing "Next."** Use `zod` schemas per step — don't let a user reach the payment step with an invalid rent amount.
- **Every mocked API route (`/api/*`) should still return realistic error shapes** — e.g. if OTP verification is given a wrong code, show a real "Incorrect OTP, try again" state rather than always succeeding. This makes the demo feel honest and functional, not fake-happy-path-only.
- **Wrap async calls (stamp duty calc, mock payment, mock OTP send) in try/catch with a visible fallback UI** — a broken screen with no error message looks worse in a live demo than a handled "Something went wrong, retry" state.
- **Never let a JS error white-screen the app.** Add a Next.js `error.tsx` boundary at the `register/` route level so any unexpected crash shows a recoverable message instead of a blank page — this matters most because you'll be demoing live/recorded.
- **Log errors to the console during development, not to any external service.** No real error-tracking SaaS (Sentry, etc.) needed for a hackathon prototype — adds setup risk for no payoff.
- **Handle the "back" button gracefully** — if a user navigates back mid-flow, previously entered data should still be there, not reset.

---

## 5. Boundaries for AI (Codex) Usage

Per hackathon rules, Codex must be **meaningfully involved** and its role must be **disclosed** in the submission. Use these boundaries to keep that honest and useful:

- **Let Codex scaffold and generate**: page structure, form components, API route boilerplate, Tailwind styling, the PDF generation function, and first-pass implementations of each step.
- **You (not Codex) own**: the stamp duty formula correctness (verify it against the real Maharashtra rate — don't trust an AI-generated formula blindly), the overall flow/UX decisions, and what's in vs out of scope.
- **Always verify generated logic that involves numbers or legal-adjacent content** (stamp duty calculation, agreement clause text) against your own research — an AI-hallucinated formula or clause is worse than a simple, verified-correct one.
- **Don't let Codex silently add scope** — if it generates extra features, auth, or integrations you didn't ask for, strip them out. Scope discipline is your job, not the tool's.
- **Keep a lightweight log** (even a `CODEX_NOTES.md` file in the repo) of significant prompts and what was accepted/rejected/edited — this becomes the source for your submission's "how Codex contributed" section, and makes that section factual instead of vague.
- **Don't present AI-generated legal or compliance claims as fact** in the app copy or write-up (e.g. don't claim the digital signature is "legally valid" — that's an explicit known limitation per the PRD). Any legal-sounding text Codex generates should be reviewed and softened to "for demonstration purposes" where relevant.
- **If Codex gets something wrong or stuck**, it's fine to hand-write the fix yourself — the rule is meaningful involvement, not 100% AI-authored code. Disclose the mix honestly.

---

## 6. Quick Reference Checklist Before Submitting

- [ ] No real personal data, real IDs, real payment details anywhere in the app or repo
- [ ] No real government API calls
- [ ] No official logos used in a way implying endorsement
- [ ] Every screen shown in the demo video actually works when clicked live
- [ ] Mocked elements are visibly labeled as mocked in the UI
- [ ] `CODEX_NOTES.md` or equivalent exists and reflects actual Codex usage
- [ ] Stamp duty formula double-checked against real Maharashtra rules
- [ ] Deployed and live on Vercel, link tested in an incognito window before submitting
