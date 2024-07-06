const express = require("express");
const movieService = require("../Services/MoviesService");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const filters = req.query;
    const movies = await movieService.getAllMovies(filters);
    res.send(movies);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await movieService.getMovieById(id);
    res.send(movie);
  } catch (error) {
    res.send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const movieData = req.body;
    const result = await movieService.addMovie(movieData);
    res.status(201).send(result);
  } catch (error) {
    res.send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const movieData = req.body;
    const result = await movieService.updateMovie(id, movieData);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await movieService.deleteMovie(id);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;