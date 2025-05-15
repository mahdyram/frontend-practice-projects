// ----------------------------------
// constructor function

function Product(title, price) {
  this.titl = title;
  this.pric = price;

  this.productInfo = function () {
    return `Title: ${this.titl} - Price: ${this.pric}`;
  };
}

const product1 = new Product("Book 1", 99);
const product2 = new Product("Book 2", 88);

console.log(product1);
console.log(product1.productInfo()); // Title: Book 1 - Price: 99

// ----------------------------------
// class

class Product2 {
  constructor(title, price) {
    this.titl = title;
    this.pric = price;
  }

  productInfo2() {
    return `Title: ${this.titl} - Price: ${this.pric}`;
  }
}

const product3 = new Product2("Book 3", 77);

console.log(product3);
console.log(product3.productInfo2()); // Title: Book 3 - Price: 77
