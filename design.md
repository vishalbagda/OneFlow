# Design.md
## One-Flow Rent Agreement Registration (Maharashtra)
**Build What Moves India — Hackathon Submission**

---

## 1. Design Direction

This is a **legal/civic document product**, not a consumer app — the visual language should borrow from what already signals trust and officialdom in India: stamp paper, gazette typography, the red wax-seal mark of registration — but rendered clean, mobile-first, and calm instead of dense and bureaucratic. The current government portals feel cold and transactional; this should feel like a trustworthy document being handled carefully, not a form being filled.

**Signature element:** A circular **stamp mark** — inspired by the physical rubber stamp/seal used at Sub-Registrar Offices — that visually "stamps" onto the screen at the final confirmation step (Phase 7) when the document is registered. This is the one moment of delight in an otherwise calm, restrained flow, and it directly reflects what the product replaces: the physical act of getting your document stamped and sealed.

**What to avoid:** No cream-background-plus-terracotta template look, no dark-mode-plus-neon-accent look, no dense hairline-rule broadsheet layout. This product needs to feel official but approachable — closer to a well-designed government gazette page than a SaaS landing page.

---

## 2. Color Palette

| Name | Hex | Use |
|---|---|---|
| **Ink Navy** | `#152A4A` | Primary text, headers, primary buttons — the "official document" color |
| **Paper** | `#F7F4EC` | App background — off-white, slightly warm, like legal paper (not stark white, not overly cream) |
| **Seal Maroon** | `#8E2E2E` | The stamp/seal accent — used sparingly, only for the registration stamp motif and critical confirmations |
| **Amber Gold** | `#B98A32` | Secondary accent — progress indicators, active step highlighting, links |
| **Slate** | `#5C6673` | Secondary/muted text, field labels, helper copy |
| **Verified Green** | `#3F6B4F` | Success states — payment confirmed, OTP verified, step completed |
| **Alert Red** | `#B23B3B` | Error states, validation messages — distinct from Seal Maroon, slightly brighter/more saturated |
| **Hairline** | `#DCD5C4` | Borders, dividers, input outlines — warm gray-beige, not cold gray |

**Usage rule:** Ink Navy and Paper carry 90% of the interface. Seal Maroon appears only at moments of real significance (the final stamp, key CTAs) — if it starts showing up on every button, pull it back. Amber Gold is the "in progress" color; Verified Green is the "done" color. Never use Seal Maroon and Alert Red near each other — they're close enough in family to read as the same thing at a glance.

---

## 3. Typography

| Role | Typeface | Notes |
|---|---|---|
| **Display / Headings** | **Fraunces** (serif, use Light/Medium weights, slightly negative tracking) | Carries the "official document / gazette" personality. Used for page titles and the agreement preview heading — not for every heading, reserve it for moments that should feel weighty. |
| **Body / UI** | **Inter** or **General Sans** (humanist sans-serif) | All form labels, body copy, buttons, navigation. Chosen for legibility on small Android screens at small sizes — this is the workhorse face. |
| **Data / Reference numbers** | **JetBrains Mono** or **IBM Plex Mono** | Used only for the stamp duty amount breakdown, the mock reference/Index-II number, and OTP digits — gives numbers a ledger-like, "this is official data" feel and improves scanability of digits. |

**Type scale (base 16px, mobile-first):**

| Token | Size | Weight | Use |
|---|---|---|---|
| `display-lg` | 32px / 1.15 | Fraunces Medium | Landing page hero headline |
| `display-md` | 24px / 1.2 | Fraunces Medium | Step page titles ("Agreement Terms", "Stamp Duty") |
| `heading` | 18px / 1.3 | Inter Semibold | Section headers within a step |
| `body` | 16px / 1.5 | Inter Regular | Default body copy, form labels |
| `body-sm` | 14px / 1.5 | Inter Regular | Helper text, field hints |
| `caption` | 12px / 1.4 | Inter Medium | Timestamps, disclaimers, "mocked" labels |
| `data` | 18px / 1.4 | JetBrains Mono | Stamp duty figures, reference numbers |
| `data-lg` | 28px / 1.2 | JetBrains Mono Medium | Final registered reference number on confirmation screen |

**Rule:** Never use Fraunces below 20px — it loses its character at small sizes and should stay reserved for headline moments. Never use JetBrains Mono for prose — only for numbers/codes.

---

## 4. Theme & Surface System

| Token | Value | Use |
|---|---|---|
| `bg-base` | Paper `#F7F4EC` | App background |
| `bg-surface` | `#FFFFFF` | Cards, form containers — sits slightly lighter than base to lift off the page |
| `bg-surface-raised` | `#FFFFFF` + soft shadow (`0 2px 12px rgba(21,42,74,0.06)`) | The active step card — subtle elevation, not a heavy drop shadow |
| `border-default` | Hairline `#DCD5C4` | Input borders, dividers |
| `border-focus` | Amber Gold `#B98A32` | Focused input outline (2px) |
| `radius` | 8px on cards/inputs, 6px on buttons | Soft but not overly rounded — matches the "official but approachable" tone, avoids the ultra-rounded consumer-app look |
| `shadow` | Used sparingly — only on the active step card and the final stamp moment | Flat design otherwise; shadows are not decoration here |

**Dark mode:** Not needed for this hackathon prototype — skip it. Building a second theme is scope creep per rules.md; ship one polished light theme.

---

## 5. The Stamp Motif (Signature Element)

- A circular seal graphic (concentric double-ring, Seal Maroon `#8E2E2E`, with the mock reference number set in it using JetBrains Mono) appears at Phase 7 (Confirmation).
- On load, it animates in with a quick scale-down "stamp impact" motion (roughly 200ms, slight overshoot then settle) — mimicking a physical stamp hitting paper. This is the one deliberate motion moment in the app; everything else stays calm with minimal transitions.
- This same stamp mark (smaller, static) can appear faintly as a watermark on the generated PDF document, reinforcing the "this is now official" feeling.
- Respect reduced-motion settings — if the user's system requests it, the stamp appears instantly with no animation.

---

## 6. Progress & Step Indicator

- A slim horizontal progress bar at the top of the `register/` flow (per architecture.md's shared wizard shell), using Amber Gold to fill completed/current segments against a Hairline track.
- Each step is labeled in plain language matching the app's step names (not "Step 1 of 6" alone — pair it with the actual step name, e.g. "Step 3 of 6 — Stamp Duty"), since plain-language wayfinding matters more here than a generic counter.

---

## 7. Copy Tone (ties to rules.md and PRD accessibility goals)

- Sentence case throughout, not Title Case buttons.
- Active voice, plain language: "Calculate stamp duty," not "Stamp Duty Calculation Module."
- Every mocked element's label should read like a disclosure, not a warning — calm, not alarming: *"Demo Aadhaar: XXXX-XXXX-1234 · This is a hackathon prototype, not a real verification."*
- Error copy states what happened and what to do next, in the interface's voice: *"That OTP didn't match. Try again."* — never "Invalid input" alone.

---

## 8. Accessibility Baseline

- Minimum contrast ratio 4.5:1 for all body text against its background (Ink Navy on Paper comfortably clears this)
- All interactive elements have a visible keyboard focus state (`border-focus` amber outline, 2px, never removed via `outline: none` without a replacement)
- Tap targets minimum 44x44px on mobile
- Form errors are announced via `aria-live` regions, not color alone (Alert Red text is always paired with an icon and a written message)
