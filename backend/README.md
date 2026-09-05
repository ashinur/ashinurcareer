# E-Kart Recruitment Backend

This folder documents the production backend contract for the recruitment portal.

## Recommended deployment
Use a managed PostgreSQL database plus private object storage (S3-compatible) behind an authenticated API. Do **not** commit candidate files to GitHub or expose object-storage URLs publicly.

## Required environment variables
```text
DATABASE_URL=
OBJECT_STORAGE_ENDPOINT=
OBJECT_STORAGE_BUCKET=
OBJECT_STORAGE_ACCESS_KEY=
OBJECT_STORAGE_SECRET_KEY=
ADMIN_EMAIL=
ADMIN_PASSWORD_HASH=
SESSION_SECRET=
CORS_ORIGIN=
```

## API contract
`POST /api/applications` — multipart form submission. Validate all fields server-side, enforce file type/size limits, perform duplicate checks using normalized mobile + DOB, write the candidate record and private document object keys transactionally, then generate a unique reference such as `EK-2026-000001`.

`POST /api/admin/login` — authenticate recruiter and issue a secure, HttpOnly, SameSite session cookie.

`GET /api/admin/applications` — authenticated list endpoint supporting `q`, `status`, `education`, `bike`, `licence`, `page`, and `pageSize` filters.

`GET /api/admin/applications/:id` — authenticated candidate detail. Never return raw public document URLs.

`PATCH /api/admin/applications/:id` — authenticated status update (`New`, `Shortlisted`, `Interview`, `Selected`, `Rejected`, `On Hold`). Record updated timestamp and recruiter identity.

`GET /api/admin/applications/export.csv` — authenticated CSV export. Do not include document bytes in exports.

`GET /api/admin/applications/:id/documents/:type` — authenticated short-lived signed URL or streamed download from private object storage.

## Security requirements
- Keep this repository free of applicant data and secrets.
- Apply server-side validation even when client-side validation exists.
- Rate-limit form submissions and admin login.
- Use parameterized queries / ORM.
- Sanitize filenames and store generated object keys, not original filenames.
- Restrict uploads to explicitly allowed MIME types and extensions; reject executable formats.
- Virus-scan uploads where available.
- Encrypt database and object storage at rest.
- Use HTTPS in production.
- Log recruiter access to candidate records and document downloads.
- Define a retention/deletion policy appropriate to the recruitment process.
