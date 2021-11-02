const db = require('../database/models');

module.exports = {
    list: (req, res) => {
        db.movies.findAll()
        .then(movies => {
            res.render('moviesList', {movies})
        })
        .catch()
    },
};
