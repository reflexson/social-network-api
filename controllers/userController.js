const { User, Thought } = require('../models');

module.exports = {

  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get a single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete a user 
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      res.json({ message: 'User deleted!' })
    } catch (err) {
      res.status(500).json(err);
    }
  },



//Update a user
async updateUser(req, res) {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
      );

    if (!user) {
      return res.status(404).json({ message: 'No user with that ID' });
    }
    res.json({ message: 'User updated!' })
  } catch (err) {
    res.status(500).json(err);
  }
},

//Add Friend

async addFriend(req, res) {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true,}
    );

    if (!user) {
      return res.status(404).json({ message: 'No user with this id!' });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
},
//Delete Friend

async deleteFriend(req, res) {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: { _id: req.params.friendsId } } },
      { runValidators: true, new: true, overwrite:true}
    );

    if (!user) {
      return res.status(404).json({ message: 'No User with this id!' });
    }

    res.json(application);
  } catch (err) {
    res.status(500).json(err);
  }
},









};