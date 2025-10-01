      let x = 0;
      let percentage = 1;
      const next = document.querySelector("#next");
      const prev = document.querySelector("#prev");
      const circles = document.querySelectorAll(".circle");
      const progress = document.querySelector("#progress");

      next.addEventListener("click", function (e) {
        x++;
        circles[x].classList.add("active");

        percentage += 33;
        progress.style.width = percentage + "%";
        prev.removeAttribute("disabled");
        prev.classList.remove("disable");
        if (percentage === 100) {
          next.setAttribute("disabled", true);
          next.classList.add("disable");
        }
      });

      prev.addEventListener("click", function (e) {
        circles[x].classList.remove("active");
        x--;

        percentage -= 33;
        progress.style.width = percentage + "%";
        next.removeAttribute("disabled");
        next.classList.remove("disable");
        if (percentage === 1) {
          prev.setAttribute("disabled", true);
          prev.classList.add("disable");
        }
      });