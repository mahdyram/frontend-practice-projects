// =======================================
// OOP

/*
Animal => property = [color, weight, innerHeight, name]
dog => gray, 50kg, 70cm, dog
*/

// with Object-Literal:
let dog = {
  animalColor: "gray",
  animalWeight: 50,
  animalHeight: 70,
  animalName: "dog",
};
console.log(dog);

// with Class (new-ES6):
class Animal {
  constructor(color, weight, height, name) {
    this.animalColor = color;
    this.animalWeight = weight;
    this.animalHeight = height;
    this.animalName = name;
  }
}
let lion1 = new Animal("yello", 120, 120, "liony");
console.log(lion1);

// with Constructor-Function (older):
function Animal(color, weight, height, name) {
  this.animalColor = color;
  this.animalWeight = weight;
  this.animalHeight = height;
  this.animalName = name;
}
let lion2 = new Animal("yello", 120, 120, "liony");
console.log(lion2);

// ----------------------------------------
// properties  =>  'mokaab mostatile aabi'

class Dog {
  constructor(color, weight, height, name) {
    this.animalColor = color;
    this.animalWeight = weight;
    this.animalHeight = height;
    this.animalName = name;
  }
}
let dog1 = new Dog("yello", 120, 100, "hapoo");
console.log(dog1);

console.log(dog1.animalColor); // yello
console.log(dog1.animalWeight); // 120
console.log(dog1.animalHeight); // 100
console.log(dog1.animalName); // hapoo

// --------------------

class User {
  constructor(fN, lN) {
    this.firstName = fN;
    this.lastName = lN;
    this.test1 = "test1";
  }

  test2 = "test2";
}

let u1 = new User("ali", "ram");
console.log(u1);

console.log(u1.lastName); // ram
console.log(u1.test1); // test1
console.log(u1.test2); // test2

// --------------------
// private properti

class User {
  #lastName;
  constructor(fN, lN) {
    this.firstName = fN;
    this.#lastName = lN;
  }

  sayFN() {
    return `hello ${this.firstName}`;
  }
  sayLN() {
    return `hello ${this.#lastName}`;
  }
}

let u1 = new User("ali", "ram");
console.log(u1); // User { firstName: 'ali' }

console.log(u1.firstName); // ali
console.log(u1.lastName); // undefined

console.log(u1.sayFN()); // hello ali
console.log(u1.sayLN()); // hello ram

// --------------------
// getter

class User {
  #firstName;
  #lastName;
  constructor(fN, lN) {
    this.#firstName = fN;
    this.#lastName = lN;
  }

  get fName() {
    return this.#firstName;
  }
  get lName() {
    return this.#lastName;
  }
}

let u1 = new User("ali", "ram");
console.log(u1); // User {}

console.log(u1.fName); // ali
console.log(u1.lName); // ram

// --------------------
// setter

class User {
  #firstName;
  #lastName;
  constructor(fN, lN) {
    this.#firstName = fN;
    this.#lastName = lN;
  }

  get fName() {
    return this.#firstName;
  }

  set fName(newFirstName) {
    this.#firstName = newFirstName;
  }

  get lName() {
    return this.#lastName;
  }

  set lName(newLastName) {
    this.#lastName = newLastName;
  }
}

let u1 = new User("ali", "ram");
console.log(u1); // User {}

console.log(u1.fName); // ali
console.log(u1.lName); // ram

u1.fName = "reza";
u1.lName = "rahimi";
console.log(u1.fName); // reza
console.log(u1.lName); // rahimi

// ----------------------------------------
// methods  =>  'mokaab morabbae soorati'

class Dog {
  constructor(color, weight, height, name) {
    this.animalColor = color;
    this.animalWeight = weight;
    this.animalHeight = height;
    this.animalName = name;
  }

  wagh() {
    console.log("waghwagh!");
  }

  tailWagging() {
    return "Tail wagging!";
  }
}
let dog2 = new Dog("brown", 70, 100, "hapoo");
console.log(dog2);

dog2.wagh(); // waghwagh!
console.log(dog2.wagh()); // waghwagh! / undefined

console.log(dog2.tailWagging()); // Tail wagging!

// --------------------

class Product {
  constructor(ti, pr) {
    this.title = ti;
    this.price = pr;
  }

  productInfo() {
    return `Title: ${this.title} - Price: ${this.price}`;
  }
}

const product1 = new Product("Book", 77);

console.log(product1); // Product { title: 'Book', price: 77 }
console.log(product1.productInfo()); // Title: Book 3 - Price: 77

// --------------------
// Instance methods
class User {
  sayHi() {
    console.log("hello");
  }
}

const u1 = new User();
u1.sayHi(); // hello

new User().sayHi(); // hello

User.sayHi(); // TypeError: User.sayHi is not a function

// --------------------
// Static methods

class User {
  static sayHi() {
    console.log("hello");
  }
}

User.sayHi(); // hello

new User().sayHi(); // TypeError: (intermediate value).sayHi is not a function

const u2 = new User();
u2.sayHi(); // TypeError: u2.sayHi is not a function

// ----------------------------------------
// constructor

class User {
  constructor() {
    console.log("constructor is running...");
  }

  sayHi() {
    console.log("hello");
  }
}

let user1 = new User(); // constructor is running...
user1.sayHi(); // hello

// --------------------

