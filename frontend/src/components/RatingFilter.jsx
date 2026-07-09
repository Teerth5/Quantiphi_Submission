export default function RatingFilter({ minRating, onChange }) {
  return (
    <section>
      <h3>Minimum Rating</h3>
      {[1, 2, 3, 4, 5].map((r) => (
        <label key={r} className="row">
          <input
            type="radio"
            name="minRating"
            checked={minRating === r}
            onChange={() => onChange(r)}
          />
          {'★'.repeat(r)}{'☆'.repeat(5 - r)} & up
        </label>
      ))}
    </section>
  );
}
