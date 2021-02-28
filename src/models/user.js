const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  _id: { type: String, required: false },
  userImage: { type: String, required: false },
  userName: { type: String, required: true },
  userSureName: { type: String, required: true },
  userMail: { type: String, required: true },
  userBirthDay: { type: String, required: true },
  userTelePhone: { type: String, required: true },
  createdBy: { type: String, required: false },
  createdAt: { type: Date, required: false },
  changedBy: { type: String, required: false },
  changedAt: { type: Date, required: false },
});

module.exports = mongoose.model("User", UserSchema);