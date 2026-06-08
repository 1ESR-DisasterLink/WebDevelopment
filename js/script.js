//slideshow
let slideAtual = 0;
let todosSlides = document.querySelectorAll(".slideshow .slide");

function irParaSlide(n) {
  todosSlides[slideAtual].classList.remove("ativo");
  slideAtual = (n + todosSlides.length) % todosSlides.length;
  todosSlides[slideAtual].classList.add("ativo");
}

document.querySelector(".slide-proximo").addEventListener("click", function () {
  irParaSlide(slideAtual + 1);
});

document
  .querySelector(".slide-anterior")
  .addEventListener("click", function () {
    irParaSlide(slideAtual - 1);
  });

setInterval(function () {
  irParaSlide(slideAtual + 1);
}, 5000);
