export default function ProductCard({ product }) {
  const full = Math.round(product.rating);
  return (
    <div className="card">
      <img src={product.image} alt={product.name} loading="lazy" />
      <div className="card-body">
        <span className="price">₹{product.price.toLocaleString('en-IN')}</span>
        <span className="stars" title={`${product.rating} out of 5`}>
          {'★'.repeat(full)}{'☆'.repeat(5 - full)} <small>({product.rating})</small>
        </span>
        <h4>{product.name}</h4>
      </div>
    </div>
  );
}
