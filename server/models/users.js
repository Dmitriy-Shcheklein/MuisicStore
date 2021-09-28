import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  password: Number,
  name: String,
})

export const Users = mongoose.model('User', UserSchema)