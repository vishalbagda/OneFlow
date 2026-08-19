# Memory.md
## One-Flow Rent Agreement Registration (Maharashtra)
**Build What Moves India — Hackathon Submission**

---

## Why This File Exists

This is the project's **running memory** — a single place that tracks what's actually done, what's in progress, and what's next, separate from the planning docs (PRD, architecture, rules, phases, design).

Those five docs describe the *intended* build. This file describes the *actual* state of the build, updated as you go. It exists because:

- **Codex has no memory between sessions.** Every time you open a new Codex session/task, paste the relevant section of this file so it knows where the project actually stands — not just what the plan says.
- **You'll lose track of your own progress over 8 fast-moving days.** This file is the answer to "wait, did I already build the OTP mock or not?" without re-reading every file.
- **It becomes the source material for the submission write-up** — "what's functional vs mocked," "how Codex contributed," and "known limitations" all get pulled from what's logged here, not reconstructed from memory on day 8.
- **It keeps phases.md honest.** If Phase 4 says "done" in phases.md but stamp duty math is actually still buggy, this file is where that gap gets flagged.

**Rule: update this file at the end of every work session, before you stop for the day — not retroactively at the end of the project.** A stale memory file is worse than none, because it gives false confidence about what's actually working.

---

## How to Update This File

Each entry should answer three things in a few words each:
1. **What changed** — the actual thing built/fixed/decided
2. **File(s) touched** — so you can find it again
3. **Status** — done / in progress / blocked / needs verification

Keep entries short. This is a log, not a report — detail lives in the code and the other docs.

---

## Current Status Snapshot

*(Update this block every session — it's the first thing to read before starting work)*

| | |
|---|---|
| **Current phase** | Phase 2 — Party & Property Details |
| **Last updated** | 2026-08-19 |
| **Currently working on** | Phase 0–1 scaffold complete |
| **Blocked on** | Vercel/GitHub deployment requires user account access |
| **Next up** | Phase 2 — Party & Property Details |

---

## Phase Completion Tracker

*(Mirrors phases.md — mark honestly, not aspirationally)*

- [x] Phase 0 — Setup & Scaffolding *(local project; deployment pending user access)*
- [x] Phase 1 — Landing Page
- [ ] Phase 2 — Party & Property Details
- [ ] Phase 3 — Agreement Terms
- [ ] Phase 4 — Stamp Duty Calculator
- [ ] Phase 5 — Combined Payment (mocked)
- [ ] Phase 6 — e-Signature (mock OTP)
- [ ] Phase 7 — Confirmation & Registered Document
- [ ] Phase 8 — Error Boundaries & Edge Cases
- [ ] Phase 9 — Polish Pass
- [ ] Phase 10 — Demo Video, Write-Up & Submission

---

## Session Log

*(Newest entry on top. One entry per work session, however short.)*

### *(Date) — Session N*
- **What changed:**
- **Files touched:**
- **Status:**
- **Notes for next session:**

### 2026-08-19 — Session 1
- **What changed:** Created the Next.js 15/TypeScript/Tailwind project structure and built the responsive Phase 1 landing page with a working flow CTA.
- **Files touched:** app/, components/, lib/, types/, project configuration, README.md, CODEX_NOTES.md
- **Status:** Phase 0 local scaffold and Phase 1 complete; GitHub/Vercel deployment not performed.
- **Notes for next session:** Build the Step 1 validated Party & Property Details form and persistence.

---

## Known Issues / Not Yet Fixed

*(Running list — move items to Session Log once resolved, don't delete history, just check them off)*

-

---

## Decisions Made Mid-Build

*(When you deviate from PRD/architecture/design.md during actual building, log it here so the docs and the code don't silently drift apart)*

-

---

## What's Actually Mocked vs Real (live tracker)

*(This becomes the submission write-up's "what's functional vs mocked" section — keep it accurate as you build, don't guess at the end)*

| Component | Planned status (per PRD) | Actual status |
|---|---|---|
| Form flow & validation | Real | Not started |
| Stamp duty calculation | Real | Not started |
| Agreement document generation | Real | Not started |
| Aadhaar OTP | Mocked | Not started |
| Payment gateway | Mocked | Not started |
| IGR/GRAS backend | Mocked | Not started |
| SRO appointment/biometric | Mocked | Not started |

---

## Codex Usage Log

*(Feeds directly into the "how Codex contributed" submission section — log significant prompts/generations, not every keystroke)*

| Date | What Codex generated | Accepted as-is / edited / rejected |
|---|---|---|
| | | |
