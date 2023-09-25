const users = [
{
  username: 'frogbuddy',
  email: 'frogbuddy@hotmail.com',
},
{
  username: 'mastershake',
  email: 'mshake@gmail.com',
},
{
  username: 'littlelady',
  email: 'queenbee@gmail.com',
},
{
  username: 'baseballgirl',
  email: 'baselady@gmail.com',
},
{
  username: 'scienceguy',
  email: 'scienceparty@gmail.com',
},
{
  username: 'lordboddington',
  email: 'naughtyboddi@gmail.com',
},
{
  username: 'naturegal',
  email: 'naturegal@gmail.com',
},
{
  username: 'coalminer',
  email: 'coaliscool@gmail.com',
},
{
  username: 'awkwardwoman',
  email: 'thisisawkward@gmail.com',
},
{
  username: 'lameduck',
  email: 'solame@gmail.com',
}
];

// const thoughtDescriptions = [
//   'Feeling great today!',
//   'Got a new phone!',
//   'My team won the game!',
//   'Finally found a job!',
//   'Wish it was winter',
//   'Saw a great movie last night',
//   'We need some rain',
//   'I messed up do bad today',
//   'So homesick',
//   'When will this be over?',
// ];

// const possibleReactions = [
//   'cool',
//   'dumb',
//   'random',
//   'me too!',
//   'not!',
//   'get outa here',
//   'no way',
//   'crap',
//   'you know nothing',
//   'not so fast',
//   'I agree',
// ];


// Get a random item given an array
// const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
// const getRandomUser = () =>
//   `${getRandomArrItem(users)}`;

// Function to generate random thoughts that we can add to the database. Includes reactions.
// const getRandomThoughts = (int) => {
//   let results = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       thoughtText: getRandomArrItem(thoughtDescriptions),
//       reactions: [...getThoughtReactions(3)],
//     });
//   }
//   return results;
// };

// Create the reactions that will be added to each thought
// const getThoughtReactions = (int) => {
//   if (int === 1) {
//     return getRandomArrItem(possibleReactions);
//   }
//   const results = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       reactionBody: getRandomArrItem(possibleReactions),
//       username: getRandomUser(),
//     });
//   }
//   return results;
// };

// Export the functions for use in seed.js
module.exports = { users };
