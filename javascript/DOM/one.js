// ========================================
// window object

console.log(window); // method ha va properti hai objecte window.
// barkhi method ha: alert, confirm, fetch | barkhi properti ha: document, ...

window.console.log("hello");
// chon objecte window besoorate global eijad shode, mitavanim bedoon gozashtane window. az properti ha va method hai oon estfade konim.
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
document.body.children[0].innerText = "ali"
document.body.children[0].style.color = "white"
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

// getElement

document.getElementById("test2").innerText = "ram";
document.getElementById("test2").style.color = "blue";
document.getElementById("test2").style.backgroundColor = "pink";

let t3 = document.getElementById("test3");
t3.style.backgroundColor = "red";

// --------------------
// getElements(array)

let d = document.getElementsByTagName("div");
d[3].style.backgroundColor = "green";
d.item(3).style.color = "white";

let t5 = document.getElementsByTagName("div").namedItem("test5");
t5.style.backgroundColor = "brown";

// --------------------

let t = document.getElementsByClassName("test");
t[0].innerText = "t";
t.item(1).innerText = "T";
t.namedItem("test8").innerText = "tT";
// or:
for (elm of t) {
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
// All

let pars = document.querySelectorAll("p");
pars[1].style.backgroundColor = "red";
// or:
for (elm of pars) {
  elm.innerText += " |$";
  elm.style.color = "white";
}

let t1s = document.querySelectorAll(".test1");
for (elm of t1s) {
  elm.style.color = "red";
}

// --------------------

document.querySelector("#list1").style.listStyleType = "square";

document.querySelectorAll("#list1>li").forEach((item, index) => {
  item.innerText += ` - 0${index + 1}`;
});

const lItems = document.querySelectorAll(".lItem");
for (i of lItems) {
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
newLi3.innerText = "Item - 06";
newLi3.setAttribute("class", "lItem");
ul1.appendChild(newLi3);

// --------------------

const lItems2 = document.querySelectorAll(".lItem");
for (i of lItems2) {
  i.style.color = "blue";
}
// ----------------------------------------

ul1 = document.querySelector("#list1");
console.log(ul1.childNodes); // in console:

console.log(document.body.childNodes[29].innerHTML); // with tags
console.log(document.body.childNodes[29].innerText); // just text
console.log(document.body.childNodes[29].textContent); // text with spaces

const li2 = document.querySelector("#li2");
console.log(li2);
console.log(li2.previousElementSibling);
console.log(li2.nextElementSibling);
