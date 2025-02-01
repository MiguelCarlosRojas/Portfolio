export function toggleMenu() {
  document.getElementById("menu-icon").addEventListener("click", function () {
    const navLeft = document.getElementById("nav-left");
    navLeft.classList.toggle("active");
  });
}
