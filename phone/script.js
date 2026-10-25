document.addEventListener("DOMContentLoaded", () => {
  
  // Печать в Hero
  const heroText = "seeing.eye";
  const typewriterElement = document.getElementById("typewriter");
  let i = 0;

  function typeWriter() {
    if (i < heroText.length) {
      typewriterElement.innerHTML += heroText.charAt(i);
      i++;
      setTimeout(typeWriter, 150);
    } else {
      typewriterElement.innerHTML += '<span class="cursor"></span>';
    }
  }
  
  setTimeout(typeWriter, 500);

  // Печать в Терминале
  const terminalText = "Welcome to seeing.eye collective.";
  const terminalElement = document.getElementById("terminal-text");
  let j = 0;

  function typeTerminal() {
    if (j < terminalText.length) {
      terminalElement.innerHTML = terminalText.substring(0, j + 1) + '<span class="cursor"></span>';
      j++;
      setTimeout(typeTerminal, 50);
    }
  }

  setTimeout(typeTerminal, 1500);
});