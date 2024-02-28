const header = document.getElementById("header");
const navBtn = document.getElementById("nav-btn");

navBtn.addEventListener("click", function (e) {
  header.classList.toggle("nav-open");
});
