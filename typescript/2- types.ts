// ========================================
// Types

// ----------------------------------------
// Object type:

let product; // pishfarz: any

product = {
  id: "p1", // 1
  title: "pen",
  price: 77,
  exist: true,
};
console.log(product);

product = 123;
console.log(product);

// --------------------

let product2: object;

product2 = {
  id: "p1", // 1
  title: "pen",
  price: 77,
  exist: true,
};
console.log(product2);

// product2 = 123  =>  Type 'number' is not assignable to type 'object'.

product2 = {};
console.log(product2);

// --------------------

let product3: {
  id: string | number;
  title: string;
  price: number;
  exist: boolean;
};

product3 = {
  id: "p1", // 1
  title: "pen",
  price: 77,
  exist: true,
};
console.log(product3);

// product3 = 123  =>  Type 'number' is not assignable to type '{ id: string | number; title: string; price: number; exist: boolean; }'.
// product3 = {}  =>  Type '{}' is missing the following properties from type '{ id: string | number; title: string; price: number; exist: boolean; }': id, title, price, exist

// ----------------------------------------
// Array type:

let items; // type: any

items = ["product 1", "product 2", "product 3"];
console.log(items);

items = [1, 2, 3];
console.log(items);

// --------------------

let items2: Array<string>; // type: string[]

items2 = ["product 1", "product 2", "product 3"];
console.log(items2);

// items2 = [1, 2, 3];  =>  Type 'number' is not assignable to type 'string'.

// --------------------

let items3: string[]; // type: string[]

items3 = ["product 1", "product 2", "product 3"];
console.log(items3);

// items2 = [1, 2, 3];  =>  Type 'number' is not assignable to type 'string'.

// --------------------

let items4: (string | number)[]; // type: (string | number)[]
// let items4: Array<string | number>; // type: (string | number)[]

items4 = ["product 1", "product 2", "product 3"];
console.log(items4);

items4 = ["P1", 2, 3];
console.log(items4);

// ----------------------------------------
// Arguman type:

function addProduct(title: string, price: number) {
  const product = title + price; // niazi be taein noe dade product nist, khodesh mifahme ke string hadt.

  console.log(product);
}
addProduct("book", 32);

function addNumbers(num1: number, num2: number) {
  const result = num1 + num2; // niazi be taein noe dade product nist, khodesh mifahme ke string hadt.

  return result;
}
console.log(addNumbers(25, 32));

// --------------------
/*
tabe addProduct chizi be onvane meghdare bazgashti baraye ma nadarad
dar moghabel tabe addNumbers meghdare bazgashti darad

pas bayad baraye tavabe niz type moshakhas konim:
- agar meghdare bazgashti nadarad, undefined ya behtar void
- agar meghdare bazgashti darad, type meghdare bazgashti 
*/

function addProduct2(title: string, price: number): void {
  const product = title + price; // niazi be taein noe dade product nist, khodesh mifahme ke string hadt.

  console.log(product);
}
addProduct2("book", 32);

function addNumbers2(num1: number, num2: number): number {
  const result = num1 + num2; // niazi be taein noe dade product nist, khodesh mifahme ke string hadt.

  return result;
}
console.log(addNumbers2(25, 32));

// ----------------------------------------
// Function type:

// dar js tavabe object hastand, pas mitavanand be onvane parametr haye yek tabe dar nazar gerefte shavand
// dar mesale zir, har user yek meghdare role darad ke in role khodash yek tabe hast, parametr haye in tabe userId va isAdmin, va type in tabe void hast.

function createUser(
  id: number,
  email: string,
  role: (userId: number, isAdmin: boolean) => void
) {
  role(3, true);
}
// --------------------
// mesale kamel:

function createUser2(
  id: number,
  email: string,
  role: (userId: number, isAdmin: boolean) => void
): void {
  console.log(`User created with ID: ${id} and Email: ${email}`);

  const isAdmin = id === 1;
  role(id, isAdmin);
}

// define role func
const checkUserRole = (userId: number, isAdmin: boolean): void => {
  const state = isAdmin ? "admin" : "regular user";
  console.log(`User ${userId} is a ${state}.`);
};

createUser2(1, "admin@example.com", checkUserRole);
createUser2(2, "user@example.com", checkUserRole);

// ----------------------------------------
// Custom type:

// dar mesale zir vghti kalame klidi type ra miavarim, pas az an mosavi be maenaye meghdar dehi nist, balke darim yek type ra asign mikonim be FnType.

type FnType = (userId: number, isAdmin: boolean) => void;

function createUser3(id: number, email: string, role: FnType) {
  role(3, true);
}
// --------------------

type ProductType = number | string;

let prodct: ProductType = 123;
console.log(prodct);

prodct = "abc";
console.log(prodct);

// ----------------------------------------
// Interface:

type Product = {
  id: string | number;
  title: string;
  price: number;
  exist: boolean;
};

let product4: Product = {
  id: "p1",
  title: "pen",
  price: 77,
  exist: true,
};
console.log(product4);

// --------------------
// dar bishtare mavaghe vaghti mikhahim yek type baraye
// yek object taerif konim az interface estefade mikonim.

interface Product2 {
  id: string | number;
  title: string;
  price: number;
  exist: boolean;
}

let product5: Product2 = {
  id: "p1",
  title: "pen",
  price: 77,
  exist: true,
};
console.log(product5);

// --------------------
// type vs interface

interface User {
  email: string;
  pass: number;
}

let user = {
  email: "test@example.com",
  pass: 1234,
};

// maziate interface dar class:

class Auth implements User {
  email: string;
  pass: number;
  userName: string;
}

function login(userInf: User) {}

login(new Auth());

// ----------------------------------------
// merge types:

let userProducts; // type: any

userProducts = {
  products: ["book 1", "book 2"],
  userName: "ali",
};
// --------------------

type CartItems = {
  products: string[];
};

type Usr = {
  userName: string;
};

type UserProducts = CartItems & Usr;

let userProducts2: UserProducts;

userProducts2 = {
  products: ["book 1", "book 2"],
  userName: "ali",
};
// --------------------
// use interface:

interface CartItems2 {
  products: string[];
}

interface Usr2 {
  userName: string;
}

interface UserProducts2 extends CartItems2, Usr2 {}

let userProducts3: UserProducts2;

userProducts3 = {
  products: ["book 1", "book 2"],
  userName: "ali",
};

// ----------------------------------------
// Literal type:

let p1: string;

p1 = "book 1";
console.log(p1);

p1 = "book 2";
console.log(p1);

// --------------------

let p2: "book 1";

p2 = "book 1";
console.log(p2);

// p2 = "book 2";  =>  Type '"book 2"' is not assignable to type '"book 1"'.

// --------------------

let p3: "book 1" | "book 2";

p3 = "book 1";
console.log(p3);

p3 = "book 2";
console.log(p3);

// ----------------------------------------
// Generic type (mesle Array<>):

type Prodct = "book 1" | "book 2";

let cartItm: Array<Prodct>;

cartItm = ["book 1", "book 2"];

// --------------------

type Data<T> = {
  dataType: T[]; // string, number...
};

let text: Data<string> = {
  dataType: ["Text 1", "Text 2"],
};
console.log(text);

// --------------------

type Data2<T> = {
  dataType: T[]; // string, number...
};
type Prod = {
  title: string;
  price: number;
};

const info: Data2<Prod> = {
  dataType: [{ title: "book 1", price: 25 }],
};
console.log(info);
