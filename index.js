document.addEventListener("DOMContentLoaded", function(event) {
  const poetryAnchor = document.getElementById("poetry-anchor");
  const poetryList = document.querySelector(".poetry-list");
  const contactButton = document.getElementById("contact");
  const emailForm = document.querySelector(".email-container");

  poetryAnchor.addEventListener("click", toggleVisiblePoetry);
  contactButton.addEventListener("click", toggleVisibleEmail);

  function toggleVisiblePoetry(e) {
    e.preventDefault();
    poetryList.classList.toggle("visible");
  }

  function toggleVisibleEmail(e) {
    e.preventDefault();
    emailForm.classList.toggle("visible");
  }
});
