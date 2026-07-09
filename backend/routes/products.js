const express = require('express');
const products = require('../data/products');
const filterProducts = require('../logic/filterProducts');
const sortProducts = require('../logic/sortProducts');

const router = express.Router();

const VALID_CATEGORIES = ['Electronics', 'Apparel', 'Footwear'];
const VALID_SORTS = ['priceLowHigh', 'topRated'];

// Server-side validation: returns { criteria, sortBy } or throws { status, message }.
function validate(input) {
  const { categories, category, minPrice, maxPrice, minRating, sortBy } = input;

  let cats = categories ?? category; // singular `category` accepted as alias
  if (typeof cats === 'string') cats = cats.split(',').filter(Boolean); // GET ?categories=a,b
  if (cats != null) {
    if (!Array.isArray(cats)) throw { status: 400, message: 'categories must be an array' };
    const bad = cats.filter((c) => !VALID_CATEGORIES.includes(c));
    if (bad.length) throw { status: 400, message: `unknown categories: ${bad.join(', ')}` };
  }

  const num = (v, name, min, max) => {
    if (v == null || v === '') return null;
    const n = Number(v);
    if (!Number.isFinite(n) || n < min || n > max) throw { status: 400, message: `${name} must be a number between ${min} and ${max}` };
    return n;
  };
  const lo = num(minPrice, 'minPrice', 0, 1e9);
  const hi = num(maxPrice, 'maxPrice', 0, 1e9);
  if (lo != null && hi != null && lo > hi) throw { status: 400, message: 'minPrice cannot exceed maxPrice' };
  const rating = num(minRating, 'minRating', 1, 5);

  if (sortBy != null && sortBy !== '' && !VALID_SORTS.includes(sortBy)) {
    throw { status: 400, message: `sortBy must be one of: ${VALID_SORTS.join(', ')}` };
  }

  return { criteria: { categories: cats, minPrice: lo, maxPrice: hi, minRating: rating }, sortBy };
}

// Pipeline: validate -> filter FIRST -> sort SECOND.
function handle(input, res) {
  try {
    const { criteria, sortBy } = validate(input);
    const result = sortProducts(filterProducts(products, criteria), sortBy);
    res.json({ count: result.length, products: result });
  } catch (e) {
    res.status(e.status || 500).json({ error: e.message || 'internal error' });
  }
}

router.get('/', (req, res) => handle(req.query, res));
router.post('/', (req, res) => handle(req.body || {}, res));

module.exports = router;
