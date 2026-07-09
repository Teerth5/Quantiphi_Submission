import PriceSlider from './PriceSlider';
import RatingFilter from './RatingFilter';

const CATEGORIES = ['Electronics', 'Apparel', 'Footwear'];

export default function Sidebar({ filters, onChange }) {
  const toggleCategory = (cat) => {
    const next = filters.categories.includes(cat)
      ? filters.categories.filter((c) => c !== cat)
      : [...filters.categories, cat];
    onChange({ ...filters, categories: next });
  };

  return (
    <aside className="sidebar">
      <h2>Filters</h2>

      <section>
        <h3>Category</h3>
        {CATEGORIES.map((cat) => (
          <label key={cat} className="row">
            <input
              type="checkbox"
              checked={filters.categories.includes(cat)}
              onChange={() => toggleCategory(cat)}
            />
            {cat}
          </label>
        ))}
      </section>

      <PriceSlider
        minPrice={filters.minPrice}
        maxPrice={filters.maxPrice}
        onChange={(minPrice, maxPrice) => onChange({ ...filters, minPrice, maxPrice })}
      />

      <RatingFilter
        minRating={filters.minRating}
        onChange={(minRating) => onChange({ ...filters, minRating })}
      />
    </aside>
  );
}
