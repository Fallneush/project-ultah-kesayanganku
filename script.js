// ===== Variabel =====
const bgMusic = document.getElementById('bgMusic');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const toPage3Btn = document.getElementById('toPage3Btn');
const nextBtn = document.getElementById('nextBtn');
const toPage5Btn = document.getElementById('toPage5Btn');

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
const page5 = document.getElementById('page5');

const envelope = document.getElementById('envelope');
const letterMessage = document.getElementById('letterMessage');
const closeBtn = document.getElementById('closeBtn');
const closeWebBtn = document.getElementById('closeWebBtn');

// Foto-foto jatuh
const photoUrls = [
  "img/IMG-20251110-WA0005-removebg-preview.png",
  "img/IMG-20251110-WA0004-removebg-preview.png",
  "img/IMG-20251110-WA0006-removebg-preview.png",
  "img/IMG-20251110-WA0007-removebg-preview.png",
  "img/WhatsApp_Image_2025-11-16_at_13.34.03-removebg-preview.png",
  "img/WhatsApp_Image_2025-11-16_at_13.34.03__1_-removebg-preview.png",
  "img/WhatsApp_Image_2025-11-16_at_13.34.02__1_-removebg-preview.png",
  "img/WhatsApp_Image_2025-11-16_at_13.34.01__1_-removebg-preview.png",
  "img/WhatsApp_Image_2025-11-16_at_13.34.00-removebg-preview.png",
  "img/WhatsApp_Image_2025-11-16_at_13.33.59-removebg-preview.png",
  "img/WhatsApp_Image_2025-11-16_at_13.33.59__2_-removebg-preview.png",
  "img/WhatsApp_Image_2025-11-16_at_13.33.58__1_-removebg-preview.png",
  "img/WhatsApp_Image_2025-11-16_at_13.33.57-removebg-preview.png",
  "img/WhatsApp_Image_2025-11-16_at_13.33.57__1_-removebg-preview.png"
];

// ===== Pindah background =====
function setBackground(page) {
  document.body.className = "";
  document.body.classList.add(page + "-bg");
}

// ===== Klik 100% =====
yesBtn.addEventListener('click', () => {
  page1.style.display = "none";
  page2.style.display = "block";

  setBackground("page2");
  startPhotoRain();
  startLoveRain();

  bgMusic.currentTime = 0;
  bgMusic.play();
});

// ===== Navigasi Halaman =====
toPage3Btn.addEventListener("click", () => {
  page2.style.display = "none";
  page3.style.display = "block";
  setBackground("page3");
});

nextBtn.addEventListener("click", () => {
  page3.style.display = "none";
  page4.style.display = "block";
  setBackground("page4");
});

toPage5Btn.addEventListener("click", () => {
  page4.style.display = "none";
  page5.style.display = "block";
  setBackground("page5");
});

// ===== Tombol 0% LARI =====
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  const currentLeft = noBtn.offsetLeft;
  const currentTop = noBtn.offsetTop;
  const offsetX = (Math.random() > 0.5 ? 1 : -1) * (50 + Math.random()*50);
  const offsetY = (Math.random() > 0.5 ? 1 : -1) * (50 + Math.random()*50);
  let newLeft = currentLeft + offsetX;
  let newTop = currentTop + offsetY;
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;
  newLeft = Math.max(0, Math.min(newLeft, maxX));
  newTop = Math.max(0, Math.min(newTop, maxY));
  noBtn.style.left = newLeft + "px";
  noBtn.style.top = newTop + "px";
});

// ===== Foto Jatuh =====
function createFallingPhoto() {
  const img = document.createElement("img");
  img.src = photoUrls[Math.floor(Math.random() * photoUrls.length)];
  img.classList.add("photoFall");
  img.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(img);
  setTimeout(() => img.remove(), 6000);
}
function startPhotoRain() { setInterval(createFallingPhoto, 300); }

// ===== Teks Cinta Jatuh =====
function createFallingText() {
  const text = document.createElement("div");
  text.classList.add("loveTextFall");
  text.textContent = "I Love You ❤️";
  text.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(text);
  setTimeout(() => text.remove(), 5000);
}
function startLoveRain() { setInterval(createFallingText, 500); }

// Amplop Halaman 5
envelope.addEventListener('click', ()=>{ letterMessage.classList.add('show'); });
closeBtn.addEventListener('click', ()=>{ letterMessage.classList.remove('show'); });

// Tombol page5
closePageBtn.addEventListener('click', ()=>{ page5.style.display="none"; setBackground("page1"); });
closeWebBtn.addEventListener('click', ()=>{ window.close(); });