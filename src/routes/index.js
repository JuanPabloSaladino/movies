/*const { Router } = require('express');
const router = Router()*/
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send({
        "Title": "Hello world"
    });
})

module.exports = router;