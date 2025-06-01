// ========================================
// click handler

const clickHandler = () => {
  alert("clicked-2");
};

// ----------------------------------------
// this

const changeBColor = (x) => {
  x.style.backgroundColor = "red";
  x.innerText = x.style.backgroundColor;
};
// --------------------

const target = document.getElementById("t3.5");

function changeBColor2() {
  target.style.backgroundColor = "red";
  target.innerText = target.style.backgroundColor;
}

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
// dar ein code dar dore avval, shart bargharar nist! va esle ejra mishavad.
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
// add-Class

const target8 = document.getElementsByClassName("t8")[0];

function toggleShow8() {
  alert(target8.classList);
  target8.classList.add("active");
}
// --------------------

const target9 = document.getElementsByClassName("t9")[0];

function toggleShow9() {
  target9.innerText = target9.classList;
  target9.classList.add("active");
}

// ----------------------------------------
// remove-Class

const target10 = document.getElementsByClassName("t10")[0];

function toggleShow10() {
  target10.classList.remove("active");
}
// ----------------------------------------
// toggle (add or remove)

const target11 = document.getElementsByClassName("t11")[0];

function toggleShow11() {
  if (target11.classList.contains("active")) {
    target11.classList.remove("active");
  } else {
    target11.classList.add("active");
  }
}
// --------------------

const target12 = document.getElementsByClassName("t12")[0];

function toggleShow12() {
  target12.classList.toggle("active");
}
// ----------------------------------------
// get-attribute

const target13 = document.getElementById("t13");

function toggleShow13() {
  target13.innerText = target13.getAttribute("id");
  target13.innerText += " / " + target13.getAttribute("style");
  target13.innerText += " / " + target13.getAttribute("class");
}
// --------------------

const target14 = document.getElementsByClassName("t14")[0];

function toggleShow14() {
  let attr = target14.getAttribute("class");
  target14.setAttribute("class", `${attr} active`);
  target14.setAttribute("style", "color: white;");
}

// ----------------------------------------
// addEventListener
// 'raveshe jaigozine onclick'

const target15 = document.getElementById("t15");

target15.addEventListener("click", function () {
  target15.style.backgroundColor = "blue";
  target15.style.color = "white";
});
// --------------------

const btn = document.getElementById("btn16");

btn.addEventListener("click", function () {
  this.style.backgroundColor = "blue";
  this.style.color = "white";
});
// --------------------

const target17 = document.getElementById("t17");
const btn2 = document.getElementById("btn17");

btn2.addEventListener("click", function () {
  target17.style.backgroundColor = "blue";
  target17.style.color = "white";
});
