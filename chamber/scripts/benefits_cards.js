const membershipBenefits = {
  membership: {
    title: "Membership Benefits",
    items: [
      "Access to community news and newsletters",
      "Networking with local businesses",
      "Invitations to open chamber events"
    ]
  },
  bronze: {
    title: "Bronze Membership Benefits",
    items: [
      "All Membership benefits",
      "Listed in chamber directory",
      "Access to member-only events"
    ]
  },
  silver: {
    title: "Silver Membership Benefits",
    items: [
      "All Bronze benefits",
      "Featured on chamber website",
      "Promotional support for your business"
    ]
  },
  gold: {
    title: "Gold Membership Benefits",
    items: [
      "All Silver benefits",
      "Priority spotlight on homepage",
      "Discounts on chamber events",
      "Free training sessions"
    ]
  }
};


const container = document.getElementById("modals-container");

for (const key in membershipBenefits) {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.id = `${key}Modal`;

  const content = document.createElement("div");
  content.classList.add("modal-content");

  const close = document.createElement("span");
  close.classList.add("close");
  close.innerHTML = "&times;";
  close.onclick = () => closeModal(`${key}Modal`);

  const title = document.createElement("h2");
  title.textContent = membershipBenefits[key].title;

  const list = document.createElement("ul");
  membershipBenefits[key].items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  content.appendChild(close);
  content.appendChild(title);
  content.appendChild(list);
  modal.appendChild(content);
  container.appendChild(modal);
}


function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}


window.onclick = function(event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};


document.querySelectorAll(".benefit-link").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const modalId = event.target.closest(".card").getAttribute("data-modal");
    openModal(modalId);
  });
});