
/*companies logo*/
// بيانات الشركات
const companies = [
 { name: "Arrow Sports",   logo: "../media/photo/companiesLogo/arrowSports-com.png", url: "https://arrowsports.netlify.app" },
  { name: "أضف شركتك الأن",        logo: "../media/photo/companiesLogo/plus.png",    url: "https://wa.me/201094732106?text=I%20Want%20To%20Add%20A%20Sports%20Company%20To%20ARROW Store" },
  { name: "أضف شركتك الأن",        logo: "../media/photo/companiesLogo/plus.png",    url: "https://wa.me/201094732106?text=I%20Want%20To%20Add%20A%20Sports%20Company%20To%20ARROW Store" },
  { name: "أضف شركتك الأن",        logo: "../media/photo/companiesLogo/plus.png",    url: "https://wa.me/201094732106?text=I%20Want%20To%20Add%20A%20Sports%20Company%20To%20ARROW Store" },
  { name: "أضف شركتك الأن",        logo: "../media/photo/companiesLogo/plus.png",    url: "https://wa.me/201094732106?text=I%20Want%20To%20Add%20A%20Sports%20Company%20To%20ARROW Store" },
  { name: "أضف شركتك الأن",        logo: "../media/photo/companiesLogo/plus.png",    url: "https://wa.me/201094732106?text=I%20Want%20To%20Add%20A%20Sports%20Company%20To%20ARROW Store" },
  { name: "أضف شركتك الأن",        logo: "../media/photo/companiesLogo/plus.png",    url: "https://wa.me/201094732106?text=I%20Want%20To%20Add%20A%20Sports%20Company%20To%20ARROW Store" },
  { name: "أضف شركتك الأن",        logo: "../media/photo/companiesLogo/plus.png",    url: "https://wa.me/201094732106?text=I%20Want%20To%20Add%20A%20Sports%20Company%20To%20ARROW Store" },
  { name: "أضف شركتك الأن",        logo: "../media/photo/companiesLogo/plus.png",    url: "https://wa.me/201094732106?text=I%20Want%20To%20Add%20A%20Sports%20Company%20To%20ARROW Store" },
  { name: "أضف شركتك الأن",        logo: "../media/photo/companiesLogo/plus.png",    url: "https://wa.me/201094732106?text=I%20Want%20To%20Add%20A%20Sports%20Company%20To%20ARROW Store" },
  // زوّد براحتك...
];

const track = document.getElementById("companiesTrack");
const btnPrev = document.querySelector(".companies-nav.prev");
const btnNext = document.querySelector(".companies-nav.next");

// رسم الكروت
function renderCompanies() {
  track.innerHTML = companies.map(c => `
    <a class="company-card" href="${c.url}" title="${c.name}" target = "_blank">
      <img src="${c.logo}" alt="Logo ${c.name}">
      <span>${c.name}</span>
    </a>
  `).join("");
}
renderCompanies();

// التحريك
function getScrollAmount() {
  // نحرك تقريبًا عرض 3 كروت مع بعض
  const card = track.querySelector(".company-card");
  const gap = 14;
  const cardWidth = card ? card.getBoundingClientRect().width : 220;
  return (cardWidth + gap) * 3;
}

btnNext.addEventListener("click", () => {
    track.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
});
btnPrev.addEventListener("click", () => {
    track.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
});

// دعم الكيبورد (الأسهم)
track.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") track.scrollBy({ left: -getScrollAmount()/2, behavior: "smooth" });
  if (e.key === "ArrowRight") track.scrollBy({ left: getScrollAmount()/2, behavior: "smooth" });
});

// dotsContainer
const dotsContainer = document.getElementById("companiesDots");

function renderDots() {
  dotsContainer.innerHTML = "";
  companies.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = "dot" + (index === 0 ? " active" : "");
    dot.addEventListener("click", () => {
      const card = track.querySelectorAll(".company-card")[index];
      if (card) {
        track.scrollTo({
          left: card.offsetLeft,
          behavior: "smooth"
        });
      }
    });
    dotsContainer.appendChild(dot);
  });
}

function updateActiveDot() {
  const cards = track.querySelectorAll(".company-card");
  const scrollLeft = track.scrollLeft;
  let activeIndex = 0;

  cards.forEach((card, index) => {
    const cardLeft = card.offsetLeft;
    const cardRight = cardLeft + card.offsetWidth;
    const trackCenter = scrollLeft + track.clientWidth / 2;

    if (trackCenter >= cardLeft && trackCenter <= cardRight) {
      activeIndex = index;
    }
  });

  [...dotsContainer.children].forEach((dot, i) => {
    dot.classList.toggle("active", i === activeIndex);
  });
}

// بعد ما نرسم الشركات
renderCompanies();
renderDots();
updateActiveDot();

track.addEventListener("scroll", updateActiveDot);
window.addEventListener("resize", updateActiveDot);
