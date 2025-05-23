document.addEventListener("DOMContentLoaded", function () {
  
document.querySelectorAll('.dog-like i.fa-heart').forEach(heartIcon => {
  heartIcon.addEventListener('click', function () {
    const dogCard = this.closest('.dog-card');
    const dogName = dogCard.getAttribute('data-dog-name');
    const photoUrl = dogCard.getAttribute('data-photo-url');
    const isLiked = this.classList.contains('liked');

    fetch('toggle_favorite.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        dog_name: dogName,
        like: !isLiked,
        photo_url: photoUrl
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        if (isLiked) {
          this.classList.remove('liked', 'fa-solid');
          this.classList.add('fa-regular');
          dogCard.classList.remove('favorite-bg');
          showMessage('Тварину видалено з улюблених');
        } else {
          this.classList.add('liked', 'fa-solid');
          this.classList.remove('fa-regular');
          dogCard.classList.add('favorite-bg');
          showMessage('Тварину додано до улюблених');
        }
      } else {
        if (data.message && data.message.includes("Неавторизований")) {
          alert("Ви не авторизовані. Здійсніть вхід.");
          window.location.href = "login.php"; 
        } else {
          alert('Помилка: ' + (data.message || 'Невідома помилка'));
        }
      }
    })
    .catch(() => alert('Помилка з’єднання.'));
  });
});

function showMessage(text) {
  const msg = document.createElement('div');
  msg.textContent = text;
  msg.className = 'favorite-msg';
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 3000);
}

function showMessage(text) {
  const msg = document.createElement('div');
  msg.textContent = text;
  msg.className = 'favorite-msg';
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 3000);
}

const items = document.querySelectorAll('.dog-card'); 
const btn = document.getElementById('show-more-btn');

items.forEach((item, index) => {
    if (index < 6) {
        item.classList.add('visible');
    } else {
        item.classList.remove('visible');
    }
});

btn.addEventListener('click', () => {
    items.forEach(item => {
        item.classList.add('visible');
    });
    btn.style.display = 'none'; 
});


// document.getElementById('dogLink').addEventListener('click', function(event) {
//     event.preventDefault(); 

//     const sound = document.getElementById('barkSound');
//     sound.play();

//     setTimeout(() => {
//       window.location.href = this.href;
//     }, 1000);
//   });

    document.getElementById('catLink').addEventListener('click', function(event) {
    event.preventDefault(); 

    const sound = document.getElementById('meowSound');
    sound.play();

    setTimeout(() => {
      window.location.href = this.href;
    }, 1000);
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