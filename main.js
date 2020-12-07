const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navigation");

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});
