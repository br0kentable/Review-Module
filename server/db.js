// const config = require('../config.json');
require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('Review_Module', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

const Review = sequelize.define('review', {
  userId: Sequelize.INTEGER,
  restaurantId: Sequelize.STRING,
  reviewDate: Sequelize.DATEONLY,
  text: Sequelize.TEXT,
  tags: Sequelize.TEXT,
  overallScore: Sequelize.INTEGER,
  foodScore: Sequelize.INTEGER,
  serviceScore: Sequelize.INTEGER,
  ambienceScore: Sequelize.INTEGER,
  valueScore: Sequelize.INTEGER,
  noise: Sequelize.INTEGER,
  recommend: Sequelize.STRING
});

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    defaultValue: 'BrokenTableDiner'
  },
  location: Sequelize.STRING,
  vip: Sequelize.STRING,
  reviewNumber: Sequelize.INTEGER
});

User.hasMany(Review, { foreignKey: 'userId' });
Review.belongsTo(User, { foreignKey: 'userId' });

sequelize
  .sync()
  .then(() => {
    console.log('Connected to database, tables synced');
  })
  .catch(err => {
    console.error('Unable to connect to database', err);
  })


// User.sync({force: true}).then(() => {
//   console.log('User table synced');
// });

// Review.sync({force: true}).then(() => {
//   console.log('Review table synced');
// });

module.exports.sequelize = sequelize;
module.exports.Review = Review;
module.exports.User = User;