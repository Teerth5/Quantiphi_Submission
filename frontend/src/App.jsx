import { useEffect, useState } from 'react';
import { fetchProducts } from './api';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import SortDropdown from './components/SortDropdown';
import EmptyState from './components/EmptyState';
import './App.css';

const DEFAULT_FILTERS = {
  categories: [],
  minPrice: 0,
  maxPrice: 25000,
  minRating: null,
  sortBy: '',
};

export default function App() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [products, setProducts] = useState(null); // null = first fetch pending
  const [error, setError] = useState(null);

  // Instant feedback, no submit button: every filter change triggers a backend call.
  // 250ms debounce collapses rapid slider drags into one request (imperceptible on clicks).
  useEffect(() => {
    const t = setTimeout(() => {
      fetchProducts(filters)
        .then((data) => { setProducts(data.products); setError(null); })
        .catch((e) => setError(e.message));
    }, 250);
    return () => clearTimeout(t);
  }, [filters]);

  return (
    <div className="layout">
      <Sidebar filters={filters} onChange={setFilters} />
      <main className="content">
        {error && <p className="error">{error}</p>}
        {products == null ? null : products.length === 0 && !error ? (
          <EmptyState onReset={() => setFilters(DEFAULT_FILTERS)} />
        ) : (
          <>
            <div className="toolbar">
              <p className="count">{products.length} products</p>
              <SortDropdown
                sortBy={filters.sortBy}
                onChange={(sortBy) => setFilters({ ...filters, sortBy })}
              />
            </div>
            <ProductGrid products={products} />
          </>
        )}
      </main>
    </div>
  );
}
