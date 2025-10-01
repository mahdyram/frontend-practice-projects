const cont = document.querySelector(".container");
const pics = document.querySelectorAll(".pic");

cont.addEventListener("click", function (e) {
  if (e.target.classList.contains("pic")) {
    pics.forEach((pic) => pic.classList.remove("active"));
    e.target.classList.add("active");
  }
});
