import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  password: String,
  name: String,
})

export const Users = mongoose.model('User', UserSchema)