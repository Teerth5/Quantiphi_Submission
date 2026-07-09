# BUILD_LOG — Quantiphi Vibe Coding (E-Commerce Multi-Filter Sidebar)

Deadline: 09:40 PM, 09 July. Repo: https://github.com/Teerth5/Quantiphi_Submission.git

## Checklist
- [x] S1. .gitignore (node_modules, token .txt), remote confirmed, initial commit + push
- [x] S2. Scaffold /backend (Express) + /frontend (Vite React), both start clean
- [x] B1. backend/data/products.js — 12+ items across Electronics/Apparel/Footwear
- [x] B2. filterProducts(products, criteria) — category AND price range AND minRating
- [x] B3. Graceful null handling — empty criteria returns full inventory
- [ ] B4. sortProducts(products, sortBy) — priceLowHigh, topRated, default original
- [ ] B5. /api/products endpoint — validate, filter first, sort second
- [ ] F1. Sticky left sidebar with Category checklist
- [ ] F2. Dual-point price range slider
- [ ] F3. Min star rating radios (1-5)
- [ ] F4. Product grid cards (image, price, rating, name)
- [ ] F5. Sort By dropdown top-right of grid
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
