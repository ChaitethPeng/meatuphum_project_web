/* ===== Meatophum (មាតុភូមិ) — shared layout, components & menu ===== */
const SITE = {
  nameKm: 'មាតុភូមិ',
  nameEn: 'Meatophum',
  tagKm: 'ប្រហុក & គ្រឿងអន្លក់',
  tagEn: 'Prahok & Kreoung Anlok',
  phone: '+855 17 566 211',
  facebook: 'https://www.facebook.com/meatophumcambodia/',
  hours: '10:00 – 20:30', // from public listings — confirm with the restaurant
  rating: '4.0',
  reviews: '300+',
  avgPrice: '$2.5',
  branches: [
    {
      id: 'st1003', km: 'សាខាផ្លូវ ១០០៣', en: 'Street 1003 Branch',
      address: '1-3, St. 1003, Phnom Penh 12452',
      phone: '+855 17 566 211',
      map: 'https://maps.google.com/maps?q=Meatophum%2C%20St%201003%2C%20Phnom%20Penh&z=16&output=embed',
      link: 'https://www.google.com/maps/search/?api=1&query=Meatophum+St+1003+Phnom+Penh',
    },
    {
      id: 'hanoi', km: 'សាខាមហាវិថីមិត្តភាពភ្នំពេញ-ហាណូយ', en: 'Hanoi Friendship Blvd Branch',
      address: '5 Phnom Penh–Hanoi Friendship Blvd (1019), Phnom Penh',
      phone: '+855 17 566 211',
      map: 'https://maps.google.com/maps?q=Meatophum%2C%20Hanoi%20Friendship%20Blvd%2C%20Phnom%20Penh&z=16&output=embed',
      link: 'https://www.google.com/maps/search/?api=1&query=Meatophum+Hanoi+Friendship+Blvd+Phnom+Penh',
    },
  ],
};

const NAV = [
  { href: 'index.html', key: 'home', km: 'ទំព័រដើម', en: 'Home' },
  { href: 'index.html#menu', key: 'menu', km: 'ម៉ឺនុយ', en: 'Menu' },
  { href: 'about.html', key: 'about', km: 'អំពីយើង', en: 'About Us' },
  { href: 'contact.html', key: 'contact', km: 'ទំនាក់ទំនង', en: 'Contact' },
];

const tel = p => 'tel:' + p.replace(/\s/g, '');
const IMG = k => `assets/img/${k}.jpg`;

const icon = {
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2"/>',
  pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  up: '<path d="M6 15l6-6 6 6"/>',
  fb: '<path d="M14 8h3V4h-3a4 4 0 00-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8z"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
};
const svg = (name, cls = 'w-5 h-5', fill = false) =>
  `<svg class="${cls}" viewBox="0 0 24 24" ${fill ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"'} aria-hidden="true">${icon[name]}</svg>`;

const logoSVG = (cls = 'w-10 h-10') =>
  `<img src="assets/img/logo.jpg" alt="${SITE.nameEn} logo" class="${cls} shrink-0 rounded-xl bg-white object-contain p-0.5 ring-1 ring-gold/40">`;

function angkorSVG(cls = '', fill = 'currentColor') {
  const H = 170;
  const tower = (cx, h, w) => {
    const s = [[1, 0], [1, .34], [.82, .40], [.78, .52], [.58, .58], [.52, .70], [.36, .75], [.30, .84], [.18, .88], [.12, .95], [0, 1]];
    const l = s.map(([x, y]) => `${cx - w * x},${H - h * y}`);
    const r = s.slice(0, -1).reverse().map(([x, y]) => `${cx + w * x},${H - h * y}`);
    return `<polygon points="${[...l, ...r].join(' ')}"/>`;
  };
  return `<svg class="${cls}" viewBox="0 0 600 ${H}" preserveAspectRatio="xMidYMax meet" aria-hidden="true"><g fill="${fill}">
    <rect x="40" y="${H - 22}" width="520" height="22"/><rect x="80" y="${H - 40}" width="440" height="20"/>
    ${tower(140, 95, 26)}${tower(220, 120, 32)}${tower(300, 160, 40)}${tower(380, 120, 32)}${tower(460, 95, 26)}
  </g></svg>`;
}

