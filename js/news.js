document.addEventListener("DOMContentLoaded", function () {
const buttons = document.querySelectorAll('[data-modal]');
const modals = document.querySelectorAll('.modal');
const closes = document.querySelectorAll('.close');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
});

closes.forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    closeBtn.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', e => {
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

const items = document.querySelectorAll('.gallery-item');
const btn = document.getElementById('show-more-btn');
        items.forEach((item, index) => {
    if (index < 4) {
    item.classList.add('visible');
    }
});

btn.addEventListener('click', function () {
    items.forEach(item => item.classList.add('visible'));
    btn.style.display = 'none'; 
});
});