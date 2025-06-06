// ========================================
// dbclick

let target1 = document.getElementById("t1");

target1.onclick = function () {
  target1.style.backgroundColor = "red";
  target1.style.color = "white";
};

target1.ondblclick = function () {
  target1.style.backgroundColor = "blue";
};

// ----------------------------------------

// faghat dovvomi ejra mishavad

let target2 = document.getElementById("t2");

target2.ondblclick = function () {
  target2.style.backgroundColor = "red";
};

target2.ondblclick = function () {
  target2.style.color = "white";
};
// --------------------

// hardo ejra mishavad

let target3 = document.getElementById("t3");

target3.addEventListener("dblclick", function () {
  target3.style.backgroundColor = "red";
});

target3.addEventListener("dblclick", function () {
  target3.style.color = "white";
});

// ========================================
// down-up

let target4 = document.getElementById("t4");

target4.addEventListener("mousedown", function () {
  target4.style.backgroundColor = "red";
  target4.style.color = "white";
});
// --------------------

let target5 = document.getElementById("t5");

target5.addEventListener("mousedown", function () {
  target5.style.backgroundColor = "red";
  target5.style.color = "white";
});

target5.addEventListener("mouseup", function () {
  target5.style.backgroundColor = "orange";
  target5.style.color = "black";
});
// --------------------

let target6 = document.getElementById("t6");

target6.addEventListener("mousedown", function () {
  target6.style.backgroundColor = "red";
  target6.style.color = "white";
});

target6.addEventListener("mouseup", function () {
  target6.style.backgroundColor = "blue";
  target6.style.color = "white";
});

// ========================================
// enter-leave

let target7 = document.getElementById("t7");

target7.addEventListener("mouseenter", function () {
  target7.style.backgroundColor = "red";
});
// --------------------

let target8 = document.getElementById("t8");

target8.addEventListener("mouseenter", function () {
  target8.style.backgroundColor = "red";
});

target8.addEventListener("mouseleave", function () {
  target8.style.backgroundColor = "orange";
});
// --------------------

let target9 = document.getElementById("t9");

target9.addEventListener("mouseenter", function () {
  target9.style.backgroundColor = "red";
});

target9.addEventListener("mouseleave", function () {
  target9.style.backgroundColor = "blue";
});

// ========================================
// move

let target10 = document.getElementById("t10");

function func1() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  target10.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

target10.addEventListener("mousemove", func1);

// --------------------

let xy = document.querySelector("#xy");
document.body.addEventListener("mousemove", function (e) {
  xy.innerHTML = `mouseX: ${e.offsetX} | mouseY: ${e.offsetY}`;
});

// ========================================
// out

let target11 = document.getElementById("t11");

function func2() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  target11.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

target11.addEventListener("mouseout", func2);

// --------------------
// out vs leave

let target12 = document.getElementById("t12");

function func3() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  target12.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

target12.addEventListener("mouseleave", func3);

// ========================================
// over

let target13 = document.getElementById("t13");

function func4() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  target13.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

target13.addEventListener("mouseover", func4);

// --------------------
// out vs enter

let target14 = document.getElementById("t14");

function func5() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  target14.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

target14.addEventListener("mouseenter", func5);
