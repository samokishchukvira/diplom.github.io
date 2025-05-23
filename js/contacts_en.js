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
     "moving-text": "Purring connection Purring connection Purring connection Purring connection Purring connection",
    "contact-info-title": "Contact Information:",
    "address": "Shelter address: Ivano-Frankivsk",
    "phone": "Phone: +380 (68) 047 64 16",
    "email": "Email: kogutsirko@gmail.com",
    "working-hours": "Working hours: Mon–Sat 10:00 AM to 6:00 PM",
    "question-title": "Got questions? Meow! Let us know!",
    "welcome-subtitle": "We welcome new friends!",
    "invitation-text": "Do you want to shelter a furry friend? Help with paws (or money)? Or maybe just bark about life? \nWrite to us! We don’t bite. Only respond warmly and gratefully 💛",
    "form-instruction": "Fill out the form, and we'll get back to you soon",
    "form-name": "",
    "form-email": "",
    "form-message": "",
    "send-button": "Send",
    "call-title": "or call us,",
    "call-text": "we will gladly help and answer all your questions",
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
    "moving-text": "Муркотливий зв'язок Муркотливий зв'язок Муркотливий зв'язок Муркотливий зв'язок Муркотливий зв'язок",
    "contact-info-title": "Контактна інформація:",
    "address": "Адреса притулку: м. Івано-Франківськ",
    "phone": "Телефон: +380 (68) 047 64 16",
    "email": "Email: kogutsirko@gmail.com",
    "working-hours": "Години роботи: Пн–Сб з 10:00 до 18:00",
    "question-title": "Маєш запитання? Мур-мяу! Дай знати нам!",
    "welcome-subtitle": "Ми раді новим друзям!",
    "invitation-text": "Чи ти хочеш прихистити хвостика? Допомогти лапами (чи гривнями)? А може — просто погавкати про життя? \nНапиши нам! Ми не кусаємось. Лише відповідаємо з теплом і вдячністю 💛",
    "form-instruction": "заповнюй форму, і ми зв’яжемося з тобою в найближчий час",
    "form-name": "",
    "form-email": "",
    "form-message": "",
    "send-button": "Надіслати",
    "call-title": "або телефонуй,",
    "call-text": "ми з радістю допоможемо та відповімо на всі твої запитання",
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
  } else {
    const el = document.getElementById(key);
    console.log(`key: ${key}, el:`, el);
    if (el) el.textContent = t[key];
  }
}
});
});