document.addEventListener("DOMContentLoaded", function(event) {
  const poetryAnchor = document.getElementById("poetry-anchor");
  const poetryList = document.querySelector(".poetry-list");

  poetryAnchor.addEventListener("click", toggleVisible);

  function toggleVisible(e) {
    e.preventDefault();
    poetryList.classList.toggle("visible");
  }
});
