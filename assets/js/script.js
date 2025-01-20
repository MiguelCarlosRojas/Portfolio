document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.querySelector(".typing-text");
  const text = ["Desarrollador Web", "Diseñador", "Freelancer"];
  let i = 0;

  function typeWord() {
    if (i < text.length) {
      typingElement.textContent = "";
      let charIndex = 0;
      function typeLetter() {
        if (charIndex < text[i].length) {
          typingElement.textContent += text[i].charAt(charIndex);
          charIndex++;
          setTimeout(typeLetter, 100);
        } else {
          i++;
          if (i === text.length) {
            i = 0;
          }
          setTimeout(typeWord, 1500);
        }
      }
      typeLetter();
    }
  }

  typeWord();
});
