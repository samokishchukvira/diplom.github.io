
  const translations = {
    ua: {
      opennessTitle: "Відкритість та довіра",
      opennessText: "Ми цінуємо вашу підтримку та хочемо, щоб кожен знав, як використовуються пожертвування. У звітах ви знайдете інформацію про надходження та витрати. Разом ми змінюємо життя тварин!",
      reportMonths: [
        "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
        "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
      ],
      contactLine: "Якщо вам потрібні детальніші звіти або інформація за попередні роки – зв’яжіться з нами.",
      phoneText: "+380 (68) 047 64 16"
    },
    en: {
      opennessTitle: "Transparency and Trust",
      opennessText: "We value your support and want everyone to know how donations are used. In the reports, you will find information about income and expenses. Together we change animals' lives!",
      reportMonths: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ],
      contactLine: "If you need more detailed reports or information for previous years – contact us.",
      phoneText: "+380 (68) 047 64 16"
    }
  };

  let currentLang = 'ua';

  document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-toggle-btn');
    const langText = langBtn.querySelector('.lang-text');

    const opennessTitle = document.querySelector('.openness-section h1');
    const opennessParagraph = document.querySelector('.openness-section p');
    const contactInfo = document.querySelector('.information-block .info p');
    const phoneText = document.querySelector('.information-block .phone');
    const monthButtons = document.querySelectorAll('.download-btn, .months a');

    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'ua' ? 'en' : 'ua';
      langText.textContent = currentLang === 'ua' ? 'EN' : 'UA';

      const t = translations[currentLang];
      opennessTitle.textContent = t.opennessTitle;
      opennessParagraph.textContent = t.opennessText;
      contactInfo.textContent = t.contactLine;
      phoneText.textContent = t.phoneText;

      monthButtons.forEach((btn, index) => {
        const img = btn.querySelector('img');
        if (img && t.reportMonths[index % t.reportMonths.length]) {
          btn.innerHTML = '';
          btn.appendChild(img);
          btn.append(` ${t.reportMonths[index % t.reportMonths.length]}`);
        }
      });
    });
  });
