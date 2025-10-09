// ===== Modal Elements =====
const modal = document.getElementById("infoModal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeBtn = document.querySelector(".close-btn");

// ===== Card Data =====
const cardInfo = {
  history: {
    title: "Guatemalan History",
    description:
      "Guatemala’s history stretches back to the ancient Maya civilization, known for its astronomy, architecture, and mathematics. Later, Spanish influence brought new cultural layers that blend in today’s traditions."
  },
  culture: {
    title: "Guatemalan Culture",
    description:
      "Guatemalan culture is a vibrant mix of indigenous and Spanish traditions. Each region celebrates colorful festivals, music, textiles, and gastronomy that tell the story of its people."
  },
  traditions: {
    title: "Guatemalan Traditions",
    description:
      "From Semana Santa processions to the Kite Festival of Sumpango, Guatemala’s traditions reflect deep spirituality, creativity, and community spirit passed down through generations."
  }
};

// ===== Add Event Listeners to Cards =====
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const caption = card.querySelector("figcaption").textContent.toLowerCase();

    // Update modal content dynamically
    const info = cardInfo[caption];
    modalTitle.textContent = info.title;
    modalDescription.textContent = info.description;

    // Show modal
    modal.style.display = "block";
  });
});

// ===== Close Modal =====
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// ===== Close when clicking outside =====
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
