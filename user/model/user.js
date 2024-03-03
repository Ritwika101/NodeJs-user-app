import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  username: { type: String, required: true },
});

userSchema.index({
    username : 1
});

export default mongoose.model("User", userSchema);
