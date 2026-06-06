const mongoose = require("mongoose");

const userGameSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    gameId: { type: mongoose.Schema.Types.ObjectId, ref: "Game", required: true },

    steamAppId: { type: Number, required: true },

    status: { type: String, enum: ["Wishlist", "Backlog", "Playing", "Completed", "Dropped"], default: "Backlog" },

    hoursPlayed: { type: Number, min: 0, default: 0 },

    playtimeForever: { type: Number, min: 0, default: 0 },

    playtimeTwoWeeks: { type: Number, min: 0, default: 0 },

    rating: { type: Number, min: 0, max: 10, default: null },

    completionPercent: { type: Number, min: 0, max: 100, default: 0 },

    achievementsUnlocked: { type: Number, min: 0, default: 0 },

    totalAchievements: { type: Number, min: 0, default: 0 },

    timesCompleted: { type: Number, min: 0, default: 0 },

    personalReview: { type: String, default: "" },

    notes: { type: String, default: "" },

    lastPlayedAt: { type: Date, default: null },

    lastSyncedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

userGameSchema.index({ userId: 1, gameId: 1 }, { unique: true });

module.exports = mongoose.model("UserGame", userGameSchema);