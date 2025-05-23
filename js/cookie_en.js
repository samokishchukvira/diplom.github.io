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
    "policy-title": "Cookie Policy",
    "policy-intro": "The shelter 'Dim Sirka' uses cookies to improve our website, personalize content and ads, and analyze traffic. By continuing to browse our site, you agree to the use of cookies in accordance with this policy.",
    "what-are-cookies-title": "What are cookies?",
    "what-are-cookies-text": "Cookies are small files stored on your device when you visit our site. They help improve your experience by allowing the site to remember your settings and preferences. They do not contain personal information and cannot harm your device.",
    "data-collected-title": "What data do we collect and why?",
    "data-collected-text": "We use cookies to collect certain information that allows us to:",
    "data-collected-list": [
      "Analyze site traffic and the effectiveness of our marketing campaigns;",
      "Personalize content tailored to your interests;",
      "Improve site functionality and ensure uninterrupted access to the services you need."
    ],
    "data-sharing-title": "Do we share data with third parties?",
    "data-sharing-text": "We do not sell, provide, or transfer your personal data to third parties without your consent, except when required by law or to protect our rights. Your data may only be shared with partners who provide our technical services, such as hosting providers, or as required by law.",
    "cookie-use-title": "How do we use cookies?",
    "cookie-use-text": "We use cookies for purposes such as:",
    "cookie-use-list": [
      "Analyzing site traffic to understand which sections are most popular among users;",
      "Facilitating site navigation and saving your settings to improve user experience;",
      "Personalizing ads and offers according to your interests and preferences."
    ],
    "control-cookies-title": "How to control cookies?",
    "control-cookies-text": "You can control or disable cookies through your browser settings. Please note that disabling cookies may affect some site features and limit your access to all services.",
    "privacy-rights-title": "How can you exercise your privacy rights?",
    "privacy-rights-text": "You have the right to request access to, correction, or deletion of your personal data. You may also withdraw consent to data processing at any time by contacting us via the contact information provided on our site.",
    "consent-title": "Consent to cookie use",
    "consent-text": "By using our site, you agree to our cookie policy and consent to the collection and processing of data via cookies. If you do not want cookies to be collected, please change your browser settings.",
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
    "policy-title": "Політика використання Cookies",
    "policy-intro": "Притулок Дім сірка використовує файли cookies для покращення роботи нашого сайту, персоналізації контенту та реклами, а також для аналізу трафіку. Продовжуючи перегляд нашого сайту, ви погоджуєтесь з використанням cookies відповідно до цієї політики.",
    "what-are-cookies-title": "Що таке cookies?",
    "what-are-cookies-text": "Cookies — це невеликі файли, які зберігаються на вашому пристрої, коли ви відвідуєте наш сайт. Вони допомагають покращити ваш досвід, дозволяючи сайту запам'ятовувати ваші налаштування та вподобання. Вони не містять особистої інформації та не можуть завдати шкоди вашому пристрою.",
    "data-collected-title": "Які дані ми збираємо і навіщо?",
    "data-collected-text": "Ми використовуємо cookies для збору певної інформації, яка дозволяє нам:",
    "data-collected-list": [
      "Аналізувати відвідуваність нашого сайту та ефективність наших маркетингових кампаній;",
      "Персоналізувати контент, адаптуючи його під ваші інтереси;",
      "Покращити роботу сайту та його функціональність, забезпечуючи безперервний доступ до необхідних вам сервісів."
    ],
    "data-sharing-title": "Чи передаються дані третім особам?",
    "data-sharing-text": "Ми не продаємо, не надаємо і не передаємо ваші персональні дані третім особам без вашої згоди, за винятком випадків, коли це необхідно для виконання законних вимог чи захисту наших прав. Ваші дані можуть бути передані лише партнерам, які забезпечують наші технічні послуги, наприклад, постачальникам хостинг-послуг, або якщо цього вимагає закон.",
    "cookie-use-title": "Як ми використовуємо cookies?",
    "cookie-use-text": "Ми використовуємо cookies для таких цілей:",
    "cookie-use-list": [
      "Аналізу трафіку сайту, щоб зрозуміти, які розділи сайту найпопулярніші серед наших користувачів;",
      "Полегшення навігації сайтом та збереження ваших налаштувань для покращення користувацького досвіду;",
      "Персоналізації реклами та пропозицій, що відповідають вашим інтересам та вподобанням."
    ],
    "control-cookies-title": "Як контролювати cookies?",
    "control-cookies-text": "Ви можете контролювати або вимикати cookies через налаштування вашого браузера. Зазначаємо, що якщо ви вимкнете cookies, це може вплинути на деякі функції сайту, і ви не зможете отримати повний доступ до всіх сервісів нашого сайту.",
    "privacy-rights-title": "Як ви можете реалізувати своє право на конфіденційність?",
    "privacy-rights-text": "Ви маєте право вимагати доступу до ваших персональних даних, їх виправлення або видалення. Ви також можете відкликати свою згоду на обробку даних у будь-який час, зв'язавшись з нами через нашу контактну інформацію. Для того, щоб реалізувати ці права, будь ласка, зверніться до нас через контактні дані, надані на нашому сайті.",
    "consent-title": "Погодження з використанням cookies",
    "consent-text": "Використовуючи наш сайт, ви погоджуєтесь з нашою політикою cookies та погоджуєтесь на збір та обробку даних за допомогою cookies. Якщо ви не хочете, щоб cookies збиралися, будь ласка, змініть налаштування вашого браузера.",
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