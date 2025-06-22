document.addEventListener("DOMContentLoaded", function () {
  
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
const translations = {
  en: {
    "logo-text": "Dim Sirka",
    "nav-name": "Dim Sirka",
    "nav-profession": "Charitable Organization",
    "nav-about": "About Us",
    "nav-news": "News",
    "nav-friend": "Friend",
    "nav-report": "Reports",
    "lang-text": "UA",
    "404-title": "Woof! This page ran away from the kennel!",
    "404-subtitle": "We searched well, even called 'here paw!' – but found nothing…",
    "404-bottom-title": "Don't worry, our doggies are already on the trail!",
    "404-bottom-text": "You can return",
    "404-home-btn": "to the homepage",
    "404-small-text": "where happiness with a wet nose awaits you 🐾",
    "footer-heading": "Together, we can save more furry friends!",
    "footer-home": "Home",
    "footer-about": "About Us",
    "footer-news": "News",
    "footer-contacts-link": "Contacts",
    "footer-help": "How to Help",
    "footer-contacts-title": "Contacts and Support",
    "footer-location": "Ivano-Frankivsk",
    "footer-email": "kogutsirko@gmail.com",
    "footer-donation-link": "Charity Fund “Dim Sirka” Details",
    "footer-follow": "Follow the tails",
    "footer-bottom-text": "Every donation is a saved life. Thank you for your kindness and compassion!",
    "cookie-organization": "Dim Sirka",
    htmlLang: "en"
  },
  uk: {
    "logo-text": "Дім Сірка",
    "nav-name": "Дім Сірка",
    "nav-profession": "Благодійна організація",
    "nav-about": "Про нас",
    "nav-news": "Новини",
    "nav-friend": "Друг",
    "nav-report": "Звіти",
    "lang-text": "EN",
    "404-title": "Гав! Ця сторінка втекла з будки!",
    "404-subtitle": "Ми добре шукали, навіть кликали \"до лапки!\" – але нічого не знайшли…",
    "404-bottom-title": "Не хвилюйтесь, наші песики вже на сліду!",
    "404-bottom-text": "А ви можете повернутись",
    "404-home-btn": "на головну",
    "404-small-text": "там вас чекає щастя з мокрим носиком 🐾",
    "footer-heading": "Разом ми можемо врятувати більше хвостиків!",
    "footer-home": "Головна",
    "footer-about": "Про нас",
    "footer-news": "Новини",
    "footer-contacts-link": "Контакти",
    "footer-help": "Як допомогти",
    "footer-contacts-title": "Контакти та підтримка",
    "footer-location": "м. Івано-Франківськ",
    "footer-email": "kogutsirko@gmail.com",
    "footer-donation-link": "Реквізити БФ “БО Дім Сірко”",
    "footer-follow": "Слідкуйте за хвостиками",
    "footer-bottom-text": "Кожен ваш внесок – це врятоване життя. Дякуємо за вашу доброту та небайдужість!",
    "cookie-organization": "Дім Сірка",
    htmlLang: "uk"
  }
};

let currentLang = "uk";

document.getElementById("lang-toggle-btn").addEventListener("click", () => {
  currentLang = currentLang === "uk" ? "en" : "uk";
  const t = translations[currentLang];

  for (const key in t) {
    if (key === "htmlLang") {
      document.documentElement.lang = t[key];
    } else if (key === "lang-text") {
      const langEl = document.querySelector(".lang-text");
      if (langEl) langEl.textContent = t[key];
    } else if (key !== "dog-names") { 
      const el = document.getElementById(key);
      if (el) el.textContent = t[key];
    }
  }

  updateDogNames(currentLang);
});
});