const express = require('express');
const router = express.Router();
const axios = require('axios');

require('dotenv').config();

router.get('/:query', (req, res) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_KEY}`)
    .then(response => {
        console.log(response.data);
        res.send(response.data)
    })
    .catch(error => {
        res.sendStatus(500)
    }) 
})

module.exports = router;
