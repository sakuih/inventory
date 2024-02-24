const mongoose = require('mongoose')
require('dotenv').config()

const itemSchema = new mongoose.Schema({
    id: Number,
})

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = mongoose.model("item", itemSchema)