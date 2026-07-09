# Manual API Tests for `/api/products`

These commands are prepared for the final backend endpoint validation pass. Do not run them until the Express app exposes a stable `GET /api/products` route.

Assumed local backend URL:

```bash
BASE_URL="http://localhost:5000"
```

## 1. No filters

```bash
curl -s "$BASE_URL/api/products"
```

Expected: full base inventory.

## 2. Single category

```bash
curl -s "$BASE_URL/api/products?category=Electronics"
```

Expected: only Electronics products.

## 3. Price range only

```bash
curl -s "$BASE_URL/api/products?minPrice=50&maxPrice=150"
```

Expected: only products priced from 50 through 150 inclusive.

## 4. Minimum rating only

```bash
curl -s "$BASE_URL/api/products?minRating=4"
```

Expected: only products rated 4 stars or higher.

## 5. Category + price range + minimum rating

```bash
curl -s "$BASE_URL/api/products?category=Footwear&minPrice=40&maxPrice=120&minRating=4"
```

Expected: only Footwear products priced from 40 through 120 inclusive and rated 4 stars or higher.

## 6. Sort by price low to high

```bash
curl -s "$BASE_URL/api/products?sort=priceLowHigh"
```

Expected: products are filtered first, then sorted by ascending price.

## 7. Sort by top rated first

```bash
curl -s "$BASE_URL/api/products?sort=topRated"
```

Expected: products are filtered first, then sorted by descending rating.

## 8. Zero-result case

```bash
curl -s "$BASE_URL/api/products?category=Apparel&minPrice=99999&maxPrice=100000&minRating=5"
```

Expected: empty product list so the frontend can render `No items match your criteria.` with a `Reset filters` button.

## Results Log

TBD -- pending final build.
