<button type="submit" onclick="window.location.href='/chamber/thankyou.html'">
    Submit Application
</button>



document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  document.getElementById("first").value = params.get("first") || "";
  document.getElementById("last").value = params.get("last") || "";
  document.getElementById("email").value = params.get("email") || "";
  document.getElementById("mobile").value = params.get("mobile") || "";
  document.getElementById("business").value = params.get("business") || "";
  document.getElementById("timestamp").value = params.get("timestamp") || "";
});