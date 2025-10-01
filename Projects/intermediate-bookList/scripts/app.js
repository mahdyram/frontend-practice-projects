const searchInput = document.querySelector("#search-books input");
const bookList = document.querySelector("ul");
const checkBox = document.getElementById("chb");
const addForm = document.querySelector("#add-book");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const initialBooks = ["اثر مرکب", "طرح کلی", "انسان 250 ساله"];

document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("initialized")) {
    localStorage.setItem("tasks", JSON.stringify(initialBooks));
    localStorage.setItem("initialized", "true");
  }

  tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => {
    const newBook = createBookElement(task);
    bookList.appendChild(newBook);
  });

  const isHidden = localStorage.getItem("hideBooks") === "true";
  checkBox.checked = isHidden;
  document.getElementById("book-list").style.display = isHidden
    ? "none"
    : "block";
});

/* -------------> search-book <-------------- */

searchInput.addEventListener("input", function () {
  const nameBooks = document.querySelectorAll(".name");
  nameBooks.forEach((item) => {
    if (item.innerText.startsWith(searchInput.value)) {
      item.parentElement.style.display = "flex";
    } else {
      item.parentElement.style.display = "none";
    }
  });
});

/* -------------> delete-book <-------------- */

bookList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    // bookList.removeChild(e.target.parentElement);
    e.target.parentElement.remove();
    removeFromLocalStorage(e.target.parentElement.children[1].textContent);
  }
});

function removeFromLocalStorage(task) {
  tasks = tasks.filter((t) => t !== task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

/* -------------> hide-books <-------------- */

checkBox.addEventListener("change", function () {
  // document.getElementById("book-list").style.display = checkBox.checked ? "none" : "block";
  if (checkBox.checked) {
    document.getElementById("book-list").style.display = "none";
  } else {
    document.getElementById("book-list").style.display = "block";
  }

  localStorage.setItem("hideBooks", checkBox.checked);
});

/* -------------> reset <-------------- */

// reset ba refresh
// document
//   .querySelector("#hide-book span")
//   .addEventListener("click", function () {
//     localStorage.removeItem("initialized");
//     window.location.reload();
//   });

// reset bedoone refresh
document
  .querySelector("#hide-book span")
  .addEventListener("click", function () {
    localStorage.setItem("tasks", JSON.stringify(initialBooks));
    localStorage.setItem("initialized", "true");

    // وضعیت مخفی‌سازی رو ریست کن
    localStorage.setItem("hideBooks", "false");
    checkBox.checked = false;
    document.getElementById("book-list").style.display = "block";

    tasks = [...initialBooks];
    bookList.innerHTML = "";

    tasks.forEach((task) => {
      const newBook = createBookElement(task);
      bookList.appendChild(newBook);
    });
  });


/* -------------> add-book <-------------- */

addForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const input = addForm.querySelector("input[type='text']");
  const bookName = input.value.trim();

  if (bookName === "" || tasks.includes(bookName)) {
    addForm.reset();
    return;
  }

  const newBook = createBookElement(bookName);
  bookList.appendChild(newBook);

  storToLocalStorage(bookName);

  addForm.reset();
});

function createBookElement(bookName) {
  const newBook = document.createElement("li");
  const span1 = document.createElement("span");
  span1.className = "delete";
  span1.textContent = "حذف";
  const span2 = document.createElement("span");
  span2.className = "name";
  span2.textContent = bookName;
  newBook.append(span1, span2);
  return newBook;
}

function storToLocalStorage(task) {
  if (!tasks.includes(task)) {
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}
