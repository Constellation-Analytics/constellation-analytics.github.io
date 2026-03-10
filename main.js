const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const container = document.querySelector(".featured-container");

document.querySelector(".next").onclick = () => {
  container.scrollBy({ left: 320, behavior: "smooth" });
};

document.querySelector(".prev").onclick = () => {
  container.scrollBy({ left: -320, behavior: "smooth" });
};