Como executar a app React

Para executar a aplicação React, entrar na pasta client com `cd client`. Depois, instalar as dependências com `npm install` e iniciar a aplicação com `npm run dev`. Abrir no browser o endereço indicado no terminal.

Pergunta 3 — Onde é construído o HTML?

O HTML é construído no servidor e enviado para o browser. Na aplicação React, a interface é construída no browser através do JavaScript e dos componentes React. Podemos comparar o código apresentado no View Source para perceber a diferença.

Pergunta 4 — Diferença nos pedidos de rede

Mudar de página ou aplicar um filtro que provoque um pedido ao servidor pode gerar novos requests. Na aplicação React, filtrar as cartas normalmente não gera novos requests, porque os dados já estão carregados e a interface é atualizada no browser. O número de pedidos depende da implementação de cada aplicação.
