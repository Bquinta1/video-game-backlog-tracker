const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    steamAppId: { type: Number, required: true, unique: true },

    title: { type: String, required: true, trim: true },

    description: { type: String, default: "" },

    genres: { type: [String], default: [] },

    platforms: { type: [String], default: [] },

    releaseDate: { type: Date, default: null },

    coverImage: { type: String, default: "" },

    headerImage: { type: String, default: "" },

    developer: { type: String, default: "" },

    publisher: { type: String, default: "" },

    steamStoreUrl: { type: String, default: "" },

    metacriticScore: { type: Number, min: 0, max: 100, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Game", gameSchema);