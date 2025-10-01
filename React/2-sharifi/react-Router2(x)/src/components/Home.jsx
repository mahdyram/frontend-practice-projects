import { Link } from "react-router-dom";

export default function Home() {
  let productList = [
    {
      id: 1,
      name: "Classic Jacket",
      price: 50,
      img: "https://images-cdn.ubuy.co.in/65a92b391ffd8a68a7381298-crysully-men-39-s-bomber-jacket-fall.jpg",
    },
    {
      id: 2,
      name: "Stylish Shoes",
      price: 70,
      img: "https://photos6.shoes.fr/photos/242/24278737/24278737_1200_A.jpg",
    },
    {
      id: 3,
      name: "Trendy Bag",
      price: 30,
      img: "https://www.aprica.com.ph/cdn/shop/products/ssdd.zone-1600156806-AP2040403_Nano_Smart_Stroller_Bag_02.png?v=1601517850",
    },
  ];

  return (
    <div className="product-container">
      {productList.map(({ id, name, price, img }) => (
        <div className="product-card" key={id}>
          <img src={img} alt={name} />
          <p>{price}$</p>
          <Link to={`/productdetail/${id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}
