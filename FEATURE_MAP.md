# Features-to-Requirements Checklist

Status is intentionally blank until the final audit pass.

| Requirement from assessment brief | Status |
| --- | --- |
| The left section of the viewport houses a sticky filter controls panel. |  |
| It features: 1) A Category Checklist group (e.g., Electronics, Apparel, Footwear), |  |
| It features: 2) A dual-point Price Range Slider track allowing the user to select minimum and maximum bounds, |  |
| It features: 3) A Minimum Star Rating set of radio selection buttons (1 to 5 stars). |  |
| The main right-hand section displays matching products as cards containing an image thumbnail, price tag, star rating display, and item name. |  |
| Every single click or slider adjustment on the sidebar instantly updates the catalog grid without needing a manual "Submit" button click. |  |
| If the filters are tuned so tightly that zero items match, the catalog grid disappears and renders a "No items match your criteria. Reset filters" button screen. |  |
| Write the core processing function that accepts the active combination criteria state. |  |
| It executes a comprehensive search loop over the master product item inventory array, ensuring a product is only returned if it safely satisfies the category selection, falls inside the price boundary, and meets or exceeds the star rating. |  |
| If all filters are left unselected or cleared, the logic safely bypasses data reduction filters to display the full, base inventory set seamlessly. |  |
| Add a "Sort By" Dropdown Menu component to the top right of the inventory grid containing choices like: Price: Low to High, and Top Rated First. |  |
| The candidate must refactor their logic loop so that the pipeline filters the original dataset first, and then arranges the visual presentation order of the remaining cards instantly based on the sorting state chosen. |  |
| Maintain meaningful and incremental Git commits that clearly reflect the functionality implemented at each stage of development. |  |
| Follow a clean, scalable, and well-structured architecture for both the frontend and backend components of your solution. |  |
| All business logic, calculations, validations, and computations should be implemented on the server side. |  |
| The frontend should primarily handle presentation and user interactions. |  |
| After uploading your code, submit the GitHub repository link on Unstop (Vibe Coding Submission). |  |
| The GitHub link must be submitted no later than 09:40 PM (09 July). |  |
| Any submission received after 09:40 PM will be automatically disqualified. |  |
| We will verify GitHub commits and upload timestamps. Any edits, commits, or modifications made after 09:40 PM (09 July) will lead to disqualification. |  |
| Ensure that the GitHub repository is publicly accessible for review. |  |
| No leaked token. |  |
| Sidebar checklist. |  |
| Dual-point price slider. |  |
| Star rating radios. |  |
| Product cards with image/price/rating/name. |  |
| Instant no-submit updates. |  |
| Empty state text + Reset filters button. |  |
| Combinatorial AND filter logic. |  |
| Graceful null handling. |  |
| Sort By dropdown with filter-then-sort order. |  |
| All logic server-side. |  |
| Clean architecture. |  |
| Incremental commits. |  |
| Public repo. |  |
| No leaked token. |  |
