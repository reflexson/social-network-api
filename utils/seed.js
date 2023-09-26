const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }
  
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }





  await User.collection.insertMany(users);

  console.table(users);

  console.info('Seeding complete! 🌱');
  process.exit(0);
});
