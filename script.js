const WA_NUMBER = "523337078502";

function whatsappUrl(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-wa-message]").forEach((link) => {
  link.setAttribute("href", whatsappUrl(link.dataset.waMessage));
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener");
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const modal = document.querySelector(".image-modal");
const modalImg = document.querySelector(".image-modal img");
const modalClose = document.querySelector(".modal-close");

document.querySelectorAll(".gallery-item[data-img]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!modal || !modalImg) return;
    modalImg.src = button.dataset.img;
    modal.showModal();
  });
});

if (modalClose && modal) {
  modalClose.addEventListener("click", () => modal.close());
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });
}
