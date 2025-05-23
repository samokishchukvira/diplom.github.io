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
    "reports-title": "Transparency and Trust",
    "reports-description": "We value your support and want everyone to know how donations are used. In the reports, you'll find information about income and expenses. Together, we are changing animals' lives!",
    "reports-contact-text": "If you need more detailed reports or information for previous years – contact us.",
    "month-2025-01": "January",
    "month-2025-02": "February",
    "month-2025-03": "March",
    "month-2024-01": "January",
    "month-2024-02": "February",
    "month-2024-03": "March",
    "month-2024-04": "April",
    "month-2024-05": "May",
    "month-2024-06": "June",
    "month-2024-07": "July",
    "month-2024-08": "August",
    "month-2024-09": "September",
    "month-2024-10": "October",
    "month-2024-11": "November",
    "month-2024-12": "December",
    "month-2023-09": "September",
    "month-2023-10": "October",
    "month-2023-11": "November",
    "month-2023-12": "December",
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
    "reports-title": "Відкритість та довіра",
    "reports-description": "Ми цінуємо вашу підтримку та хочемо, щоб кожен знав, як використовуються пожертвування. У звітах ви знайдете інформацію про надходження та витрати. Разом ми змінюємо життя тварин!",
    "reports-contact-text": "Якщо вам потрібні детальніші звіти або інформація за попередні роки – зв’яжіться з нами.",
    "month-2025-01": "Січень",
    "month-2025-02": "Лютий",
    "month-2025-03": "Березень",
    "month-2024-01": "Січень",
    "month-2024-02": "Лютий",
    "month-2024-03": "Березень",
    "month-2024-04": "Квітень",
    "month-2024-05": "Травень",
    "month-2024-06": "Червень",
    "month-2024-07": "Липень",
    "month-2024-08": "Серпень",
    "month-2024-09": "Вересень",
    "month-2024-10": "Жовтень",
    "month-2024-11": "Листопад",
    "month-2024-12": "Грудень",
    "month-2023-09": "Вересень",
    "month-2023-10": "Жовтень",
    "month-2023-11": "Листопад",
    "month-2023-12": "Грудень",
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