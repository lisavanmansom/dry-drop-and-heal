export function initRainbowScroll(cardSelector) {
    const cards = document.querySelectorAll(cardSelector);
  
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      const hue = scrollPosition % 360; // Beperk de waarde tot 0-359 graden
  
      cards.forEach((card) => {
        card.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
      });
    });
  }
  