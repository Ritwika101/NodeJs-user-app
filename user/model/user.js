const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  username: { type: String, required: true },
});

userSchema.index({
    username : 1
});

module.exports = mongoose.model("User", userSchema);
