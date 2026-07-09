// Minimal assert-based self-check: node test.js
const assert = require('assert');
const products = require('./data/products');
const filterProducts = require('./logic/filterProducts');

// Graceful null handling: empty/absent criteria must return the full inventory untouched.
assert.strictEqual(filterProducts(products, {}).length, products.length, 'empty criteria');
assert.strictEqual(filterProducts(products).length, products.length, 'no criteria arg');
assert.strictEqual(filterProducts(products, { categories: [], minPrice: null, maxPrice: null, minRating: null }).length, products.length, 'cleared criteria');

// Intersect filtering still works.
const r = filterProducts(products, { categories: ['Electronics'], minPrice: 1000, maxPrice: 5000, minRating: 4 });
assert.deepStrictEqual(r.map(p => p.id), [1, 4], 'combined criteria');

console.log('All filter tests passed. Empty criteria returns', filterProducts(products, {}).length, 'of', products.length, 'items.');
