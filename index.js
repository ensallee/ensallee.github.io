document.addEventListener("DOMContentLoaded", () => {
  const poetryList = document.querySelector(".poetry-list");
  const body = document.getElementById("root")

  body.addEventListener('click', toggleVisiblePoetry)

  function toggleVisiblePoetry(e) {
    if (e.target.innerHTML === "Poetry") {
      poetryList.classList.toggle("visible");
    } else {
      poetryList.classList.remove("visible");
    }
  }
});
