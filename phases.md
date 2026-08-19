# Phases.md
## One-Flow Rent Agreement Registration (Maharashtra)
**Build What Moves India — Hackathon Submission**

Note: This project has no login/auth (per rules.md — no accounts needed for a single-session demo). Phases below follow the actual user journey from the architecture doc instead. Each phase should be fully working before moving to the next — don't build Phase 4 UI on top of a broken Phase 2.

---

## Phase 0: Setup & Scaffolding
**Goal:** Empty but deployable project — nothing built yet, but the pipeline works.

- Initialize Next.js 15 (App Router) + TypeScript + Tailwind project
- Set up folder structure per architecture.md
- Push to GitHub, connect to Vercel, deploy placeholder landing page
- Confirm live demo link works before writing any real feature
- Set up `CODEX_NOTES.md` for logging AI usage from day 1

**Done when:** Empty app is live on a Vercel URL.

---

## Phase 1: Landing Page
**Goal:** Frame the problem and start the flow.

- Build landing page: problem framing, trust cues, "Start Registration" CTA
- Mobile-first layout, high contrast, plain language (per rules.md)
- Independent-prototype disclaimer visible

**Done when:** Landing page is live and CTA routes into the flow.

---

## Phase 2: Party & Property Details (Step 1)
**Goal:** Capture who's involved and what property this is.

- Form: landlord, tenant, witness details (name, mock mobile)
- Form: property address
- `zod` validation before allowing "Next"
- Data persists to the in-memory/local store, tied to a new Agreement record

**Done when:** User can fill this step, get validated, and move to Step 2 with data saved.

---

## Phase 3: Agreement Terms (Step 2)
**Goal:** Capture rent, deposit, duration — and show a live agreement preview.

- Form: rent amount, deposit amount, duration (default 11 months), start date
- Live-generated agreement text preview as fields are filled
- Validation on all numeric fields

**Done when:** Filling this step produces a readable agreement preview and data is saved to the Agreement record.

---

## Phase 4: Stamp Duty Calculator (Step 3)
**Goal:** The core value-add — auto-calculate stamp duty correctly and explain it in plain language.

- Implement `lib/stampDuty.ts` using the real Maharashtra formula (0.25% of rent + deposit, with notional interest)
- Display a clear breakdown (not just a final number)
- This logic must be manually verified — do not trust Codex output blindly here (per rules.md)

**Done when:** Given any rent/deposit/duration combination, the calculator shows a correct, explained stamp duty amount.

---

## Phase 5: Combined Payment (Step 4 — mocked)
**Goal:** One payment screen instead of two separate portals.

- Mock payment screen: stamp duty + ₹1,000 registration fee shown as one total
- Fake "Pay Now" → short delay → success state
- Clearly labeled as a mock payment (no real gateway)
- Handle a mock failure/retry state too, not just the happy path (per rules.md error handling)

**Done when:** User can "pay" and the Agreement status updates to "paid."

---

## Phase 6: e-Signature (Step 5 — mock Aadhaar OTP)
**Goal:** Replace the separate SRO biometric appointment with an in-flow mock signature step.

- Sequential OTP step for landlord, tenant, and each witness
- Hardcoded demo OTP (e.g. "1234") with a real incorrect-OTP error state
- Visibly labeled "Demo Aadhaar: XXXX-XXXX-1234" — not a real integration
- Each party's `signed` field updates as they complete their step

**Done when:** All parties can complete mock e-signature and the Agreement status updates to "signed."

---

## Phase 7: Confirmation & Registered Document (Step 6)
**Goal:** Deliver the final "registered" document — the payoff of the whole flow.

- Generate a mock reference/Index-II number
- Generate downloadable PDF of the final agreement (`lib/pdfGenerator.ts`)
- Confirmation screen summarizing the full journey completed
- Agreement status updates to "registered"

**Done when:** User reaches a final screen with a real downloadable document, completing the full end-to-end journey.

---

## Phase 8: Error Boundaries & Edge Cases
**Goal:** Make sure the flow never breaks visibly during a live demo.

- Add `error.tsx` boundary at the `register/` route level
- Test back-button behavior — data should persist, not reset
- Test refresh mid-flow — decide and implement graceful behavior (resume or restart, but never crash)
- Test all validation edge cases (zero rent, missing fields, wrong OTP)

**Done when:** You cannot make the app white-screen or lose data through normal navigation.

---

## Phase 9: Polish Pass
**Goal:** Visual and copy pass — make it look and read well without adding new features.

- Consistent spacing, typography, mobile responsiveness check on an actual phone
- Replace any placeholder/lorem-ipsum copy with plain-language final text
- Double-check every mocked element is clearly labeled
- Remove any leftover debug UI or console logs

**Done when:** A stranger could use the flow without your explanation and understand every screen.

---

## Phase 10: Demo Video, Write-Up & Submission
**Goal:** Package everything for judges.

- Record "before" friction: real portal walkthrough (public pages only, no real data entered)
- Record "after": full working flow in this app
- Record final 3-minute demo video (direct, not overproduced — per hackathon FAQ guidance)
- Write submission doc: problem, who's affected, solution, what changed and why, tools used, how Codex contributed (pull from `CODEX_NOTES.md`), what's functional vs mocked, known limitations
- Test the live Vercel link in an incognito window
- Submit before the deadline, not at the last minute

**Done when:** Live link, demo video, and write-up are all submitted per the official checklist.

---

## Suggested Mapping to the 8-Day Timeline

| Day | Phases |
|---|---|
| 1 | Phase 0, Phase 1 |
| 2 | Phase 2, Phase 3 |
| 3 | Phase 4 |
| 4 | Phase 5, Phase 6 |
| 5 | Phase 7 |
| 6 | Phase 8 |
| 7 | Phase 9 |
| 8 | Phase 10 (buffer built in — start write-up/video a day early if ahead of schedule) |
