const express = require('express');
const router = express.Router();
const _ = require('underscore');

const movies = require('../movies.json');

router.get('/', (req, res) => {
    res.json(movies);
});

router.post('/', (req, res) => {
    const { title, type, rating } = req.body;
    if (title && type && rating) {
        const id = movies.length + 1;
        const newMovie = { id, ...req.body }
        movies.push(newMovie);
        res.send('Movie succesfully saved');
    } else {
        res.status(400).json({ error: 'Wrong request' });
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(movies, (movie, i) => {
        if (movie.id == id) {
            movies.splice(i, 1);
            res.send(movies);
        }
    })
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, type, rating } = req.body;
    if (title && type && rating) {
        _.each(movies, (movie, i) => {
            if (movie.id == id) {
                movie.title = title;
                movie.type = type;
                movie.rating = rating;
            }
        });
        res.json(movies);
    } else {
        res.status(400).json({ error: 'Wrong request' });
    }

});

module.exports = router;