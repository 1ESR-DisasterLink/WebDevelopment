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
