# BUILD_LOG — Quantiphi Vibe Coding (E-Commerce Multi-Filter Sidebar)

Deadline: 09:40 PM, 09 July. Repo: https://github.com/Teerth5/Quantiphi_Submission.git

## Checklist
- [x] S1. .gitignore (node_modules, token .txt), remote confirmed, initial commit + push
- [x] S2. Scaffold /backend (Express) + /frontend (Vite React), both start clean
- [x] B1. backend/data/products.js — 12+ items across Electronics/Apparel/Footwear
- [x] B2. filterProducts(products, criteria) — category AND price range AND minRating
- [x] B3. Graceful null handling — empty criteria returns full inventory
- [x] B4. sortProducts(products, sortBy) — priceLowHigh, topRated, default original
- [x] B5. /api/products endpoint — validate, filter first, sort second
- [x] F1. Sticky left sidebar with Category checklist
- [x] F2. Dual-point price range slider
- [x] F3. Min star rating radios (1-5)
- [x] F4. Product grid cards (image, price, rating, name)
- [x] F5. Sort By dropdown top-right of grid
- [x] F6. Instant feedback, no submit button, slider debounced ~250ms
- [x] F7. Empty state: "No items match your criteria." + Reset filters button
- [x] INTEGRATION. Full end-to-end run-through, commit + push

## Notes
(append per item: what changed + time)
- S1 done: .gitignore (node_modules, *.txt token, *.pdf), remote origin set with token, initial commit d64dca3 pushed to main.
- S2 done: backend/ Express (health endpoint tested {"ok":true} on :5000), frontend/ Vite React scaffold (dev server HTTP 200 on :5173). Note: first scaffold attempt gave vanilla-ts, re-scaffolded with react template.
- B1 done: 15 products across 3 categories (verified length=15, categories Electronics/Apparel/Footwear via node -e).
- INCIDENT: an external process created+checked out branch "docs-audit" mid-session; B1 commit landed there. Fixed: fast-forwarded main, reset docs-audit to its creation point (1eb476f). Watch the current branch before every commit.
- B2 done: filterProducts with AND-intersect of categories/minPrice/maxPrice/minRating, each applied only when provided. Unit-tested 3 criteria combos, all correct.
- B3 done: backend/test.js assert suite — empty {}, missing arg, and cleared-null criteria all return 15/15; combined criteria still intersects. All pass.
- NOTE: Codex runs in parallel on branch docs-audit (README/audit). My work stays on main; always `git checkout main` before committing. Do not reset docs-audit again.
- B4 done (20:47): sortProducts priceLowHigh ascending ✓, topRated descending ✓, default preserves order ✓.
- INCIDENT 2: remote URL lost its token (stripped externally); restored via set-url from Git.txt. If push asks for username, re-run the restore.
- B5 done (20:52): GET+POST /api/products, validates categories/prices/rating/sortBy server-side, filters then sorts. 6 curl checks pass incl. 400s for minRating=9, sortBy=nope, minPrice>maxPrice.
- F1 done (20:58): App layout + sticky sidebar (position:sticky top:0 100vh) + category checkboxes wired to POST /api/products via vite proxy. Verified: HTTP 200, proxy filter Apparel→5 items, vite build clean. Temp list rendering until F4 grid.
- F2 done (21:02): PriceSlider — two overlaid native range inputs (0-25000 step 100), min/max clamp to never cross, live ₹ labels. Build clean; price criteria round-trip verified (1000-3000 → 7 items).
- F3 done (21:05): RatingFilter radios 1-5 (single-select via shared name + single state value). Build clean; minRating 4.5 → 5 items verified through proxy.
- F4 done (21:08): ProductGrid + ProductCard (image, ₹ price, ★ stars + numeric, name), responsive auto-fill grid. Build clean. Committed 65a3c21 (log tick was missed there, folded into F5 commit).
- F5 done (21:10): SortDropdown top-right of grid in a toolbar row — Default / Price: Low to High / Top Rated First. sortBy=priceLowHigh round-trip returns Flip Flops ₹299 first ✓.
- F6 done (21:13): useEffect on [filters] with 250ms setTimeout + cleanup — every control change auto-fetches, rapid slider drags collapse to one request, no submit button anywhere. Headless-Edge screenshot confirms grid populated from backend on load (sidebar, slider, radios, 15 cards, sort dropdown all render).
- F7 done (21:19): EmptyState replaces toolbar+grid when count=0 — exact text "No items match your criteria." + Reset filters → DEFAULT_FILTERS. Screenshot-verified by temporarily forcing zero-match defaults (then reverted). null-guard prevents empty-state flash before first fetch.
- INTEGRATION done (21:22): backend/test.js passes + 7 combos through the vite proxy (the exact UI path): all-empty→15, multi-category+priceAsc, category+price+topRated, rating+sort, tight price window→1, zero-match→0, all-filters-wide+topRated→15 correctly ordered. Empty/reset path covered in F7. ALL CHECKLIST ITEMS COMPLETE.

## Audit fixes (from AUDIT_REPORT.md)
- AUDIT-1 High, credential exposure, FIXED (21:16): before — remote URL embedded the token in .git/config plaintext. After — remote set to https://Teerth5@github.com/... (username only, no secret), token stored in Git Credential Manager (credential.helper=manager, seeded via git credential approve, never printed). Verified: `git remote -v` shows no token; grep of .git/config for github_pat/ghp_ returns nothing; `git push` succeeds via GCM with no token typed.
- AUDIT-2 Medium, final Vite build unverified by auditor, FIXED (21:18): `npm run build` on committed main → ✓ built in 525ms, bundle 194.29 kB. dist/ stays gitignored.
- AUDIT-3 Low, singular `category` param ignored, FIXED (21:20): backend validate() now accepts `category` as alias for `categories`. Curl-verified: ?category=Electronics→5, POST {"category":"Footwear"}→5, ?categories=Apparel still→5, ?category=Nope→400, backend/test.js all pass.
- AUDIT-4 Low, star display rounded 4.5 up to 5 full stars, FIXED (21:23): ProductCard now floor + half-star glyph (⯨) when fraction ≥0.5, numeric rating kept. Screenshot-verified (4.5 → ★★★★⯨, 4.8 → ★★★★⯨ with (4.8)). Build clean.
- AUDIT pass-1 item 6 (no clear-rating radio) needs no code change per audit — PDF requires 1-5 radios only; Reset filters is the clear path (viva talking point).
- FINAL VERIFICATION (21:27): 20-combo exhaustive pass through the vite proxy — all 8 category subsets, 2 price ranges, all 5 minRating values, both sorts, everything-combined, zero-match, and reset state. Each response independently checked for membership AND ordering: ALL 20 PASS. backend/test.js passes. All audit fixes committed and pushed.
