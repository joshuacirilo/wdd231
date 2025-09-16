const year = document.querySelector("#year");
const lastModifiedEl = document.querySelector("#last-modified");

// Current year
const today = new Date();
year.innerHTML = `© <span class="highlight">${today.getFullYear()}</span> 🔭 Joshua Cirilo Alegria 🔭 Guatemala`;

// Last modified
const lastModified = new Date(document.lastModified);
lastModifiedEl.textContent =
  `Last updated: ${lastModified.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}`;
