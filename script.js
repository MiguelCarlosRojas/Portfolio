// Simulación de texto escribiéndose dinámicamente
document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.querySelector(".typing-text");
    const text = typingElement.getAttribute("data-text");
    let i = 0;
  
    function type() {
      if (i < text.length) {
        typingElement.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
      }
    }
  
    type();
  });
  