// Sorts AFTER filtering. Returns a new array; unknown/absent sortBy preserves original order.
function sortProducts(products, sortBy) {
  const sorted = [...products];
  if (sortBy === 'priceLowHigh') sorted.sort((a, b) => a.price - b.price);
  else if (sortBy === 'topRated') sorted.sort((a, b) => b.rating - a.rating);
  return sorted;
}

module.exports = sortProducts;
