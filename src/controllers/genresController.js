const db = require('../database/models');

module.exports = {
    list: (req, res) => {
        db.genres.findAll()
        .then (genres => {
            res.render('genresList', {genres});
        })
        .catch (err => {
            console.log('Error al requerir los géneros de la base de datos. Error: ', err);
        })
    },

    detail: (req, res) => {
        db.genres.findByPk(+req.params.id)
        .then (genre => {
            res.render('genresDetail', {genre})
        })
        .catch (err => {
            console.log('Error al requerir la película de la base de datos. Error: ', err);
        })
    },
};
