const express = require('express');
const pg = require('pg');
const pool = require('../modules/pool');
const { setMaxListeners } = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM favorites';
  pool.query(queryText)
    .then((result) => { 
      console.log(result.rows);
      res.send(result.rows); 
    })
    .catch((err) => {
      console.log('Error completing SELECT favorites query', err);
      res.sendStatus(500);
    });
});

//   console.log('GET faves');
//   let queryString = `SELECT * FROM "favorites" GROUP BY "category_id"`
//   pool.query(queryString, [req.params.id])
//     .then((result) => {
//       res.send(result.rows)
//       // res.sendStatus(200);
//     }).catch((error) => {
//       res.send(500);
//     })


// add a new favorite 
router.post('/:url', (req, res) => {
  const newFave = req.params.url
  const queryText = `INSERT INTO "favorites" ("url") 
                     VALUES ($1);`
  // change .url to the appropriate key to send to db 
  pool.query(queryText, [newFave])
    .then(() => { res.sendStatus(201); })
    .catch((error) => {
      console.log('Error in POST route', error);
      res.sendStatus(500)
    })

});

// update given favorite with a category id
router.put('/', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const id = req.body.id
  const category = req.body.category
  console.log(id, category);
  const queryText = `UPDATE "favorites"
                     SET "category_id" = $1
                     WHERE "id" = $2;`
 
  pool.query(queryText, [category, id])
  .then(() => { res.sendStatus(200); })
  .catch(error => {
    console.log('Error with UPDATE route', error);
    res.sendStatus(500)
  })
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
