const express = require('express')
const items = require("../models/Item")
const cors = require('cors')
const itemRouter = require('express').Router()


let data = []

itemRouter.get('/', (req,res) => {
  items.find({})
    .then(result => {
      res.send(JSON.stringify(result, null, 4))
      data.concat(data)
      JSON.stringify(data, null, 4)
    })
    //.catch(err => err.message)
})

itemRouter.post('/', (req,res) => {
 
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

itemRouter.delete("/:id", (req, res) => {

  const itemId = req.params.id
  console.log("itemId", itemId)
  items.deleteOne({"_id" : itemId})

  .then(result => {
    res.status(204).end()
  })
    //.catch(err)
})

itemRouter.put("/:id", (req, res) => {

  const id = req.params.id
  const body = req.body

  editedItem = {
    name: body.name,
    desc: body.desc
  }
  console.log("name", body.name)

  
  items.findByIdAndUpdate(id, editedItem) 
    .then(updatedItem => {
      res.json(updatedItem.id)
    })
})

module.exports = itemRouter








