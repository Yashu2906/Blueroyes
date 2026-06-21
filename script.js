const header = document.querySelector(".nav-shell");
const menuToggle = document.querySelector(".menu-button");
const navLinks = document.querySelectorAll(".nav a");

function syncHeader() {
  header.classList.toggle("scrolled", window.scrollY > 18);
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  header.classList.remove("menu-active");
  menuToggle.setAttribute("aria-expanded", "false");
}

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

menuToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("menu-active");
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
