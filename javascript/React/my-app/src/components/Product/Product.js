import "./Product.css";

// function Product() {
//   return <div className="product">Products</div>;
// }

// // props:
// function Product(props) {
//   return <div className="product">{props.title}</div>;
// }

// Destructuring:
// function Product({ title }) {
//   return <div className="product">{title}</div>;
// }

function Product({ title }) {
  const titleHandler = () => {
    console.log(`Clicked: ${title}`);
  };

  return (
    <div className="product">
      <div>{title}</div>
      <div>
        <button className="btn" onClick={titleHandler}>
          Title
        </button>
      </div>
    </div>
  );
}

export default Product;
/*
 in khat baraye in ast chon hadafe asli ma in ast ke az 'Product' dakhele
 'App' estefade konim va darnahayat App dakhele 'index.js' farakhani shavad chon 
 entripoint ma index.js ast, index.js ejra mishavad ta barname maham ejra shavad.
*/
