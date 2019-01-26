document.addEventListener("DOMContentLoaded", function(event) {
  const poetryAnchor = document.getElementById("poetry-anchor");
  const poetryList = document.querySelector(".poetry-list");
  const contactAnchor = document.getElementById("contact");
  const resumeAnchor = document.getElementById("resume");
  const codeAnchor = document.getElementById("code");

  poetryAnchor.addEventListener("click", toggleVisiblePoetry);
  contactAnchor.addEventListener("click", toggleVisiblePoetry);
  resumeAnchor.addEventListener("click", toggleVisiblePoetry);
  codeAnchor.addEventListener("click", toggleVisiblePoetry);

  function toggleVisiblePoetry(e) {
    if (e.target.innerHTML === "Poetry") {
      poetryList.classList.toggle("visible");
    } else {
      poetryList.classList.remove("visible");
    }
  }
});
