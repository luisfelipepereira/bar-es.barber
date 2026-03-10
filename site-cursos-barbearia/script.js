const menuMobile = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu");
const header = document.querySelector("header");

menuMobile.addEventListener("click", () => {
  menu.classList.toggle("ativo");
  document.body.classList.toggle("no-scroll");

  // Impede header de esconder quando menu estiver aberto
  header.classList.remove("hide");
});

let lastScroll = 0;

window.addEventListener("scroll", () => {

  // Se menu estiver aberto, não executar efeito
  if (menu.classList.contains("ativo")) return;

  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.classList.remove("hide");
    return;
  }

  if (currentScroll > lastScroll && !header.classList.contains("hide")) {
    header.classList.add("hide");
  } else if (currentScroll < lastScroll) {
    header.classList.remove("hide");
  }

  lastScroll = currentScroll;
});

// ANIMAÇÃO AO SCROLL PREMIUM

// ANIMAÇÃO PREMIUM COM INTERSECTION OBSERVER

const revealElements = document.querySelectorAll(".reveal")

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active")

}

})

},{threshold:0.15})

revealElements.forEach(el=>{

observer.observe(el)

})

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
// HEADER MUDA AO ROLAR
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("ativo");
    document.body.classList.remove("no-scroll");
  });
});


// ANIMAÇÃO LATERAL COM INTERSECTION OBSERVER

const elements = document.querySelectorAll(".reveal-left, .reveal-right");

const observerSide = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observerSide.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

elements.forEach(el => {
  observerSide.observe(el);
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const dados = {
    nome: form[0].value,
    telefone: form[1].value,
    data: form[2].value,
    horario: form[3].value
  };

  const resposta = await fetch("http://localhost:3000/agendar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dados)
  });

  const resultado = await resposta.json();
  alert(resultado.mensagem);
});
const themeBtn = document.querySelector(".theme-toggle")

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light-theme")

})
const imagens = document.querySelectorAll(".img-galeria")
const modal = document.querySelector(".modal")
const modalImg = document.querySelector(".modal-img")

imagens.forEach(img=>{

img.addEventListener("click",()=>{

modal.style.display="flex"
modalImg.src=img.src

})

})

modal.addEventListener("click",()=>{

modal.style.display="none"

})

const btnVerMais = document.querySelector(".btn-vermais")
const extra = document.querySelector(".extra-cortes")

btnVerMais.addEventListener("click",()=>{

extra.classList.toggle("ativo")

if(extra.classList.contains("ativo")){

btnVerMais.innerText="Ver menos"

}else{

btnVerMais.innerText="Ver mais cortes"

}

})

