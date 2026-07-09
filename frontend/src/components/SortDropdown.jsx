export default function SortDropdown({ sortBy, onChange }) {
  return (
    <select className="sort" value={sortBy} onChange={(e) => onChange(e.target.value)} aria-label="Sort by">
      <option value="">Sort By: Default</option>
      <option value="priceLowHigh">Price: Low to High</option>
      <option value="topRated">Top Rated First</option>
    </select>
  );
}
