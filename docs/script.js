document.addEventListener("DOMContentLoaded", function() {
  // Zeige initial nur die Landing Page und blende die anderen Abschnitte aus
  document.getElementById('landing').style.display = "block";
  document.getElementById('about').style.display = "none";
  document.getElementById('impressum').style.display = "none";
});

function showSection(sectionId) {
  // Alle Sections ausblenden
  document.getElementById('landing').style.display = "none";
  document.getElementById('about').style.display = "none";
  document.getElementById('impressum').style.display = "none";
  
  // Gewünschte Section einblenden
  const section = document.getElementById(sectionId);
  section.style.display = "block";
  
  // (Optional) Fade-In-Animation neu triggern:
  section.classList.remove("fade-in");
  void section.offsetWidth; // Reflow erzwingen
  section.classList.add("fade-in");
}