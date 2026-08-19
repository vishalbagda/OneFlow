# Architecture Document
## One-Flow Rent Agreement Registration (Maharashtra)
**Build What Moves India — Hackathon Submission**

---

## 1. Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Build tool | **OpenAI Codex** | Mandatory per hackathon rules — used to scaffold pages, generate the stamp duty logic, and implement components. Document Codex-generated vs hand-edited code in the write-up. |
| Framework | **Next.js 15 (App Router)** | Single project, frontend + API routes together — no separate backend needed for a prototype |
| UI library | **React 19** | |
| Styling | **Tailwind CSS** | Fast to build with, mobile-first utility classes |
| Language | **TypeScript** | Type-safe form/data models |
| State | **React state / Context** | No Redux needed — flow is linear, not complex |
| Mock "backend" | **Next.js API routes + in-memory store (or a local JSON/SQLite file)** | No real database required for a demo; keeps setup fast |
| Document generation | **react-pdf or html-to-pdf** | For generating the agreement preview / final downloadable doc |
| Hosting | **Vercel** | One-command deploy, gives the live demo link required for submission |
| Auth / OTP | **Fully mocked** | No real Aadhaar, no real SMS gateway — hardcoded "demo OTP: 1234" flow |
| Payment | **Fully mocked** | Fake payment screen, always resolves to "success" after a short delay |

No real external integrations (Aadhaar, GRAS, IGR, payment gateway) — everything is simulated per hackathon rules.

---

## 2. App Flow

```
┌─────────────────┐
│   Landing Page   │  "Register your rent agreement in one flow"
│  (problem framing│   + CTA: Start Registration
│   + trust cues)  │
└────────┬─────────┘
         │
         ▼
┌─────────────────────┐
│ Step 1: Party & Property │  Landlord, tenant, witness details
│        Details            │  Property address
└────────┬─────────────┘
         │
         ▼
┌─────────────────────┐
│ Step 2: Agreement Terms  │  Rent, deposit, duration (11 months default)
│                          │  → Live agreement preview generated
└────────┬─────────────┘
         │
         ▼
┌─────────────────────┐
│ Step 3: Stamp Duty       │  Auto-calculated live as user types
│   Calculator (auto)      │  Plain-language breakdown shown
└────────┬─────────────┘
         │
         ▼
┌─────────────────────┐
│ Step 4: Combined Payment │  Stamp duty + ₹1,000 registration fee
│        (mocked)          │  One single payment screen (mocked gateway)
└────────┬─────────────┘
         │
         ▼
┌─────────────────────┐
│ Step 5: e-Signature      │  Mock Aadhaar-OTP for landlord, tenant,
│   (mock Aadhaar OTP)     │  and witnesses — sequential in-flow
└────────┬─────────────┘
         │
         ▼
┌─────────────────────┐
│ Step 6: Confirmation      │  Mock reference/Index-II number generated
│  + Registered Document    │  Downloadable PDF of the agreement
└──────────────────────┘
```

**Key flow principle:** no step requires the user to leave the app, re-login, or re-enter data already given — this is the core fix over the current 3-portal experience.

---

## 3. Folder & File Structure

```
rent-registration-flow/
├── app/
│   ├── layout.tsx                  # Root layout, fonts, global styles
│   ├── page.tsx                    # Landing page
│   ├── globals.css
│   │
│   ├── register/
│   │   ├── layout.tsx              # Shared step wizard shell + progress bar
│   │   ├── page.tsx                # Redirects to step 1
│   │   ├── party-details/
│   │   │   └── page.tsx            # Step 1
│   │   ├── agreement-terms/
│   │   │   └── page.tsx            # Step 2
│   │   ├── stamp-duty/
│   │   │   └── page.tsx            # Step 3
│   │   ├── payment/
│   │   │   └── page.tsx            # Step 4 (mocked)
│   │   ├── e-sign/
│   │   │   └── page.tsx            # Step 5 (mocked OTP)
│   │   └── confirmation/
│   │       └── page.tsx            # Step 6 — final document
│   │
│   └── api/
│       ├── stamp-duty/
│       │   └── route.ts            # POST: calculate stamp duty
│       ├── payment/
│       │   └── route.ts            # POST: mock payment, always succeeds
│       ├── otp/
│       │   ├── send/route.ts       # POST: mock-send OTP
│       │   └── verify/route.ts     # POST: mock-verify OTP (accepts "1234")
│       ├── agreement/
│       │   ├── route.ts            # POST: create agreement record
│       │   └── [id]/route.ts       # GET: fetch agreement by id
│       └── document/
│           └── [id]/route.ts       # GET: generate/download final PDF
│
├── components/
│   ├── ui/                         # Reusable primitives
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── ProgressBar.tsx
│   │   └── Card.tsx
│   ├── forms/
│   │   ├── PartyDetailsForm.tsx
│   │   ├── AgreementTermsForm.tsx
│   │   └── OtpInput.tsx
│   ├── StampDutyBreakdown.tsx      # Plain-language calculation display
│   ├── AgreementPreview.tsx        # Live-generated agreement text
│   └── MockPaymentScreen.tsx
│
├── lib/
│   ├── stampDuty.ts                # Core calculation logic (0.25% + notional interest)
│   ├── mockData.ts                 # Demo Aadhaar/mobile placeholders
│   ├── pdfGenerator.ts             # Agreement/document generation
│   └── store.ts                    # In-memory or lightweight JSON/SQLite data layer
│
├── types/
│   └── agreement.ts                # Agreement, Party, StampDuty, Payment, RegisteredDocument types
│
├── public/
│   └── (icons, demo assets)
│
├── .env.local                      # (none needed for real secrets — all mocked)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md                       # Setup steps + "what's mocked" disclosure
```

---

## 4. Data Model (mirrors PRD section 6)

```
Agreement
 ├─ id
 ├─ propertyAddress
 ├─ rentAmount
 ├─ depositAmount
 ├─ durationMonths
 ├─ startDate
 └─ status: "draft" | "paid" | "signed" | "registered"

Party
 ├─ id
 ├─ agreementId
 ├─ role: "landlord" | "tenant" | "witness"
 ├─ name
 ├─ mockAadhaarLast4
 ├─ mockMobile
 └─ signed: boolean

StampDuty
 ├─ agreementId
 ├─ calculatedAmount
 └─ breakdown: { rentComponent, depositComponent, notionalInterest }

Payment
 ├─ agreementId
 ├─ amount
 └─ status: "pending" | "success"

RegisteredDocument
 ├─ agreementId
 ├─ mockReferenceNumber
 ├─ issuedAt
 └─ downloadUrl
```

---

## 5. What's Real vs Mocked (architecture-level)

| Layer | Real | Mocked |
|---|---|---|
| Form flow, validation, routing | ✅ | |
| Stamp duty calculation logic | ✅ (matches actual formula) | |
| Agreement document generation | ✅ | |
| Data persistence (in-memory/local) | ✅ (for demo purposes) | |
| Aadhaar OTP | | ✅ hardcoded verify |
| Payment gateway | | ✅ always succeeds |
| IGR / GRAS backend submission | | ✅ simulated response |
| SRO appointment / biometric | | ✅ simulated, with an in-app note on legal limitations |

---

## 6. Deployment

- Single Vercel project, connected to the GitHub repo
- No environment secrets needed (everything mocked, no real API keys)
- One `vercel deploy` gives the live demo link required for submission
