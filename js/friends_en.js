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
    "friend-title": "Friend",
    "friend-bubble-one": "Good deeds know no borders. Your help is their chance at a happy life!",
    "friend-bubble-two": "Become a support for stray animals",
    "friend-bubble-three": "The world becomes better when we do good. Give animals care and love!",
    "donate-tag": "Give a helping paw!",
    "one-time-tab": "One-time donation",
    "monthly-tab": "Monthly donation",
    "currency-label": "UAH",
    "submit-btn": "Save the tails",
    "donate-hint": "Your help is their chance at a happy life!",
    "donate-heading": "Together we can do more!",
    "donate-text": "Every hryvnia is a chance for a new home, treatment, and warmth for furry friends.",
    "support-title": "Financial contributions are the foundation of stable shelter operation",
    "support-label": "Where does the money go?",
    "support-item-1": "🍽️ Nutrition – providing quality food and milk formulas for puppies and kittens.",
    "support-item-2": "💊 Treatment – veterinary services, medications, sterilization, vaccination.",
    "support-item-3": "💡 Utility costs – electricity, water, and heating for animal areas.",
    "support-item-4": "🏠 Shelter improvements – building new enclosures, insulation, and repairs.",
    "support-note": "You can also make a quick donation via 👇",
    "donate-treatment": "For treatment",
    "donate-shelter": "For the shelter",
    "donate-details": "Payment details",
    "help-item-1": "Food",
    "help-item-2": "Medicine",
    "help-item-3": "Warm clothes",
    "help-item-4": "Bowls, leashes, collars",
    "help-item-5": "Pet toys",
    "help-title": "Help with food and supplies",
    "help-subtitle": "You don't have to donate money – you can bring the necessary items!",
    "help-location": "You can bring items directly to the shelter or send them by mail",
    "help-phone": "For current information, call +380 (68) 047 64 16",
     "adopt-title": "Adopt an Animal",
    "adopt-description": "Dream of a loyal friend? Our shelter has many dogs and cats waiting for a loving family!",
    "adopt-question": "How to take an animal home?",
    "adopt-step1-title": "Choose a friend",
    "adopt-step2-title": "Contact us",
    "adopt-step2-text": "Write or call to learn more about the animal's character and needs.",
    "adopt-step3-title": "Meeting at the shelter",
    "adopt-step3-text": "Come, meet your chosen pet, and make sure you are a perfect match.",
    "adopt-step4-title": "Formalizing guardianship",
    "adopt-step4-text": "We will help you prepare for meeting your new friend: care, feeding, and adaptation info.",
    "adopt-step5-title": "Happy life together",
    "adopt-step5-text": "You give a home to the one who needs it most!",
    "spend-bubble-top": "Meow! Spend a day with me!",
    "spend-walk-title": "🐶 Walk me and my friends!",
    "spend-walk-text": "We love to run, play, and explore the world. We really miss walks!",
    "spend-pet-title": "🐱 Pet the fluffies!",
    "spend-pet-text": "My cat friends adore attention. Hold us, scratch behind the ears — we'll be grateful!",
    "spend-bubble-bottom": "Meow-wow! Looking forward to meeting you!",
    "spend-invite": "Come to the shelter and give us a day of happiness!",
    "spend-button": "Make an appointment: +380 (68) 047 64 16",
    "change-title": "Let's change lives together!",
    "change-text": "Every contribution is a step towards a better life for homeless animals. Choose your way to help and become a friend to those who need it most!",
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
    "friend-title": "Друг",
    "friend-bubble-one": "Добрі вчинки не мають кордонів. Твоя допомога – їхній шанс на щасливе життя!",
    "friend-bubble-two": "Стань підтримкою для безпритульних тварин",
    "friend-bubble-three": "Світ стає кращим, коли ми творимо добро. Подаруй тваринам турботу і любов!",
    "donate-tag": "Дай лапу допомоги!",
    "one-time-tab": "Разова допомога",
    "monthly-tab": "Щомісячна допомога",
    "currency-label": "грн",
    "submit-btn": "Рятую хвостики",
    "donate-hint": "Твоя допомога – їхній шанс на щасливе життя!",
    "donate-heading": "Разом ми можемо більше!",
    "donate-text": "Кожна гривня – це шанс на новий дім, лікування та тепло для хвостатих друзів.",
    "support-title": "Фінансові внески – це основа стабільної роботи притулку",
    "support-label": "На що йдуть кошти?",
    "support-item-1": "🍽️ Харчування – забезпечення якісним кормом, молочними сумішами для щенят і кошенят.",
    "support-item-2": "💊 Лікування – ветеринарні послуги, ліки, стерилізація, вакцинація.",
    "support-item-3": "💡 Комунальні витрати – оплата електрики, води, опалення для приміщень із тваринами.",
    "support-item-4": "🏠 Облаштування притулку – будівництво нових вольєрів, утеплення, ремонт.",
    "support-note": "Також можна зробити швидкий донат через 👇",
    "donate-treatment": "На лікування",
    "donate-shelter": "На притулок",
    "donate-details": "Реквізити",
    "help-item-1": "Корм",
    "help-item-2": "Ліки",
    "help-item-3": "Теплі речі",
    "help-item-4": "Миски, повідки, нашийники",
    "help-item-5": "Іграшки для тварин",
    "help-title": "Допомога їжею та речами",
    "help-subtitle": "Необов’язково допомагати грошима – можна передати необхідні речі!",
    "help-location": "Принести безпосередньо можна до притулку або ж відправити поштою",
    "help-phone": "Для актуальної інформації телефонуйте +380 (68) 047 64 16",
    "adopt-title": "Забери тварину додому",
    "adopt-description": "Мрієш про вірного друга? У притулку багато собак і котиків, які чекають на люблячу сім’ю!",
    "adopt-question": "Як взяти тварину додому?",
    "adopt-step1-title": "Обери друга",
    "adopt-step2-title": "Зв’яжися з нами",
    "adopt-step2-text": "Напиши або подзвони, щоб дізнатися більше про характер та потреби тварини.",
    "adopt-step3-title": "Зустріч у притулку",
    "adopt-step3-text": "Приїдь, познайомся з обраним хвостиком, переконайся, що ви підходите одне одному.",
    "adopt-step4-title": "Оформлення опіки",
    "adopt-step4-text": "Ми допоможемо тобі підготуватися до зустрічі з новим другом: розкажемо про догляд, харчування та адаптацію.",
    "adopt-step5-title": "Щасливе життя разом",
    "adopt-step5-text": "Ти даруєш дім тому, хто найбільше цього потребує!",
    "spend-bubble-top": "Мяуу! Проведи зі мною день!",
    "spend-walk-title": "🐶 Вигуляй мене та моїх друзів!",
    "spend-walk-text": "Ми любимо бігати, гратися та досліджувати світ. Нам так не вистачає прогулянок!",
    "spend-pet-title": "🐱 Погладь пухнастиків!",
    "spend-pet-text": "Мої котячі друзі обожнюють увагу. Потримай нас на руках, почухай за вушком – ми будемо вдячні!",
    "spend-bubble-bottom": "Мяу-ґав! Будемо раді знайомству!",
    "spend-invite": "Приходь до притулку та подаруи́ нам день щастя!",
    "spend-button": "Запишись на зустріч: +380 (68) 047 64 16",
    "change-title": "Давай змінювати життя разом!",
    "change-text": "Кожен внесок – це крок до кращого життя для безпритульних тварин. Обери свій спосіб допомоги та стань другом для тих, хто цього найбільше потребує!",
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