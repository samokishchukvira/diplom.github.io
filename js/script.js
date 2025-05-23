document.addEventListener("DOMContentLoaded", () => {
  
document.querySelectorAll('.favourite-button').forEach(button => {
  button.addEventListener('click', () => {
    const petId = button.getAttribute('data-pet-id');

    fetch('like_pet.php', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({pet_id: petId})
    })
    .then(res => res.json())
    .then(data => {
      if (data.notLoggedIn) {
        document.getElementById('authModal').classList.add('show');
      } else if (data.liked) {
        button.classList.add('liked');
      }
    });
  });
});

function promiseAfterTimeout(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

function rotateWheel(degr) {
  const wheel = document.querySelector('.wheel');
  wheel.style.transform = 'rotate(' + degr + 'deg)';
  return promiseAfterTimeout(3);
}

function randomDegrees() {
  let randomFloat = Math.random() * 360;
  return Math.round(randomFloat / 60) * 60;
}

function getSegmentIndex(currentDegrees) {
  return Math.floor(currentDegrees / 60) % 6;
}

function launchSpin() {
  currentRotation += 360 * 3 + randomDegrees();

  rotateWheel(currentRotation).then(() => {
    const segmentIndex = getSegmentIndex(currentRotation);
    const images = [
      'img1.png',
      'img2.png',
      'img3.png',
      'img4.png',
      'img5.png',
      'img6.png'
    ];
    const resultImg = document.getElementById('resultImage');
    resultImg.src = images[segmentIndex];
    resultImg.style.display = 'block';
  });
}

let currentRotation = 0;

function promiseAfterTimeout(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

function rotateWheel(degr) {
  const wheel = document.querySelector('.wheel');
  wheel.style.transform = 'rotate(' + degr + 'deg)';
  return promiseAfterTimeout(3); 
}

function randomDegrees() {
  let randomFloat = Math.random() * 360;
  return Math.round(randomFloat / 60) * 60;
}

function launchSpin() {
  currentRotation += 360 * 3 + randomDegrees();

  rotateWheel(currentRotation).then(() => {
    const items = [
  { img: './images/catmem7.jpg', text: 'Ти сьогодні як той кіт, що править світом з підвіконня!' },
  { img: './images/dogmem5.png', text: 'Твій настрій — як у пса, що побачив ковбасу!' },
  { img: './images/catmem5.jpg', text: 'Ти м’який, пухнастий і трохи наглий — ідеальний кіт!' },
  { img: './images/dogmem4.png', text: 'Твоя енергія сьогодні — як у цуцика на пляжі!' },
  { img: './images/catmem4.jpg', text: 'Ти сьогодні — загадковий як кіт у коробці 😼' },
  { img: './images/dogmem3.jpg', text: 'Ти той песик, що отримав ласощі без причини. Просто бо гарний!' },
  { img: './images/catmem2.jpg', text: 'Ти такий стильний, що навіть коти з Інстаграму заздрять!' },
  { img: './images/dogmem2.webp', text: 'Ти — як пес, що катається в авто з відкритим вікном. Чиста радість!' },
  { img: './images/catmem1.jpg', text: 'Сьогодні твій день. Навіть коти муркотять у твою честь!' },
  { img: './images/dogmem1.jpeg', text: 'Ти щасливий, як той песик, що вперше побачив сніг!' }
];

    const randomIndex = Math.floor(Math.random() * items.length);
    const selected = items[randomIndex];

    const resultImg = document.getElementById('resultImage');
    const resultText = document.getElementById('resultText');

    resultImg.src = selected.img;
    resultImg.style.display = 'block';

    resultText.textContent = selected.text;
    resultText.style.display = 'block';
  });
}

document.querySelector('.spin').addEventListener('click', launchSpin);


const popup = document.getElementById("fortuneWheelPopup");
const dropdown = document.querySelector(".dropdown-container");
const closeBtn = document.querySelector(".popup-close");

dropdown.addEventListener("click", () => {
  popup.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});


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

  const swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    autoplay: {
      delay: 3000, 
    },
  });

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
    "bubble-text": "Woof! Welcome to our furry family!",
    "title-org": "Dim Sirka",
    "title-sub": "Charitable Organization",
    "dropdown-list": "Find out who you are today",
    "spin-button": "Yay! Let's go",
    "charity-header": "Flowers will wilt, sweets will be eaten, but a good deed will be remembered forever!",
    "charity-title": "We are a charitable organization,",
    "charity-text": "that helps homeless animals find a loving home. Our mission is to rescue, treat and rehome dogs and cats in need of care and love.",
    "info1-line1": "over",
    "info1-line2": "400",
    "info1-line3": "animals rescued",
    "info2-line1": "over",
    "info2-line2": "6300",
    "info2-line3": "found their homes",
    "info3-line1": "over",
    "info3-line2": "270",
    "info3-line3": "still searching for homes",
    "dogs-text": "Dogs",
    "cats-text": "Cats",
    "rescue-moving-text": "Animal Rescue Story Animal Rescue Story Animal Rescue Story",
    "rescue-mandarynka": "Mandarynka came to the shelter after being hit by a car. She went through several complicated surgeries and a long recovery. Sadly, even a year later, she’s still waiting for her owner. Her story is a reminder of how important it is to give a chance to animals who have experienced trauma.",
    "rescue-bublyk": "Bublyk was found in a terrible condition on the street. He was exhausted and scared, likely abandoned. At first, he didn’t trust people and hid away. But day by day, he became more open and kind.",
    "rescue-lyna": "Luna came to us after being found on the outskirts of the city during a storm. She was terrified, dirty, and barely walking. Her eyes showed deep sadness, but our volunteers helped her recover. After months of care, she became the most loyal and gentle dog in the shelter.",
    "donation-title": "Lend a helping paw!",
    "donation-one-time": "One-time donation",
    "donation-monthly": "Monthly donation",
    "donation-button": "Save furry lives",
    "donation-hint": "Your help is their chance for a happy life!",
    "donation-subtitle": "Together we can do more!",
    "donation-paragraph": "Every donation is a chance for a new home, treatment, and warmth for our furry friends.",
    "help-ttl": "Help as much as you can!",
    "shop-btn": "Shop",
    "support": "Support the Paws",
    "friends-btn": "Be a Supporter",
    "last-news-title": "Latest News",
    "more-news-link": "More news...",
    "news-paragraph": `Two weeks of her life wasted...
      People came, chose her, reserved her, but then... refused.
      And she waited. Waited in a cramped cage because the shelter is overcrowded...
      But she proudly remained "reserved," dreaming that someone would take her home.
      It breaks your heart.
      For us, two weeks is nothing. But for her — it’s an eternity.
      Every day passes in waiting...
      But puppyhood shouldn't be like this, right?
      You know how fast puppies grow, and with each day her chances to find a family shrink...`,
    "news-button": "Let's get acquainted!",
    "news-image-alt": "Dog in hands",
    "choose-friend-title": "Choose your four-legged friend and give them a home!",
    "choose-friend-text": "In our shelter, cute, loyal, and friendly animals are waiting for you. They are ready to become part of your family.",
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
    "bubble-text": "Гав! Вітаю у нашій хвостатій сім'ї!",
    "title-org": "Дім Сірка",
    "title-sub": "Благодійна організація",
    "dropdown-list": "Дізнайся, який ти сьогодні",
    "spin-button": "Юху! Давай поскоріше",
    "charity-header": "Квіти зів’януть, солодощі з’їдять, а добра справа запам’ятається назавжди!",
    "charity-title": "Ми – благодійна організація,",
    "charity-text": "яка допомагає безпритульним тваринам знайти люблячий дім. Наша місія – рятувати, лікувати та прилаштовувати собак і котів, які потребують турботи та любові.",
    "info1-line1": "понад",
    "info1-line2": "400",
    "info1-line3": "врятованих тварин",
    "info2-line1": "понад",
    "info2-line2": "6300",
    "info2-line3": "знайшли своїх домівок",
    "info3-line1": "понад",
    "info3-line2": "270",
    "info3-line3": "шукають свої домівки",
    "dogs-text": "Песики",
    "cats-text": "Котики",
    "rescue-moving-text": "Історія порятунку тварин Історія порятунку тварин Історія порятунку тварин",
    "rescue-mandarynka": "Мандаринка потрапила до притулку після важкого наїзду автомобілем. Вона пережила кілька складних операцій і тривалий період реабілітації. На жаль, навіть через рік після одужання вона все ще чекає на свого господаря. Її історія є нагадуванням про те, як важливо давати шанс тваринам, які пережили травми.​",
    "rescue-bublyk": "Бублик потрапив до нашого притулку після того, як його знайшли на вулиці в жахливому стані. Він був виснажений і наляканий, ймовірно, хтось залишив його без нагляду. Спочатку він був дуже обережний, не довіряв людям і намагався ховатися. Але з кожним днем він став відкритішим і добрішим.",
    "rescue-lyna": "Луна з'явилася в нашому притулку після, як її знайшли на окраїні міста під час сильної бурі. Вона була вкрай налякана, забруднена і практично не могла ходити. Луна була втраченого погляду, але наші волонтери не залишили її без допомоги. Лікування і реабілітація зайняли кілька місяців, але з часом Луна відновилася, і вона стала найвірнішою та найніжнішою собакою в притулку.",
    "donation-title": "Дай лапу допомоги!",
    "donation-one-time": "Разова допомога",
    "donation-monthly": "Щомісячна допомога",
    "donation-button": "Рятую хвостики",
    "donation-hint": "Твоя допомога – їхній шанс на щасливе життя!",
    "donation-subtitle": "Разом ми можемо більше!",
    "donation-paragraph": "Кожна гривня – це шанс на новий дім, лікування та тепло для хвостатих друзів.",
    "help-ttl": "Допомагай так, як можеш!",
    "shop-btn": "Хвостата крамничка",
    "support": "Підтримай лапки",
    "last-news-title": "Останні новини",
    "more-news-link": "Більше новин...",
    "news-paragraph": `Два тижні її життя в пусту...
Приїхали люди, обрали її, забронювали, а потім... відмовилися.
А вона чекала. Чекала у тісній кліточці, бо місць у притулку бракує...
Але гордо залишалася "заброньованою", мріючи, що її заберуть додому.
Серце розривається.
Для нас два тижні — ніщо. А для неї — це вічність.
Кожен її день минає в очікуванні...
Але не так має проходити цуценятство, правда?
Ви знаєте, як швидко ростуть цуценята, і з кожним днем її шанси знайти родину зменшуються...`,
    "news-button": "Давай знайомитися!",
    "news-image-alt": "Собака на руках",
    "friends-btn":"Стань опорою",
    "choose-friend-title": "Обери свого чотирилапого друга та подаруй йому дім!",
    "choose-friend-text": "У нашому притулку на тебе чекають милі, віддані та дружні тварини. Вони готові стати частиною твоєї родини.",
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
});
