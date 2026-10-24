document.addEventListener("DOMContentLoaded", () => {
  
  // --- 1. Эффект печатной машинки для Hero ---
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

  // --- 2. Терминал (Welcome) ---
  const terminalText = "Welcome to seeing.eye collective.";
  const terminalElement = document.getElementById("terminal-text");
  let j = 0;

  const terminalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && j === 0) {
        function typeTerminal() {
          if (j < terminalText.length) {
            terminalElement.innerHTML = terminalText.substring(0, j + 1) + '<span class="cursor"></span>';
            j++;
            setTimeout(typeTerminal, 50);
          }
        }
        typeTerminal();
        terminalObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  terminalObserver.observe(document.querySelector(".terminal-box"));

  // --- 3. Плавное появление Discord блока ---
  const discordCard = document.querySelector(".discord-card");
  const discordObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        discordCard.classList.add("visible");
        discordObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  discordObserver.observe(discordCard);

  // --- 4. Плавное появление GitHub блока ---
  const githubCard = document.querySelector(".github-card");
  const githubObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        githubCard.classList.add("visible");
        githubObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  githubObserver.observe(githubCard);

});