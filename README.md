# 🌐 DisasterLink — Landing Page

> Projeto desenvolvido como parte da disciplina de Web Development.

---

## 📌 Descrição do projeto

Quando uma enchente, desabamento ou incêndio acontece, a infraestrutura de comunicação cai junto, sem celular, sem internet, sem luz. Vítimas não conseguem pedir socorro, equipes de resgate não sabem aonde ir e a Defesa Civil coordena ações às cegas. Isso aconteceu no Rio Grande do Sul em 2024, onde municípios inteiros ficaram dias sem comunicação.

O **DisasterLink** é um sistema de comunicação de emergência criado para resolver exatamente esse problema. A solução é composta por um kit físico portátil, um painel de comando para a Defesa Civil e um aplicativo para as equipes de resgate. O kit usa rádio LoRa para receber sinais de socorro das vítimas e envia as informações via 4G ou, quando este falha, via satélite Iridium, garantindo comunicação em qualquer lugar do planeta, independente de infraestrutura terrestre.

---

## 💬 Estrutura de navegação

- **Hero**: apresentação da solução com slogan, imagem de impacto e botões de navegação
- **Problema**: o colapso da comunicação em situações de desastre, com contexto real do RS em 2024
- **Tecnologia**: os seis módulos que compõem o kit físico, apresentados em cards interativos
- **Objetivos**: as metas centrais da solução, organizadas em cards numerados
- **Público-alvo**: os grupos diretamente beneficiados pela solução
- **Benefícios**: as principais vantagens que o DisasterLink oferece
- **Aplicação no dia a dia**: o fluxo completo do desastre ao resgate, dividido em 5 etapas
- **Slideshow**: galeria de imagens com navegação manual e automática (troca a cada 5 segundos)
- **Quiz**: 10 perguntas interativas sobre desastres e a solução DisasterLink
- **Formulário de contato**: canal para interesse ou mais informações, com validação de campos
- **Troca de tema**: botão flutuante para alternar entre os temas Laranja, Rosa e Azul

---

## 🔧 Funcionalidades interativas

- Slideshow automático com controles manuais de navegação (anterior / próximo) e troca automática a cada 5 segundos
- Quiz de 10 perguntas com barra de progresso, feedback por questão e placar final
- Formulário de contato com validação de campos e mensagem de sucesso
- Seletor de tema que altera as cores da página inteira em tempo real (Laranja, Rosa e Azul)
- Navbar responsiva com links âncora para cada seção

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Descrição |
|---|---|
| HTML5 | Estrutura e marcação semântica |
| CSS3 | Estilização, variáveis CSS, Flexbox e responsividade |
| JavaScript | Slideshow, quiz interativo, validação de formulário e troca de tema |
| Google Fonts | Bebas Neue (títulos) e DM Sans (corpo) |

---

## ▶️ Como executar

```bash
# Clone o repositório
git clone https://github.com/FrameLab-1ESR/DisasterLink.git

# Acesse a pasta
cd DisasterLink-main

# Abra no navegador
open index.html
```

> Ou instale a extensão **Live Server** no VS Code e abra o `index.html` com ela.

---

## 📁 Estrutura do repositório

```
DisasterLink/
├── index.html ← Estrutura completa da página
├── css/
│   └── style.css ← Estilos, variáveis de tema e responsividade
├── js/
│   └── script.js ← Slideshow, quiz, validação e troca de tema
├── images/
│   ├── hero.jpeg 
│   ├── problema.jpeg
│   ├── publico.jpeg 
│   ├── slide1.png 
│   ├── slide2.png 
│   ├── slide3.png 
│   └── logo.png     
└── README.md ← Este arquivo
```

---

## 👩‍💻 Equipe

| Nome | RM |
|---|---|
| Caique Kenji Yafuco | 570368 |
| Guilherme Tome Nogueira | 570144 |
| Lucas de Andrade Astorini | 569119 |
| Sabrina Lopes da Silva | 571870 |
| Sofia Satomi Hagio | 569120 |
