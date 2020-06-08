import axios from 'axios';
const API_URL = 'http://localhost:4000/todos/';

export async function getTodos(){
  return axios.get(API_URL)
  .then(response => {
      console.log('Data received from database.');
      return response.data;
  })
  .catch(() => {
      console.log('Error retreiving data.')
  })
}

export async function createTodo(val){
  return axios.post(API_URL, val)
  .then(response => response.data)
  .catch(err => console.log(err.message));
}

export function removeTodo(id) {
    axios.delete(API_URL + id)
    .then( response => console.log(response.data))
    .catch(err => console.log(err.message));
    window.location.reload();
}

export async function updateTodo(todo){
    axios.put(API_URL + todo._id, todo)
    .then(console.log(todo))
    .then( res => console.log(res))
    .catch(err => console.log(err.response, todo._id));
}
