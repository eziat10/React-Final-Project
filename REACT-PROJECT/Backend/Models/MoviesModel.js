const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    year_premiered: {
      type: Number,
      required: true,
    },
    genres: {
      type: [String],
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const Movie = mongoose.model('Movie', movieSchema, 'Movies');
module.exports = Movie;