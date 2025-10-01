import { Link, useParams } from "react-router-dom";

export default function ProductDetail() {
  const param = useParams();

  let productList = [
    {
      id: 1,
      price: 50,
      name: "Classic Jacket",
      description: "detail for this product",
      img: "https://images-cdn.ubuy.co.in/65a92b391ffd8a68a7381298-crysully-men-39-s-bomber-jacket-fall.jpg",
    },
    {
      id: 2,
      price: 70,
      name: "Stylish Shoes",
      description: "detail for this product",
      img: "https://photos6.shoes.fr/photos/242/24278737/24278737_1200_A.jpg",
    },
    {
      id: 3,
      price: 30,
      name: "Trendy Bag",
      description: "detail for this product",
      img: "https://www.aprica.com.ph/cdn/shop/products/ssdd.zone-1600156806-AP2040403_Nano_Smart_Stroller_Bag_02.png?v=1601517850",
    },
  ];

  const { id, price, name, description, img } = productList.find(
    (pr) => pr.id == param.id
  );

  return (
    <div className="product-container">
      <div className="product-card-detail" key={id}>
        <img src={img} alt={name} />
        <p>{price}$</p>
        <p>{description}</p>
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
}
