const db = require('../database/models');
const { Op } = require('sequelize');

module.exports = {
    list: (req, res) => {
        db.movies.findAll()
        .then (movies => {
            res.render('moviesList', {movies});
        })
        .catch (err => {
            console.log('Error al requerir las películas de la base de datos. Error: ', err);
        })
    },

    detail: async (req, res) => {
        try {
            const movie = await db.movies.findByPk(+req.params.id);
            res.render('moviesDetail', {movie})
        } catch (error){
            console.log('Error al requerir la película de la base de datos. Error: ', error);
        }
    },

    new: (req, res) => {
        db.movies.findAll({
            order: [
                ['release_date', 'DESC']
            ]
        })
        .then (movies => {
            res.render('newestMovies', {movies});
        })
        .catch (err => {
            console.log('Error al requerir las películas de la base de datos. Error: ', err);
        })
    },

    recommended: (req, res) => {
        db.movies.findAll({
            where: {
                rating: {[Op.gte]: 9},
                awards: {[Op.gte]: 3},
            },
            order: [
                ['rating', 'DESC']
            ]
        }
        )
        .then (movies => {
            res.render('recommendedMovies', {movies});
        })
        .catch (err => {
            console.log('Error al requerir las películas de la base de datos. Error: ', err);
        })
    },
};
