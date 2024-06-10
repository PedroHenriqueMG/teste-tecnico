# Como rodar a API

tem duas maneiras de rodar a API, pode ser atraves do docker ou baixando as dependencias e rodando localmente na maquina.

## rodar localmente

- baixe as dependencias usando um comando node
  exemplo: pnpm install, yarn ou npm install

- crie um arquivo .env na raiz do projeto seguindo o exemplo do .env.example

- Rode a API com um comando node dev
  examplo: pnpm dev, yarn dev ou npm run dev

- Agora teste a API na sua maquina local ultilizando a porta escolhida no .env

## rodar com Docker

- Abra seu docker e crie um arquivo .env na raiz do projeto, porem dessa vez não precisa colocar nada dentro dele

- Execute o comando docker-compose up ou se estiver no linux use o docker compose up

- Aguarde ate subir o container e use a API na porta 8080 da sua maquina local
