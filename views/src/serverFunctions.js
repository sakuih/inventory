import axios from 'axios'
const serverUrl = 'http://localhost:5907/'

export function getItems() {
  return axios.get(serverUrl).then(response => response.data)
}

export function postItem(item) {
  console.log("item ", item)
  axios.post(serverUrl, {
    //id: '1',
    name: item.name,
    desc: item.desc
  })
}

export function updateItem(id, item) {
  axios.put(`${serverUrl}${id}`, {
    name: item.name,
    desc: item.desc
  })
}

export function deleteItem(id) {
  console.log(`${id} id ja axios delete`)
  axios.delete(`${serverUrl}${id}`)
}


