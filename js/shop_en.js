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
    "shop-title": "Tailed shop",
    "intro-header": "Imagine walking into a cozy little shop,",
    "intro-text": "choosing yourself a cup of aromatic coffee, a favorite souvenir, or a tasty treat. But there’s one difference — you won’t take these things with you. Instead, your purchase turns into food, medicine, and help for homeless animals!",
    "cat-speech": "Meow! Want to do a good deed?",
    "cat-list1": 'You "buy" coffee, sweets, or souvenirs – just like a regular purchase.',
    "cat-list2":'100% of the funds from this donation go to support the shelter: treatment, food, vaccination, and finding homes for furry friends.',
    "cat-list3": 'You don’t receive a product, but something more valuable – a chance to help those who need it most.',
    "product1_name": "A Cup of Coffee for a Paw",
    "product2_name": "Tea with a Scent of Care",
    "buy1": "Buy",
    "buy2": "Buy",
    "price1": "70 UAH",
    "price2": "100 UAH",
    "thank_title": "Thank you for your help!",
    "thank_text1": "Each contribution is a chance for our furry friends to have a better future. Your support provides food, medicine, and hope for a new home.",
    "thank_subtitle": "Your kindness matters!",
    "thank_text2": "Join our cause and help us change animals' lives for the better.",
    "product3_name": "Marzipan stars",
    "price3": "200 UAH",
    "buy3": "Buy",
    "product4_name": "Chocolate bar with kindness",
    "price4": "120 UAH",
    "buy4": "Buy",
    "product5_name": "Cake of kindness",
    "price5": "350 UAH",
    "buy5": "Buy",
    "product6_name": "Croissant of hope",
    "price6": "150 UAH",
    "buy6": "Buy",
    "product7_name": "Light of kindness",
    "price7": "250 UAH",
    "buy7": "Buy",
    "product8_name": "Heart-shaped souvenir",
    "price8": "180 UAH",
    "buy8": "Buy",
    "thank_title": "Thank you for your support!",
    "thank_text1": "Every contribution is a chance for our furry friends to have a better future. Your support provides animals with food, treatment, and hope for a new home.",
    "thank_subtitle": "Your kindness matters!",
    "thank_text2": "Join the good cause and help us change the lives of animals for the better.",
    "footer-headings": "Together, we can save more furry friends!",
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
    "shop-title": "Хвостата крамничка",
    "intro-header": "Уяви, що ти заходиш у затишну крамничку,",
    "intro-text": "вибираєш собі чашку ароматної кави, улюблений сувенір чи приємний смаколик. Але є одна особливість — ці речі ти не забереш із собою. Натомість твоя покупка перетворюється на їжу, ліки та допомогу для безпритульних тварин!",
    "cat-speech": "Мяу! Хочеш зробити добру справу?",
    "cat-list1": 'Ти "купуєш" каву, солодощі чи сувенір – ніби робиш звичайну покупку.',
    "cat-list2": '100% коштів із цього внеску йдуть на підтримку притулку: лікування, харчування, вакцинацію та пошук домівок для хвостиків.',
    "cat-list3": 'Ти отримуєш не товар, а щось цінніше – можливість допомогти тим, хто цього найбільше потребує.',
    "product1_name": "Чашка кави для хвостика",
    "price1": "70 грн",
    "buy1": "Купити",
    "product2_name": "Чай з ароматом турботи",
    "price2": "100 грн",
    "buy2": "Купити",
    "product3_name": "Марципанові зірки",
    "price3": "200 грн",
    "buy3": "Купити",
    "product4_name": "Плитка шоколаду з добром",
    "price4": "120 грн",
    "buy4": "Купити",
    "product5_name": "Торт доброти",
    "price5": "350 грн",
    "buy5": "Купити",
    "product6_name": "Рогалик з надією",
    "price6": "150 грн",
    "buy6": "Купити",
    "product7_name": "Світло доброти",
    "price7": "250 грн",
    "buy7": "Купити",
    "product8_name": "Сувенір серця",
    "price8": "180 грн",
    "buy8": "Купити",
    "thank_title": "Дякуємо за вашу допомогу!",
    "thank_text1": "Кожен внесок — це шанс для наших хвостиків на краще майбутнє. Ваша підтримка дає тваринам харчування, лікування та надію на новий дім.",
    "thank_subtitle": "Ваша доброта має значення!",
    "thank_text2": "Долучайтеся до доброї справи та допомагайте нам змінювати життя тварин на краще.",
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