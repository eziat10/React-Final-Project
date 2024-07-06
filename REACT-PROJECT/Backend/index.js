const express = require('express');
const cors = require('cors');
const connectDB = require('./Configs/Db');

const UsersController = require('./Controllers/UsersController');
const moviesController = require('./Controllers/MoviesController');
const membersController = require('./Controllers/MembersController');
const subscriptionsController = require('./Controllers/SubscriptionsController');
const loginController = require('./Controllers/LoginController'); 

const app = express();
const PORT = 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/users', UsersController);
app.use('/movies', moviesController);
app.use('/members', membersController);
app.use('/subscriptions', subscriptionsController);
app.use('/login', loginController); 

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});