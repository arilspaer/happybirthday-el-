const envelope = document.getElementById('envelope');
const loves = document.querySelectorAll('.love');

let clickCount = 0;

envelope.addEventListener('click', () => {
  clickCount++;

  if (clickCount === 1) {
    envelope.classList.add('clicked');
    loves.forEach(love => {
      love.classList.add('show-love');
    });
    setTimeout(() => {
      envelope.classList.remove('clicked');
    }, 600);
  }

  if (clickCount === 2) {
    envelope.src = 'envelope-open.png';
  }

  if (clickCount === 3) {
    envelope.src = 'envelope-half-letter.png';
  }

  if (clickCount === 4) {
    envelope.src = 'envelope-full-letter.png';
    envelope.style.bottom = '50%';
    envelope.style.transform = 'translate(-50%, 50%) scale(1.1)';
  }

if (clickCount === 5) {
  envelope.src = 'envelope-letter-halfopen.png';

  setTimeout(() => {
    envelope.src = 'envelope-letter-fullopen.png';

    envelope.style.position = 'absolute';
    envelope.style.top = '50%';
    envelope.style.left = '50%';
    envelope.style.bottom = 'auto';
    envelope.style.transform = 'translate(-50%, -50%) scale(1.1)';
    envelope.style.zIndex = '30';

    // Tampilkan surat setelah delay
    const letter = document.getElementById('letter');
    letter.style.display = 'block';
  }, 500);
}
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-toggle');

musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = '⏸'; // tombol jadi pause
  } else {
    music.pause();
    musicBtn.textContent = '▶'; // tombol jadi play
  }
});


});
