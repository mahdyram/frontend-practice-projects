// ========================================
// window object

console.log(window); // method ha va properti haye objecte window.
// barkhi method ha: alert, confirm, fetch | barkhi properti ha: document, ...

// chon objecte window besoorate global eijad shode, mitavanim bedoon gozashtane window az properti ha va method hai an estfade konim.
window.console.log("hello");
console.log("hello");

console.log(window.location);
console.log(window.location.pathname); // /javascript/DOM-Events/1-%20Dom.html

console.log(window.navigator);

console.log(window.document);

// ----------------------------------------
// more about document

// in console (temporary):

/*
document
document.documentElement
document.head
document.body  =>  taghire mohtava
document.children

document.body.childNode  =>  everything in body: tags, text-nodes, empty-spaces, coments,...
document.body.children   =>  just tags in body

document.body.children[0]
document.body.children[0].style.backgroundColor = "red"  =>  (inline styles): change inline-style of first element inside body.
document.body.children[0].style.color = "white"
document.body.children[0].innerText = "ali2"

$0.style.background = 'red'  =>  ye ghsmat ro ke inspect kardim.

getComputedStyle(document.body.children[0]).backgroundColor  =>  (computed style): return the final computed-style value.
*/

// --------------------
// in js-file (permanent):

document.body.children[0].style.backgroundColor = "cadetblue";
document.body.children[0].innerText = "ali";

document.body.style.background = "bisque";
setTimeout(() => (document.body.style.background = ""), 1000);

// ========================================
// getting element

// ----------------------------------------
// getElement

document.getElementById("test2").innerText = "ram";
document.getElementById("test2").style.color = "blue";
document.getElementById("test2").style.backgroundColor = "pink";

let t3 = document.getElementById("test3");
t3.style.backgroundColor = "red";

// ----------------------------------------
// getElements(HTMLCollection-array)

let divs = document.getElementsByTagName("div");
divs[3].style.backgroundColor = "green";
divs.item(3).style.color = "white";

let t5 = document.getElementsByTagName("div")[4];
t5.style.color = "white";

let T5 = document.getElementsByTagName("div").namedItem("test5");
T5.style.backgroundColor = "brown";

// --------------------

let t = document.getElementsByClassName("test");
t[0].innerText = "t";
t.item(1).innerText = "T";
t.namedItem("test8").innerText = "Tt";

// or:

for (let elm of t) {
  elm.innerText += "-Class";
  elm.style.color = "blue";
}
// dar in halat, yek array barmigardanad az anasore an class ya tag
// pas niaz be halghe for darim.

// ----------------------------------------
// querySelector

document.querySelector("#test10").style.color = "white";

// --------------------

let par = document.querySelector("p");
par.style.backgroundColor = "red";

let t0 = document.querySelector(".test1");
t0.style.backgroundColor = "blue";

// hamantor ke maeloom ast arraye nemigirad va serfan avvalin onsor ba ein moshakhasat ra migirad.

// --------------------
// All (NodeList)

let pars = document.querySelectorAll("p");
pars[1].style.backgroundColor = "red";

// or:

for (let elm of pars) {
  elm.innerText += " |$";
  elm.style.color = "white";
}

// --------------------

document.querySelector("#list1").style.listStyleType = "square";

document.querySelectorAll("#list1>li").forEach((item, index) => {
  item.innerText += ` - 0${index + 1}`;
});

const lItems = document.querySelectorAll(".lItem");
for (let i of lItems) {
  i.style.color = "red";
}

// ========================================
// creating element

let ul1 = document.querySelector("#list1");

const newLi1 = document.createElement("li");

ul1.appendChild(newLi1);

// --------------------

const newLi2 = document.createElement("li");
newLi2.innerText = "Item - 05";
ul1.appendChild(newLi2);

// --------------------

const newLi3 = document.createElement("li");
ul1.appendChild(newLi3);
newLi3.innerText = "- ";
newLi3.appendChild(document.createTextNode("Item - 006")); // yek gere matni misazad va be onsor ezaf mikonad, agar mohtavai ghabli dashte bashad hefz mishavad.
newLi3.innerText = "Item - 06"; // mohtavaye matni onsor ra pak mikonad va in matn ra jaigozin mikonad.
newLi3.setAttribute("class", "lItem");

// --------------------

const lItems2 = document.querySelectorAll(".lItem");
for (let i of lItems2) {
  i.style.color = "blue";
}

// --------------------

const newLi4 = document.createElement("li");
newLi4.innerText = "Item - <6>";
// ul1.replaceChild(newLi4, newLi3);

// ========================================
// edame dastresi be elements

console.log("-".repeat(40));
ul1 = document.querySelector("#list1");
console.log(ul1); // in console:
console.log(ul1.childNodes); // NodeList(10)
console.log(ul1.children); // HTMLCollection(6)

console.log(ul1[0]); // undefined => zira ma yek sheie ra gerefte eim, moshakhas ast ke az All ham estefade nakarde eim.
console.log(ul1.children[0]); // <li>...</li>
console.log(ul1.children[0].innerHTML); // Item - 01

console.log(ul1.firstElementChild); // <li>1</li>
console.log(ul1.lastElementChild); // <li>6</li>
console.log(ul1.childElementCount); // 6

// --------------------

console.log("-".repeat(40));
console.log(document.body.childNodes[29].innerHTML); // with tags
console.log(document.body.childNodes[29].innerText); // just text
console.log(document.body.childNodes[29].textContent); // text with spaces

// --------------------

console.log("-".repeat(40));
const li2 = document.querySelectorAll("#list1 li")[1];
console.log(li2); // <li> 2 </li>
console.log(li2.previousElementSibling); // <li> 1 </li>
console.log(li2.nextElementSibling); // <li> 3 </li>
console.log(li2.parentElement); // <ul>...</ul>
console.log(li2.parentElement.parentElement); // <body>...</body>

// --------------------

console.log("-".repeat(40));
console.log(document.querySelector("#list1"));
// li2.remove()
// ul1.children[1].remove()
