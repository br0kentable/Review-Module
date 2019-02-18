const express = require('express');
const app = express();
const db = require('./db.js');
const port = 1337;

app.use(express.static('./public/dist'));

app.get('/api/users', (req, res) => {
  db.User.findAll()
    .then((users) => {
      res.send(users);
    });
});

app.get('/api/restaurants/:restaurantId/reviews', (req, res) => {
  db.Review.findAll({
    where: {
      restaurantId: req.params.restaurantId
    }
  })
    .then((reviews) => {
      res.send(reviews);
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});