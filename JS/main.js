document.getElementById('startBtn').addEventListener('click', function() {
    const tutorialSection = document.getElementById('tutorialSection');
    tutorialSection.classList.remove('d-none');
    this.style.display = 'none';  // Oculta el botón "Start Tutorial"
  });
  