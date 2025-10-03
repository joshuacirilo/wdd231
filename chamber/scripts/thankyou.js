document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  // Mapeo correcto según tu formulario
  document.getElementById("first").value = params.get("firstName") || "";
  document.getElementById("last").value = params.get("lastName") || "";
  document.getElementById("email").value = params.get("email") || "";
  document.getElementById("mobile").value = params.get("phone") || "";
  document.getElementById("business").value = params.get("organization") || "";
  document.getElementById("timestamp").value = params.get("timestamp") || "";
  
  // Campos adicionales que podrías querer mostrar
  console.log("Membership Level:", params.get("membership"));
  console.log("Organization Description:", params.get("description"));
});