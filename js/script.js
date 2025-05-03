const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')

toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

const langButton = document.getElementById('lang-toggle-btn');

langButton.addEventListener('click', () => {
    if (langButton.textContent === 'EN') {
        langButton.textContent = 'UA';
    } else {
        langButton.textContent = 'EN';
    }
});
const tabs = document.querySelectorAll(".tab");
const typeInput = document.getElementById("type");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active-two"));
    tab.classList.add("active-two");
    typeInput.value = tab.dataset.type;
  });
});

document.querySelectorAll(".amount-buttons button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".amount-input").value = btn.dataset.amount;
  });
});
const buttons = document.querySelectorAll('.amount-buttons button');
const amountInput = document.getElementById('amount-input');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = parseInt(button.dataset.amount);
    let current = parseInt(amountInput.value) || 0;
    amountInput.value = current + value;
  });
});
