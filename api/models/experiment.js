const mongoose = require("mongoose")

const schema = mongoose.Schema({
	independent: String,
    dependent: String,
    description: String
})

module.exports = mongoose.model("Experiment", schema)