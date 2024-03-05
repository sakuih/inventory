const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
//import userRoutes from './routes/userRoutes.js'

const port = process.env.PORT || 5000
const app = express()
const items = require("./models/Item.js")
const cors = require('cors')


let data = []

//app.use('/api/users', userRoutes)
app.use(express.json())
//app.use(express.static('build'))
app.use(morgan('tiny'))
app.use(cors())

app.get('/', (req,res) => {
  items.find({})
    .then(result => {
      res.send(JSON.stringify(result, null, 4))
      data.concat(data)
      JSON.stringify(data, null, 4)
    })
    //.catch(err => err.message)
})

app.post('/', (req,res) => {
 
  console.log("req.body", req.body)
  const newItem = new items({
    name: req.body.name,
    desc: req.body.desc
  })

  newItem.save().then(() => {
    console.log(`Item.save ${newItem.name} also ${newItem.desc}`)
    res.send(JSON.stringify(newItem, null, 4))
  })

})

app.delete("/:id", (req, res) => {

  const itemId = req.params.id
  console.log("itemId", itemId)
  items.deleteOne({"_id" : itemId})

  .then(result => {
    res.status(204).end()
  })
    //.catch(err)
})

//app.put("")


//app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`)) 


