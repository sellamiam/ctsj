# Civic Tech Saint John (CTSJ) — Contributor Guide & Roadmap

> **Community:** Civic Tech Saint John (CTSJ)  
> **Target Completion:** **Tue Dec 1, 6:00 PM** (Ahead of Tuesday Hack Night)  
> **Development Model:** Modular Streams, Contract-First Architecture  
> **Work Allocation:** Modular tasks picked up **based on contributor availability**  

---

## 1. Modular Workstreams (Based on Availability)

Tasks are designed to be decoupled and picked up by contributors based on their availability:

```
+-----------------------------------+-----------------------------------+-----------------------------------+
| FRONTEND & UX MODULE              | BACKEND & DATA MODULE             | INTEGRATIONS & SYNC MODULE        |
+-----------------------------------+-----------------------------------+-----------------------------------+
| • Responsive Web Form             | • Google Cloud Always-Free Tier   | • Google Sheets Project CMS       |
|   (Mobile + Desktop 2-column)     | • Firestore Collections & Schemas | • Google Apps Script Webhook      |
| • Municipal Autocomplete          | • Cloud Functions API (Node.js)   | • Looker Studio Reporting         |
| • Skill Chips & Smart Bio Parser  | • Firestore Security Rules (RBAC) | • QR Assets & WordPress Route     |
| • 7-Day Availability Grid         | • PII Encryption & CASL Audit     | • CI/CD Deployment Pipeline       |
| • Kiosk Mode (Auto-reset timer)   | • API Contract Mocking            | • End-to-End Testing & Staging    |
+-----------------------------------+-----------------------------------+-----------------------------------+
```

---

## 2. Decoupled Repository Structure

All platform modules live in a single repository with clear boundaries:

```text
ctsj/
├── frontend/                 # Web form, skill tokenizer, and kiosk UI
│   ├── VolunteerIntakeForm.jsx
│   └── skills_parser.js
│
├── backend/                  # Google Cloud Functions & Firestore security
│   └── cloud_functions_sample.js
│
├── scripts/                  # Google Sheets & bi-directional sync
│   └── google_apps_script_sync.js
│
├── docs/                     # Interactive mockups, screenshots & architecture
│   ├── ctsj_interactive_mockups.html
│   └── images/
│
├── CTSJ_PLATFORM_ONE_PAGER.pdf
├── CTSJ_PROJECT_ONE_PAGER.md
└── README.md
```

---

## 3. The "Contract-First" Collaboration Strategy

To allow contributors to work independently regardless of schedule differences, frontend and backend integrate via a standardized JSON API contract:

### Endpoint 1: `POST /checkVolunteerEmail`
```json
// Request
{ "email": "volunteer@example.com" }

// Response (If found)
{
  "exists": true,
  "profile": {
    "firstName": "Alex",
    "lastName": "Chen",
    "tel": "+15065550192",
    "role": "volunteer",
    "city": "Saint John, NB",
    "skills": ["python", "react"],
    "availability": { "days": ["tuesday"], "slots": { "tuesday": ["evening"] } }
  }
}
```

### Endpoint 2: `POST /submitVolunteerProfile`
```json
// Request
{
  "email": "volunteer@example.com",
  "firstName": "Alex",
  "lastName": "Chen",
  "tel": "+15065550192",
  "role": "volunteer",
  "city": "Saint John, NB",
  "skills": ["python", "gis_mapping"],
  "availability": { ... },
  "termsAccepted": true,
  "caslEmailOptIn": true
}
// Response
{ "success": true, "isUpdate": false }
```

> **Benefit:** Frontend contributors can test UI behaviors locally using mock data while backend contributors provision Firestore and deploy endpoints in parallel.

---

## 4. Availability-Based Milestones

### Stream 1: Core Build
* **Frontend:** Responsive intake form, NLP skill extractor (`skills_parser.js`), and availability selector.
* **Backend:** Firestore schema setup, CASL audit trails, and email check/submit endpoints.
* **Integrations:** `Active Projects` Google Sheet, `onEdit` Apps Script webhook, and QR links.

### Stream 2: Polish & Security
* **Kiosk Station:** Add 10-second auto-reset timer and suppress autofill for welcome desk laptops (`?mode=kiosk`).
* **Data Security:** Firestore Security Rules restricting public PII read access.
* **Target Milestone:** **Tue Dec 1, 6:00 PM** dry-run verification ahead of Hack Night!

---

## 5. Contribution & Review Guidelines
1. **Branch Names:** Use descriptive feature branches (`feat/form-availability`, `feat/cloud-functions-api`, `feat/sheets-sync`).
2. **Pull Requests:** Keep PRs modular and scoped to one feature or fix.
3. **Privacy First:** Never commit actual volunteer emails, phone numbers, or credentials.
