import { useEffect, useState } from 'react';
import { fetchProducts } from './api';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import SortDropdown from './components/SortDropdown';
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
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts(filters)
      .then((data) => { setProducts(data.products); setError(null); })
      .catch((e) => setError(e.message));
  }, [filters]);

  return (
    <div className="layout">
      <Sidebar filters={filters} onChange={setFilters} />
      <main className="content">
        {error && <p className="error">{error}</p>}
        <div className="toolbar">
          <p className="count">{products.length} products</p>
          <SortDropdown
            sortBy={filters.sortBy}
            onChange={(sortBy) => setFilters({ ...filters, sortBy })}
          />
        </div>
        <ProductGrid products={products} />
      </main>
    </div>
  );
}
