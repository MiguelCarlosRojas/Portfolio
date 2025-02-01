import { typeEffect } from "./components/js/typingEffect.js";
import { toggleMenu } from "./components/js/menuToggle.js";
import { toggleLanguage } from "./translation/translation.js";

export function initializeApp() {
  document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
    toggleMenu();

    // Agregar el evento para cambiar el idioma
    document
      .getElementById("toggle-language")
      .addEventListener("click", toggleLanguage);
  });
}
