// Importa las funciones desde sus respectivos archivos
import { typeEffect } from './components/js/typingEffect.js';
import { toggleMenu } from './components/js/menuToggle.js';

// Exporta las funciones para que puedan ser reutilizadas en otros archivos
export function initializeApp() {
  document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
    toggleMenu();
  });
}