const Movie = require("../Models/MoviesModel");

// Get All Movies
const getAllMovies = (filters) => {
  return Movie.find(filters);
};

// Get Movie By ID
const getMovieById = (id) => {
  return Movie.findById(id);
};

// Create Movie
const addMovie = (movieData) => {
  const newMovie = new Movie(movieData);
  return newMovie.save();
};

// Update Movie
const updateMovie = (id, movieData) => {
  return Movie.findByIdAndUpdate(id, movieData, { new: true }); 
};

// Delete Movie
const deleteMovie = (id) => {
  return Movie.findByIdAndDelete(id);
};

module.exports = {
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
};