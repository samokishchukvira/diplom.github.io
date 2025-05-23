document.addEventListener("DOMContentLoaded", () => {

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
     "mission-speech": "Hi, I'm one of the rescued furry friends! Let me tell you more about our shelter...",
    "mission-title": "Our Mission",
    "mission-text": "We aim to reduce the number of stray animals by helping them and finding homes.",
    "history-title": "How it all began...",
    "history-text": `The charitable organization "Dim Sirka" has been operating since 2012, uniting volunteers who rescue stray animals in Ivano-Frankivsk and the region. We treat, foster, and rehome animals and promote sterilization. Currently, around 800 animals are under our care in two shelters and foster homes. Our work is supported entirely by volunteer efforts, as the city provides no financial support.`,
    "activity-title": "Our Activity",
    "activity-shelter-title": "Shelter and Care",
    "activity-shelter-list1": "Safe home for animals",
    "activity-shelter-list2": "Nutrition and care",
    "activity-medical-title": "Medical Assistance",
    "activity-medical-list1": "Treatment and vaccination",
    "activity-medical-list2": "Sterilization",
    "activity-adoption-title": "Adoption",
    "activity-adoption-list1": "Finding new families",
    "activity-adoption-list2": "Organizing meetings with animals",
    "values-list1": "Love and care – every animal deserves safety and a chance for a happy life.",
    "values-list2": "Responsibility – we don’t abandon animals, we help them find a home.",
    "values-list3": "Together we’re strong – volunteers, donors, and everyone who cares bring change.",
    "values-list4": "New families, not cages – we seek loving owners for each pet.",
    "values-list5": "Education and change – we promote a culture of responsible animal care.",
    "contact-form-text": "Fill out the form and we’ll contact you shortly",
    "contact-form-name": "Name",
    "contact-form-email": "Email",
    "contact-form-message": "Message",
    "contact-form-send": "Send",
    "contact-question-tag": "Got questions/suggestions?",
    "contact-call-title": "or call us,",
    "contact-call-text": "we'll be happy to help and answer all your questions",
    "contact-phone": "+380 (68) 047 64 16",
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
    "mission-speech": "Привіт, я один із врятованих хвостиків! Давай розповім тобі більше про наш притулок...",
    "mission-title": "Наша місія",
    "mission-text": "Ми прагнемо зменшити кількість безпритульних тварин, надаючи їм допомогу та шукаючи дім.",
    "history-title": "Як усе починалося...",
    "history-text": `Благодійна організація "Дім Сірка" працює з 2012 року, об'єднуючи волонтерів, які рятують безпритульних тварин в Івано-Франківську та області. Ми займаємося лікуванням, перетримкою, прилаштуванням тварин і популяризацією стерилізації. Наразі під нашою опікою близько 800 тварин у двох притулках та на перетримці. Діяльність тримається виключно на волонтерських зусиллях, адже місто не надає фінансової підтримки.`,
    "activity-title": "Наша діяльність",
    "activity-shelter-title": "Притулок та догляд",
    "activity-shelter-list1": "Безпечний дім для тварин",
    "activity-shelter-list2": "Харчування та догляд",
    "activity-medical-title": "Медична допомога",
    "activity-medical-list1": "Лікування та вакцинація",
    "activity-medical-list2": "Стерилізація",
    "activity-adoption-title": "Адопція",
    "activity-adoption-list1": "Пошук нових родин",
    "activity-adoption-list2": "Організація зустрічей з твариною",
    "values-list1": "Любов та турбота – кожна тварина заслуговує на безпеку та шанс на щасливе життя.",
    "values-list2": "Відповідальність – ми не кидаємо тварин напризволяще, а допомагаємо знайти дім.",
    "values-list3": "Разом – сила – волонтери, благодійники й усі небайдужі творять зміни.",
    "values-list4": "Нові родини, а не клітки – ми шукаємо люблячих господарів для кожного підопічного.",
    "values-list5": "Просвіта та зміни – формуємо культуру відповідального ставлення до тварин.",
    "contact-form-text": "заповнюй форму, і ми зв’яжемося з тобою в найближчий час",
    "contact-form-name": "Ім’я",
    "contact-form-email": "Email",
    "contact-form-message": "Повідомлення",
    "contact-form-send": "Надіслати",
    "contact-question-tag": "Є питання/пропозиції?",
    "contact-call-title": "або телефонуй,",
    "contact-call-text": "ми з радістю допоможемо та відповімо на всі твої запитання",
    "contact-phone": "+380 (68) 047 64 16",
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