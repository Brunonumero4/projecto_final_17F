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

   app.put("/api/songs/:id", (req,res) =>{

    const myQuery = `UPDATE ${musica} SET title='${req.body.title}', artist='${req.body.artist}', album='${req.body.album}', genre='${req.body.genre}', duration_seconds='${req.body.duration_seconds}' WHERE id=${req.params.id}`

    connection.query(myQuery, (err, results) => {
        if (err) {
          return res.status(500).send('Erro a adicionar música' + err.message);
        }
      
        res.json(results); 
      
      });
      
      });

    app.delete("/api/songs/:id" , (req,res) =>{

      const myQuery = `DELETE FROM ${musica}  WHERE id= ${req.params.id} `


      connection.query(myQuery, (err, results) => {
        if (err) {
          return res.status(500).send('Erro a adicionar música' + err.message);
        }
      
        res.json(results); 
      
      });
      
      });

      app.get("/api/songs/:id", (req,res) => {

        const myQuery = `SELECT * FROM ${musica} WHERE id= ${req.params.id}`
    
        connection.query(myQuery, (err, results) => {
            if (err) {
              return res.status(500).send('A música que procura não foi encontrada: ' + err.message);
            }
          
            res.json(results); 
        });
      });

let pricePerLike = 0.3 ;

    app.get("/api/price" , (req,res) =>{

     res.json(
      {
        "price" : pricePerLike
      }
     ); 

    });


  app.put("/api/price" , (req,res) =>{
    pricePerLike = req.body.price;
    res.status(200).send('Preço atualizado');
      });
      
  

   app.get("/api/songs/:id/revenue" , (req,res) =>{

    const myQuery = `SELECT * FROM ${musica} WHERE id= ${req.params.id}`
    
    connection.query(myQuery, (err, results) => {
      if (err) {
        return res.status(500).send('Impossível identificar a revenue: ' + err.message);
      }
    const conta =results[0].likes * pricePerLike;

      res.json(conta); 
  }); 
});

const bands = [
  {
    "artist": "Kendrick Lamar",
    "band_members": ["Kendrick Lamar"],
  },
  {
    "artist": "Blu Cantrell",
    "band_members": ["Blue Cantrell"],
  },
  {
    "artist": "BigXthaPlug",
    "band_memebers": ["BigXthaPlug"],
  },
  {
    "artist": "Bring Me The Horizon",
    "band_memebers": ["Oliver Sykes",
                      "Lee Malia",
                      "Matt Kean",
                      "Matt Nicholls",
                      "Jordan Fish",
                                      ]
  }
];

app.get("/api/songs/:id/band", (req,res) => {

  const myQuery = `SELECT * FROM ${musica} WHERE id= ${req.params.id}`

  connection.query(myQuery, (err, results) => {
      if (err) {
        return res.status(500).send('A música que procura não foi encontrada: ' + err.message);
      }

      
    for (let i= 0; i < bands[i]; i++)

      if (bands[i] = results[0].artist) {
        res.json(bands[i])
      } else {
        res.send ('Não encontrado')
      }
  });
});