const ornament = (cls = 'text-gold') => `
<div class="flex items-center justify-center gap-3 ${cls}" aria-hidden="true">
  <span class="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-current"></span>
  <svg class="w-9 h-9" viewBox="0 0 36 36"><g fill="none" stroke="currentColor" stroke-width="1.3">
    <path d="M18 3c3.5 5 9 7.5 9 15s-5.5 10-9 15c-3.5-5-9-7.5-9-15s5.5-10 9-15z"/>
    <path d="M3 18c5-2 8 0 10 0M33 18c-5-2-8 0-10 0"/></g><circle cx="18" cy="18" r="3" fill="currentColor"/></svg>
  <span class="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-current"></span>
</div>`;

/* ===== Header ===== */
function renderHeader(active) {
  const isActive = n => n.key === active;
  const links = NAV.map(n => `
    <a href="${n.href}" data-nav-key="${n.key}" class="group relative px-1 py-2 ${isActive(n) ? 'text-gold' : 'text-parchment/85 hover:text-gold-light'} transition">
      <span class="block font-khmer text-[15px] leading-none">${n.km}</span>
      <span class="block text-[10px] uppercase tracking-[.22em] opacity-70 mt-1">${n.en}</span>
      <span class="absolute -bottom-0.5 left-0 h-0.5 bg-gold transition-all ${isActive(n) ? 'w-full' : 'w-0 group-hover:w-full'}"></span>
    </a>`).join('');
  const mobile = NAV.map(n => `
    <a href="${n.href}" data-nav-key="${n.key}" class="flex items-baseline justify-between border-b border-gold/15 py-4 ${isActive(n) ? 'text-gold' : 'text-parchment'}">
      <span class="font-khmer text-lg">${n.km}</span><span class="text-xs uppercase tracking-[.2em] opacity-70">${n.en}</span></a>`).join('');

  document.getElementById('site-header').innerHTML = `
  <div class="fixed inset-x-0 top-0 z-50">
    <div id="annBar" class="bg-clay text-parchment text-xs sm:text-sm">
      <div class="mx-auto max-w-7xl px-4 h-9 flex items-center justify-center gap-2 text-center">
        <span class="hidden sm:inline-flex items-center gap-1 rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold uppercase text-jungle-900">New</span>
        <span><span class="font-khmer">បើករៀងរាល់ថ្ងៃ</span> · Open daily ${SITE.hours} · ${SITE.branches.length} branches in Phnom Penh</span>
        <a href="${tel(SITE.phone)}" class="ml-2 underline decoration-gold/70 underline-offset-2 hover:text-gold-light">${SITE.phone}</a>
      </div>
    </div>
    <header id="topbar" class="transition-all duration-300 bg-jungle-950/75 backdrop-blur-md border-b border-gold/10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        <a href="index.html" class="flex items-center gap-3 text-gold">
          ${logoSVG('w-10 h-10')}
          <span class="leading-tight">
            <span class="block font-moul text-lg sm:text-xl text-gold-gradient">${SITE.nameKm}</span>
            <span class="block text-[10px] tracking-[.25em] uppercase text-parchment/70">${SITE.nameEn}</span>
          </span>
        </a>
        <nav class="hidden md:flex items-center gap-8">${links}</nav>
        <div class="hidden md:flex items-center gap-3">
          <a href="${SITE.facebook}" target="_blank" rel="noopener" aria-label="Facebook" class="h-10 w-10 grid place-items-center rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-jungle-900 transition">${svg('fb', 'w-4 h-4', true)}</a>
          <a href="contact.html#reserve" class="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-jungle-900 hover:bg-gold-light transition shadow-glow">
            <span class="font-khmer">កក់តុ</span><span class="opacity-60">·</span>Book</a>
        </div>
        <button id="menuBtn" class="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold" aria-label="Open menu" aria-expanded="false">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path id="menuIcon" d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </div>
      <div id="mobileNav" class="md:hidden hidden bg-jungle-950/95 border-t border-gold/10 px-6 pb-6">
        ${mobile}
        <a href="contact.html#reserve" class="mt-6 block rounded-full bg-gold py-3 text-center font-semibold text-jungle-900">Book a Table · <span class="font-khmer">កក់តុ</span></a>
      </div>
    </header>
  </div>`;

  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('mobileNav');
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('hidden') === false;
    btn.setAttribute('aria-expanded', open);
    document.getElementById('menuIcon').setAttribute('d', open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => btn.click()));
  const bar = document.getElementById('topbar');
  const onScroll = () => bar.classList.toggle('bg-jungle-950/95', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Scroll-spy: on the home page, underline "Menu" while the #menu section is in view
  const menuSec = active === 'home' && document.getElementById('menu');
  if (menuSec) {
    let current = active;
    const setActive = key => {
      if (key === current) return;
      current = key;
      document.querySelectorAll('#site-header [data-nav-key]').forEach(a => {
        const on = a.dataset.navKey === key;
        const line = a.querySelector('span.absolute');
        if (line) { // desktop link
          a.classList.toggle('text-gold', on);
          a.classList.toggle('text-parchment/85', !on);
          a.classList.toggle('hover:text-gold-light', !on);
          line.classList.toggle('w-full', on);
          line.classList.toggle('w-0', !on);
          line.classList.toggle('group-hover:w-full', !on);
        } else { // mobile link
          a.classList.toggle('text-gold', on);
          a.classList.toggle('text-parchment', !on);
        }
      });
    };
    const spy = () => {
      const r = menuSec.getBoundingClientRect(), offset = 140;
      setActive(r.top <= offset && r.bottom > offset ? 'menu' : 'home');
    };
    window.addEventListener('scroll', spy, { passive: true }); spy();
  }
}

