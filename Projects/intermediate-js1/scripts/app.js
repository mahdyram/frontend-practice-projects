/* -------------> search-book <-------------- */

/* -------------> delete-book <-------------- */

const bookList = document.querySelector("ul");

bookList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    bookList.removeChild(e.target.parentElement);
  }
});

/* -------------> hide-books <-------------- */

const checkBox = document.getElementById("chb");

checkBox.addEventListener("change", function () {
  if (checkBox.checked) {
    document.getElementById("book-list").style.display = "none";
  } else {
    document.getElementById("book-list").style.display = "block";
  }
});

/* -------------> add-book <-------------- */

const addForm = document.querySelector("#add-book");

addForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const input = addForm.querySelector("input[type='text']");
  const bookName = input.value.trim();

  if (bookName === "") return;

  const newBook = document.createElement("li");
  const span1 = document.createElement("span");
  span1.className = "delete";
  span1.textContent = "حذف";
  const span2 = document.createElement("span");
  span2.className = "name";
  span2.textContent = bookName;
  newBook.append(span1, span2);
  bookList.appendChild(newBook);

  addForm.reset();
});
