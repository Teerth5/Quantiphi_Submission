// Combinatorial intersect filter: a product survives only if it passes EVERY active criterion.
// Each criterion applies only when provided (graceful null handling) — empty criteria = full inventory.
function filterProducts(products, criteria = {}) {
  const { categories, minPrice, maxPrice, minRating } = criteria;

  return products.filter((p) => {
    if (Array.isArray(categories) && categories.length > 0 && !categories.includes(p.category)) return false;
    if (minPrice != null && p.price < minPrice) return false;
    if (maxPrice != null && p.price > maxPrice) return false;
    if (minRating != null && p.rating < minRating) return false;
    return true;
  });
}

module.exports = filterProducts;
