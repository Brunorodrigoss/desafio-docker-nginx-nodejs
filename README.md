# desafio-docker-nginx-nodejs

Desafio: Utilizar do nginx como proxy reverso
- [x] Quando um usuário acessar o nginx, o mesmo fará uma chamada da aplicação node.js
- [x] A aplicação node.js, por sua vez adicionará um registro no banco de dados mysql cadastrando um nome na tabela people
- [x] O retorno da aplicação node.js para o nginx deverá ser:
      <h1>Full Cycle Rocks!</h1>
      - Lista de nomes cadastrada no banco de dados.
- [x] Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Para verificar o seu correto funcionamento, seguir os passos abaixo:
1. Clonar repositorio
2. Dentro do repositorio, utilizar o comando abaixo para subir os containers:
```
docker-compose up -d
```
3. Abrir o navegador no endereço http://localhost:8080 (**nginx**)

A cada nova requisição na página é gravado o nome no Banco de dados(**mysql**) e aprensentado no navegador pelo **nodejs**.
