# Quantiphi E-Commerce Product Filter

One-line summary: a marketplace browsing interface where users filter and sort a product catalog instantly through a sticky sidebar and server-owned business logic.

## Planned Tech Stack

- Backend: Node.js with Express.
- Frontend: React with Vite.
- API contract: the frontend sends filter and sort state to the backend; the Express backend owns all business logic, calculations, validations, filtering, and sorting.
- Frontend responsibility: presentation, sidebar interactions, product-grid rendering, empty states, and reset controls only.

## Planned Folder Architecture

```text
.
├── backend/
│   ├── data/              # Product inventory dataset
│   ├── src/               # Express app, routes, services, and validation
│   └── package.json
├── frontend/
│   ├── src/               # React components, API client, styles
│   └── package.json
├── test/
│   └── api-tests.md       # Manual curl checks for /api/products
├── FEATURE_MAP.md         # Requirement-to-implementation audit checklist
├── BUILD_LOG.md           # Incremental build and audit notes
└── README.md
```

TBD -- pending final build: confirm the exact backend and frontend subfolder layout once implementation is complete.

## Setup

TBD -- pending final build.

Expected shape:

```bash
git clone https://github.com/Teerth5/Quantiphi_Submission.git
cd Quantiphi_Submission
```

Backend install:

```bash
cd backend
npm install
```

Frontend install:

```bash
cd frontend
npm install
```

## Run

TBD -- pending final build.

Expected development flow:

```bash
# Terminal 1
cd backend
npm run dev

# Terminal 2
cd frontend
npm run dev
```

TBD -- pending final build: record final ports, environment variables, API base URL, and any production build commands.

## API

TBD -- pending final build.

Planned endpoint:

```text
GET /api/products
```

Expected query parameters:

- `category`: one or more selected categories.
- `minPrice`: lower price boundary.
- `maxPrice`: upper price boundary.
- `minRating`: minimum star rating from 1 to 5.
- `sort`: sorting mode such as `priceLowHigh` or `topRated`.

## Audit Notes

- Requirement mapping lives in `FEATURE_MAP.md`.
- Manual API checks live in `test/api-tests.md`.
- Sections marked "TBD -- pending final build" must be finalized after the backend and frontend implementation lands.
