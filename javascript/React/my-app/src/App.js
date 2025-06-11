// import Product from "./components/Product/Product";

// function App() {
//   return (
//     <div className="container">
//       {/* Hello World 4 */}
//       {/* <Product /> */}
//       <Product title="Book 1" />
//       <Product title="Book 2" />
//       <Product title="Book 3" />
//     </div>
//   );
// }

import ProductList from "./components/ProductList/ProductList";

function App() {
  const products = [
    { id: 1, title: "Book 1" },
    { id: 2, title: "Book 2" },
    { id: 3, title: "Book 3" },
  ];

  return (
    <div className="container">
      <ProductList />
    </div>
  );
}

/*
 hamantor ke gooftim faile index.js, entripoint ma hast, yaeni index.js
 hast ke ejra mishavad va baghie ghsmat haie barname ma ham ejra mishavad,
 pas ma bayad btvanim az component App, dar index.js ham estefade konim,
 iaeni bayad in tabee(App), meghdare khoroojie in fail(App.js) dar nazar gerefte shavad
 */

// pas minevisim:
export default App;
// dar natije az tabe App, ya behtar begim az component App, biroone in fail ham mitavanim azash estfadh konim.

/*
 component App aslitarin component ma hast, pas agar bekhahim component
 digari dashte bashim behtar ast dakhele 'src' yek folder besazim be
  esme 'components' zira teadade in component ha mitone kheili ziad bashe. 
*/
