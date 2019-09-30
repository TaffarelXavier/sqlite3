# Guia Rápido sobre o SQLite3

- [Conexão com o Banco de Dados Sqlite3](#select)
- [Select](#select)
- [Insert](#insert)
- [Update](#update)
- [Delete](#delete)


> ## Pré-requisito:

- Node Js

> ## Instalação:

---

```git
npm install sqlite3
```


> ## Conexão com o Banco de Dados Sqlite3

```javascript
//Importa o sqlite3
const sqlite3 = require('sqlite3').verbose();

//Cria a conexão:
let db = new sqlite3.Database('./db/mydb.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Conectado ao banco de dados');
});
```

- > ## Select



- > ## Insert



- > ## Update



- > ## Delete
