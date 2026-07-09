// Master product inventory. All filtering/sorting happens server-side against this array.
const products = [
  { id: 1,  name: 'Wireless Headphones',   category: 'Electronics', price: 2999, rating: 4.5, image: 'https://placehold.co/200x200?text=Headphones' },
  { id: 2,  name: 'Smartphone X200',       category: 'Electronics', price: 24999, rating: 4.8, image: 'https://placehold.co/200x200?text=Smartphone' },
  { id: 3,  name: 'Bluetooth Speaker',     category: 'Electronics', price: 1499, rating: 3.9, image: 'https://placehold.co/200x200?text=Speaker' },
  { id: 4,  name: 'Smart Watch',           category: 'Electronics', price: 4999, rating: 4.2, image: 'https://placehold.co/200x200?text=Watch' },
  { id: 5,  name: 'USB-C Charger',         category: 'Electronics', price: 799,  rating: 3.5, image: 'https://placehold.co/200x200?text=Charger' },
  { id: 6,  name: 'Cotton T-Shirt',        category: 'Apparel',     price: 499,  rating: 4.0, image: 'https://placehold.co/200x200?text=T-Shirt' },
  { id: 7,  name: 'Denim Jeans',           category: 'Apparel',     price: 1299, rating: 4.3, image: 'https://placehold.co/200x200?text=Jeans' },
  { id: 8,  name: 'Hooded Sweatshirt',     category: 'Apparel',     price: 999,  rating: 3.8, image: 'https://placehold.co/200x200?text=Hoodie' },
  { id: 9,  name: 'Formal Shirt',          category: 'Apparel',     price: 899,  rating: 4.1, image: 'https://placehold.co/200x200?text=Shirt' },
  { id: 10, name: 'Winter Jacket',         category: 'Apparel',     price: 2499, rating: 4.6, image: 'https://placehold.co/200x200?text=Jacket' },
  { id: 11, name: 'Running Shoes',         category: 'Footwear',    price: 1999, rating: 4.4, image: 'https://placehold.co/200x200?text=Runners' },
  { id: 12, name: 'Leather Boots',         category: 'Footwear',    price: 3499, rating: 4.7, image: 'https://placehold.co/200x200?text=Boots' },
  { id: 13, name: 'Casual Sneakers',       category: 'Footwear',    price: 1499, rating: 4.0, image: 'https://placehold.co/200x200?text=Sneakers' },
  { id: 14, name: 'Flip Flops',            category: 'Footwear',    price: 299,  rating: 3.2, image: 'https://placehold.co/200x200?text=FlipFlops' },
  { id: 15, name: 'Trail Hiking Shoes',    category: 'Footwear',    price: 2799, rating: 4.5, image: 'https://placehold.co/200x200?text=Hiking' },
];

module.exports = products;
