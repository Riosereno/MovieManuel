const Director = require("./Director");
const Movie = require("./Movie");
const Actor = require("./Actor");
const Genre = require("./Genre");

Director.belongsToMany( Movie, { through: "MoviesDirectors" });
Movie.belongsToMany(Director, { through: "MoviesDirectors" });

Movie.belongsToMany(Actor, { through: "MoviesActors" });
Actor.belongsToMany(Movie, { through: "MoviesActors" });

Movie.belongsToMany(Genre, { through: "MoviesGenres" });
Genre.belongsToMany(Movie, { through: "MoviesGenres" });

Movie.belongsToMany(Director, { through: "MoviesDirectors" });
Director.belongsToMany(Movie, { through: "MoviesDirectors" });

