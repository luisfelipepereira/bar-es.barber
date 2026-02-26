const menuMobile = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu");

menuMobile.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});

const imagens = document.querySelectorAll(".img-galeria");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");

imagens.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});

// ANIMAÇÃO AO SCROLL PREMIUM

// ANIMAÇÃO PREMIUM COM INTERSECTION OBSERVER

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// HEADER DINÂMICO
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});