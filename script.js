document.addEventListener('DOMContentLoaded', function() {
  const revealBtn = document.getElementById('revealBtn');
  const giftMessage = document.getElementById('giftMessage');

  revealBtn.addEventListener('click', function() {
    giftMessage.classList.toggle('hidden');
    if (!giftMessage.classList.contains('hidden')) {
      giftMessage.classList.add('animate-in');
      revealBtn.textContent = 'הסוד נחשף!';
    } else {
      revealBtn.textContent = 'לחצו כאן לחשיפה';
    }
  });
});
