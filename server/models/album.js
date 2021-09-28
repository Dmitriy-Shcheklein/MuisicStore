import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  title: String,
  photoTitle: String,
  photoUrl: String,
  artistId: String,
  thumbnailUrl: String,
})

export const Albums = mongoose.model('Album', AlbumSchema);