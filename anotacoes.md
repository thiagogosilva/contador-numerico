## Anotações sobre o Projeto - Contador Numérico com Modo Escuro

# Estrutura do Projeto

- `index.html`: Contém a estrutura básica da página com os botões e o elemento que exibe o contador numérico.

- `style.css`: Define o estilo da página, incluindo o modo escuro, que altera a cor de fundo e a cor do texto.

- `script.js`: Contém a lógica do contador e as interações com os botões. Também gerencia o modo escuro e o armazenamento do valor do contador no localStorage.

# Lógica do Código

## 1. Armazenamento no `localStorage`
O contador mantém seu valor mesmo quando a página é recarregada. Isso é feito utilizando o `localStorage`.

## 2. Eventos dos Botões: 
A cada interação com os botões (`incrementar`, `decrementar`, `resetar`), a função atualizarContador() é chamada para atualizar o valor na interface e no `localStorage`.

## 3. Modo Escuro
O modo escuro é ativado quando o usuário clica no botão correspondente. O código altera a classe `dark-mode` no body, e a cor dos números é ajustada conforme o modo:

## 4. Alteração da Cor dos Números
Quando o número do contador é negativo, ele aparece em vermelho. Quando o modo escuro está ativado, o número positivo fica branco.

**Link para visualizar meu Mini Portfólio:**  
🔗 [Mini Portfólio 💻](https://thiagogosilva.github.io/desafio-90dias-dev/)