const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    steamId: {type: String, default: "", unique: true },
}, 
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);