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

//quiz
let listaPerguntas = [
  {
    pergunta:
      "O que aconteceu no Rio Grande do Sul em 2024 que motivou o DisasterLink?",
    opcoes: [
      "Apagão elétrico que durou 24 horas",
      "Enchentes que derrubaram a comunicação de centenas de municípios",
      "Terremoto de grande magnitude",
      "Incêndio em data center",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Qual componente do kit é responsável pelo processamento central?",
    opcoes: ["Módulo LoRa", "GPS u-blox M10", "Raspberry Pi 4", "Modem 4G"],
    correta: 2,
  },
  {
    pergunta: "Qual é o alcance máximo do módulo LoRa para envio do botão SOS?",
    opcoes: ["500 metros", "2 quilômetros", "10 quilômetros", "5 quilômetros"],
    correta: 3,
  },
  {
    pergunta:
      "Quando o 4G falha, qual tecnologia o DisasterLink usa como backup?",
    opcoes: ["Wi-Fi mesh", "Satélite Iridium", "Rádio AM/FM", "Bluetooth"],
    correta: 1,
  },
  {
    pergunta: "Quantas horas de autonomia o sistema tem com bateria + solar?",
    opcoes: ["12 horas", "24 horas", "48 horas", "72 horas"],
    correta: 2,
  },
  {
    pergunta: "Como uma vítima sem celular pode pedir socorro?",
    opcoes: [
      "Acendendo uma fogueira",
      "Usando walkie-talkie",
      "Pressionando o botão SOS físico",
      "Enviando e-mail offline",
    ],
    correta: 2,
  },
  {
    pergunta:
      "Qual é o tempo máximo de entrega de alerta via satélite Iridium?",
    opcoes: ["30 segundos", "1 minuto", "3 minutos", "10 minutos"],
    correta: 2,
  },
  {
    pergunta: "O aplicativo de campo das equipes funciona como?",
    opcoes: [
      "Apenas online com 4G",
      "Completamente offline, sincronizado previamente",
      "Via rádio VHF",
      "Somente com Wi-Fi do kit",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Qual painel recebe os dados de localização e urgência das vítimas?",
    opcoes: [
      "App das vítimas",
      "Painel da Defesa Civil",
      "Servidor do Raspberry",
      "Dashboard do modem",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é a principal vantagem sobre sistemas convencionais?",
    opcoes: [
      "É mais barato que um celular",
      "Funciona sem energia, internet ou cobertura celular",
      "Usa apenas bluetooth",
      "Depende de torres de telefonia",
    ],
    correta: 1,
  },
];

let perguntaAtual = 0;
let pontuacao = 0;
let respondido = false;

let telaInicio = document.querySelector(".tela-inicio");
let perguntas = document.querySelector(".perguntas");
let resultado = document.querySelector(".resultado");
let btnProxima = document.querySelector(".btn-proxima");
let contador = document.querySelector(".contador");
let barraFill = document.querySelector(".barra-fill");
let pergunta = document.querySelector(".pergunta");
let opcoes = document.querySelector(".opcoes");
let resultadoTitulo = document.querySelector(".resultado-titulo");
let resultadoMsg = document.querySelector(".resultado-msg");

function mostrarPergunta() {
  respondido = false;
  btnProxima.classList.remove("visivel");

  let p = listaPerguntas[perguntaAtual];
  let num = perguntaAtual + 1;

  contador.textContent = "Pergunta " + num + " de " + listaPerguntas.length;
  barraFill.style.width = (num / listaPerguntas.length) * 100 + "%";
  pergunta.textContent = p.pergunta;
  opcoes.innerHTML = "";

  for (let i = 0; i < p.opcoes.length; i++) {
    let btn = document.createElement("button");
    btn.className = "opcao";
    btn.textContent = p.opcoes[i];
    btn.dataset.indice = i;
    btn.addEventListener("click", selecionarOpcao);
    opcoes.appendChild(btn);
  }
}

function selecionarOpcao() {
  if (respondido) return;
  respondido = true;

  let indice = parseInt(this.dataset.indice);
  let correta = listaPerguntas[perguntaAtual].correta;
  let todasOpcoes = document.querySelectorAll(".opcao");

  for (let i = 0; i < todasOpcoes.length; i++) {
    todasOpcoes[i].disabled = true;
  }

  if (indice === correta) {
    this.classList.add("correta");
    pontuacao++;
  } else {
    this.classList.add("errada");
    todasOpcoes[correta].classList.add("correta");
  }

  btnProxima.classList.add("visivel");
  btnProxima.textContent =
    perguntaAtual === listaPerguntas.length - 1 ? "Ver Resultado" : "Próxima";
}

function mostrarResultado() {
  perguntas.classList.remove("ativa");
  resultado.classList.add("ativa");

  if (pontuacao === 10) {
    resultadoTitulo.textContent = "Perfeito!";
    resultadoMsg.textContent = "Você acertou tudo.";
  } else if (pontuacao >= 7) {
    resultadoTitulo.textContent = "Muito bom!";
    resultadoMsg.textContent = pontuacao + " de 10. Quase lá.";
  } else if (pontuacao >= 5) {
    resultadoTitulo.textContent = "Razoável.";
    resultadoMsg.textContent = pontuacao + " de 10. Vale rever o conteúdo.";
  } else {
    resultadoTitulo.textContent = "Pode melhorar.";
    resultadoMsg.textContent = pontuacao + " de 10. Tente novamente.";
  }
}

document.querySelector(".btn-iniciar").addEventListener("click", function () {
  telaInicio.classList.remove("ativa");
  perguntas.classList.add("ativa");
  mostrarPergunta();
});

btnProxima.addEventListener("click", function () {
  perguntaAtual++;
  if (perguntaAtual < listaPerguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
});

document.querySelector(".btn-reiniciar").addEventListener("click", function () {
  perguntaAtual = 0;
  pontuacao = 0;
  respondido = false;
  resultado.classList.remove("ativa");
  telaInicio.classList.add("ativa");
});
