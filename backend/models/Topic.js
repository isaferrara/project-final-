const { Schema, model } = require('mongoose');

const topicSchema = new Schema(
  {
    title: String,
    objective: String,
    duration: String, 
  },
  {
    timestamps: true,
    versionKey: false
  }
);


module.exports = model('Topic', userSchema);
