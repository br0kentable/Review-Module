const Sequelize = require('sequelize');
const sequelize = new Sequelize('Review_Module', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const Review = sequelize.define('review', {
  user_id: Sequelize.INTEGER,
  restaurant_id: Sequelize.STRING,
  review_date: Sequelize.DATEONLY,
  text: Sequelize.TEXT,
  tags: Sequelize.TEXT,
  overall_score: Sequelize.INTEGER,
  food_score: Sequelize.INTEGER,
  service_score: Sequelize.INTEGER,
  ambience_score: Sequelize.INTEGER,
  value_score: Sequelize.INTEGER,
  noise: Sequelize.INTEGER,
  recommend: Sequelize.STRING
});

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    defaultValue: 'BrokenTableDiner'
  },
  location: Sequelize.STRING,
  vip: Sequelize.STRING
});

User.hasMany(Review, { foreignKey: 'user_id' });
Review.belongsTo(User, { foreignKey: 'user_id' });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to database');
  })
  .catch(err => {
    console.error('Unable to connect to database', err);
  });

User.sync({ force: true }).then(() => {
  console.log('User table synced');
});

Review.sync({ force: true }).then(() => {
  console.log('Review table synced');
});

module.exports.sequelize = sequelize;
module.exports.Review = Review;
module.exports.User = User;