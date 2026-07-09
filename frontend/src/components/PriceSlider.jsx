export const PRICE_MIN = 0;
export const PRICE_MAX = 25000;
const STEP = 100;

// Dual-point slider: two native range inputs overlaid on one track.
export default function PriceSlider({ minPrice, maxPrice, onChange }) {
  const setMin = (v) => onChange(Math.min(Number(v), maxPrice), maxPrice);
  const setMax = (v) => onChange(minPrice, Math.max(Number(v), minPrice));

  return (
    <section>
      <h3>Price Range</h3>
      <div className="dual-slider">
        <input type="range" min={PRICE_MIN} max={PRICE_MAX} step={STEP} value={minPrice}
          onChange={(e) => setMin(e.target.value)} aria-label="Minimum price" />
        <input type="range" min={PRICE_MIN} max={PRICE_MAX} step={STEP} value={maxPrice}
          onChange={(e) => setMax(e.target.value)} aria-label="Maximum price" />
      </div>
      <div className="price-labels">
        <span>₹{minPrice}</span>
        <span>₹{maxPrice}</span>
      </div>
    </section>
  );
}
