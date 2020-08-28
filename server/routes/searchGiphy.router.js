const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.put('/:query', (req, res) => {
    console.log(req.params.query);
    let query = req.params.query;
   
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_KEY}&q=${query}&limit=8`)

    .then(response => {
        // console.log(response.data);
        res.send(response.data)
    })
    .catch(error => {
        res.sendStatus(500)
    }) 
})

module.exports = router;
