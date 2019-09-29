const sqlite3 = require("sqlite3").verbose();

console.log(sqlite3.OPEN_READWRITE);

// open database in memory
let db = new sqlite3.Database("./db/chsinook.db", 2, err => {
  if (err) {
    return console.error(err);
  }
  //db.run('CREATE TABLE langs(name text)');
  console.log("Connected to the in-memory SQlite database.");
});


/*
let languages = ['C++', 'Python', 'Java', 'C#', 'Go'];
let placeholders = languages.map((language) => '(?)').join(',');
let sql = 'INSERT INTO langs(name) VALUES ' + placeholders;
// output the INSERT statement
console.log(sql);

db.run(sql, languages, function(err) {
  if (err) {
    return console.log(err.message);
  }
  // get the last insert id
  console.log(`A row has been inserted with rowid ${this.lastID}`);
});*/

db.serialize(() => {
  db.each(
    `SELECT * FROM langs;`,
    (err, row) => {
      if (err) {
        console.error(err.message);
      }
     console.log(row);
    }
  );
});

// close the database connection
db.close(err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Close the database connection.");
});
