const messages = {
  water: 'Water recycling gets the spare power. The plants may have to wait: caring for one system means noticing what another system needs next.',
  plants: 'The greenhouse gets the spare power. Water recycling may have to wait: a thriving garden also depends on the systems around it.'
};
document.querySelectorAll('[data-choice]').forEach((button) => {
  button.setAttribute('aria-pressed', 'false');
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-choice]').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    document.getElementById('result').textContent = messages[button.dataset.choice];
    document.querySelector('.status-dot').textContent = '●  PRIORITY SELECTED';
  });
});
