document.addEventListener('DOMContentLoaded', function() {
  const revealBtn = document.getElementById('revealBtn');
  const giftMessage = document.getElementById('giftMessage');

  function launchConfetti() {
    const container = document.getElementById('confetti-container');
    if (!container) return;

    const colors = ['#ff2b2b', '#ffb41f', '#ffd700', '#f93a72', '#d01818'];

    for (let i = 0; i < 45; i++) {
      const confetti = document.createElement('span');
      confetti.classList.add('confetti');
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.top = '-30px';
      confetti.style.transform = `rotateZ(${Math.random() * 360}deg)`;
      confetti.style.animationDuration = `${1 + Math.random() * 0.8}s`;
      confetti.style.animationDelay = `${Math.random() * 0.15}s`;
      confetti.style.opacity = '0.9';
      container.appendChild(confetti);

      setTimeout(() => {
        container.removeChild(confetti);
      }, 1800);
    }
  }

  revealBtn.addEventListener('click', function() {
    const wasHidden = giftMessage.classList.contains('hidden');
    giftMessage.classList.toggle('hidden');

    if (!giftMessage.classList.contains('hidden')) {
      giftMessage.classList.add('animate-in');
      revealBtn.textContent = 'הסוד נחשף!';
      if (wasHidden) {
        launchConfetti();
      }
    } else {
      revealBtn.textContent = 'לחצו כאן לחשיפה';
    }
  });
});
