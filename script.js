const WHATSAPP_NUMBER = "523337078502";

document.querySelectorAll("[data-wa-message]").forEach((el) => {
  const message = encodeURIComponent(el.getAttribute("data-wa-message"));
  el.setAttribute("href", `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`);
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener");
});

const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const modal = document.querySelector(".image-modal");
const modalImg = document.querySelector(".image-modal img");
const modalClose = document.querySelector(".modal-close");

document.querySelectorAll("[data-img]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!modal || !modalImg) return;
    modalImg.src = button.getAttribute("data-img");
    modal.showModal();
  });
});

if (modalClose && modal) {
  modalClose.addEventListener("click", () => modal.close());
}

if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });
}
