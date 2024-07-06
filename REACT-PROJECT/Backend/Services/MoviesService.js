const movieRepo = require("../Repositories/MoviesRepo");

const getAllMovies = (filters = {}) => {
  return movieRepo.getAllMovies(filters);
};

const getMovieById = (id) => {
  return movieRepo.getMovieById(id);
};

const addMovie = (movieData) => {
  return movieRepo.addMovie(movieData);
};

const updateMovie = (id, movieData) => {
  return movieRepo.updateMovie(id, movieData);
};

const deleteMovie = (id) => {
  return movieRepo.deleteMovie(id);
};

module.exports = {
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
};