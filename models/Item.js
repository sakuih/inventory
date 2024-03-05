const mongoose = require('mongoose')
require('dotenv').config()

const itemSchema = new mongoose.Schema({
    //id: String,
    name: String,
    desc: String
})

const url = process.env.MONGO_URI

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(result => {
        console.log("Connected to MongoDB")
    })
    .catch((e) => {
        console.log("Error connecting to MongoDB", e.message)
    })

itemSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject.__v
    }
})



module.exports = mongoose.model("Item", itemSchema)
