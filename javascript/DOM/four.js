// ========================================
// Window Events

// ----------------------------------------
// load

let target1 = document.getElementById("t1");

window.onload = function () {
  target1.style.backgroundColor = "red";
  target1.textContent = "Page Loaded!";
};
// --------------------
// addEventListener

let target2 = document.getElementById("t2");

window.addEventListener("load", function () {
  target2.style.backgroundColor = "blue";
  target2.textContent = "Page Loaded!";
});
// --------------------

let target3 = document.getElementById("t3");

window.addEventListener("DOMContentLoaded", function () {
  target3.style.backgroundColor = "green";
  target3.textContent = "Page Loaded!";
});

// ----------------------------------------
// resize

let target4 = document.getElementById("t4");
target4.textContent = window.innerWidth + " x " + window.innerHeight;

window.addEventListener("resize", function () {
  target4.textContent = window.innerWidth + " x " + window.innerHeight;
});

// ----------------------------------------
// scroll

let target5 = document.getElementById("t5");

window.addEventListener("scroll", function () {
  target5.textContent = window.scrollY + " px";
});

// ========================================
// Form Events

// ----------------------------------------
// submit

document.getElementById("myForm1").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("wait").innerText = "submited✅";
  document.getElementById("wait").style.color = "green";
});

// --------------------

const form2 = document.getElementById("myForm2");

form2.addEventListener("submit", function (event) {
  event.preventDefault(); // jelogiri az 'reload' shodane safhe.

  const formData2 = new FormData(form2);
  const first = formData2.get("firstname");
  const last = formData2.get("lastname");

  document.getElementById("wel").innerText = `Welcome ${first} ${last}`;
});

form2.addEventListener("submit", function (e) {
  e.preventDefault();

  const first = form2.elements["firstname"].value;
  const last = form2.elements["lastname"].value;

  document.getElementById("hel").innerText = `Hello ${first} ${last}`;
  form2.reset();
});

// const first = form2.querySelectorAll("input[type='text']")[0].value.trim();
// const last = form2.querySelectorAll("input[type='text']")[1].value.trim();

// const first = form2.querySelector("input[name='firstname']").value.trim();
// const last = form2.querySelector("input[name='lastname']").value.trim();

// ----------------------------------------
// change

let sel = document.getElementById("language");

sel.addEventListener("change", function () {
  alert("Language changed to " + this.value); // use this
  document.getElementById("lan").innerHTML = `${sel.value} is great`; // use target name (sel)
});
// --------------------

document.getElementById("liveInput0").addEventListener("change", function () {
  document.getElementById("output0").innerText = "You typed: " + this.value;
});

// document.getElementById("liveInput0").addEventListener("change", function (e) {
//   document.getElementById("output0").innerText = "You typed: " + e.target.value;
// });

// ----------------------------------------
// input

document.getElementById("liveInput").addEventListener("input", function () {
  document.getElementById("output").innerText = "You typed: " + this.value;
});

// ----------------------------------------
// blur

document.getElementById("liveInput2").addEventListener("blur", function () {
  document.getElementById("output2").innerText = "You typed: " + this.value;
});

// ========================================
// Keyboard Events

// ----------------------------------------
// keydown

let targetKD = document.getElementById("keyd");

function func1() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  targetKD.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

targetKD.addEventListener("keydown", func1);

// --------------------

let targetKD2 = document.getElementById("keyd2");

targetKD2.addEventListener("keydown", function (x) {
  x.preventDefault();
  targetKD2.value = x.key;
  document.getElementById("output3").innerText = x.key;
});

// ----------------------------------------
// keyup

let targetKU = document.getElementById("keyu");

function func2() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  targetKU.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

targetKU.addEventListener("keyup", func2);

// ----------------------------------------

let targetK1 = document.getElementById("key1");

targetK1.addEventListener("keydown", function (x) {
  if (/^[a-zA-Z]$/.test(x.key)) {
    document.getElementById("output4").innerText += x.key;
  } else {
    x.preventDefault();
  }
});

