import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {getItems, postItem, updateItem, deleteItem } from './serverFunctions.js'
import UpdateModal from './UpdateModal.jsx'
import cors from 'cors'

function App() {
  const [items, setItems] = useState([])
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [filter, setFilter] = useState("")
  const [showAll, setShowAll] = useState(true)
  const [showModal, setShowModal] = useState(false)

  const closeModal = () => setShowModal(false)
  const openModal = () => setShowModal(true)

  const handleNameChange = (event) => setName(event.target.value)
  const handleDescriptionChange = (event) => setDesc(event.target.value)

  const handleFilterChange = (event) => {
    if (event.target.value > 0)
      setShowAll(false)
    else
      setShowAll(true)

    setFilter(event.target.value)
  }

  useEffect( () => {
    getItems().then(response => {
      setItems(response)
      //console.log("response ", response)
      //console.log("response type", typeof(response))
    })
  }, [])



  
  function createItem () {
    //event.preventDefault()
    const newItem = {
      name: name,
      desc: desc,
    }
    const duplicateCheck = items.some((item) => item.name === name)
    console.log("duplicateCheck ", duplicateCheck)
    if (name === '')
      alert('Please add a name')

    if (duplicateCheck === false && name !== '') {
      postItem(newItem)
      //setItems(items.concat(newItem))
      setName('')
      setDesc('')
    }
    if (duplicateCheck === true) {
      alert(`${name} is already on the list`)
      setName('')
      setDesc('')
    }
  }

  function deleteItemFunc (event) {
    if (window.confirm(`DELETE ${event.name}?`)){
      console.log(typeof(event._id))
      console.log("event._id", event._id)
      deleteItem(event._id)
      const updatedList = items.filter((item) => item._id !== event._id)
      setItems(updatedList)
    }
    //console.log('delete')
  }

  function updateItemFunc (event) {

    openModal()
    console.log(`event ${event._id}`)
  }

  function mapItems (items) {

    //console.log(items[0])
    //console.log('items', items) 
    return items.map((item) => 
    <li key={item._id}>{item.name} {item.desc} 
    <button onClick={() => deleteItemFunc(item)} >
    Delete
    </button>
    <button onClick={() => updateItemFunc(item)} >
      Edit
    </button>
      </li>)
  }

  const [show, setShow] = useState(false)


  return (
    <>
      <div>
        <UpdateModal isOpen={showModal} onClose={closeModal} />
        <h1>Inventory</h1>
        <h2>Filter</h2>
        <input type="text" placeholder="Filter names" />
        <form type="submit" onSubmit={createItem}>
          <input type="text" placeholder="Name of a item" onChange={handleNameChange} />
          <input type="text" placeholder="Description of a item" onChange={handleDescriptionChange} />
        <button type="submit">Add</button>
        </form>
            {mapItems(items)}
      </div>
    </>
  )
}

export default App
