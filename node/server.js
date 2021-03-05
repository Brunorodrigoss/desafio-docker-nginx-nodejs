const express = require('express');
const app = express();
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}
const mysql = require('mysql');
const connection = mysql.createConnection(config);

connection.connect((err) =>{
  if (err) throw err;
  console.log('Connected!')
});

app.get('/', (req, res) => {
  insert = `INSERT INTO people (name) VALUES('Bruno')`
  select = `SELECT name FROM people`
  var list = ``
  
  connection.query(insert, (err, rows) => {
    if (err) throw err;
    console.log(`People inserted on database!`)

    connection.query(select, (err, rows) => {
      if (err) throw err;
  
      rows.forEach(element => {
        list += `<li>${element['name']}</li>`
      });
      
      res.send(
        ` <h1>Full Cycle Rocks!</h1>
          <ul>${list}</ul>
        `);
    });
  });
});

app.listen(port, ()=> {
  console.log(`Listening on port: ${port}`);
});
