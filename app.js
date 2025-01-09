const express = require("express");
const path = require("path");
const app = express();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: `127.0.0.1`,
    user: `root`,
    password: ``,
    database: `m17f_bruno`,
    port: 3306
  });
  
  connection.connect((err) => {
    if (err) {
      console.error('Erro ao comunicar à base de dados' , err.message);
    } else {
      console.log('Conectado à base de dados mySQL');
    }
  });
  
  
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Servidor a correr em https://localhost:${PORT}`);
  });

  app.use(express.json())

const musica = "songs"

  app.get("/api/songs", (req,res) => {

    const myQuery = `SELECT * FROM ${musica}`

    connection.query(myQuery, (err, results) => {
        if (err) {
          return res.status(500).send('A música que procura não foi encontrada: ' + err.message);
        }
      
        res.json(results); 
    });
  });

  app.post("/api/songs", (req,res) =>{

    const myQuery = `INSERT INTO ${musica} (id, title, artist, album, genre, duration_seconds, release_date, likes, created_at) VALUES (null, '${req.body.title}', '${req.body.artist}', '${req.body.album}', '${req.body.genre}', '${req.body.duration_seconds}', '${req.body.release_date}', '${req.body.likes}', current_timestamp()	)  `

    connection.query(myQuery, (err, results) => {
      if (err) {
        return res.status(500).send('Erro a adicionar música' + err.message);
      }
    
      res.json(results); 
    
    });
    
    });

   app.put("/api/songs", (req,res) =>{

    const myQuery = `UPDATE ${musica} SET title='${req.body.title}', artist='${req.body.artist}', album='${req.body.album}', genre='${req.body.genre}', duration_seconds='${req.body.duration_seconds}',`

    })
