import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  name: String,
  musicStyle: String,
})

export const Artists = mongoose.model('Artist', ArtistSchema);