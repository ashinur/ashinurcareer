# E-Kart Logistic Hub — Delivery Boy Recruitment Portal

Professional, mobile-friendly recruitment landing page for hiring Delivery Boys.

## Current repo
- Public recruitment page: `index.html`
- Backend/security contract: `backend/README.md`

## Important production note
The static page is intentionally not wired to an unsafe client-only database or public document storage. Set `window.EKART_API_BASE` to a deployed secure API before accepting real candidate applications.

The API must provide authenticated recruiter access, persistent database storage, private document storage, server-side validation, duplicate protection, rate limiting, CSV export, and short-lived authenticated document access.

## Public page
The home page highlights:
- Delivery Boy vacancy
- 10 vacancies
- Apply Now CTA
- Candidate contact/address/education/experience details
- Bike and driving licence checks
- Photo, Aadhaar, PAN, driving licence and resume uploads
- Privacy/consent language
- File-size validation
- Unique application reference-ID confirmation UI
- Responsive Android/desktop layout

## Admin
The secure admin dashboard is an API/backend responsibility. Never expose recruiter credentials or private document URLs in frontend code.
