// ========================================
// Arithmetic Operators

let num = 5;
num = num + 1;
console.log(num); // 6

let num2 = 5;
num2++;
console.log(num2); // 6

let num3 = 5;
num3--;
console.log(num3); // 4

// --------------------
// ++ & --

let num4 = 5;
let result4 = num4++;
console.log(result4, num4); // 5 6   avval num4 ro mirize to result4 va ba'd num4 ra yeki ezaf mikonad.

let num5 = 5;
let result5 = ++num5;
console.log(result5, num5); // 6 6   avval num4 ra yeki ezaf mikonad va ba'd num4 ro mirize to result4.

let counter2 = 5;
console.log(counter2++); // 5
console.log(counter2); // 6

let counter1 = 5;
console.log(++counter1); // 6
console.log(counter1); // 6

let x = 5;
console.log(3 * x--); // 15
console.log(x); // 4

let y = 5;
console.log(3 * --y); // 12
console.log(y); // 4

// --------------------
// ?=

let nr = 7;
nr = nr + 4;
console.log(nr); // 11

let nr2 = 7;
nr2 += 4;
console.log(nr2); // 11

let nr3 = 7;
nr3 *= 4;
console.log(nr3); // 28

let n = 2;
n *= 3 + 5; //
console.log(n); // 16

// --------------------
// =

let a = 1;
let b = 3;

let c = 9 - (a = b + 2);

console.log(a); // 5
console.log(c); // 4

// --------------------

let a, b, c;

a = b = c = 2 + 2;

console.log(a, b, c);

// better:

let a, b, c;

c = 2 + 2;
b = c;
a = c;

console.log(a, b, c);

// --------------------
// ,

let a = (3, 7);
console.log(a); // 7

let b = (7, 3);
console.log(b); // 3

let c = (1 + 2, 3 + 4);
console.log(c); // 7

let r,
  s = (3, 7);
console.log(r, s); // undefined 7

let a, b, c;
(a = 1), (b = 3), (c = a * b);
console.log(a, b, c);

let a = 1,
  b = 3,
  c = a * b;
console.log(a, b, c);

// ========================================
// Comparison Operators

// dar amalgar == (moghayese-ye sost), agar do taraf az noe mokhtalef bashand, ebtedaa tabdil noe (type coercion) anjam mishavad.
// dar bishtari az mavared, har do taraf be number tabdil mishavand.
// albate agar har do taraf string bashand, moghayese be sorat harfi anjam mishavad va tabdili anjam nemishavad.

console.log(Number(false)); // 0
console.log(Number("")); // 0
console.log(0 == false); // true
console.log("" == false); // true

console.log("21" > 7); // true
console.log("21" > "7"); // false  =>  "7" az "2" dar loghat jaigah bozorgtari darad.
console.log("01" == 1); // true
console.log(true == 1); // true
console.log(false == 0); // true

// --------------------

let a = 0;
console.log(Boolean(a)); // false
console.log(Number(a)); // 0

let b = "0";
console.log(Boolean(b)); // true
console.log(Number(b)); // 0

console.log(a == b); // true  =>  chon tabegh-e gavanin-e rasmi-ye moghayese-ye sost (==) dar JavaScript, vaghti ye taraf number bashe va taraf-e digar string, string be number tabdil mishe — na baraks.

// --------------------
// amma dar operatpre ===, barabari ra bedone tabdile type moghaiese mikonad.

console.log("" == false); // true
console.log(0 == false); // true
console.log(3 == "3"); // true

console.log("" === false); // false
console.log(0 === false); // false
console.log(3 === "3"); // false

// --------------------

console.log(5 != 5); // false

console.log(5 != "5"); // false

console.log(5 !== "5"); // true

// --------------------
// estesna dar ==: amalgare ==, undefined va null ra ba ham barabar va anhara ba har meghdare digari nabarabar migirad.

console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0

console.log(undefined == null); // true
console.log(0 == null); // false
console.log(undefined == NaN); // false

console.log(undefined === null); // false

// --------------------
// > < in string

console.log("2" > "12"); // true  =>  dar loghat, "2" bozorgtar az "1" ast.
console.log("a" > "A"); // true
console.log("a" > "Z"); // true
console.log("Z" > "A"); // true
console.log("Glow" > "Glee"); // true
console.log("Bee" > "Be"); // true

// ========================================
// Logical Operators  =>  agar amalvandi bolean nabashad, braye arzyabi be bolean tabdil mishavad.

// "||" Or

console.log(false || true); // true
console.log(0 || 3); // 3
console.log("" || "e"); // e

// --------------------
// '||' avalin meghdare truthy ra peydamikonad (agar nabood, akharin meghdar ra barmigardanad).

console.log(0 || 1); // 1 (1 is truthy)
console.log(1 || 0); // 1 (1 is truthy)
console.log(1 || 3); // 1  (1 is the first truthy value)
console.log(null || 1); // 1 (1 is the first truthy value)
console.log(null || 0 || 1); // 1 (the first truthy value)
console.log(undefined || null || 0); // 0 (all falsy, returns the last value)

