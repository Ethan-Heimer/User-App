const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
firstName: String,
lastName: String,
email: String,
organization: String,
phone: String,
address: String,
city: String,
country: String
})

module.exports = mongoose.model("Users", userSchema);