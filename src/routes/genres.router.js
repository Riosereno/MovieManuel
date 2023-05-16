const { getAll, create, getOne, remove, update ,setActorGenres} = require('../controllers/genre.controllers');
const express = require('express');

const genresRouter = express.Router();

genresRouter.route('/')
    .get(getAll)
    .post(create);



  
module.exports = genresRouter;