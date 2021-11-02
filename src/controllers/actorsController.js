const db = require('../database/models');

module.exports = {
    list: (req, res) => {
        db.actors.findAll()
        .then (actors => {
            res.render('actorsList', {actors});
        })
        .catch (err => {
            console.log('Error al requerir los actores y actrices de la base de datos. Error: ', err);
        })
    },

    detail: (req, res) => {
        db.actors.findByPk(+req.params.id)
        .then (actor => {
            db.movies.findByPk(+actor.favorite_movie_id)
            .then (favorite_movie => {
                res.render('actorsDetail', {actor, favorite_movie})
            })
            .catch (err => {
                console.log('Error al requerir la película de la base de datos. Error: ', err);
            })
        })
        .catch (err => {
            console.log('Error al requerir el actor o actriz de la base de datos. Error: ', err);
        })
    },
};
