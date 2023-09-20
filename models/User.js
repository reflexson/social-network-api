const { Schema, model } = require('mongoose');
const validator = require('validator');

// Schema to create User model
const userSchema = new Schema(
  {
    username:{
      type:String,
      unique:true,
      required:true,
      trim:true,
    },
    email:{
      type:String,
      required:true,
      unique:true,
      validate:{
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email',
            isAsync: false
          }
      },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {

    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount` that gets the number of friends
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  });


// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
