import { useState } from "react";
import { Button, Card, Col, Row, Spin } from "antd";
const { Meta } = Card;

export default function A7() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // async function getData(url) {
  //   const res = await fetch(url);
  //   if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  //   const data = await res.json();
  //   return data;
  // }

  // async function handleLoadProducts() {
  //   setLoading(true);
  //   setError(null);

  //   try {
  //     const data = await getData("https://dummyjson.com/products?limit=0");
  //     const shuffled = [...data.products].sort(() => Math.random() - 0.5);
  //     setProducts(shuffled.slice(0, 18));
  //   } catch (err) {
  //     setError(err.message);
  //     console.error("Failed to load products:", err);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  async function handleLoadProducts() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://dummyjson.com/products?limit=0");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      const shuffled = [...data.products].sort(() => Math.random() - 0.5);
      setProducts(shuffled.slice(0, 18));
    } catch (err) {
      setError(err.message);
      console.error("Failed to load products:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Button type="dashed" onClick={handleLoadProducts} loading={loading}>
        {loading ? "Loading..." : "Load Products"}
      </Button>

      {!products.length && !loading && !error && <p>No products loaded</p>}

      {loading && (
        <div>
          <p style={{ display: "inline" }}>Loading </p>
          <Spin size="small" />
        </div>
      )}

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <ProductsList products={products} />
      <hr className="hr1" />
    </div>
  );
}

function ProductsList({ products }) {
  return (
    <Row gutter={[14, 14]} style={{ padding: 20, marginTop: 10 }}>
      {products.map((product) => (
        <Col key={product.id} xs={24} sm={12} md={6} lg={4}>
          <ProductCard {...product} />
        </Col>
      ))}
    </Row>
  );
}

function ProductCard({ title, sku, thumbnail }) {
  return (
    <Card hoverable cover={<img alt={title} src={thumbnail} />}>
      <Meta title={title} description={sku} />
    </Card>
  );
}
