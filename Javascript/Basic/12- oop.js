// =======================================
// OOP

/*
Animal => property = [color, weight, innerHeight, name]
dog => gray, 50kg, 70cm, dogy
*/

// Object-Literal:
let dog = {
  animalColor: "gray",
  animalWeight: 50,
  animalHeight: 70,
  animalName: "dogy",
};
console.log(dog);
console.log(dog.animalColor);

// --------------------
// Constructor-Function:

function Animal(color, weight, height, name) {
  this.animalColor = color;
  this.animalWeight = weight;
  this.animalHeight = height;
  this.animalName = name;
}
let lion = new Animal("yello", 120, 120, "liony");
console.log(lion);

// --------------------
// Class-(new-ES6):

class Animal {
  constructor() {
    this.animalColor = "yello";
    this.animalWeight = 120;
    this.animalHeight = 120;
    this.animalName = "liony";
  }
}
let lion = new Animal();
console.log(lion);

class Animal {
  constructor(color, weight, height, name) {
    this.animalColor = color;
    this.animalWeight = weight;
    this.animalHeight = height;
    this.animalName = name;
    this.animalS = "mahdi";
  }
}
let lion = new Animal("yello", 120, 120, "liony");
console.log(lion);

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

new User(); // constructor is running...

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

class User {
  constructor(fN, lN) {
    this.firstName = fN;
    this.lastName = lN;
    this.test1 = "test one";
    this.test2 = () =>
      `first-name is ${this.firstName} and last-name is ${this.lastName}`;
  }
}

let u1 = new User("ali", "ram");
console.log(u1);

console.log(u1.lastName); // ram
console.log(u1.test1); // test1
console.log(u1.test2()); // first-name is ali and last-name is ram (Arrow Function in Constructor)

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

// --------------------

class User {
  #name;
  #family;
  constructor(name, family) {
    this.#name = name;
    this.#family = family;
  }

  get name() {
    return this.#name;
  }
  set name(newName) {
    this.#name = newName;
  }

  get family() {
    return this.#family;
  }
  set family(newFamily) {
    this.#family = newFamily;
  }
}

let u1 = new User("ali", "ram");
console.log(u1); // User {}

console.log(u1.name); // ali
console.log(u1.family); // ram

u1.name = "reza";
u1.family = "rahimi";
console.log(u1.name); // reza
console.log(u1.family); // rahimi

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

const u1 = new User();
u1.sayHi(); // TypeError: u2.sayHi is not a function

// ========================================
// inhertance

class User {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }

  sayHi() {
    return `Hello ${this.fName}`;
  }
}

// DRY  =>  don't repeat yourself

class Student extends User {}

let s1 = new Student("ali", "ram");

console.log(s1); // Student { fName: 'ali', lName: 'ram' }
console.log(s1.lName); // ram
console.log(s1.sayHi()); // Hello ali

// ----------------------------------------
// constructor

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
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
    super();
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
  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.lastName = lastName;
  }

  get firstName() {
    return this.#firstName;
  }
  set firstName(newFirstName) {
    this.#firstName = newFirstName;
  }
}

class Student extends User {
  constructor(firstName, lastName, studentId) {
    super(firstName, lastName);
    this.studentId = studentId;
  }
}

let s1 = new Student("ali", "ram", 2716);

console.log(s1); // Student { lastName: 'ram', studentId: 2716 }

console.log(s1.firstName); // ali
console.log(s1.lastName); // ram

s1.firstName = "reza";
console.log(s1.firstName); // reza

// ========================================
// prototypes

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

console.log(Student); // see in console
console.log(Student.prototype); // see in console

Student.prototype.methodTest = () => {
  return "build method test with prototype";
};
console.log(s1.methodTest()); // build method test with prototype

Student.prototype.propertiTest = "build properti test with prototype";
console.log(s1.propertiTest); // build properti test with prototype

console.log(Student); // see in console
console.log(Student.prototype); // see in console

// ----------------------------------------
// Array object

console.log(Array.prototype); // see in console

let arr1 = new Array();
arr1.push(3, 5, 7);
console.log(arr1.reverse()); // [ 7, 5, 3 ]

// --------------------
// change method:

Array.prototype.reverse = () => {
  return "Reverse";
};
console.log(arr1.reverse()); // Reverse

// --------------------
// add method:

Array.prototype.test = () => {
  return "build new method for array";
};
console.log(arr1.test()); // build new method for array

// ----------------------------------------
// "this" in arrow-function vs in normal-function

Array.prototype.test = () => {
  return this;
};

let arr2 = [2, 4, 5, 6, 9];
console.log(arr2.test()); // {}

// --------------------

Array.prototype.test = function () {
  return this;
};

let arr3 = [2, 4, 5, 6, 9];
console.log(arr3.test()); // [ 2, 4, 5, 6, 9 ]

// dar natije behtar ast hengam kar ba prototype, az function-expression estefade shavad.

// ----------------------------------------
// practice

Array.prototype.sum = function () {
  let total = 0;
  arr4.forEach((i) => (total += i));
  return total;
};
let arr4 = [2, 4, 5, 6, 9];
console.log(arr4.sum()); // 26

// --------------------
// halate omomi ke baraye har array kar mikonad na fagha arr4:

Array.prototype.sum = function () {
  let total = 0;
  this.forEach((i) => (total += i));
  return total;
};

