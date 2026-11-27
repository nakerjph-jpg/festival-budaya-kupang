// Menu hamburger
const toggle = document.getElementById("navToggle");
const menu = document.getElementById("menu");

function setMenu(open) {
  menu.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
}

toggle.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

// Formulir kontak (simulasi, tidak mengirim data)
const form = document.getElementById("formKontak");
const status = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = form.nama.value.trim();
  const email = form.email.value.trim();
  const pesan = form.pesan.value.trim();

  if (!nama || !email || !pesan) {
    status.textContent = "Lengkapi nama, email, dan pesan terlebih dahulu.";
    status.className = "form-status error";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.textContent = "Format email belum benar. Contoh: nama@email.com";
    status.className = "form-status error";
    return;
  }
  status.textContent = "Terima kasih, " + nama + ". Pesan contoh ini tidak dikirim ke server.";
  status.className = "form-status";
  form.reset();
});
