let currentLang = 'ua';
let translations = {};

document.addEventListener('DOMContentLoaded', () => {
  fetch('json/lang.json')
    .then(res => res.json())
    .then(data => {
      translations = data;
      updateContent(currentLang);
    })
    .catch(error => console.error("Помилка завантаження JSON: ", error));

  document.getElementById('lang-toggle-btn').addEventListener('click', () => {
    currentLang = currentLang === 'ua' ? 'en' : 'ua';
    updateContent(currentLang);
  });
});

function updateContent(lang) {
  const t = translations[lang];
  if (!t) {
    console.error('Переклади для мови не знайдені.');
    return;
  }

  // Оновлення тексту на кнопці
  const langBtn = document.getElementById('lang-toggle-btn');
  const langText = langBtn.querySelector('.lang-text');
  langText.textContent = lang === 'ua' ? 'EN' : 'UA';

  // Оновлення логотипу і підзаголовку в header
  const headerLogo = document.querySelector('.header__logo');
  const headerSubtitle = document.querySelector('.header__toggle + .nav__content .nav__profesion');
  if (headerLogo) headerLogo.textContent = t.headerLogo;
  if (headerSubtitle) headerSubtitle.textContent = t.headerSubtitle;

  // Оновлення пунктів меню
  const navLinks = document.querySelectorAll('.nav__link');
  const navTexts = [t.aboutUs, t.news, t.friends, t.reports];
  navLinks.forEach((link, index) => {
    link.textContent = navTexts[index];
  });

  // Оновлення тексту в footer
  const footerText = document.querySelector('.footer-text h2');
  const footerLinks = document.querySelectorAll('.footer-links a');
  const footerContacts = document.querySelectorAll('.footer-contacts p');
  const footerDonate = document.querySelector('.footer-donate a');
  const footerBottom = document.querySelector('.footer-bottom p');

  if (footerText) footerText.textContent = t.footerText;
  if (footerDonate) footerDonate.textContent = t.footerDonate;
  if (footerBottom) footerBottom.textContent = t.footerBottom;

  footerLinks[0].textContent = t.footerLinks.home;
  footerLinks[1].textContent = t.footerLinks.about;
  footerLinks[2].textContent = t.footerLinks.news;
  footerLinks[3].textContent = t.footerLinks.contacts;
  footerLinks[4].textContent = t.footerLinks.help;

  footerContacts[0].textContent = t.footerContacts.location;
  footerContacts[1].textContent = t.footerContacts.phone;
  footerContacts[2].textContent = t.footerContacts.email;
}
