const express = require('express');
const pg = require('pg');
const pool = require('../modules/pool');
const { setMaxListeners } = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  console.log('GET faves');
  let queryString = `SELECT * FROM "favorites" GROUP BY "category_id"`
  pool.query(queryString, [req.params.id])
    .then((result) => {
      res.send(result.rows)
      // res.sendStatus(200);
    }).catch((error) => {
      res.send(500);
    })
});

// add a new favorite 
router.post('/', (req, res) => {
  const newFave = req.body
  const queryText = `INSERT INTO "favorites" ("url") 
                     VALUES ($1);`
  // change .url to the appropriate key to send to db 
  pool.query(queryText, newFave.url)
    .then(() => { res.sendStatus(201); })
    .catch((error) => {
      console.log('Error in POST route', error);
      res.sendStatus(500)
    })

});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const id = req.params.favId
  const category = req.body
  const queryText = `UPDATE "favorites"
                     SET "category_id" = $1
                     WHERE "id" = $2;`
 
  pool.query(queryText, [category.id, id])
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