targetK1.addEventListener("keyup", function (x) {
  if (/^[a-zA-Z]$/.test(x.key)) {
    document.getElementById("output4").innerText += "-";
  } else {
    x.preventDefault();
  }
});

// ----------------------------------------

let arw = document.getElementById("output5");

window.addEventListener("keydown", function (x) {
  switch (x.key) {
    case "ArrowUp":
      arw.innerText = "↑";
      break;
    case "ArrowRight":
      arw.innerText = "→";
      break;
    case "ArrowDown":
      arw.innerText = "↓";
      break;
    case "ArrowLeft":
      arw.innerText = "←";
      break;
  }
});

// ----------------------------------------

let gameB = document.getElementById("gameBox");
let topPos = parseInt(getComputedStyle(gameB).top);
let leftPos = parseInt(getComputedStyle(gameB).left);

function moveBox(x) {
  const allowed = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];

  if (!allowed.includes(x.key)) {
    x.preventDefault();
    return;
  }

  switch (x.key) {
    case "ArrowUp":
      topPos -= 5;
      break;
    case "ArrowRight":
      leftPos += 5;
      break;
    case "ArrowDown":
      topPos += 5;
      break;
    case "ArrowLeft":
      leftPos -= 5;
      break;
  }

  gameB.style.top = topPos + "px";
  gameB.style.left = leftPos + "px";
}

document.getElementById("gamePad").addEventListener("keydown", moveBox);

// ========================================
// Drag & Drop Events

// ----------------------------------------
// dragstart

document.getElementById("box1").addEventListener("dragstart", function () {
  this.style.opacity = 0.4;
});

// ----------------------------------------
// dragend

document.getElementById("box2").addEventListener("dragstart", function () {
  this.style.opacity = 0.5;
});

document.getElementById("box2").addEventListener("dragend", function () {
  this.style.opacity = 1;
});

// ----------------------------------------
// dragover - drop

document.getElementById("box3").addEventListener("dragstart", function () {
  this.style.opacity = 0.5;
});

document.getElementById("box3").addEventListener("dragend", function () {
  this.style.opacity = 1;
});

document.getElementById("target3").addEventListener("dragover", function (e) {
  e.preventDefault();
});

document.getElementById("target3").addEventListener("drop", function () {
  this.style.backgroundColor = "crimson";
});

// --------------------

document.getElementById("box4").addEventListener("dragstart", function (e) {
  this.style.opacity = 0.5;
});

document.getElementById("box4").addEventListener("dragend", function () {
  this.style.opacity = 1;
});

document.getElementById("target4").addEventListener("dragover", function (e) {
  e.preventDefault();
});

document.getElementById("target4").addEventListener("drop", function () {
  const bx4 = document.getElementById("box4");
  this.appendChild(bx4);
});

// --------------------
// professional(dataTransfer):

document.getElementById("box5").addEventListener("dragstart", function (e) {
  this.style.opacity = 0.5;
  e.dataTransfer.setData("box-5", e.target.id);
});

document.getElementById("box5").addEventListener("dragend", function () {
  this.style.opacity = 1;
});

document.getElementById("target5").addEventListener("dragover", function (e) {
  e.preventDefault();
});

document.getElementById("target5").addEventListener("drop", function (e) {
  const data = e.dataTransfer.getData("box-5");
  const box = document.getElementById(data);
  e.target.appendChild(box);
});

// ----------------------------------------

const box = document.getElementById("box6");
const target = document.getElementById("target6");

box.addEventListener("dragstart", function () {
  box.style.opacity = "0.5";
  box.style.backgroundColor = "crimson";
});

box.addEventListener("dragend", function () {
  box.style.opacity = "1";
  box.style.backgroundColor = "orange";
});

target.addEventListener("dragenter", function () {
  target.style.backgroundColor = "green";
  target.innerText = "affarin haminja 😀";
});

target.addEventListener("dragover", function (e) {
  e.preventDefault(); //
});

target.addEventListener("dragleave", function () {
  target.style.backgroundColor = "red";
  target.innerText = "narooo 😫";
});

target.addEventListener("drop", function () {
  target.innerText = "andakhtish 👌";
  target.style.backgroundColor = "blue";
});
