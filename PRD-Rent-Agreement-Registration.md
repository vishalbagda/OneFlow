# Product Requirements Document
## One-Flow Rent Agreement Registration (Maharashtra)
**Build What Moves India — Hackathon Submission**
Prepared by: Vishal Bagda | Submission deadline: August 27, 2026

---

## 1. Problem Statement

Registering a residential Leave and License (rent) agreement in Maharashtra — a legal requirement under Section 55 of the Maharashtra Rent Control Act, 1999 — forces landlords and tenants through three disconnected government portals with no single guided flow: drafting the agreement, calculating and paying stamp duty via GRAS/e-SBTR, submitting the registration application on the IGR Maharashtra portal, and separately booking a biometric verification appointment at a Sub-Registrar Office (SRO).

Each step uses a different login, different data entry, and unclear stamp duty math (0.25% of rent + deposit, with a notional interest component most first-time users calculate wrong). Since digital stamp duty became mandatory in July 2025, the process has added friction rather than reduced it. As a result, many landlords skip registration entirely — leaving both parties legally unprotected, and under Section 55(2), shifting the burden of proof against the landlord in any dispute.

**Who is affected:** First-time renters and landlords — especially young tenants and small individual landlords in cities like Mumbai and Pune — who don't have a broker or lawyer guiding them through the process.

---

## 2. Goal

Build a single guided flow that takes a landlord from "I need to register a rent agreement" to a registered, downloadable document — in one continuous journey, with auto-calculated stamp duty, one combined payment step, mock Aadhaar-OTP e-signature, and scheduling folded into the same flow instead of a separate portal hop.

**This is a UX and process redesign, not a government system.** All integrations (Aadhaar OTP, GRAS payment, SRO appointment) are mocked/synthetic per hackathon rules. No live government systems are accessed.

---

## 3. Success Criteria (for this hackathon)

- A user can complete the entire journey — draft → stamp duty → payment → e-sign → registered document — without leaving the app or re-entering the same data twice.
- Every screen shown in the demo video is a working screen, not a mockup.
- The stamp duty calculation is auto-computed and explained in plain language (no hidden formula).
- The reviewer can clearly tell what's real (working UI/logic) vs mocked (payment gateway, Aadhaar OTP, government backend).

---

## 4. Primary User & Core User Journey

**Primary persona:** Landlord (individual, non-broker) registering an 11-month Leave and License agreement in Mumbai for the first time.

**Core journey (the one thing that must work end-to-end):**

| Step | Current process (today) | Proposed flow |
|---|---|---|
| 1. Draft agreement | Draft manually or via lawyer; no guided structure | Guided form — property, parties, rent, deposit, duration — auto-generates agreement text |
| 2. Calculate stamp duty | Manually compute 0.25% of (rent + deposit) + notional interest; easy to get wrong | Auto-calculated live as user fills the form, with a plain-language breakdown |
| 3. Pay stamp duty + registration fee | Two separate payments across GRAS/e-SBTR and IGR portals | One combined mock payment step (stamp duty + ₹1,000 registration fee together) |
| 4. Identity verification | Separate SRO appointment booking; physical/biometric visit | Mock Aadhaar-OTP e-signature for all parties, in-flow |
| 5. Registration + document | 3–7 working days, separate portal login to download Index-II | Instant mock-registered document, downloadable at the end of the same flow |

---

## 5. Features — MVP Scope (build this, nothing more)

**In scope:**
- Landlord + tenant detail entry (name, address, contact — synthetic data only)
- Property details entry
- Rent, deposit, and duration inputs
- Live stamp duty calculator with breakdown
- Combined mock payment screen (stamp duty + registration fee)
- Mock Aadhaar-OTP e-signature step for landlord, tenant, and witnesses
- Auto-generated agreement document (PDF-style preview)
- Final "registered" confirmation screen with a mock reference/Index-II number
- Downloadable final document

**Explicitly out of scope (say so clearly in the write-up):**
- Real Aadhaar/DigiLocker integration
- Real payment gateway
- Multi-language support (mention as a "next step," don't build it)
- Dispute resolution / grievance flow
- Renewal flow (mention as future work)
- Physical SRO fallback for edge cases requiring in-person biometric verification (mention this limitation honestly — legally, some cases still require it)

---

## 6. Data Model (mock/synthetic only)

- **Agreement**: id, property_address, rent_amount, deposit_amount, duration_months, start_date, status
- **Party**: id, agreement_id, role (landlord/tenant/witness), name, mock_aadhaar_last4, mock_mobile, signed (bool)
- **StampDuty**: agreement_id, calculated_amount, breakdown (rent_component, deposit_component, notional_interest)
- **Payment**: agreement_id, amount, status (mocked as always "success" after a fake gateway screen)
- **RegisteredDocument**: agreement_id, mock_reference_number, issued_at, download_url

No real personal data, IDs, OTPs, or payment details are ever entered or stored — this must be visible in the UI itself (e.g. "Demo Aadhaar: XXXX-XXXX-1234").

---

## 7. Tech Stack

- **Build tool (mandatory per rules):** OpenAI Codex — used to scaffold the app, generate the form flow, and implement the stamp duty calculation logic. Document specifically what Codex generated vs what was hand-edited.
- **Frontend:** Next.js / React
- **State/mock backend:** Simple in-memory or lightweight DB (no real backend infra needed for a demo — this is a prototype, not production)
- **Hosting:** Vercel (for the live demo link)
- **Design:** Mobile-first, large tap targets, plain-language copy (avoid legal jargon), high contrast — matches the accessibility expectations called out in the builder brief

---

## 8. What's Real vs Mocked (be explicit in the submission)

| Component | Status |
|---|---|
| Guided form flow, validation | Real / working |
| Stamp duty calculation logic | Real / working (matches actual Maharashtra formula) |
| Agreement document generation | Real / working |
| Aadhaar OTP verification | Mocked |
| Payment gateway | Mocked |
| IGR / GRAS backend submission | Mocked |
| SRO appointment / biometric check | Mocked, with an honest note on legal limitations |

---

## 9. Risks & Honest Limitations

- Digital signature legal validity for government registration isn't something a prototype can actually establish — call this out as a known gap.
- Some cases (disputes, certain property types) legally still require in-person biometric verification at an SRO — the flow should acknowledge this rather than pretend it's fully eliminated.
- This is UX and process redesign; real deployment would require integration with actual IGR/GRAS/Aadhaar systems, security audits, and government partnership — none of which this build claims to solve.

---

## 10. Timeline (8 days to Aug 27 deadline)

| Day | Task |
|---|---|
| 1–2 | Finalize scope, wireframe 4–5 screens, set up Codex + Next.js project |
| 3–5 | Build core flow with Codex: form → stamp duty calc → payment → e-sign → document |
| 6 | Record "before" friction (real portal walkthrough, public pages only) vs "after" (this flow) |
| 7 | Record 3-minute demo video, write submission doc (problem, solution, Codex's role, what's mocked) |
| 8 | Buffer day, final QA, submit early |

---

## 11. Submission Checklist (per official rules)

- [ ] Live demo link (Vercel)
- [ ] 3-minute demo video (direct walkthrough, not overproduced)
- [ ] Write-up: problem, who it affects, solution, what changed and why, tools used, how Codex contributed, what's functional vs mocked, known limitations
- [ ] Source code repo (optional but recommended)
- [ ] No government logos used in a way implying endorsement
- [ ] Clearly labeled as an "independent hackathon prototype"
- [ ] All links tested to work without requesting access