/* ===== Footer + floating UI ===== */
function renderFooter() {
  document.getElementById('site-footer').innerHTML = `
  <footer class="relative bg-jungle-950 text-parchment/80 overflow-hidden pb-20 md:pb-0">
    <div class="absolute inset-0 bg-kbach opacity-60"></div>
    <div class="relative -mb-px">${angkorSVG('w-full h-16 sm:h-24 text-jungle-800/60')}</div>
    <div class="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div class="lg:col-span-2">
        <div class="flex items-center gap-3 text-gold">${logoSVG('w-12 h-12')}
          <div><p class="font-moul text-2xl leading-relaxed py-1 text-gold-gradient">${SITE.nameKm}</p><p class="font-khmer text-sm text-parchment/70">${SITE.tagKm}</p></div></div>
        <p class="mt-5 max-w-md text-sm leading-relaxed">Authentic Khmer dips, pounded salads and sour soups at everyday prices — fresh herbs, prahok made the traditional way, and kroeung pounded by hand.</p>
        <div class="mt-6 flex gap-3">
          <a href="${SITE.facebook}" target="_blank" rel="noopener" aria-label="Facebook" class="h-10 w-10 grid place-items-center rounded-full bg-parchment/10 hover:bg-gold hover:text-jungle-900 transition">${svg('fb', 'w-4 h-4', true)}</a>
          <a href="${tel(SITE.phone)}" aria-label="Call" class="h-10 w-10 grid place-items-center rounded-full bg-parchment/10 hover:bg-gold hover:text-jungle-900 transition">${svg('phone', 'w-4 h-4')}</a>
        </div>
      </div>
      <div>
        <h4 class="font-khmer text-gold text-lg">សាខា <span class="text-xs uppercase tracking-[.2em] text-parchment/50 font-sans">Branches</span></h4>
        <ul class="mt-4 space-y-3 text-sm">${SITE.branches.map(b => `<li><a href="${b.link}" target="_blank" rel="noopener" class="hover:text-gold transition">${b.address}</a></li>`).join('')}</ul>
      </div>
      <div>
        <h4 class="font-khmer text-gold text-lg">ម៉ោងបើក <span class="text-xs uppercase tracking-[.2em] text-parchment/50 font-sans">Hours</span></h4>
        <p class="mt-4 text-sm">Every day<br><span class="text-2xl font-display text-parchment">${SITE.hours}</span></p>
        <a href="${tel(SITE.phone)}" class="mt-3 block text-sm hover:text-gold">${SITE.phone}</a>
      </div>
    </div>
    <div class="relative border-t border-gold/10 px-6 sm:px-10 py-6 text-center text-xs text-parchment/50">
      © <span id="year"></span> ${SITE.nameEn} · <span class="font-khmer">មរតកម្ហូបប្រពៃណីជាតិ</span> — Heritage of Khmer cuisine
    </div>
  </footer>

  <!-- Back to top -->
  <button id="toTop" aria-label="Back to top" class="fixed right-4 bottom-24 md:bottom-6 z-40 h-12 w-12 grid place-items-center rounded-full bg-gold text-jungle-900 shadow-glow opacity-0 pointer-events-none translate-y-3 transition-all duration-300">${svg('up')}</button>

  <!-- Mobile action bar -->
  <div class="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-gold/20 bg-jungle-950/95 backdrop-blur px-4 py-3 grid grid-cols-2 gap-3">
    <a href="${tel(SITE.phone)}" class="flex items-center justify-center gap-2 rounded-full border border-gold/50 py-2.5 text-gold font-semibold">${svg('phone', 'w-4 h-4')} Call</a>
    <a href="contact.html#reserve" class="flex items-center justify-center gap-2 rounded-full bg-gold py-2.5 text-jungle-900 font-semibold"><span class="font-khmer">កក់តុ</span> Book</a>
  </div>

  <!-- Toast -->
  <div id="toast" role="status" class="fixed left-1/2 top-28 z-[70] -translate-x-1/2 -translate-y-4 opacity-0 pointer-events-none transition-all duration-300">
    <div class="flex items-center gap-3 rounded-2xl bg-jungle-900 text-parchment px-5 py-3 shadow-glow border border-gold/40">
      <span class="h-8 w-8 grid place-items-center rounded-full bg-gold text-jungle-900">✓</span><span id="toastMsg" class="text-sm"></span>
    </div>
  </div>

  <!-- Modal (dish details / lightbox) -->
  <div id="modal" class="fixed inset-0 z-[60] hidden" role="dialog" aria-modal="true">
    <div data-close class="absolute inset-0 bg-jungle-950/80 backdrop-blur-sm"></div>
    <div class="relative mx-auto mt-[8vh] w-[min(92vw,720px)] max-h-[84vh] overflow-auto rounded-3xl bg-parchment-light shadow-2xl">
      <button data-close aria-label="Close" class="absolute right-3 top-3 z-10 h-10 w-10 grid place-items-center rounded-full bg-jungle-900/80 text-gold hover:bg-jungle-900">${svg('x')}</button>
      <div id="modalBody"></div>
    </div>
  </div>`;
  document.getElementById('year').textContent = new Date().getFullYear();

  const top = document.getElementById('toTop');
  window.addEventListener('scroll', () => {
    const show = window.scrollY > 600;
    top.classList.toggle('opacity-0', !show); top.classList.toggle('pointer-events-none', !show); top.classList.toggle('translate-y-3', !show);
  }, { passive: true });
  top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const modal = document.getElementById('modal');
  modal.addEventListener('click', e => { if (e.target.closest('[data-close]')) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function openModal(html) {
  document.getElementById('modalBody').innerHTML = html;
  document.getElementById('modal').classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}
function closeModal() {
  document.getElementById('modal')?.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}
let toastTimer;
function toast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toastMsg').innerHTML = msg;
  t.classList.remove('opacity-0', '-translate-y-4');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.add('opacity-0', '-translate-y-4'), 3500);
}

/* ===== Menu data — from the printed menu (prices in Riel) ===== */
const MENU = [
  { id: 'dips', km: 'គ្រឿងអន្លក់', en: 'Paste & Vegetable Dips', items: [
    ['ទឹកគ្រឿងបាត់ដំបង', 'Battambang Paste (Teuk Kreoung)', 16000, 2, 'Lemongrass-rich kroeung dip with a basket of wild herbs, flowers and garden vegetables.', 'teuk-kreoung'],
    ['ប្រហុកខ្ទិះ', 'Creamy Fermented Prahok with Pork', 16000, 0, 'Prahok simmered with coconut cream and minced pork, served with crisp vegetables.', 'prahok-ktis'],
    ['ប្រហុកគ្រឿងអាំង', 'Grilled Prahok Kreoung', 10000, 1, 'Prahok and kroeung wrapped in banana leaf and grilled over charcoal.', 'prahok-ang'],
    ['កាពិបុក', 'Kapi Shrimp Paste Dip', 24000, 0, 'Pounded shrimp paste with chilli, lime and pea eggplant, with fried fish.', 'kapi'],
    ['ពងទាចៀនត្រីប្រមា', 'Proma Fish Omelet', 18000, 1, 'Fluffy duck-egg omelet with salted proma fish.', 'proma-omelet'],
    ['ម៉ាំឆៅពោះតាន់', 'Raw Fermented Fish (Mam Chhao)', 24000, 0, 'Traditional fermented fish with fresh herbs and sliced vegetables.', 'mam-chhao'],
    ['ឆាម៉ាំពោះតាន់', 'Fried Fermented Fish (Chhar Mam)', 24000, 0, 'Fermented fish stir-fried with garlic, chilli and aromatics.', 'chhar-mam'],
    ['ខម៉ាំ', 'Braised Fermented Fish (Khor Mam)', 24000, 1, 'Slow-braised mam in a savoury-sweet broth.', 'khor-mam'],
    ['ផ្អកចៀន', 'Fried Fermented Fish (Phaak)', 12000, 1, 'Crispy fried phaak with garlic and chilli, served with a vegetable platter.', 'phaak'],
    ['ទាដើមចេក', 'Banana Tree with Spiced Duck', 25000, 1, 'Duck braised with banana stem in a fragrant red kroeung.', 'duck-banana'],
  ]},
  { id: 'salads', km: 'បុក · ញាំ · ភ្លា', en: 'Pounded Salads', items: [
    ['បុកល្ហុង', 'Papaya Salad', 16000, 1, 'Green papaya pounded with lime, chilli, palm sugar and fish sauce.', 'papaya'],
    ['ញាំត្រយូងចេក', 'Banana Flower Salad with Snail / Pork', 17000, 0, 'Shredded banana blossom with herbs, peanuts and your choice of snail or pork.', 'banana-flower'],
    ['ភ្លាសាច់គោ', 'Khmer Beef Salad (Plea)', 18000, 0, 'Lime-cured beef with lemongrass, shallot, basil and roasted peanuts.', 'beef-plea'],
    ['ញាំស្វាយត្រីឆ្អើរ', 'Green Mango with Smoked Fish', 18000, 0, 'Sour green mango tossed with flaked smoked fish and herbs.', 'mango-smoked'],
    ['បុកស្វាយត្រីងៀត', 'Pounded Green Mango with Dried Fish', 15000, 0, 'Tart mango pounded with crispy dried fish.', 'mango-dried'],
    ['បុកសណ្តែកកួរ', 'Pounded Long Bean Salad', 16000, 0, 'Long beans pounded with chilli, lime and dried shrimp.', 'long-bean'],
    ['ញាំស្ដៅ', 'Neem Leaf Salad', 16000, 1, 'Bitter-fresh neem shoots with prawns, herbs and a sweet-sour dressing.', 'neem'],
    ['បុកកំពិសអម្ពិលខ្ចី', 'Green Tamarind with Shrimp', 13000, 0, 'Young tamarind pounded with dried shrimp — bright and mouth-puckering.', 'tamarind'],
    ['បុកមាន់សៀមរាប', 'Siem Reap Spicy Chicken', 18000, 0, 'Shredded chicken pounded Siem Reap-style with herbs and chilli.', 'sr-chicken'],
  ]},
  { id: 'soups', km: 'សម្ល · ម្ជូរ', en: 'Soups', items: [
    ['ម្ជូរព្រៃសាច់គោ', 'Maju Prey with Beef', 18000, 0, 'Country-style sour soup with beef and wild greens.', 'maju-prey'],
    ['ម្ជូរគ្រឿង', 'Maju Kreoung (Khmer Sour Soup)', 18000, 0, 'Sour soup built on yellow kroeung and morning glory.', 'maju-kreoung'],
    ['សម្លកកូរ', 'Samlor Kokor with Palm Fruit', 16000, 1, 'The “stirring soup” — green papaya, pumpkin, toasted rice and palm fruit.', 'kokor'],
    ['ម្ជូរយួន', 'Maju Youn (Vegetable Sour Soup)', 16000, 0, 'Light sour broth with tamarind, tomato and pineapple.', 'maju-youn'],
    ['ខត្រី', 'Braised Fish (Khor Trei)', 16000, 1, 'Caramelised fish braised in palm sugar and pepper.', 'khor-trei'],
  ]},
  { id: 'grill', km: 'អាំង · ចៀន', en: 'Grilled & Fried', items: [
    ['ត្រីកេសចៀន', 'Fried Fish (Trei Kes)', 22000, 0, 'Whole trei kes fried crisp, with green mango and dipping sauces.', 'trei-kes'],
    ['ត្រីងៀតឪឡឹក', 'Fried Dried Fish with Watermelon', 14000, 1, 'A Khmer classic — salty fried fish with cold, sweet watermelon.', 'trei-ngiet'],
    ['ពងទាចៀនស្អំ', 'Climbing Wattle Omelet', 12000, 0, 'Duck-egg omelet with fragrant cha-om leaves.', 'cha-om-omelet'],
    ['កញ្ឆែតជាមួយត្រី', 'Water Mimosa with Spiced Fish', 22000, 0, 'Crunchy water mimosa stir-fried with spiced fish.', 'water-mimosa'],
    ['កង្កែបបោកគ្រឿង', 'Grilled Frog with Kroeung', 14000, 0, 'Frog marinated in kroeung and grilled on skewers.', 'frog'],
  ]},
  { id: 'dessert', km: 'បង្អែម', en: 'Desserts', items: [
    ['តាប៉ែ', 'Fermented Rice Dessert (Tapae)', 4000, 1, 'Sweet fermented sticky rice — fragrant and gently boozy.', 'tapae'],
    ['បង្អែមគ្រាប់ត្នោត', 'Palm Seed Dessert', 4000, 1, 'Tender sugar-palm seeds in coconut syrup.', 'palm-seed'],
    ['ត្រសក់ស្រូវ', 'Khmer Melon Dessert', 4000, 0, 'Fragrant Khmer melon with coconut milk and crushed ice.', 'melon'],
    ['ចាហួយខ្មៅ', 'Grass Jelly Dessert', 4000, 0, 'Cooling black grass jelly with palm sugar syrup.', 'grass-jelly'],
  ]},
];
const ALL_DISHES = MENU.flatMap(c => c.items.map(i => ({ cat: c, km: i[0], en: i[1], price: i[2], fav: i[3], desc: i[4], img: i[5] })));

const riel = n => n.toLocaleString('en-US') + '៛';
const usd = n => '≈ $' + (n % 4000 === 0 ? n / 4000 : (n / 4000).toFixed(2));

const hearts = n => n ? `<span class="inline-flex items-center gap-1 rounded-full bg-clay/90 px-2.5 py-1 text-[11px] font-semibold text-parchment shadow">${'♥'.repeat(n)} <span class="hidden sm:inline">Favourite</span></span>` : '';

function dishCard(d, i) {
  return `
  <article class="reveal group relative flex flex-col rounded-2xl bg-parchment-light border border-gold/25 shadow-card overflow-hidden hover:-translate-y-1 hover:shadow-glow transition duration-300">
    <button data-dish="${d.img}" class="relative block aspect-[4/3] overflow-hidden text-left" aria-label="View ${d.en}">
      <img src="${IMG(d.img)}" alt="${d.en}" loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-110">
      <span class="absolute inset-0 bg-gradient-to-t from-jungle-950/60 via-transparent to-transparent opacity-80"></span>
      <span class="absolute top-3 left-3">${hearts(d.fav)}</span>
      <span class="absolute bottom-3 right-3 rounded-full bg-parchment-light/95 px-3 py-1 text-sm font-bold text-clay shadow">${riel(d.price)}</span>
      <span class="absolute bottom-3 left-3 rounded-full bg-jungle-900/70 px-2.5 py-1 text-[11px] text-gold-light opacity-0 group-hover:opacity-100 transition">Tap for details</span>
    </button>
    <div class="flex-1 p-5">
      <h3 class="font-khmer text-xl font-semibold text-jungle-900">${d.km}</h3>
      <p class="font-display text-lg italic text-ink/80 -mt-1">${d.en}</p>
      <p class="mt-2 text-sm text-ink/65 leading-relaxed line-clamp-2">${d.desc}</p>
    </div>
  </article>`;
}

function dishModal(key) {
  const d = ALL_DISHES.find(x => x.img === key);
  if (!d) return;
  const related = ALL_DISHES.filter(x => x.cat.id === d.cat.id && x.img !== key).slice(0, 3);
  openModal(`
    <img src="${IMG(d.img)}" alt="${d.en}" class="w-full aspect-[16/10] object-cover">
    <div class="p-6 sm:p-8">
      <div class="flex flex-wrap items-center gap-2">
        <span class="rounded-full border border-gold/50 px-3 py-1 text-xs text-jungle-800"><span class="font-khmer">${d.cat.km}</span> · ${d.cat.en}</span>${hearts(d.fav)}
      </div>
      <h3 class="mt-4 font-khmer text-3xl font-bold text-jungle-900">${d.km}</h3>
      <p class="font-display text-2xl italic text-ink/80">${d.en}</p>
      <p class="mt-3 text-ink/70 leading-relaxed">${d.desc}</p>
      <div class="mt-5 flex items-end gap-3"><span class="text-3xl font-bold text-clay">${riel(d.price)}</span><span class="pb-1 text-sm text-ink/50">${usd(d.price)}</span></div>
      ${related.length ? `<p class="mt-8 text-xs uppercase tracking-[.25em] text-ink/50">More ${d.cat.en.toLowerCase()}</p>
      <div class="mt-3 grid grid-cols-3 gap-3">${related.map(r => `
        <button data-dish="${r.img}" class="group text-left"><img src="${IMG(r.img)}" alt="" class="aspect-square w-full rounded-xl object-cover group-hover:ring-2 ring-gold transition">
        <span class="mt-1 block font-khmer text-sm text-jungle-900 truncate">${r.km}</span></button>`).join('')}</div>` : ''}
    </div>`);
}

function initMenu() {
  const tabs = document.getElementById('menu-tabs');
  const grid = document.getElementById('menu-grid');
  if (!tabs) return;
  const search = document.getElementById('menu-search');
  const favOnly = document.getElementById('menu-fav');
  const count = document.getElementById('menu-count');
  const empty = document.getElementById('menu-empty');
  let current = 'all';

  const cats = [{ id: 'all', km: 'ទាំងអស់', en: 'All' }, ...MENU];
  tabs.innerHTML = cats.map(c => `
    <button role="tab" data-id="${c.id}" class="tab-btn shrink-0 rounded-full border border-gold/50 bg-parchment-light/60 px-4 py-2 text-sm text-jungle-900 hover:bg-gold/15 transition">
      <span class="font-khmer">${c.km}</span><span class="hidden sm:inline text-xs opacity-70"> · ${c.en}</span>
      <span class="ml-1 rounded-full bg-jungle-900/10 px-1.5 text-[11px]">${c.id === 'all' ? ALL_DISHES.length : c.items.length}</span></button>`).join('');

  const render = () => {
    const q = (search.value || '').trim().toLowerCase();
    const list = ALL_DISHES.filter(d =>
      (current === 'all' || d.cat.id === current) &&
      (!favOnly.checked || d.fav) &&
      (!q || (d.km + ' ' + d.en + ' ' + d.desc).toLowerCase().includes(q)));
    grid.innerHTML = list.map(dishCard).join('');
    count.textContent = `${list.length} dish${list.length === 1 ? '' : 'es'}`;
    empty.classList.toggle('hidden', list.length > 0);
    tabs.querySelectorAll('button').forEach(b => b.setAttribute('aria-selected', b.dataset.id === current));
    observeReveals();
  };
  tabs.addEventListener('click', e => { const b = e.target.closest('button'); if (b) { current = b.dataset.id; render(); } });
  search.addEventListener('input', render);
  favOnly.addEventListener('change', render);
  document.getElementById('menu-reset')?.addEventListener('click', () => { search.value = ''; favOnly.checked = false; current = 'all'; render(); });
  render();
}

/* ===== Gallery with lightbox ===== */
function initGallery() {
  const el = document.getElementById('gallery');
  if (!el) return;
  const keys = el.dataset.items.split(',');
  el.innerHTML = keys.map((k, i) => {
    const d = ALL_DISHES.find(x => x.img === k);
    const big = i === 0 || i === 5;
    return `<button data-light="${i}" class="reveal group relative overflow-hidden rounded-2xl ${big ? 'col-span-2 row-span-2' : ''}">
      <img src="${IMG(k)}" alt="${d?.en || ''}" loading="lazy" class="h-full w-full object-cover aspect-square transition duration-700 group-hover:scale-110">
      <span class="absolute inset-0 flex items-end bg-gradient-to-t from-jungle-950/80 via-jungle-950/0 p-3 opacity-0 group-hover:opacity-100 transition">
        <span class="text-left"><span class="block font-khmer text-parchment">${d?.km || ''}</span><span class="block text-xs text-gold-light">${d?.en || ''}</span></span></span>
    </button>`;
  }).join('');
  const show = i => {
    const n = (i + keys.length) % keys.length, d = ALL_DISHES.find(x => x.img === keys[n]);
    openModal(`<div class="relative bg-jungle-950">
      <img src="${IMG(keys[n])}" alt="${d.en}" class="w-full max-h-[70vh] object-contain">
      <button data-nav="${n - 1}" aria-label="Previous" class="absolute left-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-parchment/90 text-jungle-900 text-xl">‹</button>
      <button data-nav="${n + 1}" aria-label="Next" class="absolute right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-parchment/90 text-jungle-900 text-xl">›</button></div>
      <div class="p-5 flex items-center justify-between gap-3"><div><p class="font-khmer text-xl text-jungle-900">${d.km}</p><p class="font-display italic">${d.en}</p></div>
      <span class="text-sm text-ink/50">${n + 1} / ${keys.length}</span></div>`);
  };
  el.addEventListener('click', e => { const b = e.target.closest('[data-light]'); if (b) show(+b.dataset.light); });
  document.getElementById('modal').addEventListener('click', e => { const b = e.target.closest('[data-nav]'); if (b) show(+b.dataset.nav); });
}

/* ===== Animated counters ===== */
function initCounters() {
  const els = document.querySelectorAll('[data-count]');
  const ob = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, end = parseFloat(el.dataset.count), dec = +(el.dataset.dec || 0), suf = el.dataset.suffix || '', pre = el.dataset.prefix || '';
    const t0 = performance.now();
    const step = t => { const p = Math.min(1, (t - t0) / 1200); el.textContent = pre + (end * (1 - Math.pow(1 - p, 3))).toFixed(dec) + suf; if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step); ob.unobserve(el);
  }), { threshold: .5 });
  els.forEach(el => ob.observe(el));
}

/* ===== Utilities ===== */
let io;
function observeReveals() {
  io = io || new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .1 });
  document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader(document.body.dataset.page);
  renderFooter();
  document.querySelectorAll('[data-ornament]').forEach(el => el.innerHTML = ornament(el.dataset.ornament || 'text-gold'));
  document.querySelectorAll('[data-angkor]').forEach(el => el.innerHTML = angkorSVG(el.dataset.angkor));
  document.querySelectorAll('[data-img]').forEach(el => el.src = IMG(el.dataset.img));
  document.addEventListener('click', e => { const b = e.target.closest('[data-dish]'); if (b) dishModal(b.dataset.dish); });
  initMenu();
  initGallery();
  initCounters();
  observeReveals();
});