let arr5 = [2, 4, 5, 6, 9];
console.log(arr5.sum()); // 26

// ========================================
// Class-Method vs Function-in-Constructor

// --------------------
// normal-method in prototype
/*
features:
- 'sayHello' dar 'prototype' zakhire mishavad => masrafe hafeze kamtar.
- tamame ashiae sakhte shode az 'User' be yek noskhe moshtarak az 'sayHello' dastresi darand.
- 'this' bastegi be nahve seda zadan darad va momken ast eshtebah shavad.

User {name: 'ali'}
  name: "ali"
  [[Prototype]]: Object
    constructor: class User
    sayHello: ƒ sayHello()
    [[Prototype]]: Object
*/

class User {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, ${this.name}`);
  }
}

let u1 = new User("ali");
console.log(u1);

// --------------------
// arrow-function in field
/*
features:
- 'sayHello' dakhele khode 'instance' sakhte mishavad na 'prototype' -> masrafe hafeze bishtar (chon har instance, tabe khodash ra darad).
- dar natije har sheie yek noskhe mostaghel az in tabe khahad dasht.
- 'this' hamishe dorost be khode sheie eshare mikonad (hatta agar be onvane 'callback' seda zade shavad).

User {name: 'ali', sayHello: ƒ}
  name: "ali"
  sayHello: () => { console.log(`Hello, ${this.name}`); }
  [[Prototype]]: Object
    constructor: class User
    [[Prototype]]: Object
*/

class User {
  constructor(name) {
    this.name = name;
  }

  sayHello = () => {
    console.log(`Hello, ${this.name}`);
  };
}

let u1 = new User("ali");
console.log(u1);

// --------------------
// Function in Constructor

/*
features:
- dar har nemoone besoorate jodagane sakhte mishavad -> masrafe bishtare hafeze.
- vaghti tabe mamooli dar 'constructor' be yek 'property' nesbat dade shavad, 'this' daroon an be shey’e fe’eli (User instance) eshare mikonad, chun tabe ba seda zadan mesle u.sayHello() ejra mishavad.
- agar bekhahim tabe mamooli ra joda-gane be onvane 'callback' ersal konim (masalan be setTimeout) va seda bezanim, momken ast 'this' gom shavad va be shey’e eshtebah eshare konad (magar inke an ra 'bind' konim).

User {name: 'ali', sayHello: ƒ}
  name: "ali"
  sayHello: f ()
  [[Prototype]]: Object
    constructor: class User
    [[Prototype]]: Object
*/

class User {
  constructor(name) {
    this.name = name;
    this.sayHello = function () {
      console.log(`Hello, ${this.name}`);
    };
  }
}

let u1 = new User("ali");
console.log(u1);

// --------------------
// Arrow-Function in Constructor

/*
features:
- dar har nemoone besoorate jodagane sakhte mishavad -> masrafe bishtare hafeze.
- arrow-function 'this' ra az mohite birooni (ya’ni khode constructor) migirad => pas 'this.name' hamishe be 'name' haman shey’e eshare darad, hatta agar 'sayHello' be onvane 'callback' ya jodagane farakhani shavad.
- 'this' hamishe be sheie fe'eli eshare darad -> monaseb baraye 'callback' ha (masalan dar 'event' ha).
- 'this' ghabele taghir nist va be 'instance' feli ghofl shode => monaseb baraye mavagheei ke mikhahim method hatman 'this' ra hefz konad.

User {name: 'ali', sayHello: ƒ}
  name: "ali"
  sayHello: () => { console.log(`Hello, ${this.name}`); }
  [[Prototype]]: Object
    constructor: class User
    [[Prototype]]: Object
*/

class User {
  constructor(name) {
    this.name = name;
    this.sayHello = () => {
      console.log(`Hello, ${this.name}`);
    };
  }
}

let u1 = new User("ali");
console.log(u1);

// ----------------------------------------
// kodoom ravash behtare?

/*
🎖️ behtarin entekhab dar bishtar movaghe':

🥇: 1️⃣ => ravesh aval - tarif metode mamooli dar class (dar prototype)
dalael:
hafezeh kamtari masraf mikone chon metode too prototype zakhire mishe va beyn tamame namooneha moshtareke.
baraye metodhayi ke niazi be bind kardan this nadaran (yani gharar nist be onvane callback joda-gane estefade beshan), ideal-e.

🥈: 2️⃣,4️⃣ => ravesh dovvom (arrow dar class) ya ravesh chaharom (arrow dar constructor):
baraye movaghei khobe ke (olaviat ba dovvom):
gharare metode ro be onvane callback estefade koni (masalan too rooydad ya timer).
mikhay this hamishe be instance fe'li eshare kone va gom nashe.

⚠️: 3️⃣ => ravesh sevom (tabe mamooli dakhele constructor):
behtare azash parhiz beshe chon:
too har instance ye kopi jadid az metode sakhte mishe (masraf hafeze bishtar).
this momkene dar callback gom beshe va niaze be bind dare.

✅ natije:
- agar metode faghat ye amal kard sade dare va gharar nist joda az shay seda zade bashe → ravesh classic (prototype) behtarine.
- agar metode gharare be onvane callback ya dar context joda estefade beshe → arrow function monaseb-e.
*/
