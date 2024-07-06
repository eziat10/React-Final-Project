const mongoose = require('mongoose');

const connectDB = () => {
  
  mongoose
    .connect('mongodb://127.0.0.1:27017/FinalProject-3')
    .then(() => console.log('Connected to FinalProject-3 DB'))
    .catch((error) => console.log(error));
};

module.exports = connectDB;