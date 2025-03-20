export function activateScrollAnimation() {
    const cards = document.querySelectorAll(".vmg-card");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 300); // Adds delay between cards
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );
  
    cards.forEach((card) => observer.observe(card));
  }
  