// --------------------

true || console.log("dont print");
false || console.log("print"); // print

let x = 3;
if (x > 0) console.log("larger than zero");

let x2 = 3;
x2 <= 0 || console.log("larger than zero");

// --------------------

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
console.log(firstName || lastName || nickName || "Anonymous"); // SuperCoder

let firstName = "";
let lastName = "";
let nickName = "";
console.log(firstName || lastName || nickName || "Anonymous"); // Anonymous

// ----------------------------------------
// "&&" And

console.log(false && true); // false
console.log(0 && 3); // 0
console.log("" && "e"); // ''

// --------------------
// '&&' avalin meghdare falsy ra peydamikonad (agar nabood, akharin meghdar ra barmigardanad).

console.log(1 && 0); // 0
console.log(0 && "a"); // 0
console.log(0 && null); // 0
console.log("q" && null && 5); // null
console.log("q" && 5 && ""); // ""
console.log(1 && "w" && 5); // 5

// --------------------

let x = 3;
if (x > 0) console.log("larger than zero");

let x2 = 3;
x2 > 0 && console.log("larger than zero");

// --------------------

let firstName = "ali";
let lastName = "ram";
let nickName = "SuperCoder";
let result = firstName && lastName && nickName && "everyItemFill";
result === "" ? console.log("existEmptiItem") : console.log(result);

let firstName = "ali";
let lastName = "";
let nickName = "SuperCoder";
let result = firstName && lastName && nickName && "EveryItemFill";
result === "" ? console.log("existEmptiItem") : console.log(result);

// --------------------

// olaviate and-&& az or-|| bishtar ast.
// a && b || c && d == (a && b) || (c && d).

// ----------------------------------------

console.log(true & false); // 0
console.log(true && false); // false

console.log(true | false); // 1
console.log(true || false); // true

// ----------------------------------------
// "!" Not

console.log(!true); // false
console.log(!3); // false

console.log(!0); // true
console.log(!""); // true

// --------------------
// '!!' baraye tabdil kardan be bolean.

console.log(!"string"); // false
console.log(!!"string"); // true
console.log(!!null); // false

console.log(Boolean("string")); // true
console.log(Boolean(null)); // false

// ----------------------------------------
// "??" nullish-coalescing

/*
yek ebarat "taerif shodeh" ast, hargah na 'null' bashad va na 'undefined'.

natije 'a ?? b' :
- agar a 'taerif shodeh' bashad, pas a ra barmigardanad
- agar a 'taerif shodeh' nabashad, pas b ra barmigardanad
- ya be ebarati: // '??' avalin meghdare "taerif shodeh" ra peydamikonad (agar nabood, akharin meghdar ra barmigardanad).

result1 === result2 :
- result1 = a ?? b
- result2 = (a !== null && a !== undefined) ? a : b;
*/

let user;
console.log(user ?? "Anonymous"); // Anonymous

let user2 = null;
console.log(user2 ?? "Anonymous"); // Anonymous

let user3 = "ali";
console.log(user3 ?? "Anonymous"); // ali

// --------------------

let firstName = null;
let lastName = null;
let nickName = "Supercoder";
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

let firstName = null;
let lastName = null;
let nickName = "Supercoder";
console.log(firstName || lastName || nickName || "Anonymous"); // Supercoder

// --------------------
// '??' vs '||'

/*
- "||" avvalin meghdare 'truthy' ra barmigardanad.
- "??" avvalin meghdare 'taerif shodeh' ra barmigardanad.

be ebarati '||' tafavote beine false, 0, "", null/undefined ra tashkhis nemidahad
anha hamegi shabihe ham hastand, meghdar haye falsy.

amma momken ast ma faghat donbale null/undefined bashim(ya nabashim)
*/

let height = 0;
console.log(height || 100); // 100
console.log(height ?? 100); // 0

// --------------------

let firstName = null;
let lastName = "";
let nickName = "Supercoder";
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // ""

let firstName = null;
let lastName = "";
let nickName = "Supercoder";
console.log(firstName || lastName || nickName || "Anonymous"); // Supercoder

// --------------------
// olaviat

let height = null;
let width = null;
let area = (height ?? 100) * (width ?? 50);
console.log(area); // 5000

let height = null;
let width = null;
let area = height ?? 100 * width ?? 50; // == height ?? (100 * width) ?? 50;
console.log(area); // 0

// --------------------
// use ?? with || and &&

// let x = 1 && 2 ?? 3; // Syntax error

let x = (1 && 2) ?? 3;
console.log(x); // 2

// ----------------------------------------
// optional chaining "?"

const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
    },
  },
];

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(2);

// console.log(book.reviews.librarything.reviewsCount); // TypeError: Cannot read properties of undefined (reading 'reviewsCount')
console.log(book.reviews.librarything?.reviewsCount); // undefined
console.log(book.reviews.librarything?.reviewsCount + 10); // NaN
console.log((book.reviews.librarything?.reviewsCount ?? 0) + 10); // 10

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}
console.log(getTotalReviewCount(book)); // 812
