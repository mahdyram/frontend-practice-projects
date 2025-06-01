// ========================================
// in console (temporary):

/*
document
document.children
document.head
document.body  =>  taghire mohtava
document.body.children
document.body.children[0]

document.body.children[0].style.backgroundColor = "red"  =>  (inline styles): change inline-style of first element inside body.
document.body.children[0].innerText = "ali"
document.body.children[0].style.color = "white"
$0.style.background = 'red'  =>  ye ghsmat ro ke inspect kardim.

getComputedStyle(document.body.children[0]).backgroundColor  =>  (computed style): return the final computed-style value.
*/

// ========================================
// in js-file (permanent):

document.body.children[0].style.backgroundColor = "cadetblue";
document.body.children[0].innerText = "ali";

document.body.style.background = "bisque";
setTimeout(() => (document.body.style.background = ""), 1000);

// ----------------------------------------
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

document.querySelector("#list1").style.color = "red";

document.querySelectorAll("#list1>li").forEach((item, index) => {
  item.innerText += ` - 0${index + 1}`;
});
