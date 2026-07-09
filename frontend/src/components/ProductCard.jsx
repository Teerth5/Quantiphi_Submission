const PRODUCT_IMAGES = {
  1: '/images/wireless-headphones.jpg',
  2: '/images/smartphone-x200.jpg',
  3: '/images/bluetooth-speaker.jpg',
  4: '/images/smart-watch.jpg',
  5: '/images/usb-c-charger.jpg',
  6: '/images/cotton-t-shirt.jpg',
  7: '/images/denim-jeans.jpg',
  8: '/images/hooded-sweatshirt.jpg',
  9: '/images/formal-shirt.jpg',
  10: '/images/winter-jacket.jpg',
  11: '/images/running-shoes.jpg',
  12: '/images/leather-boots.jpg',
  13: '/images/casual-sneakers.jpg',
  14: '/images/flip-flops.jpg',
  15: '/images/trail-hiking-shoes.jpg',
};

function renderStars(rating) {
  return [1, 2, 3, 4, 5].map((star) => {
    const type = rating >= star ? 'full' : rating >= star - 0.5 ? 'half' : 'empty';
    return (
      <span key={star} className={`star star-${type}`} aria-hidden="true">
        {type === 'empty' ? '☆' : '★'}
      </span>
    );
  });
}

export default function ProductCard({ product }) {
  const image = PRODUCT_IMAGES[product.id] || product.image;

  return (
    <div className="card">
      <img className="card-image" src={image} alt={product.name} loading="lazy" />
      <div className="card-body">
        <span className="price">₹{product.price.toLocaleString('en-IN')}</span>
        <span className="stars" title={`${product.rating} out of 5`} aria-label={`${product.rating} out of 5 stars`}>
          {renderStars(product.rating)}
          <small>({product.rating})</small>
        </span>
        <h4>{product.name}</h4>
      </div>
    </div>
  );
}
