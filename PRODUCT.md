# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The main users are parents and guardians of children and teenagers with signs of a rheumatic disease, or a confirmed one. Most reach the site on their phone, often worried. Some have a referral from a pediatrician and others are searching on their own. Their job on the site is to work out three things:

- whether their child's symptoms belong with a pediatric rheumatologist;
- whether this doctor is trustworthy;
- how to book.

Families come from Palmas, from the interior of Tocantins and from neighboring regions, so some of them travel to the appointment.

## Product Purpose

This is the personal website of Dra. Núbia Carmo, a pediatrician and pediatric rheumatologist in Palmas, TO. It exists to explain the specialty to parents, build trust in the doctor and turn that trust into a booking request on WhatsApp. Success means a parent who lands on the site and sends a WhatsApp message to book.

## Positioning

- She is a single named physician, not a clinic. The site sells her: her face, her training and her first-person voice.
- She holds a pediatric rheumatology residency at UNICAMP (2024), which is rare in the region.
- She provides long-term follow-up of chronic childhood conditions (juvenile idiopathic arthritis, juvenile lupus, vasculitis, scleroderma, chronic pain), not one-off emergency care.

## Operating Context

- **Booking:** only through WhatsApp, at (63) 99281-9154, `https://wa.me/5563992819154`. A secretary answers within the same business day, during office hours.
- **Hours:** Monday to Friday, 08h–12h and 14h–18h.
- **Address:** Edifício Comercial Urban Futuro, Q. 201 Sul, Avenida Joaquim Teotônio Segurado, 15, Sala 301, Plano Diretor Sul, Palmas, TO, CEP 77015-200. A Google Maps embed already exists.
- **Email:** nubiacarmo7@gmail.com.
- **Instagram:** https://www.instagram.com/dranubiareumatopediatra/.
- **Domain:** https://www.dranubiareumatopediatra.com.br.
- **Payment:** private consultations and health plans (convênios). The list of convênios is not confirmed yet (see Capabilities and Constraints).
- **Format:** in person in Palmas. Teleconsultation was not confirmed and must not be offered.

## Capabilities and Constraints

- **Stack:** existing Next.js 14 App Router, Tailwind 3, shadcn/ui and framer-motion. Analytics through `@vercel/analytics`. Deployed on Vercel.
- **Single page:** the site is one page with anchor navigation.
- **No contact form:** the user decided to remove it. WhatsApp is the only booking channel. A `tel:` and `mailto:` link serve as fallback.
- **Map:** the Google Maps embed stays.
- **Medical advertising rules (CFM Resolution 2.336/2023):**
  - Show CRM and RQE.
  - No promise of results and no superlatives.
  - No patient photos without authorization.
- **Credentials:** use this exact form: CRM-TO 3581, RQE 2025 (Pediatria), RQE 3660 (Reumatologia Pediátrica).
- **Open decisions:** these must not be invented on the site.
  - **List of convênios:** to be confirmed with the doctor. Until then, the copy says "consulte os convênios pelo WhatsApp".
  - **Length of the first appointment and what to bring:** not confirmed.
  - **Whether a referral is required:** not confirmed.

## Brand Commitments

- **Name:** "Dra. Núbia Carmo".
- **Specialty wording:** "Reumatologista Pediátrica" / "Reumatopediatra".
- **Voice:** first person for the doctor ("Sou a Dra. Núbia…"), warm, plain Portuguese, addressed to parents.
- **Logo:** keep the existing logo, `public/logo.png` (teddy bears, stethoscope, pink brushstroke).
- **Palette:** keep the palette set in `INFOS.md`, which is derived from the logo. It is rosa suave #F8C8D8, dourado #B38E5D, azul claro #A7D1E6, branco #FFFFFF and cinza suave #EAEAEA.
- **Photos:** keep the current photos of the doctor (`public/image_about.jpg`, `public/rectangle_foto1.png`).
- **Tone:** welcoming and calm, chosen by the user. Reassure worried parents.
- **Imagery:** no hospital imagery.

## Evidence on Hand

- **Credentials, all real:**
  - Medicine at UNIRG (2014).
  - Pediatrics residency at UFT (2017).
  - Pediatric Rheumatology residency at UNICAMP (2024).
  - Member of SBP and SBR.
  - Professor of Medicine at ITPAC Porto.
  - Volunteer preceptor in the UFT pediatrics residency and medical internship.
- **Assets in the repository:** the logo and two photos of the doctor in `public/`.
- **New real photos** in `fotos/` (filenames prefixed `120363388367026097_g_us-`). Copy them to `public/` with descriptive names before use.
  - **Professional portraits:** studio shoot on a neutral grey background, square, 2048px. The shoot also has the hands-under-chin portrait at 7360×6264, copied to `public/fotos/dra-nubia-sorrindo.jpg`.
    - `…AC023A96…`: white sleeveless top, arms crossed, smiling, three-quarter body.
    - `…AC64CA42…`: same outfit, glasses, hand by hair, looking up. A thoughtful pose.
    - `…AC3EEEAE…`: camel blazer, seated in an armchair, hand at chin, smiling.
    - `…ACE8556D…`: camel blazer, seated, serious, arms resting. The formal pose.
    - `…ACEB5643…`: camel blazer, hands clasped under chin, big smile. The warmest pose.
  - **Office**, real, portrait orientation (960×1280 and 1792×2400):
    - `…ACDFC2C8…`: kids' play corner. House-shaped wooden shelves, a slatted wood wainscot, a small table and chair, toys and crayons. Warm greige walls.
    - `…ACF38FE9…`: consultation room. Desk with slatted wood front, two upholstered chairs, grey cabinetry, natural window light, gold accents.
  - **Building:** `…AC631B60…` shows the Edifício Urban Futuro exterior. It looks like a screenshot of a web image, with an overlay icon at bottom-left. Its source and rights are unconfirmed, so do not use it unless the user confirms or replaces it.
- **Assets the user says exist but are not in the repository yet:** Google reviews from parents. The user must supply the text and links before any quote is used.
- **Not present, never fabricate:**
  - patient counts, years-of-experience counters or success rates;
  - testimonials other than real Google reviews, quoted with attribution;
  - patient photos.
- **Current stock photos:** `public/image_service_*.png` show children in hospital settings. They are not her patients and are to be retired.

## Product Principles

1. **Answer the parent's question before selling.** "Is this for my child?" comes before "book now".
2. **One clear path to action.** WhatsApp, visible at every point of decision, plus the hours and the same-day response.
3. **Trust comes from the real person and real credentials, never from inflated claims.**
4. **Calm, never alarm.** Present chronic illness as long-term partnership, and include responsible urgency guidance: "em caso de urgência, procure o pronto-socorro".
5. **Every fact appears once and consistently.** Address, CRM/RQE and hours must match everywhere, including the structured data.

## Accessibility & Inclusion

- The site is used mostly on phones by stressed parents with mixed levels of literacy.
- It must be readable without JS or animation.
- Respect `prefers-reduced-motion`.
- Meet WCAG AA contrast. The gold is limited to large text.
- Tap targets of at least 44px, with phone numbers and the address tappable.
