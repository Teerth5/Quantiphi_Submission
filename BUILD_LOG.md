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
- [ ] F6. Instant feedback, no submit button, slider debounced ~250ms
- [ ] F7. Empty state: "No items match your criteria." + Reset filters button
- [ ] INTEGRATION. Full end-to-end run-through, commit + push

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
