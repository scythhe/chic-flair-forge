import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "ka" | "ru";

type Dict = Record<string, { en: string; ka: string; ru: string }>;

export const t: Dict = {
  "nav.home": { en: "Home", ka: "მთავარი", ru: "Главная" },
  "nav.services": { en: "Services", ka: "სერვისები", ru: "Услуги" },
  "nav.gallery": { en: "Gallery", ka: "გალერეა", ru: "Галерея" },
  "nav.about": { en: "About", ka: "ჩვენ შესახებ", ru: "О нас" },
  "nav.booking": { en: "Book Now", ka: "დაჯავშნა", ru: "Записаться" },
  "nav.contact": { en: "Contact", ka: "კონტაქტი", ru: "Контакты" },

  "hero.tag": { en: "Est. Tbilisi · Beauty Atelier", ka: "თბილისი · სილამაზის ატელიე", ru: "Тбилиси · Салон красоты" },
  "hero.title1": { en: "Where beauty", ka: "სადაც სილამაზე", ru: "Где красота" },
  "hero.title2": { en: "meets energy.", ka: "ხვდება ენერგიას.", ru: "встречает энергию." },
  "hero.sub": {
    en: "A refined atelier for hair, nails, and bridal styling in the heart of Tbilisi. Crafted by artists, loved by 5-star clients.",
    ka: "დახვეწილი ატელიე თმისთვის, ფრჩხილებისთვის და საქორწილო სტილისთვის თბილისის ცენტრში. შექმნილია არტისტების მიერ, საყვარელი 5-ვარსკვლავიანი კლიენტების.",
    ru: "Изысканное ателье для волос, ногтей и свадебного стайлинга в сердце Тбилиси. Создано мастерами, обожаемо 5-звёздными клиентами."
  },
  "hero.cta": { en: "Reserve Your Seat", ka: "დაჯავშნე ადგილი", ru: "Забронировать место" },
  "hero.cta2": { en: "Explore Services", ka: "სერვისები", ru: "Смотреть услуги" },
  "hero.rating": { en: "5.0 · 13 reviews on Google", ka: "5.0 · 13 შეფასება Google-ზე", ru: "5.0 · 13 отзывов в Google" },

  "services.eyebrow": { en: "The Menu", ka: "მენიუ", ru: "Меню" },
  "services.title": { en: "Signature Services", ka: "ფირმული სერვისები", ru: "Фирменные услуги" },
  "services.sub": {
    en: "Every treatment is tailored. Every finish is flawless. Pricing is transparent — consultations always free.",
    ka: "ყოველი პროცედურა მორგებულია. ყოველი შედეგი უნაკლოა. ფასები გამჭვირვალეა — კონსულტაცია ყოველთვის უფასოა.",
    ru: "Каждая процедура индивидуальна. Каждый результат безупречен. Прозрачные цены — консультация бесплатно."
  },
  "services.book": { en: "Book this", ka: "დაჯავშნა", ru: "Записаться" },
  "services.from": { en: "from", ka: "დან", ru: "от" },

  "svc.hair.name": { en: "Hair Styling & Color", ka: "თმის სტილი და შეღებვა", ru: "Стрижка и окрашивание" },
  "svc.hair.desc": {
    en: "Precision cuts, balayage, highlights, glosses, keratin treatments and blowouts. Our senior stylists build the shape around your face and lifestyle — never a cookie-cutter finish.",
    ka: "ზუსტი შეჭრები, ბალაიაჟი, ჰაილაითი, კერატინი და დაბერტყვა. ჩვენი სენიორ სტილისტები ქმნიან ფორმას თქვენი სახის და ცხოვრების სტილის მიხედვით.",
    ru: "Точные стрижки, балаяж, мелирование, глосс, кератин и укладки. Наши старшие стилисты строят форму под ваше лицо и образ жизни."
  },
  "svc.hair.items": {
    en: "Women's cut · Men's cut · Balayage · Highlights · Keratin · Blowdry",
    ka: "ქალის შეჭრა · მამაკაცის შეჭრა · ბალაიაჟი · ჰაილაითი · კერატინი · დაბერტყვა",
    ru: "Женская стрижка · Мужская стрижка · Балаяж · Мелирование · Кератин · Укладка"
  },

  "svc.bridal.name": { en: "Bridal & Event Styling", ka: "საქორწილო სტილი", ru: "Свадебный стайлинг" },
  "svc.bridal.desc": {
    en: "Hair, makeup and headpiece styling for the biggest day of your life. Trial sessions, on-location service, and pearl or crystal accessorising available.",
    ka: "თმა, მაკიაჟი და აქსესუარები თქვენი ცხოვრების ყველაზე მნიშვნელოვანი დღისთვის. საცდელი სესიები, გამოძახება ადგილზე, მარგალიტისა და კრისტალის აქსესუარები.",
    ru: "Причёска, макияж и украшения для главного дня в жизни. Пробные сессии, выезд на локацию, аксессуары с жемчугом и кристаллами."
  },
  "svc.bridal.items": {
    en: "Bridal trial · Wedding day styling · Hair accessories · On-location",
    ka: "საცდელი სესია · საქორწილო დღე · აქსესუარები · გამოძახება",
    ru: "Пробная укладка · День свадьбы · Аксессуары · Выезд"
  },

  "svc.nails.name": { en: "Nails & Manicure", ka: "ფრჩხილები და მანიკური", ru: "Ногти и маникюр" },
  "svc.nails.desc": {
    en: "Gel, acrylic and natural manicures with hand-painted art, chrome, glitter and French finishes. Sterilised tools and hypoallergenic products only.",
    ka: "გელი, აკრილი და ნატურალური მანიკური მხატვრობით, ქრომით, ბზინვარებით და ფრანგული ფინიშით. მხოლოდ სტერილიზებული ხელსაწყოები.",
    ru: "Гель, акрил и натуральный маникюр с росписью, хромом, глиттером и френчем. Только стерильные инструменты и гипоаллергенные средства."
  },
  "svc.nails.items": {
    en: "Classic manicure · Gel polish · Nail art · Extensions · Pedicure",
    ka: "კლასიკური · გელ-ლაქი · ნეილ-არტი · გაზრდა · პედიკური",
    ru: "Классический · Гель-лак · Дизайн · Наращивание · Педикюр"
  },

  "svc.skin.name": { en: "Skin & Facials", ka: "კანი და ფეისიალი", ru: "Уход за кожей" },
  "svc.skin.desc": {
    en: "Deep cleansing, hydration, brightening and anti-ageing facials. We consult on your skin type before every session and recommend at-home care.",
    ka: "ღრმა გაწმენდა, ჰიდრატაცია, გამანათებელი და ანტი-ეიჯინგ ფეისიალები. კონსულტაცია კანის ტიპზე ყოველი სესიის წინ.",
    ru: "Глубокое очищение, увлажнение, осветление и anti-age уход. Консультация по типу кожи перед каждым сеансом."
  },
  "svc.skin.items": {
    en: "Deep cleanse · Hydrating facial · Peel · Anti-age · Brow shaping",
    ka: "ღრმა გაწმენდა · ჰიდრატაცია · პილინგი · ანტი-ეიჯი · წარბები",
    ru: "Чистка · Увлажнение · Пилинг · Анти-возраст · Брови"
  },

  "svc.spa.name": { en: "Spa & Massage", ka: "სპა და მასაჟი", ru: "Спа и массаж" },
  "svc.spa.desc": {
    en: "Aromatic full-body, deep-tissue, hot-stone and couples' massage in a private room. Complimentary tea and quiet lounge before and after.",
    ka: "არომატული სრული სხეულის, ღრმა ქსოვილის, ცხელი ქვების და წყვილების მასაჟი. უფასო ჩაი და მშვიდი ლაუნჯი.",
    ru: "Ароматический массаж всего тела, глубокий, горячими камнями и парный. Чай в подарок и тихая лаунж-зона."
  },
  "svc.spa.items": {
    en: "Relaxing · Deep tissue · Hot stone · Couples · Aromatherapy",
    ka: "მოსვენება · ღრმა · ცხელი ქვები · წყვილები · არომათერაპია",
    ru: "Расслабляющий · Глубокий · Стоун · Парный · Аромат"
  },

  "svc.makeup.name": { en: "Makeup Artistry", ka: "მაკიაჟი", ru: "Макияж" },
  "svc.makeup.desc": {
    en: "Editorial, evening, natural and photoshoot makeup by artists trained on-set. Airbrush, lash application and long-wear finishes.",
    ka: "რედაქციული, საღამო, ბუნებრივი და გადაღების მაკიაჟი. ეარბრაშ, წამწამების დაფიქსირება.",
    ru: "Редакционный, вечерний, натуральный и съёмочный макияж. Аэрограф, ресницы, стойкие финиши."
  },
  "svc.makeup.items": {
    en: "Day · Evening · Editorial · Lash lift · Airbrush",
    ka: "დღის · საღამო · რედაქციული · წამწამები · ეარბრაშ",
    ru: "Дневной · Вечерний · Редакционный · Ресницы · Аэрограф"
  },

  "gallery.eyebrow": { en: "The Work", ka: "სამუშაოები", ru: "Работы" },
  "gallery.title": { en: "Real clients. Real results.", ka: "რეალური კლიენტები. რეალური შედეგები.", ru: "Реальные клиенты. Настоящие результаты." },

  "about.eyebrow": { en: "The House", ka: "სახლი", ru: "Дом" },
  "about.title": { en: "A quiet space for a loud transformation.", ka: "მშვიდი სივრცე ხმაურიანი გარდაქმნისთვის.", ru: "Тихое место для яркого преображения." },
  "about.body": {
    en: "Energy Beauty Salon has been Tbilisi's best-kept secret since day one — 5.0 stars, 13 rave reviews, and a rotating team of stylists trained in Paris, Milan and Moscow. From your first coffee at the lounge to the final mirror check, every moment is designed to feel like a private appointment, not a chair on a factory floor.",
    ka: "Energy Beauty Salon თბილისის საიდუმლოა პირველი დღიდან — 5.0 ვარსკვლავი, 13 შესანიშნავი შეფასება, სტილისტთა გუნდი გაწვრთნილი პარიზში, მილანში და მოსკოვში.",
    ru: "Energy Beauty Salon — главный секрет Тбилиси с самого первого дня: 5.0 звёзд, 13 восторженных отзывов и команда стилистов, обученных в Париже, Милане и Москве."
  },
  "about.stat1": { en: "5.0 rating", ka: "5.0 რეიტინგი", ru: "Рейтинг 5.0" },
  "about.stat2": { en: "13 five-star reviews", ka: "13 ხუთვარსკვლავიანი შეფასება", ru: "13 пятизвёздочных отзывов" },
  "about.stat3": { en: "10+ hours a day", ka: "10+ საათი დღეში", ru: "10+ часов в день" },
  "about.stat4": { en: "Master stylists", ka: "ოსტატი სტილისტები", ru: "Мастера-стилисты" },

  "reviews.eyebrow": { en: "Kind Words", ka: "მადლობის სიტყვები", ru: "Отзывы" },
  "reviews.title": { en: "Loved on Google. Loved in person.", ka: "შეყვარებული Google-ზე და პირადად.", ru: "Любят в Google. Любят лично." },
  "reviews.r1": { en: "Amir is one of the best barbers — he advised me on what style suits me best and offered the best quality haircut.", ka: "ამირი ერთ-ერთი საუკეთესო ბარბერია — მან შემირჩია საუკეთესო სტილი და ხარისხიანი შეჭრა.", ru: "Амир — один из лучших барберов, посоветовал стиль, который мне подходит, и сделал идеальную стрижку." },
  "reviews.r2": { en: "Staff was friendly and helpful. Got haircuts for the whole family.", ka: "პერსონალი მეგობრული და დამხმარეა. მთელი ოჯახისთვის შევიჭერით თმა.", ru: "Персонал дружелюбный и внимательный. Подстригли всю семью." },
  "reviews.r3": { en: "It is the best salon I have ever been to.", ka: "ეს არის საუკეთესო სალონი სადაც ოდესმე ვყოფილვარ.", ru: "Лучший салон, в котором я когда-либо была." },

  "book.eyebrow": { en: "Reservations", ka: "დაჯავშნა", ru: "Запись" },
  "book.title": { en: "Book your appointment", ka: "დაჯავშნეთ ვიზიტი", ru: "Забронируйте визит" },
  "book.sub": { en: "Same-day slots are usually available. We'll confirm by phone within one business hour.", ka: "იმავე დღეს ადგილები ჩვეულებრივ თავისუფალია. დავადასტურებთ ტელეფონით საათში.", ru: "Обычно есть места в тот же день. Подтвердим по телефону в течение часа." },
  "book.name": { en: "Your name", ka: "თქვენი სახელი", ru: "Ваше имя" },
  "book.phone": { en: "Phone number", ka: "ტელეფონი", ru: "Телефон" },
  "book.email": { en: "Email (optional)", ka: "ელფოსტა (სურვ.)", ru: "Email (необяз.)" },
  "book.service": { en: "Service", ka: "სერვისი", ru: "Услуга" },
  "book.date": { en: "Preferred date", ka: "სასურველი თარიღი", ru: "Желаемая дата" },
  "book.time": { en: "Preferred time", ka: "სასურველი დრო", ru: "Время" },
  "book.notes": { en: "Notes (optional)", ka: "შენიშვნა", ru: "Комментарий" },
  "book.submit": { en: "Confirm Reservation", ka: "დადასტურება", ru: "Подтвердить" },
  "book.success": { en: "Thank you! We'll call you shortly to confirm.", ka: "მადლობა! მალე დაგირეკავთ დასადასტურებლად.", ru: "Спасибо! Скоро перезвоним для подтверждения." },

  "contact.eyebrow": { en: "Visit", ka: "მოგვინახულეთ", ru: "Приходите" },
  "contact.title": { en: "Come see us", ka: "მოგვინახულეთ", ru: "Ждём вас в гости" },
  "contact.addr": { en: "39 Pekini Ave, Tbilisi", ka: "პეკინის გამზ. 39, თბილისი", ru: "Пекинская 39, Тбилиси" },
  "contact.hours": { en: "Mon–Sun · 10 am – 8 pm", ka: "ორშ–კვირა · 10:00 – 20:00", ru: "Пн–Вс · 10:00 – 20:00" },
  "contact.phone": { en: "+995 571 12 14 12", ka: "+995 571 12 14 12", ru: "+995 571 12 14 12" },

  "footer.rights": { en: "All rights reserved.", ka: "ყველა უფლება დაცულია.", ru: "Все права защищены." },
  "footer.tag": { en: "Beauty, refined.", ka: "სილამაზე, დახვეწილი.", ru: "Красота, доведённая до совершенства." },
};

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; tr: (k: string) => string }>({
  lang: "en", setLang: () => {}, tr: (k) => k,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const tr = (k: string) => (t[k]?.[lang] ?? k);
  return <LangCtx.Provider value={{ lang, setLang, tr }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);
