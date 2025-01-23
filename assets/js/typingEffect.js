export function typeEffect() {
    const typingElement = document.querySelector(".typing-text");
    const text = ["Desarrollador Front-End", "Diseñador UX/UI"];
    let i = 0;
  
    function typeWord() {
      if (i < text.length) {
        let charIndex = 0;
        typingElement.classList.add("typing");
  
        function typeLetter() {
          if (charIndex < text[i].length) {
            typingElement.textContent += text[i].charAt(charIndex);
            charIndex++;
            setTimeout(typeLetter, 100);
          } else {
            setTimeout(() => {
              typingElement.classList.remove("typing");
              setTimeout(deleteWord, 1000);
            }, 1000);
          }
        }
  
        function deleteWord() {
          let charIndex = typingElement.textContent.length;
          function deleteLetter() {
            if (charIndex > 0) {
              typingElement.textContent = typingElement.textContent.slice(
                0,
                charIndex - 1
              );
              charIndex--;
              setTimeout(deleteLetter, 50);
            } else {
              i++;
              if (i === text.length) {
                i = 0;
              }
              setTimeout(typeWord, 1500);
            }
          }
          deleteLetter();
        }
  
        typeLetter();
      }
    }
  
    typeWord();
  }
  