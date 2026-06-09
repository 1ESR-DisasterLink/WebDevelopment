## Interação 1 — Slideshow quebrando ao chegar no último slide

**O que foi solicitado para a IA**

O slideshow funcionava corretamente ao avançar as imagens, mas ao chegar na última foto e clicar na seta para avançar, a tela ficava em branco. Pedimos que a IA identificasse a causa do problema.

**O que a IA retornou**

A IA explicou que o problema ocorria porque, ao somar +1 ao índice do último slide, o valor ultrapassava os limites do array e apontava para uma posição inexistente (`undefined`). A solução proposta foi utilizar o operador módulo `%` para fazer o índice "dar a volta" ao chegar no fim:

```js
slideAtual = (n + todosSlides.length) % todosSlides.length;
```

**O que foi alterado ou rejeitado e o motivo**

Aceitamos a solução integralmente. Substituímos apenas a linha `slideAtual = n` pela versão com módulo, sem outras alterações no código.

---

## Interação 2 — Quiz permitindo selecionar múltiplas opções

**O que foi solicitado para a IA**

O quiz permitia que o usuário clicasse em várias opções seguidas, fazendo com que todas ficassem coloridas ao mesmo tempo. Tentamos adicionar um `if` no início da função verificando se o botão já possuía a classe `"correta"` ou `"errada"`, mas a solução não funcionou, pois os demais botões continuavam clicáveis. Pedimos que a IA bloqueasse todas as opções após a primeira seleção.

**O que a IA retornou**

A IA sugeriu usar uma variável de controle chamada `respondido`, declarada fora da função. No primeiro clique, ela seria definida como `true`, e a função retornaria imediatamente caso já fosse `true`. Também sugeriu aplicar `.disabled = true` em todos os botões para garantir o bloqueio visual. Além disso, a IA alertou que seria necessário resetar `respondido = false` sempre que uma nova pergunta fosse exibida, caso contrário o bloqueio da primeira pergunta impediria a interação com todas as seguintes.

**O que foi alterado ou rejeitado e o motivo**

Aceitamos a solução completa, incorporando a variável `respondido` e o `.disabled = true`. Nenhuma parte da sugestão foi descartada.

---

## Interação 3 — Reiniciar o quiz não limpava as cores das opções

**O que foi solicitado para a IA**

Implementamos o botão de reiniciar o quiz, que voltava para a tela inicial e resetava as variáveis `perguntaAtual` e `pontuacao`. Porém, ao jogar novamente, as opções da primeira pergunta já apareciam com as cores verde e vermelho da partida anterior. Pedimos que a IA resolvesse esse problema, que persistia mesmo após o reset das variáveis.

**O que a IA retornou**

A IA explicou que as classes CSS permanecem nos elementos do DOM independentemente das variáveis JavaScript, ou seja, resetar as variáveis não afeta o visual. Foram sugeridas duas abordagens:

- **Opção A:** Limpar manualmente as classes dos botões existentes no momento do reinício.
- **Opção B:** Recriar os botões do zero toda vez que `mostrarPergunta()` fosse chamada, limpando o `innerHTML` do container antes de inserir os novos elementos.

**O que foi alterado ou rejeitado e o motivo**

Escolhemos a Opção B e descartamos a Opção A. Além de resolver o problema das cores, essa abordagem eliminou também o problema do `.disabled` que ficava travado entre perguntas, já que os botões são recriados do zero a cada rodada, nunca herdam o estado da pergunta anterior.