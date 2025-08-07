document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  const page = window.location.pathname.split('/').pop();
  links.forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
});

// Highlight nav tab
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  const page = window.location.pathname.split('/').pop();
  links.forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // Music player logic
  const music = document.getElementById('background-music');
  const toggle = document.getElementById('music-toggle');

  if (toggle && music) {
    let isPlaying = false;

    toggle.addEventListener('click', () => {
      if (isPlaying) {
        music.pause();
        toggle.textContent = '🎵 Play Music';
      } else {
        music.play();
        toggle.textContent = '⏸️ Pause Music';
      }
      isPlaying = !isPlaying;
    });
  }
});
