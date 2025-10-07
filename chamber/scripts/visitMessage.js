const messageArea = document.getElementById("message");
const now = Date.now();
const lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit) {
  messageArea.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const diffInMs = now - Number(lastVisit);
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays < 1) {
    messageArea.textContent = "Back so soon! Awesome!";
  } else if (diffInDays === 1) {
    messageArea.textContent = "You last visited 1 day ago.";
  } else {
    messageArea.textContent = `You last visited ${diffInDays} days ago.`;
  }
}

localStorage.setItem("lastVisit", now);
