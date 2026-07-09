export default function ProductCard({ product }) {
  const full = Math.floor(product.rating);
  const half = product.rating - full >= 0.5;
  return (
    <div className="card">
      <img src={product.image} alt={product.name} loading="lazy" />
      <div className="card-body">
        <span className="price">₹{product.price.toLocaleString('en-IN')}</span>
        <span className="stars" title={`${product.rating} out of 5`}>
          {'★'.repeat(full)}{half ? '⯨' : ''}{'☆'.repeat(5 - full - (half ? 1 : 0))} <small>({product.rating})</small>
        </span>
        <h4>{product.name}</h4>
      </div>
    </div>
  );
}