class User {
  constructor(fN, lN) {
    this.firstName = fN;
    this.lastName = lN;
  }

  sayHi() {
    return "hello";
  }
}

let user1 = new User(); // nothing
console.log(user1); // User { firstName: undefined, lastName: undefined }

let user2 = new User("ali", "ram"); // nothing
console.log(user2); // User { firstName: 'ali', lastName: 'ram' }

console.log(user2.firstName); // ali
console.log(user2.lastName); // ram
console.log(user2.sayHi()); // hello

// ========================================
// inhertance

class User {
  constructor(fN, lN) {
    this.firstName = fN;
    this.lastName = lN;
  }

  sayHi() {
    return `Hello ${this.firstName}`;
  }
}

// DRY  =>  don't repeat yourself

class Student extends User {}

let s1 = new Student("ali", "ram");

console.log(s1); // Student { firstName: 'ali', lastName: 'ram' }

console.log(s1.lastName); // ram

console.log(s1.sayHi()); // Hello ali

// ----------------------------------------
// constructor

class User {
  constructor(fN, lN) {
    this.firstName = fN;
    this.lastName = lN;
  }

  sayHi() {
    return `Hello ${this.firstName}`;
  }
}

class Student extends User {
  constructor(firstName, lastName, id) {
    super(firstName, lastName);
    this.studentId = id;
  }
}

let s1 = new Student("ali", "ram", 2716);

console.log(s1); // Student { firstName: 'ali', lastName: 'ram', studentId: 2716 }

// --------------------
// super()

class sH {
  sayHi() {
    return `Hello user`;
  }
}

class Student extends sH {
  constructor(id) {
    super(); // neseseri (if delet this line => ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor)
    this.studentId = id;
  }
}

let s1 = new Student(2716);
console.log(s1); // Student { studentId: 2716 }
console.log(s1.sayHi()); // Hello user

// ----------------------------------------
// overwrite-methods

class sH {
  sayHi() {
    return `Hello user`;
  }
}

class Student extends sH {
  constructor(id) {
    super(); // neseseri (if delet this line => ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor)
    this.studentId = id;
  }

  sayHi() {
    return "hello student";
  }
}

let s1 = new Student(2716);
console.log(s1.sayHi()); // Hello student

// ----------------------------------------
// getter & setter

class User {
  #firstName;
  constructor(fN, lN) {
    this.#firstName = fN;
    this.lastName = lN;
  }

  get fName() {
    return this.#firstName;
  }

  set fName(newFirstName) {
    this.#firstName = newFirstName;
  }
}

class Student extends User {
  constructor(fN, lN, id) {
    super(fN, lN);
    this.studentId = id;
  }
}

let s1 = new Student("ali", "ram", 2716);

console.log(s1); // Student { lastName: 'ram', studentId: 2716 }

console.log(s1.firstName); // undefined
console.log(s1.fName); // ali

s1.fName = "reza";
console.log(s1.fName); // reza

// ----------------------------------------
// prototypes =>

/*
taerife prototype:
- dastresi be method ha va properti haye yek sheie va niz eijade tagir dar an
- afzoodane method ya properti be an sheie ya tagire method va properti haye mojood
*/

class User {
  constructor(fN, lN) {
    this.firstName = fN;
    this.lastName = lN;
  }

  sayHi() {
    return `Hello ${this.firstName}`;
  }
}

class Student extends User {
  constructor(firstName, lastName, id) {
    super(firstName, lastName);
    this.studentId = id;
  }

  sayWelcome() {
    return `Welcome ${this.firstName}`;
  }
}

let s1 = new Student("ali", "ram", 2716);

console.log(Student.prototype); // see in console

Student.prototype.methodTest = () => {
  return "build method test with prototype";
};
console.log(s1.methodTest()); // build method test with prototype

Student.prototype.propertiTest = "build properti test with prototype";
console.log(s1.propertiTest); // build properti test with prototype

// --------------------

// let arr = new Array();
console.log(Array.prototype); // see in console

let arr1 = new Array();
arr1.push(3, 5, 7);
console.log(arr1.reverse()); // [ 7, 5, 3 ]

// change method
Array.prototype.reverse = () => {
  return "Reverse";
};
console.log(arr1.reverse()); // Reverse

// add method
Array.prototype.test = () => {
  return "build new method for array";
};
console.log(arr1.test()); // build new method for array

// --------------------
// this in arrow-function vs in normal-function

Array.prototype.sum = () => {
  return this;
};
let arr2 = [2, 4, 5, 6, 9];
console.log(arr2.sum()); // {}

Array.prototype.sum = function () {
  return this;
};
let arr3 = [2, 4, 5, 6, 9];
console.log(arr3.sum()); // [ 2, 4, 5, 6, 9 ]

// dar natije behtar ast hengam kar ba prototype, az function-expression estefade shavad.

// --------------------

Array.prototype.sum = function () {
  let total = 0;
  for (i of arr4) {
    total += i;
  }
  return total;
};
let arr4 = [2, 4, 5, 6, 9];
console.log(arr4.sum()); // 26

// halate omomi ke baraye har array kar mikonad na fagha arr4.
Array.prototype.sum = function () {
  let total = 0;
  for (let i of this) {
    total += i;
  }
  return total;
};

let arr5 = [2, 4, 5, 6, 9];
console.log(arr5.sum()); // 26
