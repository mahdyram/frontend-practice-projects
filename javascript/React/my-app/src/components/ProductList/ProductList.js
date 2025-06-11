// vaghti barname varede scale bozorg shod, manteghist ke dar pooshe
// components, baraye har joft component(js, css), yek pooshe dorost konim.



const ProductList = () => {
  return (
    <div>
      {products.map((i) => {
        return <p key={i.id}>{i.title}</p>;
      })}
    </div>
  );
};

export default ProductList;
