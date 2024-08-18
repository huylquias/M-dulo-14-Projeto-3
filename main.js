document.addEventListener("DOMContentLoaded", (event) => {
  const toggler = document.querySelector(".navbar-toggler");
  toggler.addEventListener("click", () => {
    toggler.classList.toggle("clicked");
  });
});
document
  .getElementById("toggleLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var section = document.getElementById("toggleSelection");
    if (section.classList.contains("hidden")) {
      section.classList.remove("hidden");
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      section.classList.add("hidden");
    }
  });