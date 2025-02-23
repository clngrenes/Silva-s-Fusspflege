document.addEventListener("DOMContentLoaded", function() {
    // Stelle sicher, dass das Impressum standardmäßig angezeigt wird
    document.getElementById('impressum').style.display = "block";
  });
  
  function toggleImpressum() {
    var impressum = document.getElementById('impressum');
    if (impressum.style.display === "none") {
      impressum.style.display = "block";
    } else {
      impressum.style.display = "none";
    }
  }