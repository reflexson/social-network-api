const { Schema } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required:true,
      minlength:1,
      maxlength:280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => date.toDateString(),
    },
    username:{
      type:String,
      required:true,
    },
    reactions:[reactionSchema]

    
  },
  {
    timestamps:true,
    toJSON: {
      getters: true,
      virtuals:true,
    },
    id: false,
  }
);

// Create a virtual property `reactionCount` that gets the number of reactions
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });




const Thoughts = model('thought', thoughtSchema);


module.exports = Thoughts;
