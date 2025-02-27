// Fügt Klick-Event-Listener für alle insta-logo-Elemente hinzu
document.querySelectorAll('.insta-logo').forEach(logo => {
    logo.addEventListener('click', (event) => {
      const postsId = logo.dataset.posts; // ID des zugehörigen Overlays abrufen
      const postsOverlay = document.getElementById(postsId);
  
      // Sichtbarkeit des Overlays umschalten
      postsOverlay.classList.toggle('show');
  
      // Verhindert, dass der Klick auf die Eltern-Container weitergeleitet wird
      event.stopPropagation();
    });
  });
  
  // Schließt Overlays, wenn außerhalb geklickt wird
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.logo-item')) { // Prüft, ob der Klick außerhalb eines Logos ist
      document.querySelectorAll('.posts-overlay').forEach(overlay => {
        overlay.classList.remove('show'); // Schließt alle offenen Overlays
      });
    }
  });
  