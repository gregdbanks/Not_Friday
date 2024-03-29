const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema({
  daily: {
    type: String,
    required: true,
  },
  completed: {
    type: String,
    required: true,
  },
  blockers: {
    type: String,
  },
  status: {
    type: String,
    default: "public",
    enum: ["public", "private"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Story", StorySchema);
