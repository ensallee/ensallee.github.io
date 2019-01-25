document.addEventListener("DOMContentLoaded", function(event) {
  const poetryAnchor = document.getElementById("poetry-anchor");
  const poetryList = document.querySelector(".poetry-list");
  const contactButton = document.getElementById("contact");
  const cancelButton = document.getElementById("cancel-button");

  poetryAnchor.addEventListener("click", toggleVisiblePoetry);
  contactButton.addEventListener("click", toggleVisibleEmail);
  cancelButton.addEventListener("click", toggleVisibleEmail);

  function toggleVisiblePoetry(e) {
    e.preventDefault();
    poetryList.classList.toggle("visible");
  }
});
