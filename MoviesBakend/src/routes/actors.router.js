const { getAll, create, getOne, remove, update, setActorGenres } = require('../controllers/actor.controllers');
const express = require('express');

const actorsRouter = express.Router();

actorsRouter.route('/')
    .get(getAll)
    .post(create);

    actorsRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);
    actorsRouter.route('/:id/genres')
    .post(setActorGenres);

module.exports = actorsRouter;
