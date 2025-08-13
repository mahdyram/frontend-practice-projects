export default function Product({ id, name, price, img, children }) {
  return (
    <div className="product-card">
      <img src={img} alt={name} />
      <p>{price}$</p>
      <p>{item.description}</p>
      <Link to="/">View Details</Link>
    </div>
  );
}
