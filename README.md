# Guia Rápido sobre o SQLite3

- [Conexão com o Banco de Dados Sqlite3](#select)
  - [Insert](#pushpin-insert)
  - [Select](#pushpin-select)
  - [Update](#pushpin-update)
  - [Delete](#pushpin-delete)


> ## Pré-requisito:
![](./assets/images/node_logo.png)
- Node Js [Download](https://nodejs.org/en/download/)

> ## Instalação:

Após instalar o Node, você deve instalar o pacote sqlite3 na **pasta do seu projeto:**

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
> ## :pushpin: Insert :
```javascript
let languages = ['C++', 'Python', 'Java', 'C#', 'Go'];
 
// construct the insert statement with multiple placeholders
// based on the number of rows
let placeholders = languages.map((language) => '(?)').join(',');
let sql = 'INSERT INTO langs(name) VALUES ' + placeholders;
 
// output the INSERT statement
console.log(sql);
 
db.run(sql, languages, function(err) {
  if (err) {
    return console.error(err.message);
  }
  console.log(`Rows inserted ${this.changes}`);
});
 
// close the database connection
db.close();
```

> ## :pushpin: Select :

```javascript
db.serialize(() => {
  db.each(`SELECT PlaylistId as id,
                  Name as name
           FROM playlists`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.id + "\t" + row.name);
  });
});
```


> ## :pushpin: Update :



> ## :pushpin: Delete :
