// Sole talk-to-backend point. The backend does all filtering/sorting/validation.
export async function fetchProducts(criteria) {
  const res = await fetch('/api/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(criteria),
  });
  if (!res.ok) throw new Error((await res.json()).error || `HTTP ${res.status}`);
  return res.json(); // { count, products }
}
