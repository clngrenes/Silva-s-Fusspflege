document.addEventListener("DOMContentLoaded", function() {
  // Page fade-in effect
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(element => {
    element.classList.remove('fade-in');
    void element.offsetWidth; // Force reflow
    element.classList.add('fade-in');
  });
});