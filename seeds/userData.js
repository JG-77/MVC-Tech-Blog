const User = require('../models/User');

const userData = [
  {
    id: 1,
    username: 'newUser12',
    password: 'password123',
    email: 'sample@hotmil.com',
  },
  {
    id: 2,
    username: 'b1ll99',
    password: 'password987',
    email: '3mail@gmail.com',
  },
  {
    id: 3,
    username: 'blogger76',
    password: 'mypassword$1',
    email: 'example@tech.com',
  },
];

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;
