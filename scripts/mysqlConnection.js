const express = require('express');

var mysql = require('mysql');

const bodyParser = require('body-parser');




const app = express();

app.use(bodyParser.json());

const PORT = 3100;




const path = require('path')

app.use('/', express.static(path.join(__dirname, 'public')))




app.get('/api/', (req, res) => {

    res.send('Hello World!');

});




const getDB = () => {

    return mysql.createConnection({

      host: "localhost",

      user: "root",

      password: "1101Rayo",

      database: "test"

    });  

  }




app.get('/api/utenti', (req, res) => {

    const con = getDB();

  con.connect(function(err) {

    if (err) throw err;

    console.log("Connected!");

    const sql = "SELECT * FROM utente";

    con.query(sql, function (err, result) {

      if (err) throw err;

      console.log("Result: " + JSON.stringify(result, null, 4));

      res.json(result);

    });

    con.end();

  });

 

});




// esempio di gestione della singola richiesta

app.post('/api/login', (req, res) => {

    console.log("RICEVO LA RICHIESTA", req.body);

    var username = req.body.username;

    var password = req.body.password;

      // query per selezionare un utente con lo stesso username

    const sql = "SELECT * FROM utente WHERE USERNAME = '" + username + "'";

    const con = getDB();

    con.query(sql, function (err, result) {

      if (err) throw err;

      console.log("Result: " + JSON.stringify(result, null, 4));

      // verifica risultati e della password

      if (result && result.length > 0) {

        if(result[0].PASSWORD == password) {

          res.json(result);

        }

      }

      res.json({errore: "LOGIN FALLITA"});

          // IMPORTANTE: chiudere la connessione

      con.end();

    });  

  });




app.post('/api/register', (req, res) => {

  console.log("RICHIESTA REGISTRAZIONE", req.body);




  var username = req.body['username'];

  var password = req.body['password'];

  const sql = "INSERT INTO USER (USERNAME, PASSWORD) VALUES ('" + username + "', '" + password+ "')";

  const con = getDB();

  con.query(sql, function (err, result) {

    if (err) throw err;

    console.log("Result: " + JSON.stringify(result, null, 4));

    res.json(result);

  });  

  con.end();  

});




app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));