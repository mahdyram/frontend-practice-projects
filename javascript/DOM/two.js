// ========================================
// click

const clickHandler = () => {
  alert("clicked-2");
};

// ----------------------------------------
// this

const changeBColor1 = (x) => {
  x.style.backgroundColor = "red";
  x.innerText = x.style.backgroundColor;
};
// --------------------

const target = document.getElementById("t3.2");

const changeBColor2 = () => {
  target.style.backgroundColor = "red";
  target.innerText = target.style.backgroundColor;
};
// --------------------

const target4 = document.getElementById("t4");

function toggleShow4() {
  target4.style.backgroundColor = "red";
  target4.innerText = target.style.backgroundColor;
}
// ----------------------------------------
// wrong code

const target5 = document.getElementById("t5");

function toggleShow5() {
  if (target5.style.backgroundColor == "orange") {
    target5.style.backgroundColor = "red";
  } else {
    target5.style.backgroundColor = "orange";
  }
}
// dar in code dar dore avval, shart bargharar nist! va esle ejra mishavad.
// dar natije dore dovvom shart bargharar mishavad.

// --------------------
// correct code

const target6 = document.getElementById("t6");

function toggleShow6() {
  if (getComputedStyle(target6).backgroundColor === "rgb(255, 165, 0)") {
    target6.style.backgroundColor = "red";
  } else {
    target6.style.backgroundColor = "orange";
  }
}
// --------------------

const target7 = document.getElementById("t7");

function toggleShow7() {
  const currentOpacity = getComputedStyle(target7).opacity;
  if (currentOpacity == 0) {
    target7.style.opacity = 1;
  } else {
    target7.style.opacity = 0;
  }
}
// ----------------------------------------
// add-Class (classList)

const target8 = document.getElementsByClassName("tC1")[0];

function toggleShow8() {
  alert(target8.classList);
  target8.classList.add("active");
}
// --------------------

const target9 = document.getElementsByClassName("tC1")[1];

function toggleShow9() {
  target9.innerText = target9.classList;
  target9.classList.add("active");
}
// ----------------------------------------
// remove-Class

const target10 = document.getElementsByClassName("tC2")[0];

function toggleShow10() {
  target10.classList.remove("active");
}
// ----------------------------------------
// toggle (add - remove)

const target11 = document.getElementsByClassName("tC3")[0];

function toggleShow11() {
  if (target11.classList.contains("active")) {
    target11.classList.remove("active");
  } else {
    target11.classList.add("active");
  }
}
// --------------------

const target12 = document.getElementsByClassName("tC3")[1];

function toggleShow12() {
  target12.classList.toggle("active");
}
// ----------------------------------------
// get & set attribute

const target13 = document.getElementById("t13");

function toggleShow13() {
  target13.innerText = target13.getAttribute("id");
  target13.innerText += " / " + target13.getAttribute("class");
  target13.innerText += " / " + target13.getAttribute("style");
}
// --------------------

const target14 = document.getElementsByClassName("t14")[0];

function toggleShow14() {
  let attr = target14.getAttribute("class");
  target14.setAttribute("class", `${attr} active`);
  // target14.classList.add("active");
  target14.setAttribute("style", "color: white;");
}
// ----------------------------------------
// addEventListener (jaigozine onclick)

const target15 = document.getElementById("t15");
function f15() {
  this.style.backgroundColor = "blue";
  this.style.color = "white";
}

target15.addEventListener("click", f15);

// --------------------

const target16 = document.getElementById("t16");

target16.addEventListener("click", function () {
  target16.style.backgroundColor = "blue";
  target16.style.color = "white";
});
// --------------------

const target17 = document.getElementById("t17");
const btn2 = document.getElementById("btn17");

btn2.addEventListener("click", function () {
  target17.style.backgroundColor = "blue";
  target17.style.color = "white";
});
// ----------------------------------------
// onclick in js

let target18 = document.getElementById("t18");

function f18() {
  this.style.backgroundColor = "blue";
  this.style.color = "white";
}

target18.onclick = f18;

// --------------------

let target19 = document.getElementById("t19");
let buttn19 = document.getElementById("btn19");

buttn19.onclick = function () {
  target19.style.backgroundColor = "blue";
  target19.style.color = "white";
};
