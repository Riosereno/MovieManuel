const express = require('express');
const directorsRouter = require('./directors.router');
const actorsRouter = require('./actors.router');
const moviesRouter = require('./movies.router');
const genresRouter =require('./genres.router');
const router = express.Router();

router.use('/directors',directorsRouter);
router.use('/actors',actorsRouter);
router.use('/movies',moviesRouter);
router.use('/genres',genresRouter);

module.exports= router;