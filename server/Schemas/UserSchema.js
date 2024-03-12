const { object } = require('joi');
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        FirstName: String,
        LastName: String,
        UserId:Number,
        name: { type: String, required: true },
        picture: String,
        email: { type: String, required: true },
        portfolios: Array,
        views: Number,
        likes: Number,
        liked: Array,
        profile: Object
    }
)

const Users = mongoose.model("Users", userSchema);

module.exports = Users